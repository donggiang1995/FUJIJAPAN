import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLanguage } from "@/hooks/use-language";
import { useContact } from "@/hooks/use-contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, Star, ArrowRight, MessageSquare } from "lucide-react";
import ContactMap from "@/components/ui/contact-map";
import thaiFujiBuilding from "@/assets/thai-fuji-building.jpg";

const Contact = () => {
  const { language, setLanguage } = useLanguage();
  const { submitContactForm, isSubmitting } = useContact();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const content = {
    th: {
      title: "ติดต่อเรา",
      subtitle: "พร้อมให้บริการและตอบคำถามทุกความต้องการของคุณ",
      heroDesc: "ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและแนะนำโซลูชันที่เหมาะสม",
      form: {
        title: "ส่งข้อความสอบถาม",
        name: "ชื่อ",
        namePlaceholder: "สมชาย ใจดี",
        email: "อีเมล", 
        emailPlaceholder: "somchai@example.com",
        company: "ชื่อบริษัท",
        companyPlaceholder: "ชื่อบริษัท (ไม่บังคับ)",
        message: "ข้อความ",
        messagePlaceholder: "กรุณาระบุรายละเอียดการสอบถามของท่าน...",
        submit: "ส่งข้อความ",
        submitting: "กำลังส่ง..."
      },
      contact: {
        title: "ข้อมูลการติดต่อ",
        address: "ที่อยู่",
        addressValue: "232-234 Rama 3 Road, Bang Kho Laem, Bangkok 10120 Thailand",
        phone: "หมายเลขโทรศัพท์",
        phoneValue: "+66-22894953",
        email: "อีเมล",
        emailValue: "info@thai-fuji.com",
        hours: "เวลาทำการ",
        hoursValue: "จันทร์-ศุกร์ 09:00-18:00"
      },
      getInTouch: "ติดต่อเรา",
      success: "ส่งข้อความสอบถามสำเร็จแล้ว!",
      error: "เกิดข้อผิดพลาดในการส่งข้อความสอบถาม",
      required: "กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน"
    },
    en: {
      title: "Contact",
      subtitle: "Ready to serve and answer all your business needs",
      heroDesc: "Our expert team is ready to provide consultation and recommend the right solutions",
      form: {
        title: "Send Inquiry",
        name: "Name",
        namePlaceholder: "John Doe",
        email: "Email",
        emailPlaceholder: "john@example.com", 
        company: "Company",
        companyPlaceholder: "Company Name (Optional)",
        message: "Message",
        messagePlaceholder: "Please describe your inquiry in detail...",
        submit: "Send Inquiry",
        submitting: "Sending..."
      },
      contact: {
        title: "Contact Information",
        address: "Address",
        addressValue: "232-234 Rama 3 Road, Bang Kho Laem, Bangkok 10120 Thailand",
        phone: "Phone",
        phoneValue: "+66-22894953",
        email: "Email",
        emailValue: "info@thai-fuji.com",
        hours: "Business Hours",
        hoursValue: "Mon-Fri 09:00-18:00"
      },
      getInTouch: "Get In Touch",
      success: "Your inquiry has been sent successfully!",
      error: "An error occurred while sending your inquiry.",
      required: "Please fill in all required fields."
    }
  };

  const t = content[language] || content.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    const result = await submitContactForm(formData);
    
    if (result.success) {
      setFormData({ name: "", email: "", company: "", message: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-16 md:pt-20">
        {/* Revolutionary Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-10000 ease-linear" 
                 style={{ backgroundImage: `url(${thaiFujiBuilding})` }} />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          <div className="relative container mx-auto px-4 text-center text-white z-10">
            <div className="max-w-5xl mx-auto">
              <Badge variant="secondary" className="mb-8 px-8 py-3 text-xl bg-primary/20 backdrop-blur-sm border-primary/30 animate-fade-in">
                <Star className="w-5 h-5 mr-3" />
                24/7 Support
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
                <MessageSquare className="mr-3 w-6 h-6" />
                {t.getInTouch}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're here to help you find the perfect elevator solution
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                    <Send className="h-8 w-8 mr-4 text-primary" />
                    {t.form.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-lg font-semibold">{t.form.name} *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.form.namePlaceholder}
                          className="mt-2 h-12 bg-white/50 backdrop-blur-sm"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-lg font-semibold">{t.form.email} *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t.form.emailPlaceholder}
                          className="mt-2 h-12 bg-white/50 backdrop-blur-sm"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="text-lg font-semibold">{t.form.company}</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t.form.companyPlaceholder}
                        className="mt-2 h-12 bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-lg font-semibold">{t.form.message} *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.form.messagePlaceholder}
                        rows={8}
                        className="mt-2 bg-white/50 backdrop-blur-sm resize-none"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg bg-gradient-to-r from-primary to-primary-foreground hover:scale-105 transition-all duration-300 group"
                    >
                      <Send className="mr-3 w-5 h-5" />
                      {isSubmitting ? t.form.submitting : t.form.submit}
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-3xl bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                      {t.contact.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    <div className="flex items-start space-x-6 group/item hover:scale-105 transition-transform duration-300">
                      <div className="p-4 bg-gradient-to-br from-primary to-primary-foreground rounded-xl">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 group-hover/item:text-primary transition-colors">{t.contact.address}</h4>
                        <p className="text-muted-foreground leading-relaxed">{t.contact.addressValue}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-6 group/item hover:scale-105 transition-transform duration-300">
                      <div className="p-4 bg-gradient-to-br from-primary to-primary-foreground rounded-xl">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 group-hover/item:text-primary transition-colors">{t.contact.phone}</h4>
                        <p className="text-muted-foreground text-lg">{t.contact.phoneValue}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-6 group/item hover:scale-105 transition-transform duration-300">
                      <div className="p-4 bg-gradient-to-br from-primary to-primary-foreground rounded-xl">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 group-hover/item:text-primary transition-colors">{t.contact.email}</h4>
                        <p className="text-muted-foreground text-lg">{t.contact.emailValue}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-6 group/item hover:scale-105 transition-transform duration-300">
                      <div className="p-4 bg-gradient-to-br from-primary to-primary-foreground rounded-xl">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 group-hover/item:text-primary transition-colors">{t.contact.hours}</h4>
                        <p className="text-muted-foreground text-lg">{t.contact.hoursValue}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map */}
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <ContactMap address={t.contact.addressValue} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Contact;