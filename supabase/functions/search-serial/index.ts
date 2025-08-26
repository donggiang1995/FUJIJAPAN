import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.55.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Extract serial number from URL path
    const url = new URL(req.url);
    const pathParts = url.pathname.split('/');
    const serialNumber = pathParts[pathParts.length - 1];

    console.log('Searching for serial number:', serialNumber);

    if (!serialNumber || serialNumber === 'search-serial') {
      return new Response(
        JSON.stringify({ error: 'Serial number is required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Search for serial number with exact match
    const { data, error } = await supabase
      .from('serial_numbers')
      .select('*')
      .eq('serial_number', serialNumber)
      .single();

    if (error) {
      console.error('Database error:', error);
      if (error.code === 'PGRST116') {
        // Not found
        return new Response(
          null,
          { 
            status: 404,
            headers: corsHeaders
          }
        );
      }
      
      return new Response(
        JSON.stringify({ error: 'Internal server error' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Found serial number data:', data);

    // Get actual product information from products table if available
    let productInfo = null;
    if (data.product_id) {
      const { data: productData, error: productError } = await supabase
        .from('products')
        .select(`
          id,
          name_th,
          name_en,
          description_th,
          description_en,
          image_url,
          specifications,
          features_th,
          features_en,
          category:categories(
            id,
            name_th,
            name_en
          )
        `)
        .eq('id', data.product_id)
        .single();

      if (!productError && productData) {
        productInfo = productData;
      }
    }

    // Fallback: Extract product information from notes if no product_id
    if (!productInfo && data.notes && data.notes.includes('Sản phẩm:')) {
      const productName = data.notes.split(' - ')[0].replace('Sản phẩm: ', '');
      
      // Try to find matching product by name
      const { data: matchingProducts, error: searchError } = await supabase
        .from('products')
        .select(`
          id,
          name_th,
          name_en,
          description_th,
          description_en,
          image_url,
          specifications,
          features_th,
          features_en,
          category:categories(
            id,
            name_th,
            name_en
          )
        `)
        .or(`name_th.ilike.%${productName}%,name_en.ilike.%${productName}%`)
        .limit(1);

      if (!searchError && matchingProducts && matchingProducts.length > 0) {
        productInfo = matchingProducts[0];
      } else {
        // Create basic product info from notes
        productInfo = {
          id: null,
          name_th: productName,
          name_en: productName,
          description_th: productName,
          description_en: productName,
          image_url: null,
          specifications: null,
          features_th: [],
          features_en: [],
          category: null
        };
      }
    }

    // Format response
    const response = {
      serialNumber: data,
      product: productInfo
    };

    return new Response(
      JSON.stringify(response),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});