import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Users, Award, Target, Globe, Shield, CheckCircle, Star, TrendingUp, MapPin, Calendar, Lightbulb, Heart, ArrowRight, PlayCircle, Eye, Zap } from "lucide-react";
import aboutIndustrial from "@/assets/about-industrial.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import fujiHeadquarters from "@/assets/fuji-headquarters.jpg";
import awardsCertifications from "@/assets/awards-certifications.jpg";
import globalPresence from "@/assets/global-presence.jpg";
import factoryManufacturing from "@/assets/factory-manufacturing.jpg";
import factoryTesting from "@/assets/factory-testing.jpg";
import factoryQuality from "@/assets/factory-quality.jpg";
import factoryResearch from "@/assets/factory-research.jpg";
import factoryWarehouse from "@/assets/factory-warehouse.jpg";
const About = () => {
  const {
    language,
    setLanguage
  } = useLanguage();
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const content = {
    en: {
      title: "About Us",
      subtitle: "THAI FUJI ELEVATOR - Pioneering the Future of Vertical Transportation",
      heroDesc: "29 years of innovation, excellence, and trust in elevator technology",
      ourStory: "Our Story",
      storyDesc: "From humble beginnings to industry leadership",
      mission: "Mission",
      vision: "Vision",
      values: "Values",
      watchVideo: "Watch Our Story",
      getInTouch: "Get In Touch",
      exploreCareer: "Explore Careers",
      stats: [{
        icon: Building,
        label: "Projects Completed",
        value: "5,000+",
        detail: "Across 15 countries"
      }, {
        icon: Users,
        label: "Team Members",
        value: "200+",
        detail: "Expert professionals"
      }, {
        icon: Award,
        label: "Industry Awards",
        value: "15+",
        detail: "International recognition"
      }, {
        icon: Target,
        label: "Years of Excellence",
        value: "29",
        detail: "Continuous innovation"
      }],
      company: {
        mission: "Creating safer, smarter, and more sustainable vertical transportation solutions that connect people and elevate communities worldwide.",
        vision: "To become the global leader in AI-powered elevator technology, transforming how people move through buildings.",
        values: [{
          icon: Shield,
          title: "Safety First",
          desc: "Zero-compromise approach to passenger safety"
        }, {
          icon: Lightbulb,
          title: "Innovation",
          desc: "Pioneering next-generation technologies"
        }, {
          icon: Heart,
          title: "Excellence",
          desc: "Delivering superior quality in every project"
        }, {
          icon: Globe,
          title: "Sustainability",
          desc: "Environmental responsibility in all operations"
        }]
      }
    },
    th: {
      title: "เกี่ยวกับเรา",
      subtitle: "ไทย ฟูจิ เอลิเวเตอร์ - ผู้นำนวัตกรรมการขนส่งแนวตั้งแห่งอนาคต",
      heroDesc: "29 ปีแห่งนวัตกรรม ความเป็นเลิศ และความไว้วางใจในเทคโนโลยีลิฟต์",
      ourStory: "เรื่องราวของเรา",
      storyDesc: "จากจุดเริ่มต้นสู่ความเป็นผู้นำในอุตสาหกรรม",
      mission: "พันธกิจ",
      vision: "วิสัยทัศน์",
      values: "ค่านิยม",
      watchVideo: "ดูเรื่องราวของเรา",
      getInTouch: "ติดต่อเรา",
      exploreCareer: "สำรวจอาชีพ",
      stats: [{
        icon: Building,
        label: "โครงการที่สำเร็จ",
        value: "5,000+",
        detail: "ใน 15 ประเทศ"
      }, {
        icon: Users,
        label: "สมาชิกทีม",
        value: "200+",
        detail: "ผู้เชี่ยวชาญ"
      }, {
        icon: Award,
        label: "รางวัลอุตสาหกรรม",
        value: "15+",
        detail: "การยอมรับระหว่างประเทศ"
      }, {
        icon: Target,
        label: "ปีแห่งความเป็นเลิศ",
        value: "29",
        detail: "นวัตกรรมต่อเนื่อง"
      }],
      company: {
        mission: "สร้างโซลูชันการขนส่งแนวตั้งที่ปลอดภัย อัจฉริยะ และยั่งยืนมากขึ้น เพื่อเชื่อมโยงผู้คนและยกระดับชุมชนทั่วโลก",
        vision: "เป็นผู้นำระดับโลกในเทคโนโลยีลิฟต์ที่ขับเคลื่อนด้วย AI เปลี่ยนแปลงวิธีการเคลื่อนที่ของผู้คนในอาคาร",
        values: [{
          icon: Shield,
          title: "ความปลอดภัยเป็นอันดับหนึ่ง",
          desc: "แนวทางไม่ประนีประนอมต่อความปลอดภัยของผู้โดยสาร"
        }, {
          icon: Lightbulb,
          title: "นวัตกรรม",
          desc: "บุกเบิกเทคโนโลยีรุ่นใหม่"
        }, {
          icon: Heart,
          title: "ความเป็นเลิศ",
          desc: "ส่งมอบคุณภาพเหนือกว่าในทุกโครงการ"
        }, {
          icon: Globe,
          title: "ความยั่งยืน",
          desc: "ความรับผิดชอบต่อสิ่งแวดล้อมในทุกการดำเนินงาน"
        }]
      }
    }
  };
  const t = content[language] || content.en;
  return <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-16 md:pt-20">
        {/* Revolutionary Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-10000 ease-linear" style={{
            backgroundImage: `url(${aboutIndustrial})`
          }} />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          <div className="relative container mx-auto px-4 text-center text-white z-10">
            <div className="max-w-5xl mx-auto">
              <Badge variant="secondary" className="mb-8 px-8 py-3 text-xl bg-primary/20 backdrop-blur-sm border-primary/30 animate-fade-in">
                <Calendar className="w-5 h-5 mr-3" />
                Since 1995
              </Badge>
              <h1 className={`text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-primary-foreground to-white bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                {t.title}
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-6 font-light animate-fade-in">
                {t.subtitle}
              </p>
              <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto animate-fade-in">
                {t.heroDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="px-10 py-5 text-xl bg-gradient-to-r from-primary to-primary-foreground hover:scale-105 transition-all duration-300 group">
                  <PlayCircle className="mr-3 w-6 h-6" />
                  {t.watchVideo}
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="px-10 py-5 text-xl border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  {t.getInTouch}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats Counter */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {t.stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return <Card key={index} className={`text-center group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm hover:scale-105 transition-all duration-500 ${currentStat === index ? 'ring-2 ring-primary shadow-xl' : ''}`}>
                    <CardContent className="p-8">
                      <div className="p-4 bg-gradient-to-br from-primary to-primary-foreground rounded-2xl mx-auto mb-6 w-fit shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">{stat.detail}</div>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                {t.ourStory}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.storyDesc}
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">{t.mission}</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">{t.company.mission}</p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">{t.vision}</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">{t.company.vision}</p>
                </CardContent>
              </Card>
            </div>

            {/* Values Grid */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{t.values}</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.company.values.map((value, index) => {
              const IconComponent = value.icon;
              return <Card key={index} className="group text-center border-0 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="p-4 bg-gradient-to-br from-primary to-primary-foreground rounded-xl mx-auto mb-6 w-fit">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
                      <p className="text-muted-foreground">{value.desc}</p>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                Manufacturing Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                State-of-the-art facilities and cutting-edge technology
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={factoryManufacturing} 
                    alt="Manufacturing" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Advanced Manufacturing</h3>
                  <p className="text-muted-foreground">State-of-the-art production lines with robotic automation and precision quality control.</p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={factoryTesting} 
                    alt="Testing" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Rigorous Testing</h3>
                  <p className="text-muted-foreground">Comprehensive testing facilities ensuring the highest safety and reliability standards.</p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={factoryQuality} 
                    alt="Quality Control" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
                  <p className="text-muted-foreground">Precision quality control laboratories with advanced inspection technologies.</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={factoryResearch} 
                    alt="Research & Development" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">R&D Innovation</h3>
                  <p className="text-muted-foreground">Cutting-edge research and development center driving the future of elevator technology.</p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={factoryWarehouse} 
                    alt="Automated Warehouse" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Smart Logistics</h3>
                  <p className="text-muted-foreground">Automated warehouse systems ensuring efficient inventory management and timely delivery.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-r from-primary via-primary-foreground to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Innovation Journey
              </h2>
              <p className="text-xl mb-12 text-white/90">
                Be part of the team that's revolutionizing vertical transportation worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white hover:bg-white transition-all duration-300 text-slate-500">
                  <Users className="mr-2 w-5 h-5" />
                  {t.exploreCareer}
                </Button>
                <Button size="lg" className="px-8 py-4 text-lg bg-white text-primary hover:bg-white/90 transition-all duration-300">
                  <Zap className="mr-2 w-5 h-5" />
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer language={language} />
    </div>;
};
export default About;