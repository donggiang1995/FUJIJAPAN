import { createClient } from 'npm:@supabase/supabase-js@2.55.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  try {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

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
      .select(`
        *,
        product:products(
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
        )
      `)
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

    // Format response
    const response = {
      serialNumber: data,
      product: data.product
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