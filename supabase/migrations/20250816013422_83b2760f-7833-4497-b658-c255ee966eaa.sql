-- Remove the public access policy for serial numbers
DROP POLICY IF EXISTS "Serial numbers are viewable by everyone" ON public.serial_numbers;

-- Create a new policy that requires authentication
CREATE POLICY "Authenticated users can view serial numbers" 
ON public.serial_numbers 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- Keep the admin management policy unchanged
-- (The existing "Only admins can manage serial numbers" policy remains)