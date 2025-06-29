'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Shield, 
  Search, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle,
  ArrowRight,
  Globe,
  Lock,
  BarChart3,
  FileText
} from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';

export default function FeaturesPage() {
  const { locale } = useLocale();

  const features = [
    {
      icon: Mail,
      title: locale === 'az' ? 'Email Təhlili' : 'Email Analysis',
      description: locale === 'az' 
        ? 'EML, MSG və ham email məlumatlarını yükləyin və təhlil edin. Avtomatik IOC çıxarma və başlıq təhlili.'
        : 'Upload and analyze .eml, .msg, and raw email data. Automatic IOC extraction and header analysis.',
      features: [
        locale === 'az' ? 'Çoxlu format dəstəyi' : 'Multiple format support',
        locale === 'az' ? 'Avtomatik IOC çıxarma' : 'Automatic IOC extraction',
        locale === 'az' ? 'Başlıq təhlili' : 'Header analysis',
        locale === 'az' ? 'Əlavə skanı' : 'Attachment scanning'
      ]
    },
    {
      icon: Shield,
      title: locale === 'az' ? 'Autentifikasiya Yoxlaması' : 'Authentication Validation',
      description: locale === 'az'
        ? 'SPF, DKIM və DMARC protokollarını yoxlayın. Təbii dil izahları ilə.'
        : 'Validate SPF, DKIM, and DMARC protocols with natural language explanations.',
      features: [
        'SPF ' + (locale === 'az' ? 'yoxlaması' : 'validation'),
        'DKIM ' + (locale === 'az' ? 'imza təsdiqi' : 'signature verification'),
        'DMARC ' + (locale === 'az' ? 'siyasət yoxlaması' : 'policy check'),
        locale === 'az' ? 'Təbii dil izahları' : 'Natural language explanations'
      ]
    },
    {
      icon: Search,
      title: 'OSINT ' + (locale === 'az' ? 'Zənginləşdirmə' : 'Enrichment'),
      description: locale === 'az'
        ? 'IOC-ları müxtəlif təhdid kəşfiyyatı API-ləri ilə zənginləşdirin.'
        : 'Enrich IOCs with multiple threat intelligence APIs.',
      features: [
        'AbuseIPDB ' + (locale === 'az' ? 'inteqrasiyası' : 'integration'),
        'VirusTotal ' + (locale === 'az' ? 'skanı' : 'scanning'),
        'URLScan.io ' + (locale === 'az' ? 'təhlili' : 'analysis'),
        'WHOISXML ' + (locale === 'az' ? 'məlumatları' : 'data')
      ]
    },
    {
      icon: Brain,
      title: 'AI ' + (locale === 'az' ? 'Təhdid Təhlili' : 'Threat Analysis'),
      description: locale === 'az'
        ? 'GPT-4 ilə təhdid qiymətləndirməsi və MITRE ATT&CK xəritəsi.'
        : 'GPT-4 powered threat assessment and MITRE ATT&CK mapping.',
      features: [
        locale === 'az' ? 'Təhdid xalı' : 'Threat scoring',
        'MITRE ATT&CK ' + (locale === 'az' ? 'xəritəsi' : 'mapping'),
        locale === 'az' ? 'Kampaniya atributu' : 'Campaign attribution',
        locale === 'az' ? 'Avtomatik hesabat' : 'Automated reporting'
      ]
    },
    {
      icon: Zap,
      title: locale === 'az' ? 'Sürətli Nəticələr' : 'Fast Results',
      description: locale === 'az'
        ? 'Saniyələr ərzində nəticələr alın, saatlar deyil.'
        : 'Get results in seconds, not hours.',
      features: [
        locale === 'az' ? 'Real vaxt təhlil' : 'Real-time analysis',
        locale === 'az' ? 'Paralel emal' : 'Parallel processing',
        locale === 'az' ? 'Keş sistemi' : 'Caching system',
        locale === 'az' ? 'API optimallaşdırması' : 'API optimization'
      ]
    },
    {
      icon: Users,
      title: locale === 'az' ? 'Komanda Əməkdaşlığı' : 'Team Collaboration',
      description: locale === 'az'
        ? 'Hesabatları paylaşın və komanda ilə əməkdaşlıq edin.'
        : 'Share reports and collaborate with your team.',
      features: [
        locale === 'az' ? 'Paylaşılan dashboard' : 'Shared dashboard',
        locale === 'az' ? 'Rol əsaslı giriş' : 'Role-based access',
        locale === 'az' ? 'Komanda şərhləri' : 'Team comments',
        locale === 'az' ? 'Audit izi' : 'Audit trail'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Globe,
      title: locale === 'az' ? 'Qlobal Təhdid Kəşfiyyatı' : 'Global Threat Intelligence',
      description: locale === 'az' 
        ? 'Dünya miqyasında təhdid məlumatları bazası'
        : 'Worldwide threat intelligence database'
    },
    {
      icon: Lock,
      title: locale === 'az' ? 'Müəssisə Təhlükəsizliyi' : 'Enterprise Security',
      description: locale === 'az'
        ? 'SOC 2 Type II uyğunluğu və şifrələmə'
        : 'SOC 2 Type II compliance and encryption'
    },
    {
      icon: BarChart3,
      title: locale === 'az' ? 'Təhlil Paneli' : 'Analytics Dashboard',
      description: locale === 'az'
        ? 'Təhdid tendensiyaları və metrikalar'
        : 'Threat trends and metrics'
    },
    {
      icon: FileText,
      title: locale === 'az' ? 'Avtomatik Hesabatlar' : 'Automated Reports',
      description: locale === 'az'
        ? 'PDF, JSON və Markdown formatlarında'
        : 'PDF, JSON, and Markdown formats'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          {locale === 'az' ? 'Xüsusiyyətlər' : 'Features'}
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold">
          {locale === 'az' ? 'Güclü Kibertəhlükəsizlik Alətləri' : 'Powerful Cybersecurity Tools'}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {locale === 'az' 
            ? 'PhishScope Pro ilə email təhdidlərini aşkarlamaq, təhlil etmək və qarşısını almaq üçün lazım olan hər şey'
            : 'Everything you need to detect, analyze, and prevent email threats with PhishScope Pro'
          }
        </p>
      </div>

      {/* Main Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Features */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'az' ? 'Əlavə İmkanlar' : 'Additional Capabilities'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {locale === 'az'
              ? 'Platformamızın təklif etdiyi digər güclü xüsusiyyətlər'
              : 'Other powerful features our platform offers'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          {locale === 'az' 
            ? 'Bu gün başlayın'
            : 'Get started today'
          }
        </h2>
        <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
          {locale === 'az'
            ? 'PhishScope Pro ilə email təhlükəsizliyinizi növbəti səviyyəyə çıxarın'
            : 'Take your email security to the next level with PhishScope Pro'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/dashboard">
              {locale === 'az' ? 'Pulsuz başla' : 'Start Free Trial'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
            <Link href="/contact">
              {locale === 'az' ? 'Satış ilə əlaqə' : 'Contact Sales'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}