import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Eye, Star, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import newsConference from "@/assets/news-conference.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import controlSystem from "@/assets/control-system.jpg";

const News = () => {
  const { language, setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const content = {
    th: {
      title: "ข่าวสารและประกาศ",
      subtitle: "อัปเดตข่าวสารล่าสุดและแนวโน้มอุตสาหกรรมจาก Thai Fuji",
      heroDesc: "ติดตามนวัตกรรมและความก้าวหน้าในวงการเทคโนโลยีลิฟต์",
      readMore: "อ่านเพิ่มเติม",
      viewAll: "ดูข่าวทั้งหมด",
      categories: {
        news: "ข่าวสาร",
        announcement: "ประกาศ",
        technology: "เทคโนโลยี",
        awards: "รางวัล"
      },
      news: [
        {
          id: 1,
          title: "Thai Fuji ได้รับการรับรองความปลอดภัยลิฟต์ปี 2024",
          excerpt: "ซีรีส์ FCA-9000 ของเราได้รับการรับรองมาตรฐานความปลอดภัยระดับนานาชาติ พร้อมเทคโนโลยี AI สำหรับการตรวจสอบความปลอดภัยแบบเรียลไทม์",
          date: "2024-01-15",
          category: "awards",
          image: aboutTeam,
          readTime: "5 นาที"
        },
        {
          id: 2,
          title: "เปิดตัวระบบควบคุมลิฟต์ที่ใช้ AI",
          excerpt: "เราได้เปิดตัวระบบควบคุมลิฟต์อัจฉริยะที่ใช้เทคโนโลยี AI ล่าสุด ซึ่งสามารถเรียนรู้และปรับปรุงประสิทธิภาพการทำงานได้อัตโนมัติ",
          date: "2024-01-10",
          category: "technology",
          image: controlSystem,
          readTime: "8 นาที"
        },
        {
          id: 3,
          title: "กำหนดการจัดงานเปิดตัวผลิตภัณฑ์ใหม่ปี 2024",
          excerpt: "งานเปิดตัวผลิตภัณฑ์ใหม่จะจัดขึ้นที่กรุงเทพฯ ในวันที่ 15 กุมภาพันธ์ พร้อมเผยโฉมเทคโนโลยีล้ำสมัยที่จะเปลี่ยนอุตสาหกรรมลิฟต์",
          date: "2024-01-05",
          category: "announcement",
          image: newsConference,
          readTime: "3 นาที"
        }
      ]
    },
    en: {
      title: "News & Announcements", 
      subtitle: "Latest updates and industry trends from Thai Fuji",
      heroDesc: "Stay informed about innovations and advances in elevator technology",
      readMore: "Read More",
      viewAll: "View All News",
      categories: {
        news: "News",
        announcement: "Announcement",
        technology: "Technology", 
        awards: "Awards"
      },
      news: [
        {
          id: 1,
          title: "Thai Fuji Receives 2024 Elevator Safety Certification",
          excerpt: "Our FCA-9000 Series has obtained international safety standard certification with AI technology for real-time safety monitoring.",
          date: "2024-01-15",
          category: "awards",
          image: aboutTeam,
          readTime: "5 min"
        },
        {
          id: 2,
          title: "AI-Based Elevator Control System Launch",
          excerpt: "We unveiled our smart elevator control system with the latest AI technology that can learn and automatically improve performance.",
          date: "2024-01-10", 
          category: "technology",
          image: controlSystem,
          readTime: "8 min"
        },
        {
          id: 3,
          title: "2024 New Product Launch Event Scheduled",
          excerpt: "A new product launch event will be held in Bangkok on February 15th, unveiling cutting-edge technology that will revolutionize the elevator industry.",
          date: "2024-01-05",
          category: "announcement", 
          image: newsConference,
          readTime: "3 min"
        }
      ]
    }
  };

  const t = content[language] || content.en;

  const getCategoryBadgeVariant = (category: string) => {
    switch (category) {
      case "awards": return "default";
      case "technology": return "secondary";
      case "announcement": return "outline";
      default: return "outline";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "awards": return Star;
      case "technology": return Zap;
      case "announcement": return TrendingUp;
      default: return Eye;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-16 md:pt-20">
        {/* Revolutionary Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-10000 ease-linear" 
                 style={{ backgroundImage: `url(${newsConference})` }} />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          <div className="relative container mx-auto px-4 text-center text-white z-10">
            <div className="max-w-5xl mx-auto">
              <Badge variant="secondary" className="mb-8 px-8 py-3 text-xl bg-primary/20 backdrop-blur-sm border-primary/30 animate-fade-in">
                <TrendingUp className="w-5 h-5 mr-3" />
                Latest Updates
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
                <Eye className="mr-3 w-6 h-6" />
                {t.viewAll}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                Featured News
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the latest developments and innovations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.news.map((article, index) => {
                const CategoryIcon = getCategoryIcon(article.category);
                return (
                  <Card 
                    key={article.id} 
                    className={`group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm transition-all duration-500 shadow-xl hover:shadow-2xl ${
                      hoveredCard === index ? 'scale-105' : 'hover:scale-105'
                    }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/5 to-primary-foreground/5">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant={getCategoryBadgeVariant(article.category)} className="bg-white/90 backdrop-blur-sm">
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {t.categories[article.category as keyof typeof t.categories]}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
                      <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">{article.excerpt}</p>
                      <Button className="w-full bg-gradient-to-r from-primary to-primary-foreground hover:scale-105 transition-all duration-300 group">
                        {t.readMore}
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <Card className="border-0 bg-gradient-to-r from-primary/10 via-primary-foreground/10 to-primary/10 backdrop-blur-sm p-12 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter and be the first to know about our latest innovations and industry insights.
                </p>
                <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-primary to-primary-foreground hover:scale-105 transition-all duration-300">
                  Subscribe Now
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default News;