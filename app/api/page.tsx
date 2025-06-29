'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Key, Book, Zap, Shield, Globe } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';

export default function APIPage() {
  const { locale } = useLocale();

  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/analyze',
      description: locale === 'az' ? 'Email təhlili başlat' : 'Start email analysis',
      params: ['email_content', 'file_type']
    },
    {
      method: 'GET',
      path: '/api/v1/analysis/{id}',
      description: locale === 'az' ? 'Təhlil nəticəsini al' : 'Get analysis result',
      params: ['id']
    },
    {
      method: 'GET',
      path: '/api/v1/reports',
      description: locale === 'az' ? 'Hesabatları siyahıla' : 'List reports',
      params: ['limit', 'offset']
    },
    {
      method: 'POST',
      path: '/api/v1/osint/enrich',
      description: locale === 'az' ? 'IOC zənginləşdirmə' : 'Enrich IOCs',
      params: ['iocs', 'sources']
    }
  ];

  const codeExamples = {
    curl: `curl -X POST https://api.phishscope.pro/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email_content": "base64_encoded_email",
    "file_type": "eml"
  }'`,
    python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

data = {
    'email_content': 'base64_encoded_email',
    'file_type': 'eml'
}

response = requests.post(
    'https://api.phishscope.pro/v1/analyze',
    headers=headers,
    json=data
)

result = response.json()`,
    javascript: `const response = await fetch('https://api.phishscope.pro/v1/analyze', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email_content: 'base64_encoded_email',
    file_type: 'eml'
  })
});

const result = await response.json();`
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          API
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold">
          {locale === 'az' ? 'PhishScope Pro API' : 'PhishScope Pro API'}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {locale === 'az' 
            ? 'Email təhlükəsizlik xidmətlərimizi öz tətbiqlərinizə inteqrasiya edin'
            : 'Integrate our email security services into your applications'
          }
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-500" />
              {locale === 'az' ? 'Sürətli' : 'Fast'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {locale === 'az' 
                ? 'Saniyələr ərzində cavab alın'
                : 'Get responses in seconds'
              }
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              {locale === 'az' ? 'Təhlükəsiz' : 'Secure'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {locale === 'az' 
                ? 'API açarı ilə təhlükəsiz giriş'
                : 'Secure access with API keys'
              }
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-purple-500" />
              {locale === 'az' ? 'Qlobal' : 'Global'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {locale === 'az' 
                ? 'Dünya miqyasında CDN'
                : 'Worldwide CDN coverage'
              }
            </p>
          </CardContent>
        </Card>
      </div>

      {/* API Documentation */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">
          {locale === 'az' ? 'API Sənədləri' : 'API Documentation'}
        </h2>

        <Tabs defaultValue="endpoints" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="endpoints">
              {locale === 'az' ? 'Endpointlər' : 'Endpoints'}
            </TabsTrigger>
            <TabsTrigger value="examples">
              {locale === 'az' ? 'Nümunələr' : 'Examples'}
            </TabsTrigger>
            <TabsTrigger value="authentication">
              {locale === 'az' ? 'Autentifikasiya' : 'Authentication'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="endpoints" className="space-y-4">
            <div className="grid gap-4">
              {endpoints.map((endpoint, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Badge variant={endpoint.method === 'GET' ? 'default' : 'secondary'}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm font-mono">{endpoint.path}</code>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{endpoint.description}</p>
                    <div>
                      <span className="text-sm font-medium">
                        {locale === 'az' ? 'Parametrlər' : 'Parameters'}:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {endpoint.params.map((param, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {param}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Tabs defaultValue="curl" className="w-full">
              <TabsList>
                <TabsTrigger value="curl">cURL</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              </TabsList>

              {Object.entries(codeExamples).map(([lang, code]) => (
                <TabsContent key={lang} value={lang}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        {lang === 'curl' ? 'cURL' : lang.charAt(0).toUpperCase() + lang.slice(1)} 
                        {locale === 'az' ? ' Nümunəsi' : ' Example'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          <TabsContent value="authentication" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  {locale === 'az' ? 'API Açarı Autentifikasiyası' : 'API Key Authentication'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {locale === 'az' 
                    ? 'Bütün API sorğuları Authorization başlığında Bearer token tələb edir:'
                    : 'All API requests require a Bearer token in the Authorization header:'
                  }
                </p>
                <pre className="bg-muted p-4 rounded-lg">
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                </pre>
                <div className="space-y-2">
                  <h4 className="font-semibold">
                    {locale === 'az' ? 'API açarınızı necə əldə edə bilərsiniz:' : 'How to get your API key:'}
                  </h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>{locale === 'az' ? 'Dashboard-a daxil olun' : 'Sign in to your dashboard'}</li>
                    <li>{locale === 'az' ? 'Tənzimləmələr səhifəsinə gedin' : 'Go to Settings page'}</li>
                    <li>{locale === 'az' ? 'API açarları bölməsini tapın' : 'Find the API Keys section'}</li>
                    <li>{locale === 'az' ? 'Yeni açar yaradın' : 'Generate a new key'}</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Rate Limits */}
      <Card>
        <CardHeader>
          <CardTitle>
            {locale === 'az' ? 'Dərəcə Məhdudiyyətləri' : 'Rate Limits'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">100</div>
              <div className="text-sm text-muted-foreground">
                {locale === 'az' ? 'Sorğu/dəqiqə (Free)' : 'Requests/min (Free)'}
              </div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">1,000</div>
              <div className="text-sm text-muted-foreground">
                {locale === 'az' ? 'Sorğu/dəqiqə (Pro)' : 'Requests/min (Pro)'}
              </div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {locale === 'az' ? 'Xüsusi' : 'Custom'}
              </div>
              <div className="text-sm text-muted-foreground">
                {locale === 'az' ? 'Enterprise planlar' : 'Enterprise plans'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          {locale === 'az' 
            ? 'API-ni istifadəyə başlayın'
            : 'Start using the API'
          }
        </h2>
        <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
          {locale === 'az'
            ? 'Dərhal API açarınızı alın və inteqrasiyaya başlayın'
            : 'Get your API key instantly and start integrating'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/dashboard">
              {locale === 'az' ? 'API açarı al' : 'Get API Key'}
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
            <Link href="/docs">
              <Book className="mr-2 h-4 w-4" />
              {locale === 'az' ? 'Tam sənədlər' : 'Full Documentation'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}