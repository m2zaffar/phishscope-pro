'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Target, Award, Globe, Zap, Lock, BarChart3, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';
import { t } from '@/lib/localization';

export default function AboutPage() {
  const { locale } = useLocale();
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const stats = [
    {
      number: '10M+',
      label: t('about.stats.emailsAnalyzed', locale),
      icon: Mail
    },
    {
      number: '99.9%',
      label: t('about.stats.accuracyRate', locale),
      icon: Target
    },
    {
      number: '500+',
      label: t('about.stats.happyCustomers', locale),
      icon: Users
    },
    {
      number: '24/7',
      label: t('about.stats.support', locale),
      icon: Phone
    }
  ];

  const team = [
    {
      name: 'Elmar Hüseynov',
      role: t('about.team.ceo.role', locale),
      bio: t('about.team.ceo.bio', locale),
      image: '/team/ceo.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Vüsal Əhmədov',
      role: t('about.team.cto.role', locale),
      bio: t('about.team.cto.bio', locale),
      image: '/team/cto.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Tural Məmmədov',
      role: t('about.team.cpo.role', locale),
      bio: t('about.team.cpo.bio', locale),
      image: '/team/cpo.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Rəşad Qurbanov',
      role: t('about.team.cso.role', locale),
      bio: t('about.team.cso.bio', locale),
      image: '/team/cso.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: t('about.values.security', locale),
      description: t('about.values.securityDescription', locale)
    },
    {
      icon: Target,
      title: t('about.values.accuracy', locale),
      description: t('about.values.accuracyDescription', locale)
    },
    {
      icon: Zap,
      title: t('about.values.speed', locale),
      description: t('about.values.speedDescription', locale)
    },
    {
      icon: Users,
      title: t('about.values.team', locale),
      description: t('about.values.teamDescription', locale)
    }
  ];

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">
              {t('about.title', locale)}
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('about.futureOfEmailSecurity', locale)}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.description', locale)}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              {t('about.mission', locale)}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('about.missionDescription', locale)}
            </p>
            <div className="flex items-center space-x-4">
              <Button asChild>
                <Link href="/demo">
                  {t('about.watchDemo', locale)}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">
                  {t('about.contactUs', locale)}
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-green-500" />
                  <span className="font-semibold">
                    {t('about.secureEmail', locale)}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">
                      {t('about.aiThreatAnalysis', locale)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">
                      {t('about.realTimeAlerts', locale)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">
                      {t('about.osintIntegration', locale)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t('about.ourValues', locale)}
          </h2>
          <p className="text-muted-foreground">
            {t('about.corePrinciples', locale)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <value.icon className="h-10 w-10 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t('about.leadershipTeam', locale)}
          </h2>
          <p className="text-muted-foreground">
            {t('about.experiencedProfessionals', locale)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {!imageErrors[index] ? (
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${index + 10}.jpg`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex items-center justify-center space-x-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={member.linkedin}>
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={member.twitter}>
                      <Twitter className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">
                {t('about.getInTouch', locale)}
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                {t('about.emailSecurityQuestions', locale)}
              </p>
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>info@phishscope.pro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Bakı, Azərbaycan</span>
                </div>
              </div>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  {t('about.sendMessage', locale)}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}