import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const heroImage = "/lovable-uploads/57dc1d74-a5b1-4084-a40c-c4d359fd3582.png";
import elevatorInstallation from "@/assets/thai-elevator-installation.jpg";
import elevatorControlRoom from "@/assets/thai-control-systems.jpg";
import modernFactory from "@/assets/modern-factory-bg.jpg";
import modernBuildingHero from "@/assets/modern-building-hero-new.jpg";
interface HeroSectionProps {
  language: 'en' | 'th';
}
const content = {
  en: {
    title: "PROFESSIONAL",
    titleHighlight: "ELEVATOR SOLUTIONS",
    subtitle: "Elevating Thailand with Japanese Quality - Leading provider of passenger elevators, freight elevators, escalators, maintenance and modernization services.",
    cta1: "View Products",
    cta2: "About Us",
    stats: [{
      number: "25+",
      label: "Years Experience"
    }, {
      number: "5,000+",
      label: "Installations"
    }, {
      number: "15+",
      label: "Countries"
    }, {
      number: "99.9%",
      label: "Reliability"
    }]
  },
  th: {
    title: "โซลูชันลิฟต์",
    titleHighlight: "มืออาชีพ",
    subtitle: "ยกระดับประเทศไทยด้วยคุณภาพแบบญี่ปุ่น - ผู้นำในการให้บริการลิฟต์โดยสาร ลิฟต์บรรทุกสินค้า บันไดเลื่อน การบำรุงรักษา และการปรับปรุงระบบ",
    cta1: "ดูผลิตภัณฑ์",
    cta2: "เกี่ยวกับเรา",
    stats: [{
      number: "25+",
      label: "ปีประสบการณ์"
    }, {
      number: "5,000+",
      label: "การติดตั้ง"
    }, {
      number: "15+",
      label: "ประเทศ"
    }, {
      number: "99.9%",
      label: "ความน่าเชื่อถือ"
    }]
  }
};
export const HeroSection = ({
  language
}: HeroSectionProps) => {
  const t = content[language];
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-secondary/10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img src={modernBuildingHero} alt="Modern building background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-secondary/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.15),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
              <img 
                src="/lovable-uploads/953a7391-286a-477b-9b1a-4ec116b84c16.png" 
                alt="Thai Fuji Elevator Logo" 
                className="relative h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 ${language === 'th' ? 'font-sarabun' : 'font-montserrat'}`}>
            <span className="block text-foreground">{t.title}</span>
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12 ${language === 'th' ? 'font-sarabun' : 'font-open-sans'}`}>
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-8 py-4 text-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              onClick={() => navigate('/products')}
            >
              <span className="relative z-10">{t.cta1}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group glass-morphism border-border/50 backdrop-blur-xl text-lg px-8 py-4 font-semibold hover:bg-muted/50 hover:border-primary/50 transition-all duration-300"
              onClick={() => navigate('/about')}
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              {t.cta2}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {t.stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative glass-morphism border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg backdrop-blur-xl">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl border border-border/50">
                <img src={elevatorInstallation} alt="Trusted Installation" className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-morphism rounded-2xl p-6 border border-border/30 backdrop-blur-xl">
                    <h4 className={`font-bold text-xl mb-3 text-foreground ${language === 'th' ? 'font-sarabun' : 'font-montserrat'}`}>
                      {language === 'th' ? 'การติดตั้งที่เชื่อถือได้' : 'Trusted Installation'}
                    </h4>
                    <p className={`text-sm text-muted-foreground leading-relaxed ${language === 'th' ? 'font-sarabun' : 'font-open-sans'}`}>
                      {language === 'th' ? 'ปลอดภัยและมีประสิทธิภาพด้วยนวัตกรรมล่าสุด' : 'Safe and efficient with latest innovations'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl border border-border/50">
                <img src={elevatorControlRoom} alt="Intelligent Control Systems" className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-morphism rounded-2xl p-6 border border-border/30 backdrop-blur-xl">
                    <h4 className={`font-bold text-xl mb-3 text-foreground ${language === 'th' ? 'font-sarabun' : 'font-montserrat'}`}>
                      {language === 'th' ? 'ระบบควบคุมอัจฉริยะ' : 'Intelligent Control Systems'}
                    </h4>
                    <p className={`text-sm text-muted-foreground leading-relaxed ${language === 'th' ? 'font-sarabun' : 'font-open-sans'}`}>
                      {language === 'th' ? 'การตรวจสอบแบบเรียลไทม์และการจัดการอัจฉริยะ' : 'Real-time monitoring and smart management'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};