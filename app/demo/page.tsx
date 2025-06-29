'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Mail, 
  Search, 
  BarChart3, 
  Zap, 
  Globe, 
  Lock, 
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

interface DashboardData {
  title: string;
  description: string;
  stats: { label: string; value: string; }[];
}

interface FeatureData {
  title: string;
  description: string;
  features: string[];
}

type DemoDataItem = DashboardData | FeatureData;

export default function DemoPage() {
  const { locale } = useLocale();
  const [activeTab, setActiveTab] = useState('dashboard');

  const features = [
    {
      icon: Mail,
      title: locale === 'az' ? 'Email Analizi' : 'Email Analysis',
      description: locale === 'az' 
        ? 'Şübhəli emailləri avtomatik olaraq analiz edin və təhlükə səviyyəsini müəyyən edin'
        : 'Automatically analyze suspicious emails and determine threat levels',
      color: 'text-blue-600'
    },
    {
      icon: Search,
      title: locale === 'az' ? 'OSINT İnteqrasiyası' : 'OSINT Integration',
      description: locale === 'az'
        ? 'Açıq mənbələrdən məlumat toplayın və təhlükə zəminini araşdırın'
        : 'Gather intelligence from open sources and investigate threat landscape',
      color: 'text-green-600'
    },
    {
      icon: BarChart3,
      title: locale === 'az' ? 'Hesabatlar' : 'Reports',
      description: locale === 'az'
        ? 'Detallı hesabatlar və analitika ilə təhlükə trendlərini izləyin'
        : 'Track threat trends with detailed reports and analytics',
      color: 'text-purple-600'
    },
    {
      icon: Zap,
      title: locale === 'az' ? 'Real-time Bildirişlər' : 'Real-time Alerts',
      description: locale === 'az'
        ? 'Təhlükəli fəaliyyətlər haqqında dərhal məlumatlandırın'
        : 'Get instant notifications about suspicious activities',
      color: 'text-orange-600'
    }
  ];

  const demoData: Record<string, DemoDataItem> = {
    dashboard: {
      title: locale === 'az' ? 'Dashboard' : 'Dashboard',
      description: locale === 'az' ? 'Ümumi təhlükə vəziyyətini izləyin' : 'Monitor overall threat landscape',
      stats: [
        { label: locale === 'az' ? 'Analiz edilən Email' : 'Emails Analyzed', value: '1,247' },
        { label: locale === 'az' ? 'Təhlükəli Email' : 'Threats Detected', value: '23' },
        { label: locale === 'az' ? 'Təhlükə Skoru' : 'Threat Score', value: '85%' },
        { label: locale === 'az' ? 'Son 24 Saat' : 'Last 24h', value: '156' }
      ]
    },
    analyze: {
      title: locale === 'az' ? 'Email Analizi' : 'Email Analysis',
      description: locale === 'az' ? 'Şübhəli emailləri analiz edin' : 'Analyze suspicious emails',
      features: [
        locale === 'az' ? 'AI əsaslı təhlükə təsnifatı' : 'AI-based threat classification',
        locale === 'az' ? 'URL və fayl analizi' : 'URL and file analysis',
        locale === 'az' ? 'Göndərən reputasiya yoxlaması' : 'Sender reputation check',
        locale === 'az' ? 'Məzmun təhlükə analizi' : 'Content threat analysis'
      ]
    },
    reports: {
      title: locale === 'az' ? 'Hesabatlar' : 'Reports',
      description: locale === 'az' ? 'Detallı təhlükə hesabatları' : 'Detailed threat reports',
      features: [
        locale === 'az' ? 'Həftəlik təhlükə hesabatları' : 'Weekly threat reports',
        locale === 'az' ? 'Trend analizi' : 'Trend analysis',
        locale === 'az' ? 'Təhlükə xəritəsi' : 'Threat mapping',
        locale === 'az' ? 'PDF eksport' : 'PDF export'
      ]
    }
  };

  // Type guards
  const isDashboardData = (data: DemoDataItem): data is DashboardData => {
    return 'stats' in data;
  };

  const isFeatureData = (data: DemoDataItem): data is FeatureData => {
    return 'features' in data;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <Shield className="h-12 w-12 text-blue-500" />
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              PhishScope Pro
            </span>
          </div>
          <h1 className="text-5xl font-bold">
            {locale === 'az' ? 'Demo Platforması' : 'Platform Demo'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {locale === 'az'
              ? 'Email təhlükəsizlik platformamızın funksiyalarını kəşf edin. 7 günlük pulsuz sınaq dövrü ilə başlayın.'
              : 'Explore the features of our email security platform. Start with a 7-day free trial.'
            }
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button size="lg" asChild>
              <Link href="/register">
                {locale === 'az' ? 'Pulsuz Sınaq Başlat' : 'Start Free Trial'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">
                {locale === 'az' ? 'Qiymətləri Gör' : 'View Pricing'}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'az' ? 'Platform Funksiyaları' : 'Platform Features'}
          </h2>
          <p className="text-muted-foreground">
            {locale === 'az'
              ? 'Təhlükəsizlik analitikləri üçün təkmilləşdirilmiş alətlər'
              : 'Advanced tools for security analysts'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'az' ? 'İnteraktiv Demo' : 'Interactive Demo'}
          </h2>
          <p className="text-muted-foreground">
            {locale === 'az'
              ? 'Platformanın əsas funksiyalarını sınayın'
              : 'Try out the main platform features'
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="dashboard">
                <BarChart3 className="h-4 w-4 mr-2" />
                {locale === 'az' ? 'Dashboard' : 'Dashboard'}
              </TabsTrigger>
              <TabsTrigger value="analyze">
                <Mail className="h-4 w-4 mr-2" />
                {locale === 'az' ? 'Analiz' : 'Analyze'}
              </TabsTrigger>
              <TabsTrigger value="reports">
                <Search className="h-4 w-4 mr-2" />
                {locale === 'az' ? 'Hesabatlar' : 'Reports'}
              </TabsTrigger>
            </TabsList>

            {Object.entries(demoData).map(([key, data]) => (
              <TabsContent key={key} value={key} className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {data.title}
                      <Badge variant="secondary" className="ml-2">
                        {locale === 'az' ? 'Demo' : 'Demo'}
                      </Badge>
                    </CardTitle>
                    <p className="text-muted-foreground">{data.description}</p>
                  </CardHeader>
                  <CardContent>
                    {isDashboardData(data) && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {data.stats.map((stat, index) => (
                          <div key={index} className="text-center p-4 bg-muted rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {isFeatureData(data) && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {data.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 p-4 bg-muted rounded-lg">
                          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                            <Play className="h-4 w-4" />
                            <span className="text-sm">
                              {locale === 'az' 
                                ? 'Bu funksiyanı sınamaq üçün hesab yaradın'
                                : 'Create an account to try this feature'
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">
                {locale === 'az' ? 'İndi Başlayın' : 'Get Started Today'}
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                {locale === 'az'
                  ? '7 günlük pulsuz sınaq dövrü ilə email təhlükəsizliyinizi artırın. Kredit kartı tələb olunmur.'
                  : 'Enhance your email security with a 7-day free trial. No credit card required.'
                }
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/register">
                    {locale === 'az' ? 'Pulsuz Sınaq Başlat' : 'Start Free Trial'}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-500" asChild>
                  <Link href="/contact">
                    {locale === 'az' ? 'Bizimlə Əlaqə' : 'Contact Us'}
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