import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/hooks/use-language';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import SerialNumberManager from '@/components/admin/serial-number-manager';
import ProductImageUpload from '@/components/admin/product-image-upload';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

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
import { 
  LayoutDashboard, 
  Package, 
  MessageSquare, 
  FolderOpen, 
  Trash2, 
  Eye, 
  EyeOff,
  Mail,
  Building,
  Calendar,
  User,
  LogOut,
  Shield,
  Hash,
  Plus,
  Settings,
  Copy,
  Upload
} from 'lucide-react';

// Static product data
const staticProducts = [
  // Control Cabinet Products
  {
    id: "fet-control-cabinet",
    name_th: "FET CONTROL CABINET",
    name_en: "FET CONTROL CABINET",
    image_url: fetControlImage,
    category: { name_th: "ตู้ควบคุม", name_en: "Control Cabinets" },
    is_active: true,
    description_th: "โซลูชันแบบรวมสำหรับลิฟต์ความเร็วสูงสุด 4m/s",
    description_en: "Integrated solution for elevator up to 4m/sec"
  },
  {
    id: "fen-control-cabinet", 
    name_th: "FEN CONTROL CABINET",
    name_en: "FEN CONTROL CABINET",
    image_url: fenControlImage,
    category: { name_th: "ตู้ควบคุม", name_en: "Control Cabinets" },
    is_active: true,
    description_th: "ตู้ควบคุมขั้นสูงสำหรับลิฟต์ที่มีคุณสมบัติครบครันและระบบการสื่อสารที่ทันสมัย",
    description_en: "Advanced control cabinet for elevators with comprehensive features and modern communication systems"
  },
  {
    id: "fes-control-cabinet",
    name_th: "FES Control Cabinet", 
    name_en: "FES Control Cabinet",
    image_url: fesControlImage,
    category: { name_th: "ตู้ควบคุม", name_en: "Control Cabinets" },
    is_active: true,
    description_th: "ตู้ควบคุมที่ออกแบบตาม EN81-20 และเป็นไปตามมาตรฐาน CE",
    description_en: "Control cabinet designed based on EN81-20 and comply with CE standards"
  },
  // Traction Machine Products
  {
    id: "fjd1-b450-series",
    name_th: "FJD1-B450 SERIES",
    name_en: "FJD1-B450 SERIES", 
    image_url: fjd1B450Image,
    category: { name_th: "เครื่องลาก", name_en: "Traction Machines" },
    is_active: true,
    description_th: "เครื่องลากประสิทธิภาพสูงสำหรับลิฟต์ขนาดกลาง",
    description_en: "High-efficiency traction machine for medium-sized elevators"
  },
  {
    id: "fjd1-b1000-series",
    name_th: "FJD1-B1000 SERIES",
    name_en: "FJD1-B1000 SERIES",
    image_url: fjd1B1000Image,
    category: { name_th: "เครื่องลาก", name_en: "Traction Machines" },
    is_active: true,
    description_th: "เครื่องลากขนาดใหญ่สำหรับลิฟต์บรรทุกหนัก",
    description_en: "Large traction machine for heavy-duty elevators"
  },
  {
    id: "fjd1-b1600-series", 
    name_th: "FJD1-B1600 SERIES",
    name_en: "FJD1-B1600 SERIES",
    image_url: fjd1B1600Image,
    category: { name_th: "เครื่องลาก", name_en: "Traction Machines" },
    is_active: true,
    description_th: "เครื่องลากสำหรับลิฟต์บรรทุกหนักพิเศษ",
    description_en: "Traction machine for extra heavy-duty elevators"
  },
  {
    id: "fjd1-b2500-series",
    name_th: "FJD1-B2500 SERIES", 
    name_en: "FJD1-B2500 SERIES",
    image_url: fjd1B2500Image,
    category: { name_th: "เครื่องลาก", name_en: "Traction Machines" },
    is_active: true,
    description_th: "เครื่องลากสำหรับลิฟต์บรรทุกหนักสูงสุด",
    description_en: "Traction machine for maximum heavy-duty elevators"
  },
  {
    id: "fjd2-b450-series",
    name_th: "FJD2-B450 (φ240) Series",
    name_en: "FJD2-B450 (φ240) Series",
    image_url: fjd2B450Image,
    category: { name_th: "เครื่องลาก", name_en: "Traction Machines" },
    is_active: true,
    description_th: "เครื่องลากรุ่นใหม่ขนาด φ240 มม.",
    description_en: "New generation traction machine φ240 mm"
  },
  {
    id: "fjd2-b800-series",
    name_th: "FJD2-B800 (φ240) Series",
    name_en: "FJD2-B800 (φ240) Series", 
    image_url: fjd2B800Image,
    category: { name_th: "เครื่องลาก", name_en: "Traction Machines" },
    is_active: true,
    description_th: "เครื่องลากประสิทธิภาพสูงขนาด φ240 มม.",
    description_en: "High-performance traction machine φ240 mm"
  },
  {
    id: "fjd2-b630-series",
    name_th: "FJD2-B630 (φ320) Series",
    name_en: "FJD2-B630 (φ320) Series",
    image_url: fjd2B630Image,
    category: { name_th: "เครื่องลาก", name_en: "Traction Machines" },
    is_active: true,
    description_th: "เครื่องลากขนาดใหญ่ φ320 มม. สำหรับงานหนัก",
    description_en: "Large traction machine φ320 mm for heavy-duty applications"
  }
];

const Admin = () => {
  const { language, setLanguage } = useLanguage();
  const { user, profile, loading: authLoading, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [products, setProducts] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Redirect to auth page if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  // Show access denied if not admin
  useEffect(() => {
    if (!authLoading && user && profile && !isAdmin) {
      toast({
        title: 'Truy cập bị từ chối',
        description: 'Bạn không có quyền truy cập trang này',
        variant: 'destructive'
      });
      navigate('/');
    }
  }, [profile, isAdmin, authLoading, user, navigate, toast]);

  const content = {
    en: {
      title: "Admin Panel",
      subtitle: "Manage website content and data",
      welcome: "Welcome",
      logout: "로그아웃",
      tabs: {
        products: "제품 관리",
        inquiries: "문의 관리",
        categories: "카테고리 관리",
        serials: "시리얼 번호 관리"
      },
      products: {
        title: "제품 목록",
        add: "제품 추가",
        name: "제품명",
        id: "제품 ID",
        category: "카테고리",
        status: "상태",
        actions: "작업",
        active: "활성",
        inactive: "비활성",
        copyId: "ID 복사",
        uploadImage: "이미지 업로드"
      },
      inquiries: {
        title: "고객 문의",
        name: "이름",
        email: "이메일",
        company: "회사",
        message: "메시지",
        date: "날짜",
        actions: "작업"
      },
      categories: {
        title: "카테고리 목록",
        add: "카테고리 추가",
        name: "이름",
        description: "설명",
        icon: "아이콘",
        status: "상태"
      },
      actions: {
        view: "보기",
        edit: "편집",
        delete: "삭제"
      }
    },
    th: {
      title: "แผงควบคุมผู้ดูแลระบบ",
      subtitle: "จัดการเนื้อหาเว็บไซต์และข้อมูล",
      welcome: "ยินดีต้อนรับ",
      logout: "ออกจากระบบ",
      tabs: {
        products: "Product Management",
        inquiries: "Inquiry Management", 
        categories: "Category Management",
        serials: "Serial Number Management"
      },
      products: {
        title: "Product List",
        add: "Add Product",
        name: "Product Name",
        id: "Product ID",
        category: "Category",
        status: "Status",
        actions: "Actions",
        active: "Active",
        inactive: "Inactive",
        copyId: "Copy ID",
        uploadImage: "Upload Image"
      },
      inquiries: {
        title: "Customer Inquiries",
        name: "Name",
        email: "Email", 
        company: "Company",
        message: "Message",
        date: "Date",
        actions: "Actions"
      },
      categories: {
        title: "Category List",
        add: "Add Category",
        name: "Name",
        description: "Description",
        icon: "Icon",
        status: "Status"
      },
      actions: {
        view: "View",
        edit: "Edit",
        delete: "Delete"
      }
    }
  };

  const t = content[language] || content.en;

  const fetchData = async () => {
    setLoading(true);
    try {
      // Use static products data instead of database
      setProducts(staticProducts);

      // Fetch inquiries (still from database)
      const { data: inquiriesData, error: inquiriesError } = await supabase
        .from('contact_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (inquiriesError) throw inquiriesError;
      setInquiries(inquiriesData || []);

      // Set static categories
      const staticCategories = [
        {
          id: "control-cabinets",
          name_th: "ตู้ควบคุม",
          name_en: "Control Cabinets",
          description_th: "ตู้ควบคุมลิฟต์ที่ทันสมัย",
          description_en: "Modern elevator control cabinets",
          icon: "Settings",
          is_active: true
        },
        {
          id: "traction-machines",
          name_th: "เครื่องลาก",
          name_en: "Traction Machines",
          description_th: "เครื่องลากลิฟต์ประสิทธิภาพสูง",
          description_en: "High-performance elevator traction machines",
          icon: "Cpu",
          is_active: true
        }
      ];
      setCategories(staticCategories);

    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch admin data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setInquiries(prev => prev.filter(inquiry => inquiry.id !== id));
      toast({
        title: "Success",
        description: "Inquiry deleted successfully"
      });
    } catch (error) {
      console.error('Error deleting inquiry:', error);
      toast({
        title: "Error", 
        description: "Failed to delete inquiry",
        variant: "destructive"
      });
    }
  };

  const toggleProductStatus = (id: string, currentStatus: boolean) => {
    // Update local state for static products
    setProducts(prev => prev.map(product => 
      product.id === id 
        ? { ...product, is_active: !currentStatus }
        : product
    ));

    toast({
      title: "Success",
      description: "Product status updated successfully"
    });
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Success",
        description: "ID copied to clipboard"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy ID",
        variant: "destructive"
      });
    }
  };

  const handleImageUpdate = (productId: string, newImageUrl: string) => {
    setProducts(prev => prev.map(product => 
      product.id === productId 
        ? { ...product, image_url: newImageUrl }
        : product
    ));
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  useEffect(() => {
    if (user && isAdmin) {
      fetchData();
    }
  }, [user, isAdmin]);

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-12 w-12 mx-auto mb-4 text-primary animate-pulse" />
          <p className="text-lg">Đang kiểm tra quyền truy cập...</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated or not admin
  if (!user || !isAdmin) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header language={language} onLanguageChange={setLanguage} />
        <main className="pt-16 md:pt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">Loading...</div>
          </div>
        </main>
        <Footer language={language} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-primary via-primary-dark to-steel-dark">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-white">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h1>
                <p className="text-lg md:text-xl text-white/90">{t.subtitle}</p>
                <div className="flex items-center gap-2 mt-4">
                  <User className="h-5 w-5" />
                  <span>{t.welcome}, {profile?.full_name || user?.email}</span>
                  <Badge variant="secondary" className="ml-2">
                    <Shield className="h-3 w-3 mr-1" />
                    Admin
                  </Badge>
                </div>
              </div>
              <Button variant="outline" onClick={handleSignOut} className="text-white border-white hover:bg-white hover:text-primary">
                <LogOut className="h-4 w-4 mr-2" />
                {t.logout}
              </Button>
            </div>
          </div>
        </section>

        {/* Admin Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="products" className="text-sm md:text-base py-3">
                  <Package className="h-4 w-4 mr-2" />
                  {t.tabs.products}
                </TabsTrigger>
                <TabsTrigger value="inquiries" className="text-sm md:text-base py-3">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {t.tabs.inquiries}
                </TabsTrigger>
                <TabsTrigger value="categories" className="text-sm md:text-base py-3">
                  <Settings className="h-4 w-4 mr-2" />
                  {t.tabs.categories}
                </TabsTrigger>
                <TabsTrigger value="serials" className="text-sm md:text-base py-3">
                  <Hash className="h-4 w-4 mr-2" />
                  {t.tabs.serials}
                </TabsTrigger>
              </TabsList>

              {/* Products Tab */}
              <TabsContent value="products">
                <Card className="industrial-card">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-2xl">{t.products.title}</CardTitle>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      {t.products.add}
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>{t.products.name}</TableHead>
                            <TableHead>{t.products.id}</TableHead>
                            <TableHead>{t.products.category}</TableHead>
                            <TableHead>{t.products.status}</TableHead>
                            <TableHead>{t.products.actions}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {products.map((product) => (
                            <TableRow key={product.id}>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  {product.image_url ? (
                                    <img 
                                      src={product.image_url} 
                                      alt={language === 'th' ? product.name_th : product.name_en}
                                      className="w-12 h-12 object-cover rounded border"
                                    />
                                  ) : (
                                    <div className="w-12 h-12 bg-muted rounded border flex items-center justify-center">
                                      <Package className="h-6 w-6 text-muted-foreground" />
                                    </div>
                                  )}
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button size="sm" variant="outline">
                                        <Upload className="h-4 w-4 mr-1" />
                                        {t.products.uploadImage}
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-md">
                                      <DialogHeader>
                                        <DialogTitle>{t.products.uploadImage}</DialogTitle>
                                      </DialogHeader>
                                      <ProductImageUpload
                                        productId={product.id}
                                        currentImageUrl={product.image_url}
                                        onImageUpdate={(newUrl) => handleImageUpdate(product.id, newUrl)}
                                       language={'en' as 'en' | 'ko'}
                                      />
                                    </DialogContent>
                                  </Dialog>
                                </div>
                              </TableCell>
                              <TableCell>
                                {language === 'th' ? product.name_th : product.name_en}
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                                    {product.id}
                                  </code>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => copyToClipboard(product.id)}
                                    className="h-6 w-6 p-0"
                                    title={t.products.copyId}
                                  >
                                    <Copy className="h-3 w-3" />
                                  </Button>
                                </div>
                              </TableCell>
                              <TableCell>
                                {product.category ? 
                                  (language === 'th' ? product.category.name_th : product.category.name_en)
                                  : 'N/A'
                                }
                              </TableCell>
                              <TableCell>
                                <Badge variant={product.is_active ? "default" : "secondary"}>
                                  {product.is_active ? t.products.active : t.products.inactive}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => toggleProductStatus(product.id, product.is_active)}
                                  >
                                    {product.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Inquiries Tab */}
              <TabsContent value="inquiries">
                <Card className="industrial-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">{t.inquiries.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {inquiries.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">
                          Chưa có văn bản liên hệ nào
                        </div>
                      ) : (
                        inquiries.map((inquiry) => (
                          <Card key={inquiry.id} className="border">
                            <CardContent className="p-4">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span className="font-medium">{inquiry.name}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    <span>{inquiry.email}</span>
                                  </div>
                                  {inquiry.company && (
                                    <div className="flex items-center gap-2">
                                      <Building className="h-4 w-4" />
                                      <span>{inquiry.company}</span>
                                    </div>
                                  )}
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date(inquiry.created_at).toLocaleDateString()}</span>
                                  </div>
                                </div>
                                <div>
                                  <div className="mb-2">
                                    <strong>{t.inquiries.message}:</strong>
                                  </div>
                                  <p className="text-muted-foreground mb-4 p-3 bg-muted rounded">
                                    {inquiry.message}
                                  </p>
                                  <div className="flex justify-end">
                                    <AlertDialog>
                                      <AlertDialogTrigger asChild>
                                        <Button size="sm" variant="destructive">
                                          <Trash2 className="h-4 w-4 mr-1" />
                                          {t.actions.delete}
                                        </Button>
                                      </AlertDialogTrigger>
                                      <AlertDialogContent>
                                        <AlertDialogHeader>
                                          <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
                                          <AlertDialogDescription>
                                            Bạn có chắc chắn muốn xóa văn bản liên hệ này? Hành động này không thể hoàn tác.
                                          </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                          <AlertDialogCancel>Hủy</AlertDialogCancel>
                                          <AlertDialogAction onClick={() => handleDeleteInquiry(inquiry.id)}>
                                            Xóa
                                          </AlertDialogAction>
                                        </AlertDialogFooter>
                                      </AlertDialogContent>
                                    </AlertDialog>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Categories Tab */}
              <TabsContent value="categories">
                <Card className="industrial-card">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-2xl">{t.categories.title}</CardTitle>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      {t.categories.add}
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>{t.categories.name}</TableHead>
                            <TableHead>{t.categories.description}</TableHead>
                            <TableHead>{t.categories.icon}</TableHead>
                            <TableHead>{t.categories.status}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {categories.map((category) => (
                            <TableRow key={category.id}>
                              <TableCell>
                                {language === 'th' ? category.name_th : category.name_en}
                              </TableCell>
                              <TableCell>
                                {language === 'th' ? category.description_th : category.description_en}
                              </TableCell>
                              <TableCell>{category.icon}</TableCell>
                              <TableCell>
                                <Badge variant={category.is_active ? "default" : "secondary"}>
                                  {category.is_active ? t.products.active : t.products.inactive}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Serial Numbers Tab */}
              <TabsContent value="serials">
                <Card className="industrial-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">Quản lý số serial</CardTitle>
                    <CardDescription>Thêm, chỉnh sửa và quản lý các số serial sản phẩm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SerialNumberManager />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Admin;