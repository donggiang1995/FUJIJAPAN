import React from "react";
import { SerialSearch } from "@/components/ui/serial-search";
import { Search, Database } from "lucide-react";

interface SerialSearchSectionProps {
  language: 'en' | 'th';
}

const content = {
  en: {
    title: "Product Serial Number Search",
    subtitle: "Enter your product's serial number to check installation information and status",
    placeholder: "Enter serial number..."
  },
  th: {
    title: "ค้นหาหมายเลขซีเรียลผลิตภัณฑ์",
    subtitle: "ป้อนหมายเลขซีเรียลของผลิตภัณฑ์เพื่อตรวจสอบข้อมูลการติดตั้งและสถานะ",
    placeholder: "ป้อนหมายเลขซีเรียล..."
  }
};

export const SerialSearchSection = ({ language }: SerialSearchSectionProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/3" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6 p-2 rounded-full bg-card/50 backdrop-blur-sm border shadow-sm">
              <div className="p-2 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
                <Search className="h-5 w-5" />
              </div>
              <div className="p-2 rounded-full bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground">
                <Database className="h-5 w-5" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
              {content[language].title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {content[language].subtitle}
            </p>
          </div>

          {/* Search Panel */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
            <div className="relative bg-card/95 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl p-8 md:p-12">
              <div className="max-w-2xl mx-auto">
                <SerialSearch 
                  placeholder={content[language].placeholder}
                  onSearch={(serialNumber) => {
                    console.log('Searching for:', serialNumber);
                  }}
                  language={language}
                />
              </div>
              
              {/* Modern Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                      <Search className="h-5 w-5" />
                    </div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {language === 'th' ? 'ค้นหาแบบเรียลไทม์' : 'Real-time Search'}
                  </div>
                </div>
                
                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-secondary/20 text-secondary">
                      <Database className="h-5 w-5" />
                    </div>
                    <div className="text-2xl font-bold text-secondary">100%</div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {language === 'th' ? 'ข้อมูลที่แม่นยำ' : 'Accurate Info'}
                  </div>
                </div>
                
                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/20 text-accent">
                      <Search className="h-5 w-5" />
                    </div>
                    <div className="text-2xl font-bold text-accent">
                      {language === 'th' ? 'ทันที' : 'Instant'}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {language === 'th' ? 'ผลลัพธ์' : 'Results'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};