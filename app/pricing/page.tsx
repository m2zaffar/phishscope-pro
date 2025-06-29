'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Building, Crown, Check, Star, Lock, Users, Globe, BarChart3 } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

export default function PricingPage() {
  const { locale } = useLocale();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: locale === 'az' ? 'Pulsuz' : 'Free',
      description: locale === 'az' ? 'Fərdi istifadəçilər üçün' : 'For individual users',
      price: 0,
      originalPrice: null,
      features: [
        locale === 'az' ? 'Günlük 10 email analizi' : '10 email analyses per day',
        locale === 'az' ? 'Əsas təhlükə təsnifatı' : 'Basic threat classification',
        locale === 'az' ? 'Email hesabatları' : 'Email reports',
        locale === 'az' ? 'Email dəstəyi' : 'Email support',
        locale === 'az' ? 'Əsas API girişi' : 'Basic API access'
      ],
      icon: Shield,
      popular: false,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      name: locale === 'az' ? 'Professional' : 'Professional',
      description: locale === 'az' ? 'Kiçik komandalar üçün' : 'For small teams',
      price: billingCycle === 'monthly' ? 5 : 50,
      originalPrice: billingCycle === 'monthly' ? 8 : 80,
      features: [
        locale === 'az' ? 'Günlük 100 email analizi' : '100 email analyses per day',
        locale === 'az' ? 'Təkmilləşdirilmiş AI analizi' : 'Advanced AI analysis',
        locale === 'az' ? 'OSINT inteqrasiyası' : 'OSINT integration',
        locale === 'az' ? 'Real-time bildirişlər' : 'Real-time alerts',
        locale === 'az' ? 'Detallı hesabatlar' : 'Detailed reports',
        locale === 'az' ? 'Prioritet dəstək' : 'Priority support',
        locale === 'az' ? 'API və webhook' : 'API & webhooks'
      ],
      icon: Zap,
      popular: true,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      name: locale === 'az' ? 'Business' : 'Business',
      description: locale === 'az' ? 'Orta ölçülü şirkətlər üçün' : 'For growing companies',
      price: billingCycle === 'monthly' ? 20 : 200,
      originalPrice: billingCycle === 'monthly' ? 25 : 250,
      features: [
        locale === 'az' ? 'Günlük 500 email analizi' : '500 email analyses per day',
        locale === 'az' ? 'Tam AI təhlükə analizi' : 'Full AI threat analysis',
        locale === 'az' ? 'Tam OSINT paketi' : 'Full OSINT package',
        locale === 'az' ? 'Komanda əməkdaşlığı' : 'Team collaboration',
        locale === 'az' ? 'Xüsusi hesabatlar' : 'Custom reports',
        locale === 'az' ? '24/7 dəstək' : '24/7 support',
        locale === 'az' ? 'SIEM inteqrasiyası' : 'SIEM integration',
        locale === 'az' ? 'Rol əsaslı giriş' : 'Role-based access'
      ],
      icon: Building,
      popular: false,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-800'
    },
    {
      name: locale === 'az' ? 'Korporativ' : 'Enterprise',
      description: locale === 'az' ? 'Böyük təşkilatlar üçün' : 'For large organizations',
      price: 'Custom',
      originalPrice: null,
      features: [
        locale === 'az' ? 'Limitsiz email analizi' : 'Unlimited email analysis',
        locale === 'az' ? 'Xüsusi AI modelləri' : 'Custom AI models',
        locale === 'az' ? 'Tam OSINT paketi' : 'Full OSINT package',
        locale === 'az' ? '24/7 dəstək' : '24/7 support',
        locale === 'az' ? 'Xüsusi inteqrasiyalar' : 'Custom integrations',
        locale === 'az' ? 'Dedicated hesabatlar' : 'Dedicated reports',
        locale === 'az' ? 'SLA zəmanəti' : 'SLA guarantee',
        locale === 'az' ? 'On-premise seçimi' : 'On-premise option'
      ],
      icon: Crown,
      popular: false,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800'
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
              {locale === 'az' ? 'Təhlükəsizlik Qiymətləri' : 'Security Pricing'}
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {locale === 'az' ? 'Qiymət Planları' : 'Pricing Plans'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {locale === 'az'
              ? 'Hər ölçülü komanda üçün təhlükəsizlik həlləri. 7 günlük pulsuz sınaq dövrü ilə başlayın.'
              : 'Security solutions for teams of all sizes. Start with a 7-day free trial.'
            }
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg max-w-xs mx-auto">
            <span className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${
              billingCycle === 'monthly' 
                ? 'bg-blue-500 text-white' 
                : 'text-muted-foreground'
            }`}>
              {locale === 'az' ? 'Aylıq' : 'Monthly'}
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-100 dark:bg-blue-900 transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-blue-500 transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${
              billingCycle === 'yearly' 
                ? 'bg-blue-500 text-white' 
                : 'text-muted-foreground'
            }`}>
              {locale === 'az' ? 'İllik' : 'Yearly'}
            </span>
            {billingCycle === 'yearly' && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 ml-2">
                {locale === 'az' ? '20% Endirim' : '20% Off'}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              plan.popular ? 'border-blue-500 shadow-lg scale-105' : ''
            } ${plan.borderColor}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white shadow-lg">
                    <Star className="h-3 w-3 mr-1" />
                    {locale === 'az' ? 'Ən Populyar' : 'Most Popular'}
                  </Badge>
                </div>
              )}
              
              <CardHeader className={`text-center pb-4 ${plan.bgColor} rounded-t-lg`}>
                <div className="flex items-center justify-center mb-4">
                  <plan.icon className={`h-10 w-10 ${plan.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6 p-6">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    {typeof plan.price === 'number' ? (
                      <>
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground">
                          /{billingCycle === 'monthly' ? (locale === 'az' ? 'ay' : 'mo') : (locale === 'az' ? 'il' : 'yr')}
                        </span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold">{plan.price}</span>
                    )}
                  </div>
                  {plan.originalPrice && (
                    <p className="text-sm text-muted-foreground line-through">
                      ${plan.originalPrice}/{billingCycle === 'monthly' ? (locale === 'az' ? 'ay' : 'mo') : (locale === 'az' ? 'il' : 'yr')}
                    </p>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl' 
                      : 'hover:shadow-md'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                >
                  <Link href={plan.name === (locale === 'az' ? 'Korporativ' : 'Enterprise') ? '/contact' : '/register'}>
                    {plan.name === (locale === 'az' ? 'Korporativ' : 'Enterprise') 
                      ? (locale === 'az' ? 'Əlaqə Saxla' : 'Contact Sales')
                      : plan.name === (locale === 'az' ? 'Pulsuz' : 'Free')
                      ? (locale === 'az' ? 'Pulsuz Başla' : 'Start Free')
                      : (locale === 'az' ? 'Pulsuz Sınaq Başlat' : 'Start Free Trial')
                    }
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Security Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'az' ? 'Təhlükəsizlik Zəmanəti' : 'Security Guarantee'}
          </h2>
          <p className="text-muted-foreground">
            {locale === 'az'
              ? 'Məlumatlarınızın təhlükəsizliyi bizim ən yüksək prioritetimizdir'
              : 'Your data security is our highest priority'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Lock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold">
              {locale === 'az' ? 'End-to-End Şifrələmə' : 'End-to-End Encryption'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {locale === 'az'
                ? 'Bütün məlumatlarınız AES-256 şifrələmə ilə qorunur'
                : 'All your data is protected with AES-256 encryption'
              }
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold">
              {locale === 'az' ? 'SOC 2 Sertifikatı' : 'SOC 2 Certified'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {locale === 'az'
                ? 'Sənaye standartlarına uyğun təhlükəsizlik'
                : 'Industry-standard security compliance'
              }
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold">
              {locale === 'az' ? 'GDPR Uyğunluğu' : 'GDPR Compliant'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {locale === 'az'
                ? 'Avropa məlumat qorunması qaydalarına uyğun'
                : 'Compliant with European data protection regulations'
              }
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {locale === 'az' ? 'Tez-tez Verilən Suallar' : 'Frequently Asked Questions'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold mb-2">
                  {locale === 'az' ? 'Sınaq dövrü nə qədərdir?' : 'How long is the trial period?'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {locale === 'az'
                    ? 'Bütün planlar üçün 7 günlük pulsuz sınaq dövrü təqdim edirik. Kredit kartı tələb olunmur.'
                    : 'We offer a 7-day free trial for all plans. No credit card required.'
                  }
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold mb-2">
                  {locale === 'az' ? 'Planları dəyişə bilərəm?' : 'Can I change plans?'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {locale === 'az'
                    ? 'Bəli, istədiyiniz zaman planınızı yüksəldə və ya aşağı sala bilərsiniz.'
                    : 'Yes, you can upgrade or downgrade your plan at any time.'
                  }
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold mb-2">
                  {locale === 'az' ? 'Ödəniş metodları hansılardır?' : 'What payment methods do you accept?'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {locale === 'az'
                    ? 'Bütün əsas kredit kartları, PayPal və bank köçürməsi qəbul edirik.'
                    : 'We accept all major credit cards, PayPal, and bank transfers.'
                  }
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold mb-2">
                  {locale === 'az' ? 'Məlumatlarım təhlükəsizdir?' : 'Is my data secure?'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {locale === 'az'
                    ? 'Bəli, məlumatlarınızı şifrələyirik və SOC 2 Type II sertifikatına malikik.'
                    : 'Yes, we encrypt your data and are SOC 2 Type II certified.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">
                {locale === 'az' ? 'İndi Başlayın' : 'Get Started Today'}
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                {locale === 'az'
                  ? 'Email təhlükəsizliyinizi artırın və komandanızı qoruyun. 7 günlük pulsuz sınaq dövrü ilə başlayın.'
                  : 'Enhance your email security and protect your team. Start with a 7-day free trial.'
                }
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/register">
                    {locale === 'az' ? 'Pulsuz Sınaq Başlat' : 'Start Free Trial'}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link href="/contact">
                    {locale === 'az' ? 'Satışla Əlaqə' : 'Contact Sales'}
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}