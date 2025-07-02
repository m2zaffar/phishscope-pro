'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Calendar, User, ArrowRight } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';
import { t } from '@/lib/localization';

export default function BlogPage() {
  const { locale } = useLocale();

  const blogPosts = [
    {
      title: t('blog.future_of_email_security_in_2024', locale),
      excerpt: t('blog.how_ai_technology_is_impacting_email_security_and_emerging_threats', locale),
      author: 'Elmar Hüseynov',
      date: '2024-01-15',
      readTime: t('blog.5_minutes_read', locale),
      category: t('blog.security', locale)
    },
    {
      title: t('blog.10_tips_to_detect_phishing_attacks', locale),
      excerpt: t('blog.practical_advice_to_protect_your_team_from_phishing_attacks', locale),
      author: 'Günel Məmmədova',
      date: '2024-01-10',
      readTime: t('blog.8_minutes_read', locale),
      category: t('blog.training', locale)
    },
    {
      title: t('blog.osint_and_email_analysis', locale),
      excerpt: t('blog.using_open_source_intelligence_to_detect_email_threats', locale),
      author: 'Tural Qurbanov',
      date: '2024-01-05',
      readTime: t('blog.12_minutes_read', locale),
      category: t('blog.technology', locale)
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
              {t('blog.blog', locale)}
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('blog.security_insights', locale)}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('blog.latest_insights_on_email_security_phishing_detection_and_cybersecurity', locale)}
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
                      <span>{t('blog.read', locale)}</span>
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
                  {t('blog.more_content_coming', locale)}
                </h2>
                <p className="text-blue-100">
                  {t('blog.we_ll_be_adding_more_security_articles_and_training_materials_soon', locale)}
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