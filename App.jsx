import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  Palette,
  Camera,
  Video,
  Megaphone,
  Globe,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Play,
  Eye,
  Heart
} from 'lucide-react'
import logo from './assets/logo.jpg'
// import logoDesign from './assets/logo-design.jpg'
// import branding from './assets/branding.png'
// import socialMedia from './assets/social-media.jpg'
// import photography from './assets/photography.jpg'
// import webDesign from './assets/web-design.jpg'
// import motionGraphics from './assets/motion-graphics.jpeg'
// import printing from './assets/printing.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const portfolioItems = [
    {
      image: logo, // استخدام الشعار كصورة مؤقتة
      title: "تصميم شعارات احترافية",
      category: "تصميم الشعارات",
      description: "مجموعة متنوعة من الشعارات الاحترافية لمختلف الصناعات"
    },
    {
      image: logo, // استخدام الشعار كصورة مؤقتة
      title: "هوية تجارية متكاملة",
      category: "الهوية التجارية",
      description: "تصميم هوية بصرية شاملة تشمل الشعار والألوان والخطوط"
    },
    {
      image: logo, // استخدام الشعار كصورة مؤقتة
      title: "إدارة السوشيال ميديا",
      category: "التسويق الرقمي",
      description: "حملات تسويقية ناجحة عبر منصات التواصل الاجتماعي"
    },
    {
      image: logo, // استخدام الشعار كصورة مؤقتة
      title: "التصوير الاحترافي",
      category: "التصوير",
      description: "جلسات تصوير احترافية للمنتجات والأشخاص والفعاليات"
    },
    {
      image: logo, // استخدام الشعار كصورة مؤقتة
      title: "تصميم المواقع الإلكترونية",
      category: "تطوير الويب",
      description: "مواقع إلكترونية حديثة ومتجاوبة مع جميع الأجهزة"
    },
    {
      image: logo, // استخدام الشعار كصورة مؤقتة
      title: "الموشن جرافيك",
      category: "الفيديو والرسوم المتحركة",
      description: "فيديوهات إعلانية وموشن جرافيك احترافي"
    }
  ]

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "تصميم الشعار الاحترافي",
      description: "تصميم شعارات احترافية تعكس هوية علامتك التجارية"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "تصميم الهوية التجارية",
      description: "هوية بصرية متكاملة وأساسية لعلامتك التجارية"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "تصميم الإعلانات",
      description: "تصميم بوستات إعلانية وتهاني المناسبات"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "الإعلانات الممولة",
      description: "إدارة وتنفيذ حملات إعلانية ممولة فعالة"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "الفيديو والموشن جرافيك",
      description: "إنتاج فيديوهات إعلانية وموشن جرافيك احترافي"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "إدارة السوشيال ميديا",
      description: "إدارة شاملة لصفحات وسائل التواصل الاجتماعي"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "التصوير الاحترافي",
      description: "تصوير شخصي، منتجات، أعراس، وريبورتاجات"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "تصميم المواقع والتطبيقات",
      description: "تطوير مواقع إلكترونية وتطبيقات جوال حديثة"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "الاستشارات التسويقية",
      description: "خطط تسويقية شاملة واستشارات متخصصة"
    }
  ]

  const stats = [
    { number: "500+", label: "عميل راضي" },
    { number: "1000+", label: "مشروع مكتمل" },
    { number: "5+", label: "سنوات خبرة" },
    { number: "24/7", label: "دعم فني" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="مسارك الإعلاني" className="h-12 w-12 rounded-lg object-cover" />
              <div className="text-right">
                <h1 className="text-xl font-bold text-slate-800">مسارك الإعلاني</h1>
                <p className="text-sm text-slate-600">Masarak Advertising</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">الرئيسية</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">خدماتنا</a>
              <a href="#portfolio" className="text-slate-700 hover:text-blue-600 transition-colors">أعمالنا</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">من نحن</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">تواصل معنا</a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                احصل على عرض سعر
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-slate-700">الرئيسية</a>
              <a href="#services" className="block px-3 py-2 text-slate-700">خدماتنا</a>
              <a href="#portfolio" className="block px-3 py-2 text-slate-700">أعمالنا</a>
              <a href="#about" className="block px-3 py-2 text-slate-700">من نحن</a>
              <a href="#contact" className="block px-3 py-2 text-slate-700">تواصل معنا</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                وكالة إعلانية متكاملة
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                نحول أفكارك إلى
                <span className="text-blue-600 block">واقع رقمي مبهر</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                نقدم حلولاً إبداعية شاملة في التصميم والتسويق الرقمي والتصوير والطباعة 
                لنساعدك في بناء حضور قوي ومميز لعلامتك التجارية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  ابدأ مشروعك الآن
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  تصفح أعمالنا
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              خدماتنا المتميزة
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              نقدم مجموعة شاملة من الخدمات الإبداعية
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              من التصميم إلى التسويق الرقمي، نوفر كل ما تحتاجه لنجاح علامتك التجارية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-900 mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              معرض أعمالنا
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              نماذج من إبداعاتنا المتميزة
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              استكشف مجموعة من أفضل أعمالنا التي نفذناها لعملائنا في مختلف المجالات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 text-white">
                        <Eye className="h-5 w-5" />
                        <span className="text-sm">مشاهدة التفاصيل</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    <Heart className="h-5 w-5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer" />
                  </div>
                  <CardTitle className="text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              مشاهدة جميع الأعمال
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                من نحن
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                شريكك الموثوق في النجاح الرقمي
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                مسارك الإعلاني هي وكالة إعلانية متكاملة تجمع بين الإبداع والتقنية لتقديم حلول 
                تسويقية مبتكرة. نؤمن بأن كل علامة تجارية لها قصة فريدة تستحق أن تُروى بطريقة مميزة.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700">فريق متخصص من المبدعين والمطورين</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700">خبرة واسعة في مختلف المجالات</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700">التزام بالجودة والمواعيد المحددة</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700">دعم فني مستمر ومتابعة دورية</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                <p className="text-blue-100 mb-6">
                  أن نكون الوكالة الإعلانية الرائدة في المنطقة، ونساهم في نجاح عملائنا 
                  من خلال تقديم حلول إبداعية ومبتكرة تواكب أحدث التطورات التقنية.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-blue-100 mr-2">تقييم عملائنا</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              تواصل معنا
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              هل أنت مستعد لبدء مشروعك؟
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك القادم
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full text-blue-600 w-fit">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">اتصل بنا</h3>
              <p className="text-slate-600 mb-4">تواصل معنا مباشرة عبر الهاتف</p>
              <Button variant="outline" className="w-full">
                +966 XX XXX XXXX
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full text-green-600 w-fit">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">راسلنا</h3>
              <p className="text-slate-600 mb-4">أرسل لنا رسالة إلكترونية</p>
              <Button variant="outline" className="w-full">
                info@masarak.com
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full text-purple-600 w-fit">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">زورنا</h3>
              <p className="text-slate-600 mb-4">مكتبنا في قلب المدينة</p>
              <Button variant="outline" className="w-full">
                الرياض، المملكة العربية السعودية
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="مسارك الإعلاني" className="h-12 w-12 rounded-lg object-cover" />
                <div className="text-right">
                  <h3 className="text-xl font-bold">مسارك الإعلاني</h3>
                  <p className="text-slate-400">Masarak Advertising</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                وكالة إعلانية متكاملة تقدم حلولاً إبداعية في التصميم والتسويق الرقمي 
                لمساعدة علامتك التجارية على التميز والنجاح.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">تصميم الشعارات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الهوية التجارية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">التسويق الرقمي</a></li>
                <li><a href="#" className="hover:text-white transition-colors">تصميم المواقع</a></li>
                <li><a href="#" className="hover:text-white transition-colors">التصوير الاحترافي</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">الرئيسية</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">خدماتنا</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">تواصل معنا</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 مسارك الإعلاني. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

