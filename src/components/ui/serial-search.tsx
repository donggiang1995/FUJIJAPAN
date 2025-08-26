import React, { useState } from "react";
import { Search, MapPin, Calendar, Loader2, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useSerialNumbers, type SerialSearchResult } from "@/hooks/use-serial-numbers";
import { useAuth } from "@/hooks/use-auth";
import { useNavigate } from "react-router-dom";

interface SerialSearchProps {
  placeholder?: string;
  onSearch?: (serialNumber: string) => void;
  language?: 'en' | 'th';
}

export const SerialSearch = ({ placeholder, onSearch, language = 'en' }: SerialSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState<SerialSearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { searchSerialNumber } = useSerialNumbers();
  const { user } = useAuth();
  const navigate = useNavigate();

  const content = {
    en: {
      searchResult: "Search Result",
      searching: "Searching...",
      notFound: "No results found",
      serialNumber: "Serial Number",
      status: "Status",
      location: "Location",
      installationDate: "Installation Date",
      productName: "Product Name",
      description: "Description",
      category: "Category",
      model: "Model",
      specifications: "Specifications",
      features: "Features",
      active: "Origin",
      maintenance: "Under Maintenance",
      retired: "Retired",
      errorMessage: "An error occurred during search",
      loginRequired: "Login Required",
      loginMessage: "Please log in to search for serial numbers",
      loginButton: "Go to Login"
    },
    th: {
      searchResult: "ผลการค้นหา",
      searching: "กำลังค้นหา...",
      notFound: "ไม่พบผลลัพธ์",
      serialNumber: "หมายเลขซีเรียล",
      status: "สถานะ",
      location: "ที่ตั้ง",
      installationDate: "วันที่ติดตั้ง",
      productName: "ชื่อผลิตภัณฑ์",
      description: "รายละเอียด",
      category: "หมวดหมู่",
      model: "รุ่น",
      specifications: "ข้อมูลจำเพาะ",
      features: "คุณสมบัติ",
      active: "Origin",
      maintenance: "อยู่ระหว่างบำรุงรักษา",
      retired: "หยุดใช้งาน",
      errorMessage: "เกิดข้อผิดพลาดในการค้นหา",
      loginRequired: "ต้องเข้าสู่ระบบ",
      loginMessage: "กรุณาเข้าสู่ระบบเพื่อค้นหาหมายเลขซีเรียล",
      loginButton: "ไปที่หน้าเข้าสู่ระบบ"
    }
  };

  // Ensure we have a valid language and content
  const validLanguage = language === 'th' ? 'th' : 'en';
  const t = content[validLanguage];

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const searchResult = await searchSerialNumber(searchTerm);
      setResult(searchResult);
      setIsOpen(true);
    } catch (err) {
      setError(t.errorMessage);
    } finally {
      setLoading(false);
    }
    
    onSearch?.(searchTerm);
  };

  const getStatusBadge = (status: 'active' | 'maintenance' | 'retired') => {
    const statusConfig = {
      active: {
        className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        text: t.active,
        indicator: "🟢"
      },
      maintenance: {
        className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
        text: t.maintenance,
        indicator: "🟡"
      },
      retired: {
        className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
        text: t.retired,
        indicator: "🔴"
      }
    };
    
    const config = statusConfig[status];
    return (
      <Badge className={config.className}>
        {config.indicator} {config.text}
      </Badge>
    );
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={placeholder || "Enter serial number..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-10 glass-morphism"
          />
        </div>
        <Button 
          onClick={handleSearch} 
          disabled={loading}
          className="bg-primary hover:bg-primary/90"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t.searching}
            </>
          ) : (
            <>
              <Search className="w-4 h-4 mr-2" />
              "Search"
            </>
          )}
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t.searchResult}</DialogTitle>
            <DialogDescription>
              {searchTerm && `${t.serialNumber}: ${searchTerm}`}
            </DialogDescription>
          </DialogHeader>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              <span>{t.searching}</span>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <div className="text-red-500 text-2xl mb-2">❌</div>
              <p className="text-destructive font-medium">{error}</p>
            </div>
          ) : result ? (
            <div className="space-y-6">
              {/* Serial Number Information */}
              <Card className="industrial-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {t.serialNumber}
                      </h3>
                      <p className="font-mono text-xl mt-1">{result.serialNumber.serial_number}</p>
                    </div>
                    {getStatusBadge(result.serialNumber.status)}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    {result.serialNumber.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{t.location}:</span>
                        <span>{result.serialNumber.location}</span>
                      </div>
                    )}
                    {result.serialNumber.installation_date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{t.installationDate}:</span>
                        <span>{new Date(result.serialNumber.installation_date).getFullYear()}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Device & Product Information */}
              {result.product && (
                <Card className="industrial-card">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      
                      {/* Device Image */}
                      <div className="lg:col-span-1">
                        {result.product.image_url ? (
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <img 
                              src={result.product.image_url} 
                              alt={validLanguage === 'th' ? result.product.name_th : result.product.name_en}
                              className="relative w-full h-64 object-cover rounded-xl border border-border/50 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-64 bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl border border-border/50 flex items-center justify-center">
                            <div className="text-center text-muted-foreground">
                              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                                <span className="text-2xl">📷</span>
                              </div>
                              <p className="text-sm">{validLanguage === 'th' ? 'ไม่มีรูปภาพ' : 'No Image'}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Device Information */}
                      <div className="lg:col-span-2 space-y-6">
                        
                        {/* Header */}
                        <div className="border-b border-border/50 pb-4">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                              {validLanguage === 'th' ? result.product.name_th : result.product.name_en}
                            </h3>
                            {result.product.category && (
                              <Badge variant="secondary" className="text-xs">
                                {validLanguage === 'th' ? result.product.category.name_th : result.product.category.name_en}
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {validLanguage === 'th' ? result.product.description_th : result.product.description_en}
                          </p>
                        </div>

                        {/* Device Specifications */}
                        {result.product.specifications && Object.keys(result.product.specifications).length > 0 && (
                          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-4 border border-border/30">
                            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              {t.specifications}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {Object.entries(result.product.specifications).map(([key, value]) => (
                                <div key={key} className="flex items-center justify-between p-2 rounded-lg bg-background/50 border border-border/30">
                                  <span className="text-sm font-medium text-muted-foreground">{key}</span>
                                  <span className="text-sm font-semibold">{String(value)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Device Features */}
                        {((validLanguage === 'th' && result.product.features_th?.length) || 
                          (validLanguage === 'en' && result.product.features_en?.length)) && (
                          <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-xl p-4 border border-border/30">
                            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 bg-secondary rounded-full"></span>
                              {t.features}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {(validLanguage === 'th' ? result.product.features_th : result.product.features_en)?.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-background/30">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Additional Device Info */}
                        <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl p-4 border border-border/30">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            {validLanguage === 'th' ? 'ข้อมูลอุปกรณ์' : 'Device Information'}
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center justify-between p-2 rounded-lg bg-background/50 border border-border/30">
                              <span className="text-muted-foreground font-medium">
                                {validLanguage === 'th' ? 'รหัสผลิตภัณฑ์' : 'Product ID'}
                              </span>
                              <span className="font-mono font-semibold">{result.product.id}</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg bg-background/50 border border-border/30">
                              <span className="text-muted-foreground font-medium">
                                {validLanguage === 'th' ? 'ประเภทผลิตภัณฑ์' : 'Product Type'}
                              </span>
                              <span className="font-semibold">
                                {result.product.category 
                                  ? (validLanguage === 'th' ? result.product.category.name_th : result.product.category.name_en)
                                  : (validLanguage === 'th' ? 'ไม่ระบุ' : 'Not specified')
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-400 text-2xl mb-2">❌</div>
              <p className="text-muted-foreground font-medium">
                {t.notFound} "{searchTerm}"
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Please check the serial number and try again.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};