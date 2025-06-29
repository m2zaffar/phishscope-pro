'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Shield, 
  Zap, 
  Users, 
  Target, 
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Building,
  Headphones,
  Rocket
} from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

export default function ContactPage() {
  const { locale } = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiry_type: ''
  });
  const [activeTab, setActiveTab] = useState('general');
  const [animatedElements, setAnimatedElements] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    // Simple scroll animation without complex observer
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with creative animation
    setTimeout(() => {
      setIsSubmitting(false);
      alert(locale === 'az' ? 'Mesajınız göndərildi! 🚀' : 'Message sent successfully! 🚀');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        inquiry_type: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@phishscope.pro',
      description: locale === 'az' ? 'Ümumi sorğular üçün' : 'For general inquiries',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      icon: Phone,
      title: locale === 'az' ? 'Telefon' : 'Phone',
      value: '+1 (555) 123-4567',
      description: locale === 'az' ? 'İş saatlarında' : 'During business hours',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-950'
    },
    {
      icon: MapPin,
      title: locale === 'az' ? 'Ünvan' : 'Address',
      value: 'Bakı, Azərbaycan',
      description: locale === 'az' ? 'Baş ofis' : 'Headquarters',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      icon: Clock,
      title: locale === 'az' ? 'İş saatları' : 'Business Hours',
      value: '9:00 - 18:00 AZT',
      description: locale === 'az' ? 'Bazar ertəsi - Cümə' : 'Monday - Friday',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950'
    }
  ];

  const inquiryTypes = [
    { 
      value: 'sales', 
      label: locale === 'az' ? 'Satış sorğusu' : 'Sales inquiry',
      icon: Building,
      description: locale === 'az' ? 'Qiymətlər və planlar' : 'Pricing and plans'
    },
    { 
      value: 'support', 
      label: locale === 'az' ? 'Texniki dəstək' : 'Technical support',
      icon: Headphones,
      description: locale === 'az' ? 'Texniki problemlər' : 'Technical issues'
    },
    { 
      value: 'partnership', 
      label: locale === 'az' ? 'Tərəfdaşlıq' : 'Partnership',
      icon: Users,
      description: locale === 'az' ? 'İş tərəfdaşlığı' : 'Business partnership'
    },
    { 
      value: 'demo', 
      label: locale === 'az' ? 'Demo tələbi' : 'Demo request',
      icon: Rocket,
      description: locale === 'az' ? 'Canlı demo' : 'Live demo'
    },
    { 
      value: 'other', 
      label: locale === 'az' ? 'Digər' : 'Other',
      icon: MessageCircle,
      description: locale === 'az' ? 'Digər suallar' : 'Other questions'
    }
  ];

  const stats = [
    { number: '24h', label: locale === 'az' ? 'Cavab müddəti' : 'Response Time' },
    { number: '99%', label: locale === 'az' ? 'Məmnuniyyət' : 'Satisfaction' },
    { number: '500+', label: locale === 'az' ? 'Müştəri' : 'Customers' },
    { number: '24/7', label: locale === 'az' ? 'Dəstək' : 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section with Floating Elements */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-25 animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center space-y-6" data-animate id="hero">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="h-8 w-8 text-blue-500 animate-pulse" />
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                {locale === 'az' ? 'Əlaqə' : 'Contact'}
              </Badge>
              <Sparkles className="h-8 w-8 text-purple-500 animate-pulse" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              {locale === 'az' ? 'Bizimlə Əlaqə' : 'Get in Touch'}
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {locale === 'az' 
                ? 'Suallarınız var? Komandamız sizə kömək etməyə hazırdır. 🚀'
                : 'Have questions? Our team is ready to help you. 🚀'
              }
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 space-y-16">
        {/* Interactive Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-animate id="contact-methods">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">
                {locale === 'az' ? 'Mesaj Göndərin' : 'Send us a Message'}
              </CardTitle>
              <p className="text-muted-foreground">
                {locale === 'az' 
                  ? 'Mesajınızı yazın və tezliklə cavab alacaqsınız'
                  : 'Write your message and get a response quickly'
                }
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      {locale === 'az' ? 'Ad Soyad' : 'Full Name'} *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={locale === 'az' ? 'Adınızı daxil edin' : 'Enter your name'}
                      className="border-2 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      {locale === 'az' ? 'Email Ünvanı' : 'Email Address'} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={locale === 'az' ? 'Email ünvanınızı daxil edin' : 'Enter your email'}
                      className="border-2 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      {locale === 'az' ? 'Şirkət' : 'Company'}
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={locale === 'az' ? 'Şirkət adı' : 'Company name'}
                      className="border-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry_type" className="text-sm font-medium">
                      {locale === 'az' ? 'Sorğu Növü' : 'Inquiry Type'}
                    </Label>
                    <Select value={formData.inquiry_type} onValueChange={(value) => setFormData({ ...formData, inquiry_type: value })}>
                      <SelectTrigger className="border-2 focus:border-blue-500 transition-colors">
                        <SelectValue placeholder={locale === 'az' ? 'Seçin' : 'Select'} />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value} className="flex items-center space-x-2">
                            <type.icon className="h-4 w-4 mr-2" />
                            <div>
                              <div>{type.label}</div>
                              <div className="text-xs text-muted-foreground">{type.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    {locale === 'az' ? 'Mövzu' : 'Subject'} *
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={locale === 'az' ? 'Mesajınızın mövzusu' : 'Subject of your message'}
                    className="border-2 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    {locale === 'az' ? 'Mesaj' : 'Message'} *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={locale === 'az' ? 'Mesajınızı yazın...' : 'Write your message...'}
                    rows={6}
                    className="border-2 focus:border-blue-500 transition-colors resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border-0" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{locale === 'az' ? 'Göndərilir...' : 'Sending...'}</span>
                    </div>
                  ) : (
                    <>
                      <Send className="mr-3 h-6 w-6" />
                      {locale === 'az' ? 'Mesaj Göndər' : 'Send Message'}
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className={`${info.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group`}
                  onClick={() => {
                    if (info.title === 'Email') {
                      window.location.href = `mailto:${info.value}`;
                    } else if (info.title === 'Phone' || info.title === 'Telefon') {
                      window.location.href = `tel:${info.value}`;
                    }
                  }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                        <p className="font-medium text-blue-600">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  <span>{locale === 'az' ? 'Sürətli Əlaqə' : 'Quick Contact'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors cursor-pointer">
                    <div>
                      <h4 className="font-semibold text-sm">{locale === 'az' ? 'Satış' : 'Sales'}</h4>
                      <p className="text-xs text-muted-foreground">{locale === 'az' ? 'Qiymətlər və planlar' : 'Pricing and plans'}</p>
                    </div>
                    <a href="mailto:sales@phishscope.pro" className="text-blue-600 hover:text-blue-800">
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors cursor-pointer">
                    <div>
                      <h4 className="font-semibold text-sm">{locale === 'az' ? 'Dəstək' : 'Support'}</h4>
                      <p className="text-xs text-muted-foreground">{locale === 'az' ? 'Texniki problemlər' : 'Technical issues'}</p>
                    </div>
                    <a href="mailto:support@phishscope.pro" className="text-blue-600 hover:text-blue-800">
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors cursor-pointer">
                    <div>
                      <h4 className="font-semibold text-sm">{locale === 'az' ? 'Demo' : 'Demo'}</h4>
                      <p className="text-xs text-muted-foreground">{locale === 'az' ? 'Canlı demo tələbi' : 'Live demo request'}</p>
                    </div>
                    <a href="/demo" className="text-blue-600 hover:text-blue-800">
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interactive FAQ Section */}
        <div data-animate id="faq">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-blue-500 mr-2" />
                <CardTitle className="text-2xl font-bold">
                  {locale === 'az' ? 'Tez-tez Verilən Suallar' : 'Frequently Asked Questions'}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {locale === 'az' ? 'Cavab vermə müddəti nə qədərdir?' : 'What is your response time?'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {locale === 'az' 
                        ? 'Ümumi sorğulara 24 saat ərzində, satış sorğularına 4 saat ərzində cavab veririk.'
                        : 'We respond to general inquiries within 24 hours and sales inquiries within 4 hours.'
                      }
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Rocket className="h-4 w-4 text-blue-500 mr-2" />
                      {locale === 'az' ? 'Demo tələb edə bilərəmmi?' : 'Can I request a demo?'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {locale === 'az' 
                        ? 'Bəli, satış komandamızla əlaqə saxlayaraq canlı demo tələb edə bilərsiniz.'
                        : 'Yes, you can request a live demo by contacting our sales team.'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Headphones className="h-4 w-4 text-purple-500 mr-2" />
                      {locale === 'az' ? 'Telefon dəstəyi varmı?' : 'Do you offer phone support?'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {locale === 'az' 
                        ? 'Team və Enterprise planları üçün telefon dəstəyi təklif edirik.'
                        : 'We offer phone support for Team and Enterprise plans.'
                      }
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:shadow-lg transition-all duration-300">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Building className="h-4 w-4 text-orange-500 mr-2" />
                      {locale === 'az' ? 'Yerində quraşdırma mümkündürmü?' : 'Is on-premise deployment available?'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {locale === 'az' 
                        ? 'Enterprise müştərilər üçün yerində quraşdırma seçimi mövcuddur.'
                        : 'On-premise deployment is available for Enterprise customers.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-animate id="cta">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl">
            <CardContent className="pt-12 pb-12">
              <div className="max-w-3xl mx-auto space-y-6">
                <Shield className="h-16 w-16 mx-auto text-white/80" />
                <h2 className="text-3xl lg:text-4xl font-bold">
                  {locale === 'az' 
                    ? 'Email Təhlükəsizliyinizi Təkmilləşdirin'
                    : 'Enhance Your Email Security'
                  }
                </h2>
                <p className="text-xl text-blue-100">
                  {locale === 'az'
                    ? 'PhishScope Pro ilə komandanızı qoruyun və təhlükəli emailləri aşkarlayın.'
                    : 'Protect your team and detect malicious emails with PhishScope Pro.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <a href="/demo">
                      <Rocket className="mr-3 h-6 w-6" />
                      {locale === 'az' ? 'Demo İzlə' : 'Watch Demo'}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-3 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <a href="/pricing">
                      <Target className="mr-3 h-6 w-6" />
                      {locale === 'az' ? 'Qiymətlər' : 'View Pricing'}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        [data-animate] {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
        }
        [data-animate].animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}