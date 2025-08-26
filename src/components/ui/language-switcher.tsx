import React from "react";
import { Button } from "@/components/ui/button";
import flagsImage from "@/assets/flags.png";

interface LanguageSwitcherProps {
  currentLang: 'en' | 'th';
  onLanguageChange: (lang: 'en' | 'th') => void;
}

export const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center space-x-2">
      {/* English Flag Button */}
      <Button 
        variant="ghost" 
        size="sm" 
        className={`glass-morphism p-2 ${currentLang === 'en' ? 'ring-2 ring-white' : ''}`}
        onClick={() => onLanguageChange('en')}
      >
        <div className="w-12 h-8 bg-cover bg-center rounded-sm" 
             style={{ 
               backgroundImage: `url(/lovable-uploads/e3767485-d2a7-4edf-a7a1-95496e574aab.png)`
             }}
        />
      </Button>
      
      {/* Thai Flag Button */}
      <Button 
        variant="ghost" 
        size="sm" 
        className={`glass-morphism p-2 ${currentLang === 'th' ? 'ring-2 ring-white' : ''}`}
        onClick={() => onLanguageChange('th')}
      >
        <div className="w-12 h-8 bg-cover bg-center rounded-sm" 
             style={{ 
               backgroundImage: `url(/lovable-uploads/fbefb1b5-50a9-43d5-a8ed-e863e74aa6cf.png)`
             }} 
        />
      </Button>
    </div>
  );
};