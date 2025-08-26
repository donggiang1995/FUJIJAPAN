import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Cpu, Settings, Download, Zap, CheckCircle, Star, ArrowRight } from "lucide-react";

// Import product images
import fetControlImage from "@/assets/fet-control-cabinet.jpg";
import fenControlImage from "@/assets/fen-control-cabinet.jpg";
import fesControlImage from "@/assets/fes-control-cabinet.jpg";
import fjd1B450Image from "@/assets/fjd1-b450-traction.jpg";
import fjd1B1000Image from "@/assets/fjd1-b1000-traction.jpg";
import fjd1B1600Image from "@/assets/fjd1-b1600-traction.jpg";
import fjd1B2500Image from "@/assets/fjd1-b2500-traction.jpg";
import fjd2B450Image from "@/assets/fjd2-b450-traction.jpg";
import fjd2B800Image from "@/assets/fjd2-b800-traction.jpg";
import fjd2B630Image from "@/assets/fjd2-b630-traction.jpg";
import modernFactoryBg from "@/assets/modern-factory-bg.jpg";

const Products = () => {
  const { language, setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("control");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const content = {
    th: {
      title: "ผลิตภัณฑ์ของเรา",
      subtitle: "โซลูชันเทคโนโลยีลิฟต์ล้ำสมัยสำหรับทุกความต้องการ",
      heroDesc: "พบกับผลิตภัณฑ์คุณภาพสูงที่ออกแบบด้วยเทคโนโลยีญี่ปุ่นล้ำสมัย",
      tabs: {
        control: "ตู้ควบคุม",
        traction: "เครื่องลาก"
      },
      products: {
        control: [
           {
             id: 1,
             name: "FET CONTROL CABINET",
             image: "/lovable-uploads/4ad88420-298c-4ae0-b0c7-2bb5d2599855.png",
             description: "ตู้ควบคุมอัจฉริยะพร้อมการสนับสนุนทางเทคนิคระยะไกลและความสามารถในการตรวจสอบ IoT มีคุณสมบัติการออกแบบลดเสียงรบกวนต่ำกว่า 50dBA และการปรับค่าสัมประสิทธิ์สมดุลอัตโนมัติ",
             specifications: {
               "เสียงรบกวน": "< 50dBA",
               "ชั้น": "ถึง 48 ชั้น",
               "การสนับสนุน": "การสนับสนุนทางเทคนิคระยะไกล",
               "การสื่อสาร": "รองรับ IoT"
             },
             features: [
               "การสนับสนุนทางเทคนิคระยะไกลผ่านแอป",
               "การตรวจสอบระยะไกลผ่าน IoT", 
               "รองรับ Communication encoder",
               "การปรับค่าสัมประสิทธิ์สมดุลอัตโนมัติ",
               "การออกแบบลดเสียงรบกวน < 50dBA"
             ]
           },
           {
             id: 2,
             name: "FEN CONTROL CABINET",
             image: "/lovable-uploads/3b507bc3-944c-42c1-8937-83632393aeb7.png",
            description: "ตู้ควบคุมขั้นสูงสำหรับลิฟต์ที่มีคุณสมบัติครบครันและระบบการสื่อสารที่ทันสมัย",
            specifications: {
              "มาตรฐาน": "48 ชั้น, full collective (full serial connection)",
              "ระบบควบคุม": "Duplex onboard group control (CANbus serial communication)",
              "โหมดประตู": "Automatic door control mode selectable fireman operation",
              "UPS": "Supports 1 ph. 220 Vac UPS for rescue operation",
              "การวินิจฉัย": "Comprehensive trip diagnostics"
            },
            features: ["ระบบควบคุมกลุ่ม", "การสื่อสาร CANbus", "ระบบ UPS", "การวินิจฉัยครบครัน"]
          },
           {
             id: 3,
             name: "FES CONTROL CABINET",
             image: "/lovable-uploads/388d24d4-e41b-42d0-8044-ebd86eb23822.png",
            description: "ตู้ควบคุมที่ออกแบบตาม EN81-20 และเป็นไปตามมาตรฐาน CE",
            specifications: {
              "มาตรฐาน": "EN81-20 และ CE",
              "UCMP": "Self-monitoring on braking force periodically",
              "อุปกรณ์ bypass": "Door lock bypass device for bypassing hall or car door lock",
              "การตรวจสอบ": "Monitoring of door lock circuit",
              "ความปลอดภัย": "Protection for second brake added"
            },
            features: ["มาตรฐาน EN81-20", "UCMP", "ระบบ bypass ประตู", "เบรกคู่", "ระบบควบคุมกลุ่ม", "การสื่อสาร CANbus", "ระบบ UPS", "การวินิจฉัยครบครัน"]
          }
        ],
        traction: [
           {
             id: 4,
             name: "FJD1-B450 SERIES",
             image: "/lovable-uploads/b66d1472-5fab-4453-a4aa-1f3b3abf7ae1.png",
            description: "เครื่องลากประสิทธิภาพสูงสำหรับลิฟต์ขนาดกลาง",
            specifications: {
              "แรงดันไฟฟ้า": "AC380V",
              "แรงดันเบรก": "DC110V",
              "น้ำหนัก": "130kg",
              "Duty": "S5 - 40%",
              "โหลดสูงสุด": "2000kg",
              "การพัน": "Single",
              "ฉนวน": "F",
              "การป้องกัน": "IP41",
              "ความสูงเดินทาง": "45m"
            },
            features: ["ประสิทธิภาพสูง", "น้ำหนักเบา", "การป้องกัน IP41", "ความทนทาน S5"]
          },
           {
             id: 5,
             name: "FJD1-B1000 SERIES",
             image: "/lovable-uploads/bb203ddb-6a38-452f-91af-8140f79f1600.png",
            description: "เครื่องลากสำหรับลิฟต์ขนาดใหญ่ที่ต้องการประสิทธิภาพสูง",
            specifications: {
              "แรงดันไฟฟ้า": "AC380V",
              "แรงดันเบรก": "DC110V",
              "น้ำหนัก": "180kg",
              "Duty": "S5 - 40%",
              "โหลดสูงสุด": "3000kg",
              "การพัน": "Single",
              "ฉนวน": "F",
              "การป้องกัน": "IP41",
              "ความสูงเดินทาง": "60m"
            },
            features: ["ประสิทธิภาพสูง", "รองรับน้ำหนักมาก", "การป้องกัน IP41", "ความทนทาน S5"]
          },
           {
             id: 6,
             name: "FJD1-B1600 SERIES",
             image: "/lovable-uploads/bb203ddb-6a38-452f-91af-8140f79f1600.png",
            description: "เครื่องลากสำหรับลิฟต์ขนส่งสินค้าและอาคารสูง",
            specifications: {
              "แรงดันไฟฟ้า": "AC380V",
              "แรงดันเบรก": "DC110V",
              "น้ำหนัก": "220kg",
              "Duty": "S5 - 40%",
              "โหลดสูงสุด": "5000kg",
              "การพัน": "Single",
              "ฉนวน": "F",
              "การป้องกัน": "IP41",
              "ความสูงเดินทาง": "80m"
            },
            features: ["รองรับน้ำหนักสูง", "เหมาะสำหรับอาคารสูง", "การป้องกัน IP41", "ความทนทาน S5"]
           },
           {
             id: 7,
             name: "FJD1-B2500 SERIES",
             image: "/lovable-uploads/bb203ddb-6a38-452f-91af-8140f79f1600.png",
             description: "เครื่องลากขนาดใหญ่สำหรับลิฟต์ขนส่งสินค้าและอาคารสูงพิเศษ",
             specifications: {
               "แรงดันไฟฟ้า": "AC380V",
               "แรงดันเบรก": "DC110V",
               "น้ำหนัก": "280kg",
               "Duty": "S5 - 40%",
               "โหลดสูงสุด": "6300kg",
               "การพัน": "Single",
               "ฉนวน": "F",
               "การป้องกัน": "IP41",
               "ความสูงเดินทาง": "100m"
             },
             features: ["รองรับน้ำหนักสูงสุด", "เหมาะสำหรับอาคารสูงพิเศษ", "การป้องกัน IP41", "ความทนทาน S5"]
           }
        ]
      },
      viewDetails: "ดูรายละเอียด",
      close: "ปิด",
      downloadCatalog: "ดาวน์โหลดแคตตาล็อก",
      exploreProducts: "สำรวจผลิตภัณฑ์"
    },
    en: {
      title: "Our Products",
      subtitle: "Advanced elevator technology solutions for every need",
      heroDesc: "Discover high-quality products designed with cutting-edge Japanese technology",
      tabs: {
        control: "Control Cabinets",
        traction: "Traction Machines"
      },
      products: {
        control: [
           {
             id: 1,
             name: "FET CONTROL CABINET",
             image: "/lovable-uploads/4ad88420-298c-4ae0-b0c7-2bb5d2599855.png",
             description: "Smart control cabinet with remote technical support and IoT monitoring capabilities. Features noise reduction design under 50dBA and automatic balance coefficient tuning.",
             specifications: {
               "Noise": "< 50dBA",
               "Floors": "Up to 48 floors",
               "Support": "Remote technical support",
               "Communication": "IoT enabled"
             },
             features: [
               "Remote technical support through APP",
               "Remote monitoring through the IoT",
               "Communication encoder supported",
               "Balance coefficient auto-tuning",
               "Noise reduction design < 50dBA"
             ]
           },
           {
             id: 2,
             name: "FEN CONTROL CABINET",
             image: "/lovable-uploads/3b507bc3-944c-42c1-8937-83632393aeb7.png",
            description: "Advanced control cabinet for elevators with comprehensive features and modern communication systems",
            specifications: {
              "Standard": "48 floors, full collective (full serial connection)",
              "Control System": "Duplex onboard group control (CANbus serial communication)",
              "Door Mode": "Automatic door control mode selectable fireman operation",
              "UPS": "Supports 1 ph. 220 Vac UPS for rescue operation",
              "Diagnostics": "Comprehensive trip diagnostics"
            },
            features: ["Group control system", "CANbus communication", "UPS system", "Comprehensive diagnostics"]
          },
           {
             id: 3,
             name: "FES CONTROL CABINET",
             image: "/lovable-uploads/388d24d4-e41b-42d0-8044-ebd86eb23822.png",
            description: "Control cabinet designed according to EN81-20 and CE standards",
            specifications: {
              "Standards": "EN81-20 and CE",
              "UCMP": "Self-monitoring on braking force periodically",
              "Bypass Device": "Door lock bypass device for bypassing hall or car door lock",
              "Monitoring": "Monitoring of door lock circuit",
              "Safety": "Protection for second brake added"
            },
            features: ["EN81-20 standard", "UCMP", "Door bypass system", "Dual brake", "Group control system", "CANbus communication", "UPS system", "Comprehensive diagnostics"]
          }
        ],
        traction: [
           {
             id: 4,
             name: "FJD1-B450 SERIES",
             image: "/lovable-uploads/b66d1472-5fab-4453-a4aa-1f3b3abf7ae1.png",
            description: "High-performance traction machine for medium-sized elevators",
            specifications: {
              "Voltage": "AC380V",
              "Brake Voltage": "DC110V",
              "Weight": "130kg",
              "Duty": "S5 - 40%",
              "Max Load": "2000kg",
              "Winding": "Single",
              "Insulation": "F",
              "Protection": "IP41",
              "Travel Height": "45m"
            },
            features: ["High efficiency", "Lightweight", "IP41 protection", "S5 durability"]
          },
           {
             id: 5,
             name: "FJD1-B1000 SERIES",
             image: "/lovable-uploads/bb203ddb-6a38-452f-91af-8140f79f1600.png",
            description: "Traction machine for large elevators requiring high performance",
            specifications: {
              "Voltage": "AC380V",
              "Brake Voltage": "DC110V",
              "Weight": "180kg",
              "Duty": "S5 - 40%",
              "Max Load": "3000kg",
              "Winding": "Single",
              "Insulation": "F",
              "Protection": "IP41",
              "Travel Height": "60m"
            },
            features: ["High efficiency", "Heavy load support", "IP41 protection", "S5 durability"]
          },
           {
             id: 6,
             name: "FJD1-B1600 SERIES",
             image: "/lovable-uploads/bb203ddb-6a38-452f-91af-8140f79f1600.png",
            description: "Traction machine for freight elevators and high-rise buildings",
            specifications: {
              "Voltage": "AC380V",
              "Brake Voltage": "DC110V",
              "Weight": "220kg",
              "Duty": "S5 - 40%",
              "Max Load": "5000kg",
              "Winding": "Single",
              "Insulation": "F",
              "Protection": "IP41",
              "Travel Height": "80m"
            },
            features: ["High load capacity", "Suitable for high-rise", "IP41 protection", "S5 durability"]
           },
           {
             id: 7,
             name: "FJD1-B2500 SERIES",
             image: "/lovable-uploads/bb203ddb-6a38-452f-91af-8140f79f1600.png",
             description: "Heavy-duty traction machine for freight elevators and super high-rise buildings",
             specifications: {
               "Voltage": "AC380V",
               "Brake Voltage": "DC110V",
               "Weight": "280kg",
               "Duty": "S5 - 40%",
               "Max Load": "6300kg",
               "Winding": "Single",
               "Insulation": "F",
               "Protection": "IP41",
               "Travel Height": "100m"
             },
             features: ["Maximum load capacity", "Suitable for super high-rise", "IP41 protection", "S5 durability"]
           }
        ]
      },
      viewDetails: "View Details",
      close: "Close",
      downloadCatalog: "Download Catalog",
      exploreProducts: "Explore Products"
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
                 style={{ backgroundImage: `url(${modernFactoryBg})` }} />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          <div className="relative container mx-auto px-4 text-center text-white z-10">
            <div className="max-w-5xl mx-auto">
              <Badge variant="secondary" className="mb-8 px-8 py-3 text-xl bg-primary/20 backdrop-blur-sm border-primary/30 animate-fade-in">
                <Star className="w-5 h-5 mr-3" />
                Premium Quality
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
                <Zap className="mr-3 w-6 h-6" />
                {t.exploreProducts}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                Product Categories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Engineered with precision and built to last
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12 max-w-md mx-auto h-16 bg-gradient-to-r from-primary/10 to-primary-foreground/10 backdrop-blur-sm">
                <TabsTrigger value="control" className="text-lg py-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary-foreground data-[state=active]:text-white">
                  <Settings className="w-5 h-5 mr-2" />
                  {t.tabs.control}
                </TabsTrigger>
                <TabsTrigger value="traction" className="text-lg py-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary-foreground data-[state=active]:text-white">
                  <Cpu className="w-5 h-5 mr-2" />
                  {t.tabs.traction}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="control" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {t.products.control.map((product) => (
                    <Card key={product.id} className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                      <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-primary-foreground/5">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">Control System</Badge>
                          <Star className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{product.description}</p>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full bg-gradient-to-r from-primary to-primary-foreground hover:scale-105 transition-all duration-300 group">
                              {t.viewDetails}
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-primary">{product.name}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-64 object-cover rounded-lg"
                              />
                              <p className="text-muted-foreground">{product.description}</p>
                              
                              <div>
                                <h4 className="font-semibold mb-4 text-lg">Specifications</h4>
                                <div className="grid grid-cols-1 gap-3">
                                  {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between p-3 bg-muted/30 rounded">
                                      <span className="font-medium">{key}:</span>
                                      <span className="text-muted-foreground">{String(value)}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-4 text-lg">Key Features</h4>
                                <div className="space-y-2">
                                  {product.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-muted-foreground">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <Button className="w-full bg-gradient-to-r from-primary to-primary-foreground">
                                <Download className="mr-2 w-4 h-4" />
                                {t.downloadCatalog}
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="traction" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {t.products.traction.map((product) => (
                    <Card key={product.id} className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                      <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-primary-foreground/5">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">Traction Machine</Badge>
                          <Star className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{product.description}</p>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full bg-gradient-to-r from-primary to-primary-foreground hover:scale-105 transition-all duration-300 group">
                              {t.viewDetails}
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-primary">{product.name}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-64 object-cover rounded-lg"
                              />
                              <p className="text-muted-foreground">{product.description}</p>
                              
                              <div>
                                <h4 className="font-semibold mb-4 text-lg">Specifications</h4>
                                <div className="grid grid-cols-1 gap-3">
                                  {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between p-3 bg-muted/30 rounded">
                                      <span className="font-medium">{key}:</span>
                                      <span className="text-muted-foreground">{String(value)}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-4 text-lg">Key Features</h4>
                                <div className="space-y-2">
                                  {product.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-muted-foreground">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <Button className="w-full bg-gradient-to-r from-primary to-primary-foreground">
                                <Download className="mr-2 w-4 h-4" />
                                {t.downloadCatalog}
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Products;
