'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Eye, BarChart3, Users, Globe, Award, ArrowRight, CheckCircle, Star, TrendingUp, Lock } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import { t } from '@/lib/localization';

export default function HomePage() {
  const { locale } = useLocale();

  const features = [
    {
      icon: Shield,
      title: t('home.features.aiSecurityAnalysis', locale),
      description: t('home.features.aiSecurityAnalysisDescription', locale),
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      title: t('home.features.realTimeSecurity', locale),
      description: t('home.features.realTimeSecurityDescription', locale),
      color: 'text-purple-600'
    },
    {
      icon: Eye,
      title: t('home.features.visibleSecurity', locale),
      description: t('home.features.visibleSecurityDescription', locale),
      color: 'text-green-600'
    },
    {
      icon: BarChart3,
      title: t('home.features.detailedReports', locale),
      description: t('home.features.detailedReportsDescription', locale),
      color: 'text-orange-600'
    }
  ];

  const stats = [
    { number: '99.9%', label: t('home.stats.accuracy', locale) },
    { number: '50K+', label: t('home.stats.emailsSecured', locale) },
    { number: '24/7', label: t('home.stats.monitoring', locale) },
    { number: '100+', label: t('home.stats.customers', locale) }
  ];

  const testimonials = [
    {
      name: 'Əli Məmmədov',
      role: t('home.testimonials.itDirector', locale),
      company: 'TechCorp',
      content: t('home.testimonials.aliMammadovContent', locale),
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: t('home.testimonials.securityConsultant', locale),
      company: 'SecureNet',
      content: t('home.testimonials.sarahJohnsonContent', locale),
      rating: 5
    },
    {
      name: 'Məryəm Əliyeva',
      role: t('home.testimonials.systemAdministrator', locale),
      company: 'DataFlow',
      content: t('home.testimonials.maryamAliyevaContent', locale),
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-12">
            {/* Main Heading */}
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <Badge variant="secondary" className="px-6 py-2 text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  <Shield className="w-4 h-4 mr-2" />
                  {t('home.platform', locale)}
                </Badge>
                <Badge variant="secondary" className="px-6 py-2 text-sm font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {t('home.accuracy', locale)}
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  {t('home.stopPhishing', locale)}
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  {t('home.attacks', locale)}
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t('home.secureEmail', locale)}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-12 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <Link href="/register" className="flex items-center space-x-3">
                  <Shield className="w-6 h-6" />
                  <span>{t('home.startFreeTrial', locale)}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-3 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 font-semibold px-12 py-6 text-lg transition-all duration-300 hover:scale-105">
                <Link href="/demo" className="flex items-center space-x-3">
                  <Eye className="w-6 h-6" />
                  <span>{t('home.watchDemo', locale)}</span>
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 pt-12">
              {/* Trust indicators removed */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                {t('home.whyPhishScopePro', locale)}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('home.whyPhishScopeProDescription', locale)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <CardHeader className="text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                {t('home.whatOurCustomersSay', locale)}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('home.leadingCompaniesWorldwideTrustUs', locale)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {t('home.secureYourSecurity', locale)}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('home.startNowAndTakeYourEmailSecurityToTheNextLevel', locale)}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-12 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <Link href="/register" className="flex items-center space-x-3">
                <Shield className="w-6 h-6" />
                <span>{t('home.startFreeTrial', locale)}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-3 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 font-semibold px-12 py-6 text-lg transition-all duration-300 hover:scale-105">
              <Link href="/contact" className="flex items-center space-x-3">
                <Users className="w-6 h-6" />
                <span>{t('home.contactSales', locale)}</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}