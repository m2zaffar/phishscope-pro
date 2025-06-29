'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

export default function NotFound() {
  const { locale } = useLocale();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                <Shield className="h-16 w-16 text-white" />
              </div>
              <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg">
                4
              </div>
              <div className="absolute -bottom-4 -left-4 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg">
                4
              </div>
            </div>
          </div>

          {/* Main Content */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="pt-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <AlertTriangle className="h-8 w-8 text-orange-500" />
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {locale === 'az' ? 'Səhifə Tapılmadı' : 'Page Not Found'}
                  </h1>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    {locale === 'az' 
                      ? 'Bu səhifə hələ də inkişaf mərhələsindədir' 
                      : 'This page is still under development'
                    }
                  </h2>
                  
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    {locale === 'az'
                      ? 'Axtardığınız səhifə hələ də yaradılır və ya mövcud deyil. Tezliklə burada yeni funksiyalar olacaq!'
                      : 'The page you\'re looking for is still being built or doesn\'t exist. New features will be here soon!'
                    }
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      {locale === 'az'
                        ? '💡 Təklif: Ana səhifəyə qayıdın və mövcud funksiyalarımızı kəşf edin'
                        : '💡 Tip: Return to the homepage and explore our available features'
                      }
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg">
                    <Link href="/" className="flex items-center space-x-2">
                      <Home className="h-4 w-4" />
                      <span>{locale === 'az' ? 'Ana Səhifə' : 'Homepage'}</span>
                    </Link>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <Link href="/demo" className="flex items-center space-x-2">
                      <Search className="h-4 w-4" />
                      <span>{locale === 'az' ? 'Demo İzlə' : 'Watch Demo'}</span>
                    </Link>
                  </Button>
                </div>

                {/* Quick Links */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-muted-foreground mb-4">
                    {locale === 'az' ? 'Populyar səhifələr:' : 'Popular pages:'}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link 
                      href="/pricing" 
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      {locale === 'az' ? 'Qiymətlər' : 'Pricing'}
                    </Link>
                    <Link 
                      href="/about" 
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      {locale === 'az' ? 'Haqqımızda' : 'About'}
                    </Link>
                    <Link 
                      href="/contact" 
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      {locale === 'az' ? 'Əlaqə' : 'Contact'}
                    </Link>
                    <Link 
                      href="/features" 
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      {locale === 'az' ? 'Funksiyalar' : 'Features'}
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              {locale === 'az'
                ? 'PhishScope Pro - Email təhlükəsizliyinin gələcəyi'
                : 'PhishScope Pro - The future of email security'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 