'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Book, 
  Video,
  Mail,
  Phone,
  Clock
} from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';

export default function HelpPage() {
  const { locale } = useLocale();
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: locale === 'az' ? 'Ümumi' : 'General',
      questions: [
        {
          question: locale === 'az' ? 'PhishScope Pro nədir?' : 'What is PhishScope Pro?',
          answer: locale === 'az' 
            ? 'PhishScope Pro email təhlükəsizlik təhlili üçün AI əsaslı platformadır. Phishing hücumlarını aşkarlayır və təhlil edir.'
            : 'PhishScope Pro is an AI-powered platform for email security analysis. It detects and analyzes phishing attacks.'
        },
        {
          question: locale === 'az' ? 'Hansı email formatları dəstəklənir?' : 'What email formats are supported?',
          answer: locale === 'az'
            ? 'Biz .eml, .msg və ham email məlumatlarını dəstəkləyirik. Həmçinin MIME formatında emailləri də təhlil edə bilərik.'
            : 'We support .eml, .msg, and raw email data. We can also analyze emails in MIME format.'
        },
        {
          question: locale === 'az' ? 'Məlumatlarım təhlükəsizdirmi?' : 'Is my data secure?',
          answer: locale === 'az'
            ? 'Bəli, biz SOC 2 Type II uyğunluğuna malikik və bütün məlumatlar şifrələnir. Məlumatlarınız heç vaxt üçüncü tərəflərlə paylaşılmır.'
            : 'Yes, we are SOC 2 Type II compliant and all data is encrypted. Your data is never shared with third parties.'
        }
      ]
    },
    {
      category: locale === 'az' ? 'Hesab' : 'Account',
      questions: [
        {
          question: locale === 'az' ? 'Şifrəmi necə dəyişə bilərəm?' : 'How do I change my password?',
          answer: locale === 'az'
            ? 'Dashboard-da Tənzimləmələr > Hesab bölməsinə gedin və "Şifrəni dəyiş" düyməsini klikləyin.'
            : 'Go to Settings > Account in your dashboard and click "Change Password".'
        },
        {
          question: locale === 'az' ? 'Planımı necə yüksəldə bilərəm?' : 'How do I upgrade my plan?',
          answer: locale === 'az'
            ? 'Dashboard-da Billing bölməsinə gedin və "Planı yüksəlt" düyməsini klikləyin.'
            : 'Go to Billing in your dashboard and click "Upgrade Plan".'
        }
      ]
    },
    {
      category: 'API',
      questions: [
        {
          question: locale === 'az' ? 'API açarımı necə əldə edə bilərəm?' : 'How do I get my API key?',
          answer: locale === 'az'
            ? 'Dashboard-da Tənzimləmələr > API Açarları bölməsinə gedin və yeni açar yaradın.'
            : 'Go to Settings > API Keys in your dashboard and generate a new key.'
        },
        {
          question: locale === 'az' ? 'API dərəcə məhdudiyyətləri nələrdir?' : 'What are the API rate limits?',
          answer: locale === 'az'
            ? 'Free plan: 100 sorğu/dəqiqə, Pro plan: 1,000 sorğu/dəqiqə, Enterprise: xüsusi limitlər.'
            : 'Free plan: 100 requests/minute, Pro plan: 1,000 requests/minute, Enterprise: custom limits.'
        }
      ]
    }
  ];

  const supportChannels = [
    {
      icon: Mail,
      title: 'Email Dəstəyi',
      description: locale === 'az' ? '24 saat ərzində cavab' : 'Response within 24 hours',
      contact: 'support@phishscope.pro',
      availability: locale === 'az' ? 'Həmişə açıq' : 'Always available'
    },
    {
      icon: MessageCircle,
      title: locale === 'az' ? 'Canlı Chat' : 'Live Chat',
      description: locale === 'az' ? 'Dərhal kömək alın' : 'Get instant help',
      contact: locale === 'az' ? 'Chat başlat' : 'Start chat',
      availability: locale === 'az' ? 'İş saatlarında' : 'Business hours'
    },
    {
      icon: Phone,
      title: locale === 'az' ? 'Telefon Dəstəyi' : 'Phone Support',
      description: locale === 'az' ? 'Pro+ planlar üçün' : 'For Pro+ plans',
      contact: '+1 (555) 123-4567',
      availability: locale === 'az' ? 'B.e - Cümə, 9-18' : 'Mon-Fri, 9-6 PST'
    }
  ];

  const resources = [
    {
      icon: Book,
      title: locale === 'az' ? 'Sənədlər' : 'Documentation',
      description: locale === 'az' ? 'Tam bələdçilər və API arayışı' : 'Complete guides and API reference',
      link: '/docs'
    },
    {
      icon: Video,
      title: locale === 'az' ? 'Video Dərslər' : 'Video Tutorials',
      description: locale === 'az' ? 'Addım-addım video bələdçilər' : 'Step-by-step video guides',
      link: '/tutorials'
    },
    {
      icon: HelpCircle,
      title: locale === 'az' ? 'Cəmiyyət Forumu' : 'Community Forum',
      description: locale === 'az' ? 'Digər istifadəçilərlə əlaqə qurun' : 'Connect with other users',
      link: '/community'
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          {locale === 'az' ? 'Kömək Mərkəzi' : 'Help Center'}
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold">
          {locale === 'az' ? 'Sizə Necə Kömək Edə Bilərik?' : 'How Can We Help You?'}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {locale === 'az' 
            ? 'Suallarınızın cavablarını tapın və ya dəstək komandamızla əlaqə saxlayın'
            : 'Find answers to your questions or contact our support team'
          }
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={locale === 'az' ? 'Sualınızı yazın...' : 'Type your question...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Support Channels */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'az' ? 'Bizimlə Əlaqə Saxlayın' : 'Get in Touch'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {locale === 'az'
              ? 'Müxtəlif dəstək kanalları vasitəsilə bizə müraciət edin'
              : 'Reach out to us through various support channels'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto">
                  <channel.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{channel.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{channel.description}</p>
                  <p className="text-sm font-medium">{channel.contact}</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{channel.availability}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'az' ? 'Tez-tez Verilən Suallar' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <Tabs defaultValue={faqs[0].category.toLowerCase()} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {faqs.map((category) => (
              <TabsTrigger key={category.category} value={category.category.toLowerCase()}>
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {filteredFaqs.map((category) => (
            <TabsContent key={category.category} value={category.category.toLowerCase()}>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Resources */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'az' ? 'Faydalı Resurslar' : 'Helpful Resources'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto">
                  <resource.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={resource.link}>
                      {locale === 'az' ? 'Bax' : 'View'}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Status */}
      <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-semibold text-green-700 dark:text-green-300">
              {locale === 'az' ? 'Bütün sistemlər fəaliyyətdə' : 'All systems operational'}
            </span>
          </div>
          <p className="text-sm text-green-600 dark:text-green-400">
            {locale === 'az' 
              ? 'Son yenilənmə: 2 dəqiqə əvvəl'
              : 'Last updated: 2 minutes ago'
            }
          </p>
          <Button variant="outline" size="sm" className="mt-4" asChild>
            <Link href="/status">
              {locale === 'az' ? 'Status səhifəsi' : 'Status Page'}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}