'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Heart, Zap, Globe } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';
import { t } from '@/lib/localization';

export default function CareersPage() {
  const { locale } = useLocale();

  const benefits = [
    {
      icon: Heart,
      title: t('careers.health_insurance', locale),
      description: t('careers.health_insurance_description', locale)
    },
    {
      icon: Clock,
      title: t('careers.flexible_hours', locale),
      description: t('careers.flexible_hours_description', locale)
    },
    {
      icon: Globe,
      title: t('careers.remote_work', locale),
      description: t('careers.remote_work_description', locale)
    },
    {
      icon: Zap,
      title: t('careers.professional_growth', locale),
      description: t('careers.professional_growth_description', locale)
    },
    {
      icon: Users,
      title: t('careers.team_culture', locale),
      description: t('careers.team_culture_description', locale)
    }
  ];

  const openPositions = [
    {
      title: 'Senior Security Engineer',
      department: t('careers.engineering', locale),
      location: t('careers.san_francisco_remote', locale),
      type: t('careers.full_time', locale),
      description: t('careers.senior_security_engineer_description', locale)
    },
    {
      title: 'Product Manager',
      department: t('careers.product', locale),
      location: t('careers.san_francisco_remote', locale),
      type: t('careers.full_time', locale),
      description: t('careers.product_manager_description', locale)
    },
    {
      title: 'DevOps Engineer',
      department: t('careers.engineering', locale),
      location: t('careers.remote', locale),
      type: t('careers.full_time', locale),
      description: t('careers.devops_engineer_description', locale)
    },
    {
      title: 'Sales Development Representative',
      department: t('careers.sales', locale),
      location: t('careers.san_francisco_remote', locale),
      type: t('careers.full_time', locale),
      description: t('careers.sales_development_representative_description', locale)
    },
    {
      title: 'UX/UI Designer',
      department: t('careers.design', locale),
      location: t('careers.san_francisco_remote', locale),
      type: t('careers.full_time', locale),
      description: t('careers.ux_ui_designer_description', locale)
    },
    {
      title: 'Customer Success Manager',
      department: t('careers.customer_success', locale),
      location: t('careers.remote', locale),
      type: t('careers.full_time', locale),
      description: t('careers.customer_success_manager_description', locale)
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          {t('careers.careers', locale)}
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold">
          {t('careers.join_our_team', locale)}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('careers.join_our_team_description', locale)}
        </p>
      </div>

      {/* Why Join Us */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('careers.why_phishscope_pro', locale)}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('careers.why_phishscope_pro_description', locale)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('careers.open_positions', locale)}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('careers.open_positions_description', locale)}
          </p>
        </div>

        <div className="space-y-4">
          {openPositions.map((position, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{position.title}</h3>
                      <Badge variant="outline">{position.department}</Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">{position.description}</p>
                  </div>
                  
                  <Button asChild>
                    <Link href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {t('careers.apply_now', locale)}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Company Culture */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            {t('careers.company_culture', locale)}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('careers.company_culture_description', locale)}
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">
                  {t('careers.innovation', locale)}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('careers.innovation_description', locale)}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">
                  {t('careers.collaboration', locale)}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('careers.collaboration_description', locale)}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">
                  {t('careers.growth', locale)}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('careers.growth_description', locale)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
            <Users className="h-16 w-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              {t('careers.join_our_team', locale)}
            </h3>
            <p className="mb-6">
              {t('careers.join_our_team_description', locale)}
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm opacity-90">
                  {t('careers.employees', locale)}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">
                  {t('careers.countries', locale)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          {t('careers.dont_see_position', locale)}
        </h2>
        <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
          {t('careers.dont_see_position_description', locale)}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              {t('careers.send_resume', locale)}
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
            <Link href="/about">
              {t('careers.learn_about_us', locale)}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}