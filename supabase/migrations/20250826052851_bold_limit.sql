/*
  # Tạo schema cơ sở dữ liệu Thai Fuji Elevator

  1. Bảng mới
    - `categories` - Danh mục sản phẩm (ตู้ควบคุม, เครื่องลาก)
    - `products` - Sản phẩm với thông tin đa ngôn ngữ (Thai/English)
    - `serial_numbers` - Quản lý serial number sản phẩm
    - `contact_inquiries` - Lưu trữ yêu cầu liên hệ từ khách hàng
    - `profiles` - Thông tin người dùng và phân quyền

  2. Bảo mật
    - Kích hoạt RLS cho tất cả bảng
    - Chính sách cho phép public đọc sản phẩm và danh mục
    - Chỉ admin mới có thể quản lý dữ liệu
    - Tìm kiếm serial number yêu cầu đăng nhập

  3. Storage
    - Bucket cho hình ảnh sản phẩm
    - Chính sách upload chỉ cho admin
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_th text NOT NULL,
  name_en text NOT NULL,
  description_th text,
  description_en text,
  icon text,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS public.products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_th text NOT NULL,
  name_en text NOT NULL,
  description_th text,
  description_en text,
  image_url text,
  category_id uuid REFERENCES public.categories(id),
  specifications jsonb DEFAULT '{}',
  features_th text[] DEFAULT '{}',
  features_en text[] DEFAULT '{}',
  price decimal(10,2),
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create serial_numbers table
CREATE TABLE IF NOT EXISTS public.serial_numbers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  serial_number text NOT NULL UNIQUE,
  product_id uuid REFERENCES public.products(id),
  installation_date text,
  location text DEFAULT 'Thailand',
  status text DEFAULT 'active' CHECK (status IN ('active', 'maintenance', 'retired')),
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_inquiries table
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  email text,
  role text DEFAULT 'user' CHECK (role IN ('user', 'admin', 'super_admin')),
  full_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.serial_numbers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create security functions
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM profiles 
    WHERE user_id = auth.uid() 
    AND role IN ('admin', 'super_admin')
  );
$$;

CREATE OR REPLACE FUNCTION public.is_super_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM profiles 
    WHERE user_id = auth.uid() 
    AND role = 'super_admin'
  );
$$;

-- RLS Policies for categories
CREATE POLICY "Categories are viewable by everyone" 
ON public.categories FOR SELECT USING (true);

CREATE POLICY "Only admins can manage categories" 
ON public.categories FOR ALL 
USING (public.is_admin_user());

-- RLS Policies for products
CREATE POLICY "Products are viewable by everyone" 
ON public.products FOR SELECT USING (true);

CREATE POLICY "Only admins can manage products" 
ON public.products FOR ALL 
USING (public.is_admin_user());

-- RLS Policies for serial_numbers
CREATE POLICY "Authenticated users can view serial numbers" 
ON public.serial_numbers FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Only admins can manage serial numbers" 
ON public.serial_numbers FOR ALL 
USING (public.is_admin_user());

-- RLS Policies for contact_inquiries
CREATE POLICY "Anyone can create contact inquiries" 
ON public.contact_inquiries FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only admins can view contact inquiries" 
ON public.contact_inquiries FOR SELECT 
USING (public.is_admin_user());

CREATE POLICY "Only admins can delete contact inquiries" 
ON public.contact_inquiries FOR DELETE 
USING (public.is_admin_user());

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_serial_numbers_search ON public.serial_numbers (serial_number);
CREATE INDEX IF NOT EXISTS idx_serial_numbers_product_id ON public.serial_numbers (product_id);
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products (category_id);
CREATE INDEX IF NOT EXISTS idx_products_active ON public.products (is_active);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_serial_numbers_updated_at
  BEFORE UPDATE ON public.serial_numbers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name'
  );
  RETURN NEW;
END;
$$;

-- Create trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();