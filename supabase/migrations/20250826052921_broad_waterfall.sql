/*
  # Chèn dữ liệu mẫu cho Thai Fuji Elevator

  1. Danh mục sản phẩm
    - ตู้ควบคุม (Control Cabinets)
    - เครื่องลาก (Traction Machines)

  2. Sản phẩm mẫu
    - FET, FEN, FES Control Cabinets
    - FJD1, FJD2 Traction Machine Series

  3. Dữ liệu serial number mẫu
*/

-- Insert categories
INSERT INTO public.categories (id, name_th, name_en, description_th, description_en, icon, is_active) VALUES
('cat-control', 'ตู้ควบคุม', 'Control Cabinets', 'ตู้ควบคุมลิฟต์ที่ทันสมัยและมีประสิทธิภาพสูง', 'Modern and high-performance elevator control cabinets', 'Settings', true),
('cat-traction', 'เครื่องลาก', 'Traction Machines', 'เครื่องลากลิฟต์ประสิทธิภาพสูงและเชื่อถือได้', 'High-performance and reliable elevator traction machines', 'Cpu', true);

-- Insert Control Cabinet products
INSERT INTO public.products (id, name_th, name_en, description_th, description_en, category_id, specifications, features_th, features_en, is_active) VALUES
('fet-control', 'FET CONTROL CABINET', 'FET CONTROL CABINET', 
 'โซลูชันแบบรวมสำหรับลิฟต์ความเร็วสูงสุด 4m/s พร้อมการสนับสนุนทางเทคนิคระยะไกลและความสามารถในการตรวจสอบ IoT',
 'Integrated solution for elevator up to 4m/sec with remote technical support and IoT monitoring capabilities',
 'cat-control',
 '{"maxSpeed": "4m/s", "floors": "Up to 48", "noise": "< 50dBA", "support": "Remote technical support", "communication": "IoT enabled"}',
 ARRAY['การสนับสนุนทางเทคนิคระยะไกลผ่านแอป', 'การตรวจสอบระยะไกลผ่าน IoT', 'รองรับ Communication encoder', 'การปรับค่าสัมประสิทธิ์สมดุลอัตโนมัติ', 'การออกแบบลดเสียงรบกวน < 50dBA'],
 ARRAY['Remote technical support through APP', 'Remote monitoring through the IoT', 'Communication encoder supported', 'Balance coefficient auto-tuning', 'Noise reduction design < 50dBA'],
 true),

('fen-control', 'FEN CONTROL CABINET', 'FEN CONTROL CABINET',
 'ตู้ควบคุมขั้นสูงสำหรับลิฟต์ที่มีคุณสมบัติครบครันและระบบการสื่อสารที่ทันสมัย',
 'Advanced control cabinet for elevators with comprehensive features and modern communication systems',
 'cat-control',
 '{"floors": "48 floors standard", "communication": "CANbus serial", "control": "Duplex group control", "backup": "UPS support", "diagnostics": "Comprehensive"}',
 ARRAY['มาตรฐาน 48 ชั้น, full collective (full serial connection)', 'ระบบควบคุมกลุ่ม Duplex onboard (CANbus serial communication)', 'โหมดควบคุมประตูอัตโนมัติ', 'การดำเนินงานของนักดับเพลิงที่เลือกได้', 'รองรับ UPS 1 เฟส 220V สำหรับการช่วยเหลือ', 'การวินิจฉัยการเดินทางที่ครอบคลุม'],
 ARRAY['Standard: 48 floors, full collective (full serial connection)', 'Duplex onboard group control (CANbus serial communication)', 'Automatic door control mode selectable fireman operation', 'Supports 1 ph. 220 Vac UPS for rescue operation', 'Comprehensive trip diagnostics'],
 true),

('fes-control', 'FES Control Cabinet', 'FES Control Cabinet',
 'ตู้ควบคุมที่ออกแบบตาม EN81-20 และเป็นไปตามมาตรฐาน CE พร้อมคุณสมบัติความปลอดภัยขั้นสูง',
 'Control cabinet designed based on EN81-20 and comply with CE standards with advanced safety features',
 'cat-control',
 '{"standards": "EN81-20, CE", "ucmp": "Auto brake force monitoring", "bypass": "Door lock bypass device", "safety": "Secondary brake safety"}',
 ARRAY['EN81-20, CE compliant', 'การตรวจสอบแรงเบรกอัตโนมัติ', 'อุปกรณ์บายพาสล็อคประตู', 'ความปลอดภัยเบรกสำรอง'],
 ARRAY['EN81-20, CE compliant', 'Auto brake force monitoring', 'Door lock bypass device', 'Secondary brake safety'],
 true);

-- Insert Traction Machine products
INSERT INTO public.products (id, name_th, name_en, description_th, description_en, category_id, specifications, features_th, features_en, is_active) VALUES
('fjd1-b450', 'FJD1-B450 SERIES', 'FJD1-B450 SERIES',
 'เครื่องลากประสิทธิภาพสูงสำหรับลิฟต์ขนาดกลาง พร้อมระบบเบรก AC380V/DC110V',
 'High-performance traction machine for medium-sized elevators with AC380V/DC110V brake system',
 'cat-traction',
 '{"voltage": "AC380V", "brake": "DC110V", "weight": "130kg", "duty": "S5–40%", "maxLoad": "2000kg", "insulation": "Class F", "protection": "IP41", "travel": "45m"}',
 ARRAY['เบรก AC380V / DC110V', 'น้ำหนัก 130kg', 'S5–40% duty, ทำงานเสถียรเชื่อถือได้', 'ฉนวน Class F, ป้องกัน IP41'],
 ARRAY['AC380V / DC110V brake', 'Weight 130kg', 'S5–40% duty, stable & reliable', 'Class F insulation, IP41 protection'],
 true),

('fjd1-b1000', 'FJD1-B1000 SERIES', 'FJD1-B1000 SERIES',
 'เครื่องลากขนาดใหญ่สำหรับลิฟต์บรรทุกหนัก รองรับน้ำหนักได้ถึง 3000kg',
 'Large traction machine for heavy-duty elevators supporting up to 3000kg load capacity',
 'cat-traction',
 '{"voltage": "AC380V", "brake": "DC110V", "weight": "180kg", "duty": "S5–40%", "maxLoad": "3000kg", "insulation": "Class F", "protection": "IP41", "travel": "60m"}',
 ARRAY['เบรก AC380V / DC110V', 'น้ำหนัก 180kg', 'ความจุโหลดสูงสุด 3000kg', 'S5–40% duty, ทำงานเสถียรเชื่อถือได้'],
 ARRAY['AC380V / DC110V brake', 'Weight 180kg', 'Max load capacity 3000kg', 'S5–40% duty, stable & reliable'],
 true),

('fjd1-b1600', 'FJD1-B1600 SERIES', 'FJD1-B1600 SERIES',
 'เครื่องลากสำหรับลิฟต์บรรทุกหนักพิเศษ รองรับน้ำหนักได้ถึง 5000kg',
 'Traction machine for extra heavy-duty elevators supporting up to 5000kg load capacity',
 'cat-traction',
 '{"voltage": "AC380V", "brake": "DC110V", "weight": "220kg", "duty": "S5–40%", "maxLoad": "5000kg", "insulation": "Class F", "protection": "IP41", "travel": "80m"}',
 ARRAY['เบรก AC380V / DC110V', 'น้ำหนัก 220kg', 'ความจุโหลดสูงสุด 5000kg', 'เหมาะสำหรับอาคารสูง'],
 ARRAY['AC380V / DC110V brake', 'Weight 220kg', 'Max load capacity 5000kg', 'Suitable for high-rise buildings'],
 true),

('fjd1-b2500', 'FJD1-B2500 SERIES', 'FJD1-B2500 SERIES',
 'เครื่องลากสำหรับลิฟต์บรรทุกหนักสูงสุด รองรับน้ำหนักได้ถึง 5500kg',
 'Traction machine for maximum heavy-duty elevators supporting up to 5500kg load capacity',
 'cat-traction',
 '{"voltage": "AC380V", "brake": "DC110V", "weight": "280kg", "duty": "S5–40%", "maxLoad": "5500kg", "insulation": "Class F", "protection": "IP41", "travel": "100m"}',
 ARRAY['เบรก AC380V / DC110V', 'น้ำหนัก 280kg', 'ความจุโหลดสูงสุด 5500kg', 'เหมาะสำหรับอาคารสูงพิเศษ'],
 ARRAY['AC380V / DC110V brake', 'Weight 280kg', 'Max load capacity 5500kg', 'Suitable for super high-rise buildings'],
 true),

('fjd2-b450', 'FJD2-B450 (φ240) Series', 'FJD2-B450 (φ240) Series',
 'เครื่องลากรุ่นใหม่ขนาด φ240 มม. ด้วยเทคโนโลยีล้ำสมัย',
 'New generation traction machine φ240 mm with advanced technology',
 'cat-traction',
 '{"diameter": "φ240mm", "voltage": "AC380V", "brake": "DC110V", "weight": "140kg", "duty": "S5–40%", "maxLoad": "2500kg", "protection": "IP41"}',
 ARRAY['เส้นผ่านศูนย์กลาง φ240mm', 'น้ำหนักเบา 140kg', 'การป้องกัน IP41', 'ความทนทาน S5–40%'],
 ARRAY['φ240mm diameter', 'Lightweight 140kg', 'IP41 protection', 'S5–40% durability'],
 true),

('fjd2-b800', 'FJD2-B800 (φ240) Series', 'FJD2-B800 (φ240) Series',
 'เครื่องลากประสิทธิภาพสูงขนาด φ240 มม. สำหรับการใช้งานหนัก',
 'High-performance traction machine φ240 mm for heavy-duty applications',
 'cat-traction',
 '{"diameter": "φ240mm", "voltage": "AC380V", "brake": "DC110V", "weight": "200kg", "duty": "S5–40%", "maxLoad": "2500kg", "protection": "IP41"}',
 ARRAY['เส้นผ่านศูนย์กลาง φ240mm', 'น้ำหนัก 200kg', 'การป้องกัน IP41', 'เหมาะสำหรับงานหนัก'],
 ARRAY['φ240mm diameter', 'Weight 200kg', 'IP41 protection', 'Suitable for heavy-duty'],
 true),

('fjd2-b630', 'FJD2-B630 (φ320) Series', 'FJD2-B630 (φ320) Series',
 'เครื่องลากขนาดใหญ่ φ320 มม. สำหรับงานหนักพิเศษ',
 'Large traction machine φ320 mm for extra heavy-duty applications',
 'cat-traction',
 '{"diameter": "φ320mm", "voltage": "AC380V", "brake": "DC110V", "weight": "200kg", "duty": "S5–40%", "maxLoad": "2500kg", "protection": "IP41"}',
 ARRAY['เส้นผ่านศูนย์กลาง φ320mm', 'น้ำหนัก 200kg', 'การป้องกัน IP41', 'เหมาะสำหรับงานหนักพิเศษ'],
 ARRAY['φ320mm diameter', 'Weight 200kg', 'IP41 protection', 'Suitable for extra heavy-duty'],
 true);

-- Insert sample serial numbers
INSERT INTO public.serial_numbers (serial_number, product_id, installation_date, location, status, notes) VALUES
('TF2024001', 'fet-control', '2024', 'Bangkok, Thailand', 'active', 'Sản phẩm: FET CONTROL CABINET - Lắp đặt tại tòa nhà văn phòng'),
('TF2024002', 'fen-control', '2023', 'Chiang Mai, Thailand', 'active', 'Sản phẩm: FEN CONTROL CABINET - Lắp đặt tại khách sạn'),
('TF2024003', 'fes-control', '2024', 'Phuket, Thailand', 'active', 'Sản phẩm: FES Control Cabinet - Lắp đặt tại resort'),
('TF2024004', 'fjd1-b450', '2023', 'Bangkok, Thailand', 'maintenance', 'Sản phẩm: FJD1-B450 SERIES - Đang bảo trì định kỳ'),
('TF2024005', 'fjd1-b1000', '2022', 'Pattaya, Thailand', 'active', 'Sản phẩm: FJD1-B1000 SERIES - Hoạt động bình thường');