import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, Shield, Clock, Phone, CheckCircle, Settings, Zap, Users, ArrowRight, Sparkles, Cpu, MessageCircle } from "lucide-react";
import servicesInstallation from "@/assets/services-installation.jpg";
import servicesMaintenance from "@/assets/services-maintenance.jpg";
import servicesModernization from "@/assets/services-modernization.jpg";
import elevatorShaft from "@/assets/elevator-shaft.jpg";
const Services = () => {
  const {
    language,
    setLanguage
  } = useLanguage();
  const [activeService, setActiveService] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const content = {
    th: {
      title: "บริการ",
      subtitle: "ปฏิวัติประสบการณ์การใช้ลิฟต์ด้วยเทคโนโลยีล้ำสมัยและการบริการระดับพรีเมียม",
      getQuote: "ขอใบเสนอราคา",
      contactExperts: "ติดต่อผู้เชี่ยวชาญ",
      services: [{
        icon: Wrench,
        title: "บริการติดตั้งระดับมืออาชีพ",
        description: "การติดตั้งลิฟต์ที่แม่นยำและปลอดภัยด้วยเทคโนโลยีล้ำสมัยและทีมผู้เชี่ยวชาญ",
        features: ["การสำรวจด้วย 3D Scanning เทคโนโลยี", "ทีมติดตั้งรับรองมาตรฐานสากล", "การทดสอบคุณภาพ 200 จุด", "การฝึกอบรมผู้ใช้งานแบบดิจิทัล"],
        image: servicesInstallation,
        bgColor: "from-blue-600/20 to-cyan-600/20"
      }, {
        icon: Settings,
        title: "บำรุงรักษาอัจฉริยะ",
        description: "ระบบบำรุงรักษาแบบทำนายล่วงหน้าด้วย AI และ IoT เพื่อประสิทธิภาพสูงสุด",
        features: ["ระบบตรวจสอบแบบ Real-time Monitoring", "AI Predictive Maintenance", "การแจ้งเตือนล่วงหน้า", "ชิ้นส่วนแท้รับประกันคุณภาพ"],
        image: servicesMaintenance,
        bgColor: "from-green-600/20 to-emerald-600/20"
      }, {
        icon: Zap,
        title: "การปรับปรุงแห่งอนาคต",
        description: "ยกระดับลิฟต์เดิมสู่ยุคดิจิทัลด้วยเทคโนโลยี Smart Building Integration",
        features: ["Smart Building Integration", "Energy Saving Technology", "ระบบความปลอดภัยแบบ Biometric", "UI/UX Design ทันสมัย"],
        image: servicesModernization,
        bgColor: "from-purple-600/20 to-pink-600/20"
      }, {
        icon: Phone,
        title: "บริการฉุกเฉิน 24/7",
        description: "ทีมงานพร้อมให้บริการทุกเวลาด้วยระบบตอบสนองฉุกเฉินแบบทันที",
        features: ["ศูนย์รับสาย AI-Powered", "ทีมเฉพาะกิจ 15 นาทีถึงที่", "Remote Diagnosis Technology", "การซ่อมแซมแบบ Express Service"],
        image: elevatorShaft,
        bgColor: "from-red-600/20 to-orange-600/20"
      }, {
        icon: Users,
        title: "ที่ปรึกษาดิจิทัล",
        description: "การให้คำปรึกษาระดับพรีเมียมด้วยข้อมูลเชิงลึกและการวิเคราะห์แบบ AI",
        features: ["การวิเคราะห์ Traffic Pattern", "ROI Optimization Consulting", "Future Planning Roadmap", "Digital Twin Simulation"],
        image: servicesInstallation,
        bgColor: "from-indigo-600/20 to-blue-600/20"
      }, {
        icon: Shield,
        title: "ตรวจสอบความปลอดภัยอัจฉริยะ",
        description: "การตรวจสอบความปลอดภัยแบบครอบคลุมด้วยเทคโนโลยี Advanced Analytics",
        features: ["AI Safety Risk Assessment", "Predictive Safety Analytics", "Compliance Automation", "Digital Certification Process"],
        image: servicesMaintenance,
        bgColor: "from-teal-600/20 to-green-600/20"
      }],
      whyChooseUs: {
        title: "ทำไมต้องเลือก Thai Fuji Innovation?",
        subtitle: "ประสบการณ์ 29 ปีผสานนวัตกรรมล้ำสมัย",
        reasons: [{
          icon: Cpu,
          title: "เทคโนโลยี AI & IoT",
          description: "ผสานปัญญาประดิษฐ์เพื่อประสบการณ์ที่เหนือกว่า",
          stat: "99.9%",
          statLabel: "Uptime Guarantee"
        }, {
          icon: Clock,
          title: "การตอบสนองแบบทันที",
          description: "ระบบตอบสนองฉุกเฉิน AI-Powered ภายใน 15 นาที",
          stat: "15",
          statLabel: "นาทีถึงที่"
        }, {
          icon: CheckCircle,
          title: "คุณภาพระดับโลก",
          description: "มาตรฐานสากล ISO 9001:2015 และใบรับรองระดับพรีเมียม",
          stat: "100%",
          statLabel: "Satisfaction Rate"
        }, {
          icon: Shield,
          title: "ความปลอดภัยสูงสุด",
          description: "ระบบความปลอดภัยแบบ Multi-layered Protection",
          stat: "0",
          statLabel: "อุบัติเหตุในปี 2024"
        }]
      }
    },
    en: {
      title: "Services",
      subtitle: "Revolutionizing elevator experiences with cutting-edge technology and premium service excellence",
      getQuote: "Get Quote",
      contactExperts: "Contact Experts",
      services: [{
        icon: Wrench,
        title: "Professional Installation",
        description: "Precise and safe elevator installation with cutting-edge technology and expert teams",
        features: ["3D Scanning Technology Survey", "Internationally Certified Installation Team", "200-Point Quality Testing", "Digital User Training Program"],
        image: servicesInstallation,
        bgColor: "from-blue-600/20 to-cyan-600/20"
      }, {
        icon: Settings,
        title: "Smart Maintenance",
        description: "AI-powered predictive maintenance system with IoT integration for maximum efficiency",
        features: ["Real-time Monitoring System", "AI Predictive Maintenance", "Proactive Alert System", "Genuine Parts Quality Guarantee"],
        image: servicesMaintenance,
        bgColor: "from-green-600/20 to-emerald-600/20"
      }, {
        icon: Zap,
        title: "Future Modernization",
        description: "Upgrade existing elevators to digital era with Smart Building Integration technology",
        features: ["Smart Building Integration", "Energy Saving Technology", "Biometric Security System", "Modern UI/UX Design"],
        image: servicesModernization,
        bgColor: "from-purple-600/20 to-pink-600/20"
      }, {
        icon: Phone,
        title: "24/7 Emergency Service",
        description: "Round-the-clock service team with instant emergency response system",
        features: ["AI-Powered Call Center", "15-Minute Response Team", "Remote Diagnosis Technology", "Express Repair Service"],
        image: elevatorShaft,
        bgColor: "from-red-600/20 to-orange-600/20"
      }, {
        icon: Users,
        title: "Digital Consulting",
        description: "Premium consulting services with deep insights and AI-powered analytics",
        features: ["Traffic Pattern Analysis", "ROI Optimization Consulting", "Future Planning Roadmap", "Digital Twin Simulation"],
        image: servicesInstallation,
        bgColor: "from-indigo-600/20 to-blue-600/20"
      }, {
        icon: Shield,
        title: "Smart Safety Inspection",
        description: "Comprehensive safety inspection with Advanced Analytics technology",
        features: ["AI Safety Risk Assessment", "Predictive Safety Analytics", "Compliance Automation", "Digital Certification Process"],
        image: servicesMaintenance,
        bgColor: "from-teal-600/20 to-green-600/20"
      }],
      whyChooseUs: {
        title: "Why Choose Thai Fuji Innovation?",
        subtitle: "29 years of experience combined with cutting-edge innovation",
        reasons: [{
          icon: Cpu,
          title: "AI & IoT Technology",
          description: "Integrating artificial intelligence for superior experiences",
          stat: "99.9%",
          statLabel: "Uptime Guarantee"
        }, {
          icon: Clock,
          title: "Instant Response",
          description: "AI-Powered emergency response system within 15 minutes",
          stat: "15",
          statLabel: "Minutes Response"
        }, {
          icon: CheckCircle,
          title: "Global Quality",
          description: "International ISO 9001:2015 standards and premium certifications",
          stat: "100%",
          statLabel: "Satisfaction Rate"
        }, {
          icon: Shield,
          title: "Maximum Safety",
          description: "Multi-layered Protection security system",
          stat: "0",
          statLabel: "Accidents in 2024"
        }]
      }
    }
  };
  const t = content[language] || content.en;
  return <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-16 md:pt-20">
        {/* Futuristic Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000" style={{
            backgroundImage: `url(${t.services[activeService % 3].image})`
          }} />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            
            {/* Floating Particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }} />)}
            </div>
          </div>

          <div className="relative container mx-auto px-4 text-center text-white z-10">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 px-6 py-2 text-lg bg-primary/20 backdrop-blur-sm border-primary/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Innovation 2024
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-primary-foreground to-white bg-clip-text text-transparent animate-fade-in">
                {t.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
                {t.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-primary to-primary-foreground hover:scale-105 transition-transform duration-300 group">
                  {t.getQuote}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  {t.contactExperts}
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
              <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse" />
            </div>
          </div>
        </section>

        {/* Interactive Services Grid */}
        <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                Premium Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our comprehensive range of cutting-edge elevator solutions
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {t.services.map((service, index) => {
              const IconComponent = service.icon;
              return <Card key={index} className={`group relative overflow-hidden border-0 bg-gradient-to-br ${service.bgColor} backdrop-blur-sm 
                      hover:scale-105 transition-all duration-500 cursor-pointer`} onMouseEnter={() => setActiveService(index)}>
                    {/* Animated Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] rounded-lg">
                      <div className="w-full h-full bg-card rounded-lg" />
                    </div>
                    
                    <CardContent className="relative p-8 h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-gradient-to-br from-primary to-primary-foreground rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => <div key={idx} className="flex items-center gap-3 text-foreground">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>)}
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-primary to-primary-foreground hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Advanced Why Choose Us */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                {t.whyChooseUs.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.whyChooseUs.subtitle}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {t.whyChooseUs.reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                    <CardContent className="p-8 text-center h-full relative">
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-primary-foreground rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        
                        <div className="text-4xl font-bold text-primary mb-2">{reason.stat}</div>
                        <div className="text-sm text-muted-foreground mb-4">{reason.statLabel}</div>
                        
                        <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                      </div>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-gradient-to-r from-primary via-primary-foreground to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Elevate Your Building?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Experience the future of vertical transportation with Thai Fuji's innovative solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white hover:bg-white transition-all duration-300 text-indigo-900">
                  Schedule Consultation
                </Button>
                <Button size="lg" className="px-8 py-4 text-lg bg-white text-primary hover:bg-white/90 transition-all duration-300">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer language={language} />
    </div>;
};
export default Services;