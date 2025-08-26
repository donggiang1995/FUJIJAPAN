import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  Users, 
  GraduationCap,
  Heart,
  TrendingUp,
  Shield,
  Star,
  ArrowRight,
  Zap
} from "lucide-react";
import careerTraining from "@/assets/career-training.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const Careers = () => {
  const { language, setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const content = {
    th: {
      title: "สมัครงาน",
      subtitle: "ร่วมงานกับไทยฟูจิเพื่อสร้างอนาคตที่ยิ่งใหญ่ไปด้วยกัน",
      heroDesc: "เข้าร่วมทีมแห่งนวัตกรรมและพัฒนาเทคโนโลยีลิฟต์ล้ำสมัย",
      applyNow: "สมัครงาน",
      viewDetails: "ดูรายละเอียด",
      exploreOpportunities: "สำรวจโอกาส",
      jobType: {
        fulltime: "งานเต็มเวลา",
        parttime: "งานสัญญาจ้าง",
        intern: "นักศึกษาฝึกงาน"
      },
      experience: {
        junior: "ผู้เริ่มต้น",
        mid: "ประสบการณ์ 3-5 ปี",
        senior: "ประสบการณ์ 5 ปีขึ้นไป"
      },
      jobs: [
        {
          id: 1,
          title: "วิศวกรระบบลิฟต์",
          department: "ทีมพัฒนาเทคโนโลยี",
          location: "กรุงเทพฯ",
          type: "fulltime",
          experience: "mid",
          description: "รับผิดชอบงานออกแบบและพัฒนาระบบควบคุมลิฟต์ รวมถึงการทดสอบและปรับปรุงประสิทธิภาพ",
          requirements: [
            "วุฒิปริญญาวิศวกรรมไฟฟ้า/อิเล็กทรอนิกส์/ควบคุม",
            "ประสบการณ์ด้านลิฟต์ 3 ปีขึ้นไป",
            "ประสบการณ์การเขียนโปรแกรม PLC",
            "อ่าน/เขียนภาษาอังกฤษได้"
          ]
        },
        {
          id: 2,
          title: "ตัวแทนขายต่างประเทศ",
          department: "ทีมขาย",
          location: "กรุงเทพฯ",
          type: "fulltime", 
          experience: "mid",
          description: "รับผิดชอบการพัฒนาตลาดต่างประเทศและการจัดการลูกค้าระหว่างประเทศ",
          requirements: [
            "ใช้ภาษาอังกฤษได้คล่อง (TOEIC 850+ คะแนน)",
            "ประสบการณ์ขายต่างประเทศ 3 ปีขึ้นไป",
            "สามารถเดินทางไปต่างประเทศได้",
            "มีมนุษยสัมพันธ์ดี"
          ]
        },
        {
          id: 3,
          title: "ผู้เชี่ยวชาญด้านควบคุมคุณภาพ",
          department: "ทีมควบคุมคุณภาพ",
          location: "กรุงเทพฯ",
          type: "fulltime",
          experience: "junior",
          description: "รับผิดชอบการตรวจสอบคุณภาพผลิตภัณฑ์และการจัดการระบบคุณภาพมาตรฐานสากล",
          requirements: [
            "วุฒิปริญญาวิศวกรรมเครื่องกล/ไฟฟ้า",
            "มีใบรับรองด้านการจัดการคุณภาพจะพิจารณาเป็นพิเศษ",
            "มีความละเอียดรอบคอบ",
            "ใช้ Excel, PowerPoint ได้"
          ]
        },
        {
          id: 4,
          title: "นักพัฒนา AI",
          department: "ทีม R&D",
          location: "กรุงเทพฯ",
          type: "fulltime",
          experience: "mid",
          description: "รับผิดชอบการพัฒนาอัลกอริทึม AI สำหรับระบบลิฟต์อัจฉริยะและการเรียนรู้ของเครื่อง",
          requirements: [
            "วุฒิปริญญาวิทยาการคอมพิวเตอร์/AI",
            "ประสบการณ์ Python, TensorFlow",
            "ประสบการณ์โครงการ Machine learning/Deep learning",
            "ประสบการณ์การเขียนงานวิจัยจะพิจารณาเป็นพิเศษ"
          ]
        }
      ],
      benefits: {
        title: "สวัสดิการและผลประโยชน์",
        items: [
          {
            icon: Heart,
            title: "การดูแลสุขภาพ",
            description: "ตรวจสุขภาพประจำปี สนับสนุนค่ารักษาพยาบาล บัตรสมาชิกฟิตเนส"
          },
          {
            icon: GraduationCap,
            title: "สนับสนุนการศึกษา",
            description: "การฝึกอบรมตามสายงาน การศึกษาต่อ สนับสนุนการสอบใบรับรอง"
          },
          {
            icon: TrendingUp,
            title: "ผลตอบแทนตามผลงาน",
            description: "โบนัสตามผลงาน สิทธิประโยชน์เพิ่มเติม สิทธิการซื้อหุ้น"
          },
          {
            icon: Shield,
            title: "ความมั่นคง",
            description: "ประกันสังคม กองทุนสำรองเลี้ยงชีพ รางวัลพนักงานดีเด่น"
          }
        ]
      },
      culture: {
        title: "วัฒนธรรมองค์กร",
        description: "ไทยฟูจิมุ่งมั่นสร้างวัฒนธรรมองค์กรที่สร้างสรรค์และนวัตกรรม",
        values: [
          "นวัตกรรมและความท้าทาย",
          "การทำงานเป็นทีมและการสื่อสาร", 
          "มุ่งเน้นลูกค้า",
          "การเติบโตอย่างยั่งยืน"
        ]
      }
    },
    en: {
      title: "Careers",
      subtitle: "Join Thai Fuji to build an extraordinary future together",
      heroDesc: "Be part of an innovative team developing cutting-edge elevator technology",
      applyNow: "Apply Now",
      viewDetails: "View Details",
      exploreOpportunities: "Explore Opportunities",
      jobType: {
        fulltime: "Full-time",
        parttime: "Contract",
        intern: "Intern"
      },
      experience: {
        junior: "Entry Level",
        mid: "3-5 Years",
        senior: "5+ Years"
      },
      jobs: [
        {
          id: 1,
          title: "Elevator System Engineer",
          department: "R&D Team",
          location: "Bangkok",
          type: "fulltime",
          experience: "mid",
          description: "Responsible for elevator control system design and development, including testing and performance optimization.",
          requirements: [
            "Degree in Electrical/Electronic/Control Engineering",
            "3+ years elevator-related experience",
            "PLC programming experience",
            "English reading/writing skills"
          ]
        },
        {
          id: 2,
          title: "International Sales Representative",
          department: "Sales Team", 
          location: "Bangkok",
          type: "fulltime",
          experience: "mid",
          description: "Responsible for overseas market development and international customer management.",
          requirements: [
            "Fluent English (TOEIC 850+)",
            "3+ years international sales experience",
            "Willing to travel",
            "Strong interpersonal skills"
          ]
        },
        {
          id: 3,
          title: "Quality Control Specialist",
          department: "QC Team",
          location: "Bangkok",
          type: "fulltime",
          experience: "junior",
          description: "Responsible for product quality inspection and international quality system management.",
          requirements: [
            "Degree in Mechanical/Electrical Engineering",
            "Quality management certification preferred",
            "Detail-oriented personality",
            "Excel, PowerPoint proficiency"
          ]
        },
        {
          id: 4,
          title: "AI Developer",
          department: "R&D Team",
          location: "Bangkok", 
          type: "fulltime",
          experience: "mid",
          description: "Responsible for developing AI algorithms for smart elevator systems and machine learning.",
          requirements: [
            "Degree in Computer Science/AI",
            "Python, TensorFlow experience",
            "Machine learning/Deep learning project experience",
            "Research paper experience preferred"
          ]
        }
      ],
      benefits: {
        title: "Benefits & Perks",
        items: [
          {
            icon: Heart,
            title: "Health Care",
            description: "Comprehensive health checkup, medical support, gym membership"
          },
          {
            icon: GraduationCap,
            title: "Education Support",
            description: "Job training, language study, certification support"
          },
          {
            icon: TrendingUp,
            title: "Performance Rewards",
            description: "Performance bonus, incentives, stock options"
          },
          {
            icon: Shield,
            title: "Stability",
            description: "Full insurance, retirement plan, long-service awards"
          }
        ]
      },
      culture: {
        title: "Company Culture",
        description: "Thai Fuji pursues a creative and innovative corporate culture",
        values: [
          "Innovation & Challenge",
          "Teamwork & Communication",
          "Customer Focus", 
          "Sustainable Growth"
        ]
      }
    }
  };

  const t = content[language] || content.en;

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-16 md:pt-20">
        {/* Revolutionary Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-10000 ease-linear" 
                 style={{ backgroundImage: `url(${careerTraining})` }} />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          <div className="relative container mx-auto px-4 text-center text-white z-10">
            <div className="max-w-5xl mx-auto">
              <Badge variant="secondary" className="mb-8 px-8 py-3 text-xl bg-primary/20 backdrop-blur-sm border-primary/30 animate-fade-in">
                <Star className="w-5 h-5 mr-3" />
                Join Our Team
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
              <Button size="lg" className="px-10 py-5 text-xl bg-gradient-to-r from-primary to-primary-foreground hover:scale-105 transition-all duration-300 group">
                <Briefcase className="mr-3 w-6 h-6" />
                {t.exploreOpportunities}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                Open Positions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover exciting opportunities to grow your career
              </p>
            </div>

            <div className="grid gap-8">
              {t.jobs.map((job, index) => (
                <Card 
                  key={job.id} 
                  className={`group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm transition-all duration-500 shadow-xl hover:shadow-2xl ${
                    hoveredCard === index ? 'scale-[1.02]' : 'hover:scale-[1.02]'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {t.jobType[job.type as keyof typeof t.jobType]}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-primary" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            {t.experience[job.experience as keyof typeof t.experience]}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold text-lg">Requirements:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {job.requirements.map((req, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{req}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3 lg:ml-8">
                        <Button variant="outline" className="hover:scale-105 transition-all duration-300">
                          {t.viewDetails}
                        </Button>
                        <Button className="bg-gradient-to-r from-primary to-primary-foreground hover:scale-105 transition-all duration-300 group">
                          {t.applyNow}
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-gradient-to-r from-primary/5 via-background to-primary-foreground/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                {t.benefits.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe in taking care of our people
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.benefits.items.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="group text-center border-0 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                    <CardContent className="p-8">
                      <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-primary-foreground rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                  {t.culture.title}
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{t.culture.description}</p>
                <div className="grid grid-cols-1 gap-4">
                  {t.culture.values.map((value, index) => (
                    <Card key={index} className="border-0 bg-gradient-to-r from-primary/10 to-primary-foreground/10 backdrop-blur-sm p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-foreground rounded-full" />
                        <p className="font-semibold text-lg">{value}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={aboutTeam} 
                    alt="Team Culture" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-primary-foreground rounded-full opacity-20 animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary-foreground to-primary rounded-full opacity-20 animate-pulse animation-delay-2000" />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Careers;