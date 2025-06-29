'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Book, 
  Search, 
  Code, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';

export default function DocsPage() {
  const { locale } = useLocale();

  const quickStart = [
    {
      title: locale === 'az' ? 'Hesab yaradın' : 'Create Account',
      description: locale === 'az' ? 'Pulsuz hesab yaradın və dashboard-a daxil olun' : 'Sign up for free and access your dashboard'
    },
    {
      title: locale === 'az' ? 'İlk email təhlili' : 'First Email Analysis',
      description: locale === 'az' ? 'Email faylını yükləyin və təhlil prosesini başladın' : 'Upload an email file and start the analysis process'
    },
    {
      title: locale === 'az' ? 'Nəticələri incələyin' : 'Review Results',
      description: locale === 'az' ? 'Təhdid xalını və AI tövsiyələrini incələyin' : 'Review threat score and AI recommendations'
    },
    {
      title: locale === 'az' ? 'Hesabat ixrac edin' : 'Export Report',
      description: locale === 'az' ? 'PDF və ya JSON formatında hesabat ixrac edin' : 'Export report in PDF or JSON format'
    }
  ];

  const apiEndpoints = [
    {
      method: 'POST',
      path: '/api/v1/analyze',
      description: locale === 'az' ? 'Email təhlili başlat' : 'Start email analysis'
    },
    {
      method: 'GET',
      path: '/api/v1/analysis/{id}',
      description: locale === 'az' ? 'Təhlil nəticəsini al' : 'Get analysis result'
    },
    {
      method: 'GET',
      path: '/api/v1/reports',
      description: locale === 'az' ? 'Hesabatları siyahıla' : 'List reports'
    }
  ];

  const guides = [
    {
      title: locale === 'az' ? 'Email Formatları' : 'Email Formats',
      description: locale === 'az' ? 'Dəstəklənən email formatları və yükləmə qaydaları' : 'Supported email formats and upload guidelines',
      category: locale === 'az' ? 'Əsaslar' : 'Basics'
    },
    {
      title: locale === 'az' ? 'Təhdid Xalları' : 'Threat Scores',
      description: locale === 'az' ? 'Təhdid xallarının necə hesablandığını anlayın' : 'Understand how threat scores are calculated',
      category: locale === 'az' ? 'Təhlil' : 'Analysis'
    },
    {
      title: locale === 'az' ? 'OSINT Zənginləşdirmə' : 'OSINT Enrichment',
      description: locale === 'az' ? 'IOC zənginləşdirmə prosesi və mənbələr' : 'IOC enrichment process and sources',
      category: locale === 'az' ? 'Təhlil' : 'Analysis'
    },
    {
      title: locale === 'az' ? 'API İnteqrasiyası' : 'API Integration',
      description: locale === 'az' ? 'API-ni öz tətbiqinizə inteqrasiya edin' : 'Integrate the API into your application',
      category: 'API'
    },
    {
      title: locale === 'az' ? 'Webhook-lar' : 'Webhooks',
      description: locale === 'az' ? 'Real vaxt bildirişlər üçün webhook-ları konfiqurasiya edin' : 'Configure webhooks for real-time notifications',
      category: 'API'
    },
    {
      title: locale === 'az' ? 'Komanda İdarəetməsi' : 'Team Management',
      description: locale === 'az' ? 'İstifadəçiləri əlavə edin və icazələri idarə edin' : 'Add users and manage permissions',
      category: locale === 'az' ? 'İdarəetmə' : 'Management'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          {locale === 'az' ? 'Sənədlər' : 'Documentation'}
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold">
          {locale === 'az' ? 'PhishScope Pro Sənədləri' : 'PhishScope Pro Documentation'}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {locale === 'az' 
            ? 'Platformamızdan maksimum faydalanmaq üçün lazım olan hər şey'
            : 'Everything you need to get the most out of our platform'
          }
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={locale === 'az' ? 'Sənədlərdə axtarın...' : 'Search documentation...'}
            className="pl-10"
          />
        </div>
      </div>

      {/* Quick Start */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'az' ? 'Sürətli Başlanğıc' : 'Quick Start'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {locale === 'az'
              ? 'Bir neçə addımda PhishScope Pro ilə işə başlayın'
              : 'Get started with PhishScope Pro in just a few steps'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStart.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <div className="absolute -top-3 -left-3 h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="space-y-3 mt-2">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Documentation */}
      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="guides">
            {locale === 'az' ? 'Bələdçilər' : 'Guides'}
          </TabsTrigger>
          <TabsTrigger value="api">
            API {locale === 'az' ? 'Arayışı' : 'Reference'}
          </TabsTrigger>
          <TabsTrigger value="examples">
            {locale === 'az' ? 'Nümunələr' : 'Examples'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="guides" className="space-y-6">
          <div className="grid gap-4">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{guide.title}</h3>
                        <Badge variant="outline">{guide.category}</Badge>
                      </div>
                      <p className="text-muted-foreground">{guide.description}</p>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/docs/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                {locale === 'az' ? 'API Endpointləri' : 'API Endpoints'}
              </h3>
              <Button variant="outline" asChild>
                <Link href="/api">
                  {locale === 'az' ? 'Tam API sənədləri' : 'Full API Documentation'}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {apiEndpoints.map((endpoint, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant={endpoint.method === 'GET' ? 'default' : 'secondary'}>
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm font-mono">{endpoint.path}</code>
                  </div>
                  <p className="text-muted-foreground">{endpoint.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Python {locale === 'az' ? 'Nümunəsi' : 'Example'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import requests

# Email təhlili başlat
response = requests.post(
    'https://api.phishscope.pro/v1/analyze',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={'email_content': 'base64_email'}
)

result = response.json()
print(f"Threat Score: {result['threat_score']}")`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  {locale === 'az' ? 'Təhlükəsizlik Nümunəsi' : 'Security Example'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`// API açarını təhlükəsiz saxlayın
const apiKey = process.env.PHISHSCOPE_API_KEY;

// HTTPS istifadə edin
const response = await fetch(
  'https://api.phishscope.pro/v1/analyze',
  {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${apiKey}\`,
      'Content-Type': 'application/json'
    }
  }
);`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Popular Resources */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'az' ? 'Məşhur Resurslar' : 'Popular Resources'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  {locale === 'az' ? 'Sürətli Başlanğıc Bələdçisi' : 'Quick Start Guide'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {locale === 'az' 
                    ? '5 dəqiqədə ilk təhlilinizi edin'
                    : 'Complete your first analysis in 5 minutes'
                  }
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/docs/quick-start">
                    {locale === 'az' ? 'Oxu' : 'Read'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto">
                <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  API {locale === 'az' ? 'İnteqrasiya Bələdçisi' : 'Integration Guide'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {locale === 'az' 
                    ? 'API-ni tətbiqinizə inteqrasiya edin'
                    : 'Integrate our API into your application'
                  }
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/docs/api-integration">
                    {locale === 'az' ? 'Oxu' : 'Read'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  {locale === 'az' ? 'Komanda Qurulumu' : 'Team Setup'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {locale === 'az' 
                    ? 'Komandanızı qurub icazələri idarə edin'
                    : 'Set up your team and manage permissions'
                  }
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/docs/team-setup">
                    {locale === 'az' ? 'Oxu' : 'Read'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          {locale === 'az' 
            ? 'Hələ də sualınız var?'
            : 'Still have questions?'
          }
        </h2>
        <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
          {locale === 'az'
            ? 'Dəstək komandamız sizə kömək etməyə hazırdır'
            : 'Our support team is ready to help you'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              {locale === 'az' ? 'Dəstəklə əlaqə' : 'Contact Support'}
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
            <Link href="/help">
              {locale === 'az' ? 'Kömək mərkəzi' : 'Help Center'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}