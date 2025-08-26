-- Fix admin credential security issue by removing insecure admin_users table
-- and using proper Supabase Auth with roles

-- Drop the insecure admin_users table completely
DROP TABLE IF EXISTS public.admin_users CASCADE;

-- Create a security definer function to check admin role
-- This prevents RLS recursion issues
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
    AND role = 'admin'
  );
$$;

-- Update profiles table to ensure admin role assignment is secure
-- Add a policy that only allows super admins to assign admin roles
CREATE POLICY "Only super admins can assign admin roles" 
ON public.profiles 
FOR UPDATE 
USING (
  CASE 
    WHEN OLD.role = 'admin' OR NEW.role = 'admin' THEN
      -- Only existing super-admin or the user themselves can modify admin roles
      (auth.uid() IN (SELECT user_id FROM profiles WHERE role = 'super_admin'))
      OR (auth.uid() = user_id AND OLD.role = NEW.role) -- Allow non-role updates
    ELSE
      auth.uid() = user_id -- Regular users can update their own profiles
  END
);

-- Create a super admin user (you'll need to manually set this in the database)
-- This should be done manually through Supabase dashboard for the first admin
-- UPDATE profiles SET role = 'super_admin' WHERE user_id = 'your-admin-user-id';

-- Update contact inquiries policy to use the secure function
DROP POLICY IF EXISTS "Only admins can view contact inquiries" ON public.contact_inquiries;
CREATE POLICY "Only admins can view contact inquiries" 
ON public.contact_inquiries 
FOR SELECT 
USING (public.is_admin_user());

-- Update products policy to use the secure function  
DROP POLICY IF EXISTS "Only admins can manage products" ON public.products;
CREATE POLICY "Only admins can manage products" 
ON public.products 
FOR ALL 
USING (public.is_admin_user());

-- Update categories policy to use the secure function
DROP POLICY IF EXISTS "Only admins can manage categories" ON public.categories;
CREATE POLICY "Only admins can manage categories" 
ON public.categories 
FOR ALL 
USING (public.is_admin_user());

-- Update serial numbers policy to use the secure function
DROP POLICY IF EXISTS "Only admins can manage serial numbers" ON public.serial_numbers;
CREATE POLICY "Only admins can manage serial numbers" 
ON public.serial_numbers 
FOR ALL 
USING (public.is_admin_user());

-- Fix database function security by setting search_path
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