import React from "react";
import { ArrowRight, Wrench, Settings, Zap, Phone, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import elevatorInterior from "@/assets/elevator-interior.jpg";
import elevatorShaft from "@/assets/elevator-shaft.jpg";

interface ServicesSectionProps {
  language: 'en' | 'th';
}

const content = {
  th: {
    title: "บริการ",
    subtitle: "บริการลิฟต์มืออาชีพเพื่อรับประกันการดำเนินงานที่ปลอดภัยและมีประสิทธิภาพ",
    viewAllServices: "ดูบริการทั้งหมด",
    services: [
      {
        icon: Wrench,
        title: "การติดตั้ง",
        description: "การติดตั้งลิฟต์อย่างปลอดภัยและแม่นยำโดยช่างผู้เชี่ยวชาญ",
        features: ["สำรวจพื้นที่", "ติดตั้งแบบมืออาชีพ", "ตรวจสอบคุณภาพ"]
      },
      {
        icon: Settings,
        title: "การบำรุงรักษา",
        description: "การตรวจสอบและจัดการเป็นประจำเพื่อรักษาประสิทธิภาพที่เหมาะสม",
        features: ["ตรวจสอบประจำ", "บำรุงรักษาเชิงป้องกัน", "เพิ่มประสิทธิภาพ"]
      },
      {
        icon: Zap,
        title: "การปรับปรุงสมัยใหม่",
        description: "อัพเกรดลิฟต์เดิมด้วยเทคโนโลยีล่าสุด",
        features: ["อัพเกรดระบบ", "ประหยัดพลังงาน", "เพิ่มความปลอดภัย"]
      },
      {
        icon: Phone,
        title: "ซ่อมแซมฉุกเฉิน",
        description: "การตอบสนองฉุกเฉิน 24 ชั่วโมงเพื่อแก้ไขปัญหาอย่างรวดเร็ว",
        features: ["ตอบสนอง 24 ชั่วโมง", "เรียกช่างฉุกเฉิน", "วินิจฉัยทางไกล"]
      },
      {
        icon: Users,
        title: "การให้คำปรึกษา",
        description: "การให้คำปรึกษาผู้เชี่ยวชาญสำหรับโครงการลิฟต์ทุกด้าน",
        features: ["วางแผนโครงการ", "คำแนะนำทางเทคนิค", "เพิ่มประสิทธิภาพต้นทุน"]
      },
      {
        icon: Shield,
        title: "การตรวจสอบความปลอดภัย",
        description: "การตรวจสอบความปลอดภัยเป็นประจำเพื่อป้องกันอุบัติเหตุและรับประกันความปลอดภัย",
        features: ["ตรวจสอบความปลอดภัย", "วิเคราะห์ความเสี่ยง", "แผนการปรับปรุง"]
      }
    ]
  },
  en: {
    title: "Services",
    subtitle: "Professional elevator services ensuring safe and efficient operation",
    viewAllServices: "View All Services",
    services: [
      {
        icon: Wrench,
        title: "Installation Service",
        description: "Safe and precise elevator installation by professional technicians",
        features: ["Site survey", "Professional installation", "Quality inspection"]
      },
      {
        icon: Settings,
        title: "Maintenance",
        description: "Regular inspection and management to maintain optimal performance",
        features: ["Regular inspection", "Preventive maintenance", "Performance optimization"]
      },
      {
        icon: Zap,
        title: "Modernization",
        description: "Upgrade existing elevators with latest technology",
        features: ["System upgrade", "Energy efficiency", "Safety enhancement"]
      },
      {
        icon: Phone,
        title: "Emergency Repair",
        description: "24-hour emergency response providing rapid problem resolution",
        features: ["24-hour response", "Emergency dispatch", "Remote diagnosis"]
      },
      {
        icon: Users,
        title: "Consulting",
        description: "Professional consulting for all aspects of elevator projects",
        features: ["Project planning", "Technical advisory", "Cost optimization"]
      },
      {
        icon: Shield,
        title: "Safety Inspection",
        description: "Regular safety inspections to prevent accidents and ensure safety",
        features: ["Safety inspection", "Risk analysis", "Improvement plans"]
      }
    ]
  }
};

export const ServicesSection = ({ language }: ServicesSectionProps) => {
  const t = content[language];
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="industrial-card hover:shadow-lg transition-all group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <IconComponent className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src={elevatorInterior} 
              alt="Elevator Interior" 
              className="w-full h-80 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="font-bold text-xl mb-2">
                {language === 'th' ? 'ภายในลิฟต์พรีเมี่ยม' : 'Premium Elevator Interior'}
              </h4>
              <p className="text-gray-200">
                {language === 'th' ? 'การออกแบบที่ทันสมัยและหรูหราให้ประสบการณ์การขับขี่ที่สะดวกสบาย' : 'Modern and sophisticated design providing comfortable ride experience'}
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src={elevatorShaft} 
              alt="Elevator Shaft" 
              className="w-full h-80 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="font-bold text-xl mb-2">
                {language === 'th' ? 'ระบบลากขั้นสูง' : 'Advanced Traction System'}
              </h4>
              <p className="text-gray-200">
                {language === 'th' ? 'รับประกันการดำเนินงานที่ปลอดภัยและมีประสิทธิภาพด้วยเทคโนโลยีล้ำสมัย' : 'Ensuring safe and efficient operation with cutting-edge technology'}
              </p>
            </div>
          </div>
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-industrial"
            onClick={() => navigate('/services')}
          >
            {t.viewAllServices}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};