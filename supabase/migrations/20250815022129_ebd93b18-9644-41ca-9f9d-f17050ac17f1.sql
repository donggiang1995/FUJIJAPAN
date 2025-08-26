-- Create admin users table for authentication
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access only
CREATE POLICY "Admin users can view themselves" 
ON public.admin_users 
FOR SELECT 
USING (auth.uid()::text = id::text);

-- Insert default admin user
INSERT INTO public.admin_users (email, password_hash, full_name, role)
VALUES ('admin@fujiglobal.kr', '$2a$10$rOvVdPzN5.rjK/cFQqN5GeQjX0Hqm2q8Zj5vQyF3nB4xK7E8l9M.G', 'Admin User', 'admin')
ON CONFLICT (email) DO NOTHING;