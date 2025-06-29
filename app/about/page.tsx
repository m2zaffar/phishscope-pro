'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Target, Award, Globe, Zap, Lock, BarChart3, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';

export default function AboutPage() {
  const { locale } = useLocale();
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const stats = [
    {
      number: '10M+',
      label: locale === 'az' ? 'Analiz Edilmiş Email' : 'Emails Analyzed',
      icon: Mail
    },
    {
      number: '99.9%',
      label: locale === 'az' ? 'Dəqiqlik Dərəcəsi' : 'Accuracy Rate',
      icon: Target
    },
    {
      number: '500+',
      label: locale === 'az' ? 'Məmnun Müştəri' : 'Happy Customers',
      icon: Users
    },
    {
      number: '24/7',
      label: locale === 'az' ? 'Dəstək' : 'Support',
      icon: Phone
    }
  ];

  const team = [
    {
      name: 'Elmar Hüseynov',
      role: locale === 'az' ? 'Baş İcraçı Direktor' : 'Chief Executive Officer',
      bio: locale === 'az' 
        ? '10+ illik təhlükəsizlik təcrübəsi ilə PhishScope Pro-nu qurdu. Əvvəllər böyük texnologiya şirkətlərində təhlükəsizlik məsləhətçisi olub.'
        : 'Founded PhishScope Pro with 10+ years of security experience. Previously worked as a security consultant for major tech companies.',
      image: '/team/ceo.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Vüsal Əhmədov',
      role: locale === 'az' ? 'Texnologiya Direktoru' : 'Chief Technology Officer',
      bio: locale === 'az'
        ? 'AI və maşın öyrənmə sahəsində mütəxəssis. Stanford Universitetində kompüter elmləri təhsili alıb.'
        : 'Expert in AI and machine learning. Studied computer science at Stanford University.',
      image: '/team/cto.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Tural Məmmədov',
      role: locale === 'az' ? 'Məhsul Direktoru' : 'Chief Product Officer',
      bio: locale === 'az'
        ? 'İstifadəçi təcrübəsi və məhsul strategiyası sahəsində 8 il təcrübə. Əvvəllər Google və Microsoft-da işləyib.'
        : '8 years of experience in user experience and product strategy. Previously worked at Google and Microsoft.',
      image: '/team/cpo.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Rəşad Qurbanov',
      role: locale === 'az' ? 'Təhlükəsizlik Direktoru' : 'Chief Security Officer',
      bio: locale === 'az'
        ? 'Siber təhlükəsizlik sahəsində 12 il təcrübə. Əvvəllər həftəlik təhlükəsizlik araşdırmaları aparıb.'
        : '12 years of experience in cybersecurity. Previously conducted weekly security research.',
      image: '/team/cso.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: locale === 'az' ? 'Təhlükəsizlik' : 'Security',
      description: locale === 'az'
        ? 'Məlumatlarınızın təhlükəsizliyi bizim ən yüksək prioritetimizdir'
        : 'Your data security is our highest priority'
    },
    {
      icon: Target,
      title: locale === 'az' ? 'Dəqiqlik' : 'Accuracy',
      description: locale === 'az'
        ? '99.9% dəqiqlik dərəcəsi ilə təhlükəli emailləri aşkarlayırıq'
        : 'We detect malicious emails with 99.9% accuracy'
    },
    {
      icon: Zap,
      title: locale === 'az' ? 'Sürət' : 'Speed',
      description: locale === 'az'
        ? 'Real-time analiz ilə dərhal nəticələr əldə edin'
        : 'Get instant results with real-time analysis'
    },
    {
      icon: Users,
      title: locale === 'az' ? 'Komanda' : 'Team',
      description: locale === 'az'
        ? 'Komandanızın təhlükəsizliyini qoruyun və əməkdaşlıq edin'
        : 'Protect your team and collaborate effectively'
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
              {locale === 'az' ? 'Haqqımızda' : 'About Us'}
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {locale === 'az' ? 'Email Təhlükəsizliyinin Gələcəyi' : 'The Future of Email Security'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {locale === 'az'
              ? 'PhishScope Pro, AI texnologiyası ilə email təhlükəsizliyini inqilab etdirən lider platformadır. Komandaların təhlükəli emailləri aşkarlamasına və qorunmasına kömək edirik.'
              : 'PhishScope Pro is the leading platform revolutionizing email security with AI technology. We help teams detect and protect against malicious emails.'
            }
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
              {locale === 'az' ? 'Missiyamız' : 'Our Mission'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === 'az'
                ? 'Hər komandanın təhlükəsiz email mühitində işləməsi üçün güclü və istifadəçi dostu həllər təqdim etmək. AI texnologiyası ilə təhlükəli emailləri real vaxtda aşkarlayırıq və komandalarınızı qoruyuruq.'
                : 'To provide powerful and user-friendly solutions for every team to work in a secure email environment. We detect malicious emails in real-time using AI technology and protect your teams.'
              }
            </p>
            <div className="flex items-center space-x-4">
              <Button asChild>
                <Link href="/demo">
                  {locale === 'az' ? 'Demo İzlə' : 'Watch Demo'}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">
                  {locale === 'az' ? 'Bizimlə Əlaqə' : 'Contact Us'}
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
                    {locale === 'az' ? 'Təhlükəsiz Email' : 'Secure Email'}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">
                      {locale === 'az' ? 'AI təhlükə analizi' : 'AI threat analysis'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">
                      {locale === 'az' ? 'Real-time bildirişlər' : 'Real-time alerts'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">
                      {locale === 'az' ? 'OSINT inteqrasiyası' : 'OSINT integration'}
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
            {locale === 'az' ? 'Dəyərlərimiz' : 'Our Values'}
          </h2>
          <p className="text-muted-foreground">
            {locale === 'az'
              ? 'Fəaliyyətimizi idarə edən əsas prinsiplər'
              : 'The core principles that guide our work'
            }
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
            {locale === 'az' ? 'Rəhbərlik Komandası' : 'Leadership Team'}
          </h2>
          <p className="text-muted-foreground">
            {locale === 'az'
              ? 'Təcrübəli mütəxəssislərdən ibarət komandamız'
              : 'Our team of experienced professionals'
            }
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
                {locale === 'az' ? 'Bizimlə Əlaqə Saxlayın' : 'Get in Touch'}
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                {locale === 'az'
                  ? 'Email təhlükəsizliyi haqqında suallarınız varsa, komandamızla əlaqə saxlayın.'
                  : 'Have questions about email security? Get in touch with our team.'
                }
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
                  {locale === 'az' ? 'Mesaj Göndər' : 'Send Message'}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}