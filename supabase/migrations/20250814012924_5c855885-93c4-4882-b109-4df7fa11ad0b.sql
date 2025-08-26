-- Update database schema to use Thai language fields instead of Korean
-- Update categories table
ALTER TABLE categories RENAME COLUMN name_ko TO name_th;
ALTER TABLE categories RENAME COLUMN description_ko TO description_th;

-- Update products table  
ALTER TABLE products RENAME COLUMN name_ko TO name_th;
ALTER TABLE products RENAME COLUMN description_ko TO description_th;
ALTER TABLE products RENAME COLUMN features_ko TO features_th;