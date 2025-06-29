'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, FileText, AlertTriangle, CheckCircle, Users, Globe, Mail, Phone } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';

export default function TermsPage() {
  const { locale } = useLocale();

  const sections = [
    {
      title: locale === 'az' ? 'Xidmət Təsviri' : 'Service Description',
      content: locale === 'az' ? [
        'AI əsaslı email təhlükə analizi',
        'Real-time phishing aşkarlama',
        'OSINT inteqrasiyası',
        'Komanda əməkdaşlığı alətləri',
        'Detallı hesabatlar və analitika'
      ] : [
        'AI-powered email threat analysis',
        'Real-time phishing detection',
        'OSINT integration',
        'Team collaboration tools',
        'Detailed reports and analytics'
      ]
    },
    {
      title: locale === 'az' ? 'İstifadə Şərtləri' : 'Usage Terms',
      content: locale === 'az' ? [
        'Xidməti yalnız qanuni məqsədlər üçün istifadə edin',
        'Başqalarının hüquqlarını pozmayın',
        'Xidmətin təhlükəsizliyini pozmayın',
        'Məlumatları qanunsuz şəkildə paylaşmayın',
        'Xidmət şərtlərini pozmayın'
      ] : [
        'Use the service only for lawful purposes',
        'Do not violate others\' rights',
        'Do not compromise service security',
        'Do not share data unlawfully',
        'Do not violate service terms'
      ]
    },
    {
      title: locale === 'az' ? 'Ödəniş Şərtləri' : 'Payment Terms',
      content: locale === 'az' ? [
        'Aylıq və ya illik abunəlik',
        'Avtomatik yeniləmə',
        '30 günlük pul qaytarma zəmanəti',
        'Qiymət dəyişiklikləri əvvəlcədən bildirilir',
        'Vergi və rüsumlar daxildir'
      ] : [
        'Monthly or annual subscriptions',
        'Automatic renewal',
        '30-day money-back guarantee',
        'Price changes notified in advance',
        'Taxes and fees included'
      ]
    },
    {
      title: locale === 'az' ? 'Məsuliyyət Məhdudiyyətləri' : 'Liability Limitations',
      content: locale === 'az' ? [
        'Xidmət "olduğu kimi" təqdim edilir',
        'Dolayı zərərlər üçün məsuliyyət yoxdur',
        'Maksimum məsuliyyət ödəniş məbləği qədərdir',
        'Təcili hallar istisna olmaqla',
        'Qanuni məcburiyyətlərə uyğun'
      ] : [
        'Service provided "as is"',
        'No liability for indirect damages',
        'Maximum liability limited to payment amount',
        'Except in emergency situations',
        'Subject to legal requirements'
      ]
    },
    {
      title: locale === 'az' ? 'İstifadəçi Məsuliyyətləri' : 'User Responsibilities',
      content: locale === 'az' ? [
        'Hesab məlumatlarını qoruyun',
        'Şübhəli fəaliyyətləri bildirin',
        'Xidmət istifadə qaydalarına riayət edin',
        'Məlumatların düzgünlüyünü təminat edin',
        'Təhlükəsizlik tədbirlərini tətbiq edin'
      ] : [
        'Protect account credentials',
        'Report suspicious activities',
        'Follow service usage guidelines',
        'Ensure data accuracy',
        'Implement security measures'
      ]
    },
    {
      title: locale === 'az' ? 'Xidmətin Dayandırılması' : 'Service Suspension',
      content: locale === 'az' ? [
        'Şərtlərin pozulması halında',
        'Ödəniş problemləri zamanı',
        'Təhlükəsizlik təhdidləri üçün',
        'Texniki problemlər zamanı',
        'Qanuni tələblərə uyğun olaraq'
      ] : [
        'In case of terms violation',
        'During payment issues',
        'For security threats',
        'During technical problems',
        'As required by law'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FileText className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">
              {locale === 'az' ? 'İstifadə Şərtləri' : 'Terms of Service'}
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {locale === 'az' ? 'Xidmət Şərtləri' : 'Service Terms'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {locale === 'az'
              ? 'PhishScope Pro xidmətindən istifadə etmək üçün bu şərtləri oxuyun və qəbul edin. Bu sənəd xidmətimizin istifadə qaydalarını və hüquqlarını müəyyən edir.'
              : 'Please read and accept these terms to use the PhishScope Pro service. This document defines the rules and rights for using our service.'
            }
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <span>{locale === 'az' ? 'Son yenilənmə:' : 'Last updated:'}</span>
            <span>2024 yanvar 15</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Important Notice */}
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {locale === 'az' ? 'Vacib Bildiriş' : 'Important Notice'}
                  </h3>
                  <p className="text-muted-foreground">
                    {locale === 'az'
                      ? 'Bu xidməti istifadə etməklə, siz bu şərtləri qəbul etmiş olursunuz. Əgər bu şərtlərlə razı deyilsinizsə, xidmətdən istifadə etməyin.'
                      : 'By using this service, you agree to these terms. If you do not agree with these terms, do not use the service.'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Overview */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto" />
                  <h3 className="font-semibold">{locale === 'az' ? 'Təhlükəsizlik' : 'Security'}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'az' ? 'AI əsaslı qorunma' : 'AI-powered protection'}
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto" />
                  <h3 className="font-semibold">{locale === 'az' ? 'Etibarlılıq' : 'Reliability'}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'az' ? '99.9% uptime' : '99.9% uptime'}
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <Users className="h-8 w-8 text-purple-600 mx-auto" />
                  <h3 className="font-semibold">{locale === 'az' ? 'Dəstək' : 'Support'}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'az' ? '24/7 dəstək' : '24/7 support'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          {sections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* Trial and Subscription Terms */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {locale === 'az' ? 'Sınaq və Abunəlik Şərtləri' : 'Trial and Subscription Terms'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">{locale === 'az' ? 'Pulsuz Sınaq:' : 'Free Trial:'}</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• {locale === 'az' ? '7 günlük pulsuz sınaq' : '7-day free trial'}</li>
                        <li>• {locale === 'az' ? 'Kredit kartı tələb olunmur' : 'No credit card required'}</li>
                        <li>• {locale === 'az' ? 'İstədiyiniz zaman dayandırın' : 'Cancel anytime'}</li>
                        <li>• {locale === 'az' ? 'Tam funksiyalar' : 'Full features'}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">{locale === 'az' ? 'Abunəlik:' : 'Subscription:'}</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• {locale === 'az' ? 'Avtomatik yeniləmə' : 'Auto-renewal'}</li>
                        <li>• {locale === 'az' ? '30 günlük zəmanət' : '30-day guarantee'}</li>
                        <li>• {locale === 'az' ? 'İstədiyiniz zaman dəyişdirin' : 'Change anytime'}</li>
                        <li>• {locale === 'az' ? 'Pul qaytarma' : 'Money back'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prohibited Activities */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-200 dark:border-red-800">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {locale === 'az' ? 'Qadağan Edilən Fəaliyyətlər' : 'Prohibited Activities'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {locale === 'az'
                      ? 'Aşağıdakı fəaliyyətlər qadağandır və hesabınızın dayandırılmasına səbəb ola bilər:'
                      : 'The following activities are prohibited and may result in account suspension:'
                    }
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-1">
                      <li>• {locale === 'az' ? 'Qanunsuz məzmun analizi' : 'Illegal content analysis'}</li>
                      <li>• {locale === 'az' ? 'Xidmətin pozulması' : 'Service disruption'}</li>
                      <li>• {locale === 'az' ? 'Hesab paylaşımı' : 'Account sharing'}</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• {locale === 'az' ? 'Avtomatlaşdırılmış hücumlar' : 'Automated attacks'}</li>
                      <li>• {locale === 'az' ? 'Məlumat pozğunluğu' : 'Data manipulation'}</li>
                      <li>• {locale === 'az' ? 'Lisenziya pozulması' : 'License violation'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">
                  {locale === 'az' ? 'Suallarınız Var?' : 'Have Questions?'}
                </h3>
                <p className="text-blue-100">
                  {locale === 'az'
                    ? 'İstifadə şərtlərimiz haqqında suallarınız varsa, bizimlə əlaqə saxlayın.'
                    : 'If you have questions about our terms of service, please contact us.'
                  }
                </p>
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>legal@phishscope.pro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="secondary" asChild>
                    <Link href="/contact">
                      {locale === 'az' ? 'Əlaqə Saxla' : 'Contact Us'}
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                    <Link href="/privacy">
                      {locale === 'az' ? 'Gizlilik Siyasəti' : 'Privacy Policy'}
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 