import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { SerialSearch } from "@/components/ui/serial-search";

interface HeaderProps {
  language: 'en' | 'th';
  onLanguageChange: (lang: 'en' | 'th') => void;
}

const navigation = {
  en: [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Products',
    href: '/products'
  }, {
    name: 'Services',
    href: '/services'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'News',
    href: '/news'
  }, {
    name: 'Careers',
    href: '/careers'
  }, {
    name: 'Contact',
    href: '/contact'
  }],
  th: [{
    name: 'หน้าหลัก',
    href: '/'
  }, {
    name: 'ผลิตภัณฑ์',
    href: '/products'
  }, {
    name: 'บริการ',
    href: '/services'
  }, {
    name: 'เกี่ยวกับเรา',
    href: '/about'
  }, {
    name: 'ข่าวสาร',
    href: '/news'
  }, {
    name: 'สมัครงาน',
    href: '/careers'
  }, {
    name: 'ติดต่อเรา',
    href: '/contact'
  }]
};

export const Header = ({
  language,
  onLanguageChange
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nav = navigation[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 bg-slate-50">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e0326921-6f08-4e36-bf37-3adf3bd694a0.png" 
              alt="THAI FUJI ELEVATOR CO.,LTD." 
              className="h-11 w-auto md:h-14 object-contain bg-transparent" 
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {nav.map(item => (
              <NavLink 
                key={item.name} 
                to={item.href} 
                className={({ isActive }) => 
                  `px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Search & Language */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md justify-end">
            <div className="w-full max-w-xs">
              <SerialSearch 
                placeholder={language === 'th' ? 'ค้นหาหมายเลขซีเรียล...' : 'Search serial number...'} 
                language={language} 
              />
            </div>
            <LanguageSwitcher currentLang={language} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher currentLang={language} onLanguageChange={onLanguageChange} />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="glass-morphism"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-morphism rounded-lg mt-2">
              {nav.map(item => (
                <NavLink 
                  key={item.name} 
                  to={item.href} 
                  className={({ isActive }) => 
                    `block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`
                  } 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <SerialSearch 
                  placeholder={language === 'th' ? 'ค้นหาหมายเลขซีเรียล...' : 'Search serial number...'} 
                  language={language} 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};