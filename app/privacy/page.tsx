'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye, Users, Globe, Mail, Phone } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';

export default function PrivacyPage() {
  const { locale } = useLocale();

  const sections = [
    {
      title: locale === 'az' ? 'Məlumat Toplama' : 'Information We Collect',
      content: locale === 'az' ? [
        'Email məzmunu və metadata',
        'İstifadəçi hesab məlumatları (ad, email, şirkət)',
        'İstifadə statistikaları və analitika',
        'Texniki məlumatlar (IP ünvanı, brauzer növü)',
        'Dəstək sorğuları və əlaqə məlumatları'
      ] : [
        'Email content and metadata',
        'User account information (name, email, company)',
        'Usage statistics and analytics',
        'Technical information (IP address, browser type)',
        'Support inquiries and contact information'
      ]
    },
    {
      title: locale === 'az' ? 'Məlumat İstifadəsi' : 'How We Use Information',
      content: locale === 'az' ? [
        'Email təhlükə analizi və təsnifatı',
        'Xidmətimizi təkmilləşdirmək üçün',
        'İstifadəçi dəstəyi və əlaqə',
        'Təhlükəsizlik və təcili hallar',
        'Qanuni tələblərə uyğunluq'
      ] : [
        'Email threat analysis and classification',
        'To improve our service',
        'User support and communication',
        'Security and emergency situations',
        'Compliance with legal requirements'
      ]
    },
    {
      title: locale === 'az' ? 'Məlumat Paylaşımı' : 'Information Sharing',
      content: locale === 'az' ? [
        'Məlumatlarınızı üçüncü tərəflərlə paylaşmırıq',
        'Yalnız qanuni tələblərə uyğun olaraq',
        'Xidmət təminatçıları ilə məhdud paylaşım',
        'İstifadəçi razılığı olmadan satış yoxdur',
        'Şirkət satışı halında məlumat qorunması'
      ] : [
        'We do not share your data with third parties',
        'Only as required by law',
        'Limited sharing with service providers',
        'No sale without user consent',
        'Data protection in case of company sale'
      ]
    },
    {
      title: locale === 'az' ? 'Məlumat Təhlükəsizliyi' : 'Data Security',
      content: locale === 'az' ? [
        'AES-256 şifrələmə',
        'SOC 2 Type II sertifikatı',
        'Müntəzəm təhlükəsizlik auditləri',
        'İki faktor autentifikasiya',
        'Məlumat yedəkləmə və bərpa'
      ] : [
        'AES-256 encryption',
        'SOC 2 Type II certification',
        'Regular security audits',
        'Two-factor authentication',
        'Data backup and recovery'
      ]
    },
    {
      title: locale === 'az' ? 'İstifadəçi Hüquqları' : 'User Rights',
      content: locale === 'az' ? [
        'Məlumatlarınıza daxil olmaq',
        'Məlumatları düzəltmək və yeniləmək',
        'Məlumatları silmək (sağ qalma hüququ)',
        'Məlumat portativliyi',
        'Razılığı geri çəkmək'
      ] : [
        'Access your data',
        'Correct and update data',
        'Delete data (right to be forgotten)',
        'Data portability',
        'Withdraw consent'
      ]
    },
    {
      title: locale === 'az' ? 'Cookies və İzləmə' : 'Cookies and Tracking',
      content: locale === 'az' ? [
        'Zəruri funksional cookies',
        'Analitika cookies (razılıq ilə)',
        'Üçüncü tərəf izləmə yoxdur',
        'Brauzer parametrləri ilə idarə',
        'Şəffaf cookie siyasəti'
      ] : [
        'Essential functional cookies',
        'Analytics cookies (with consent)',
        'No third-party tracking',
        'Manage through browser settings',
        'Transparent cookie policy'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">
              {locale === 'az' ? 'Gizlilik Siyasəti' : 'Privacy Policy'}
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {locale === 'az' ? 'Məlumatlarınızın Təhlükəsizliyi' : 'Your Data Security'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {locale === 'az'
              ? 'Məlumatlarınızın təhlükəsizliyi bizim ən yüksək prioritetimizdir. Bu səhifədə məlumatlarınızın necə toplandığını, istifadə edildiyini və qorunduğunu öyrənə bilərsiniz.'
              : 'Your data security is our highest priority. Learn how your data is collected, used, and protected on this page.'
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
          {/* Overview */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Lock className="h-8 w-8 text-blue-600 mx-auto" />
                  <h3 className="font-semibold">{locale === 'az' ? 'Şifrələmə' : 'Encryption'}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'az' ? 'AES-256 standartı' : 'AES-256 standard'}
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <Eye className="h-8 w-8 text-green-600 mx-auto" />
                  <h3 className="font-semibold">{locale === 'az' ? 'Şəffaflıq' : 'Transparency'}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'az' ? 'Tam açıqlıq' : 'Full disclosure'}
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <Users className="h-8 w-8 text-purple-600 mx-auto" />
                  <h3 className="font-semibold">{locale === 'az' ? 'İstifadəçi Nəzarəti' : 'User Control'}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'az' ? 'Tam nəzarət' : 'Full control'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Policy Sections */}
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

          {/* GDPR Compliance */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Globe className="h-8 w-8 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {locale === 'az' ? 'GDPR Uyğunluğu' : 'GDPR Compliance'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {locale === 'az'
                      ? 'Avropa İnkişaf Məlumat Qorunması Qaydalarına (GDPR) tam uyğunluq. İstifadəçi hüquqlarını qoruyuruq və şəffaf məlumat emalı təminat edirik.'
                      : 'Full compliance with the European General Data Protection Regulation (GDPR). We protect user rights and provide transparent data processing.'
                    }
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>{locale === 'az' ? 'Hüquqlar:' : 'Rights:'}</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• {locale === 'az' ? 'Daxil olmaq' : 'Access'}</li>
                        <li>• {locale === 'az' ? 'Düzəltmək' : 'Rectification'}</li>
                        <li>• {locale === 'az' ? 'Silinmə' : 'Erasure'}</li>
                      </ul>
                    </div>
                    <div>
                      <strong>{locale === 'az' ? 'Zəmanətlər:' : 'Guarantees:'}</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• {locale === 'az' ? 'Şifrələmə' : 'Encryption'}</li>
                        <li>• {locale === 'az' ? 'Məhdud müddət' : 'Limited retention'}</li>
                        <li>• {locale === 'az' ? 'Şəffaflıq' : 'Transparency'}</li>
                      </ul>
                    </div>
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
                    ? 'Gizlilik siyasətimiz haqqında suallarınız varsa, bizimlə əlaqə saxlayın.'
                    : 'If you have questions about our privacy policy, please contact us.'
                  }
                </p>
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>privacy@phishscope.pro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <Button variant="secondary" asChild>
                  <Link href="/contact">
                    {locale === 'az' ? 'Əlaqə Saxla' : 'Contact Us'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 