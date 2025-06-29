'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Calendar, User, ArrowRight } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';

export default function BlogPage() {
  const { locale } = useLocale();

  const blogPosts = [
    {
      title: locale === 'az' ? '2024-də Email Təhlükəsizliyinin Gələcəyi' : 'The Future of Email Security in 2024',
      excerpt: locale === 'az' 
        ? 'AI texnologiyasının email təhlükəsizliyinə təsiri və yeni təhdidlər haqqında.'
        : 'How AI technology is impacting email security and emerging threats.',
      author: 'Elmar Hüseynov',
      date: '2024-01-15',
      readTime: locale === 'az' ? '5 dəqiqə' : '5 min read',
      category: locale === 'az' ? 'Təhlükəsizlik' : 'Security'
    },
    {
      title: locale === 'az' ? 'Phishing Hücumlarını Aşkarlamaq üçün 10 Təklif' : '10 Tips to Detect Phishing Attacks',
      excerpt: locale === 'az'
        ? 'Komandanızı phishing hücumlarından qorumaq üçün praktik məsləhətlər.'
        : 'Practical advice to protect your team from phishing attacks.',
      author: 'Günel Məmmədova',
      date: '2024-01-10',
      readTime: locale === 'az' ? '8 dəqiqə' : '8 min read',
      category: locale === 'az' ? 'Təlim' : 'Training'
    },
    {
      title: locale === 'az' ? 'OSINT və Email Analizi' : 'OSINT and Email Analysis',
      excerpt: locale === 'az'
        ? 'Açıq mənbəli kəşfiyyat məlumatlarından istifadə edərək email təhlükələrini aşkarlamaq.'
        : 'Using open-source intelligence to detect email threats.',
      author: 'Tural Qurbanov',
      date: '2024-01-05',
      readTime: locale === 'az' ? '12 dəqiqə' : '12 min read',
      category: locale === 'az' ? 'Texnologiya' : 'Technology'
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
              {locale === 'az' ? 'Blog' : 'Blog'}
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {locale === 'az' ? 'Təhlükəsizlik Məlumatları' : 'Security Insights'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {locale === 'az'
              ? 'Email təhlükəsizliyi, phishing aşkarlama və kibertəhlükəsizlik haqqında ən son məlumatlar.'
              : 'Latest insights on email security, phishing detection, and cybersecurity.'
            }
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="#" className="flex items-center space-x-1">
                      <span>{locale === 'az' ? 'Oxu' : 'Read'}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  {locale === 'az' ? 'Daha Çox Məzmun Gəlir' : 'More Content Coming'}
                </h2>
                <p className="text-blue-100">
                  {locale === 'az'
                    ? 'Tezliklə daha çox təhlükəsizlik məqalələri və təlim materialları əlavə edəcəyik.'
                    : 'We\'ll be adding more security articles and training materials soon.'
                  }
                </p>
                <Button variant="secondary" asChild>
                  <Link href="/contact">
                    {locale === 'az' ? 'Abunə Ol' : 'Subscribe'}
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