/*
  # Tạo storage bucket cho hình ảnh sản phẩm

  1. Storage bucket
    - product-images bucket cho hình ảnh sản phẩm

  2. Chính sách bảo mật
    - Public có thể xem hình ảnh
    - Chỉ admin mới có thể upload/update/delete
*/

-- Create storage bucket for product images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create policies for product image storage
CREATE POLICY "Product images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'product-images');

CREATE POLICY "Only admins can upload product images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'product-images' AND 
  public.is_admin_user()
);

CREATE POLICY "Only admins can update product images" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'product-images' AND 
  public.is_admin_user()
);

CREATE POLICY "Only admins can delete product images" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'product-images' AND 
  public.is_admin_user()
);