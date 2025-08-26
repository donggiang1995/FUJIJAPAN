import React from "react";
import { ArrowRight, Zap, Shield, Settings, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface FeaturedProductsProps {
  language: 'en' | 'th';
}

const content = {
  en: {
    title: "Featured Products",
    subtitle: "Discover THAI FUJI's elevator solutions crafted with cutting-edge technology",
    viewAll: "View All Products",
    learnMore: "Learn More",
    products: [
      {
        id: 1,
        name: "FES Control Cabinet",
        category: "Control System",
        description: "EN81-20, CE compliant elevator control cabinet with advanced safety features",
        features: ["EN81-20, CE compliant", "Auto brake force monitoring", "Door lock bypass device", "Secondary brake safety"],
        image: "/lovable-uploads/0b6b45d0-94c1-4fe3-ae57-c38c9a1f2185.png",
        badge: "Popular"
      },
      {
        id: 2,
        name: "FJD1 SERIES",
        category: "Traction System", 
        description: "High-capacity traction machine with reliable performance and safety features",
        features: ["AC380V / DC110V brake", "Load capacity up to 5500kg", "S5–40% duty, stable & reliable", "Class F insulation, IP41 protection"],
        image: "/lovable-uploads/74b9382f-7881-42e9-a882-81b89d7210a6.png",
        badge: "New"
      }
    ]
  },
  th: {
    title: "ผลิตภัณฑ์เด่น",
    subtitle: "ค้นพบโซลูชันลิฟต์ของ THAI FUJI ที่สร้างด้วยเทคโนโลยีล้ำสมัย",
    viewAll: "ดูผลิตภัณฑ์ทั้งหมด",
    learnMore: "เรียนรู้เพิ่มเติม",
    products: [
      {
        id: 1,
        name: "FES ตู้ควบคุม",
        category: "ระบบควบคุม",
        description: "ตู้ควบคุมลิฟต์ที่เป็นไปตามมาตรฐาน EN81-20, CE พร้อมคุณสมบัติความปลอดภัยขั้นสูง",
        features: ["EN81-20, CE compliant", "ตรวจสอบแรงเบรกอัตโนมัติ", "อุปกรณ์บายพาสล็อคประตู", "ความปลอดภัยเบรกสำรอง"],
        image: "/lovable-uploads/0b6b45d0-94c1-4fe3-ae57-c38c9a1f2185.png",
        badge: "ยอดนิยม"
      },
      {
        id: 2,
        name: "FJD1 ซีรีส์",
        category: "ระบบลาก",
        description: "เครื่องจักรลากความจุสูงพร้อมประสิทธิภาพที่เชื่อถือได้และคุณสมบัติความปลอดภัย",
        features: ["เบรก AC380V / DC110V", "ความจุโหลดถึง 5500kg", "S5–40% duty ทำงานเสถียรเชื่อถือได้", "ฉนวน Class F ป้องกัน IP41"],
        image: "/lovable-uploads/74b9382f-7881-42e9-a882-81b89d7210a6.png",
        badge: "ใหม่"
      }
    ]
  }
};

export const FeaturedProducts = ({ language }: FeaturedProductsProps) => {
  const t = content[language] || content.en;
  const navigate = useNavigate();

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-secondary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 p-2 rounded-full glass-morphism border border-border/50">
            <div className="p-2 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
              <Cpu className="h-5 w-5" />
            </div>
            <div className="p-2 rounded-full bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground">
              <Settings className="h-5 w-5" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {t.products.map((product, index) => (
            <div key={product.id} className="group relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card */}
              <div className="relative glass-morphism border border-border/50 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl backdrop-blur-xl">
                {/* Image Section */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground border-0 px-3 py-1">
                      {product.badge}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                      {index === 0 ? <Shield className="h-5 w-5" /> : <Zap className="h-5 w-5" />}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-muted/50 hover:bg-muted/70 transition-colors">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    onClick={() => navigate('/products')}
                  >
                    {t.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-8 py-4 text-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            onClick={() => navigate('/products')}
          >
            <span className="relative z-10">{t.viewAll}</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};