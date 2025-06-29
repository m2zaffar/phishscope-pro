'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Heart, Zap, Globe } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';

export default function CareersPage() {
  const { locale } = useLocale();

  const benefits = [
    {
      icon: Heart,
      title: locale === 'az' ? 'Sağlamlıq Sığortası' : 'Health Insurance',
      description: locale === 'az' ? 'Tam sağlamlıq, diş və göz sığortası' : 'Full health, dental, and vision coverage'
    },
    {
      icon: Clock,
      title: locale === 'az' ? 'Çevik İş Saatları' : 'Flexible Hours',
      description: locale === 'az' ? 'İş-həyat balansı üçün çevik iş saatları' : 'Flexible working hours for work-life balance'
    },
    {
      icon: Globe,
      title: locale === 'az' ? 'Uzaqdan İş' : 'Remote Work',
      description: locale === 'az' ? 'Tam uzaqdan və ya hibrid iş imkanları' : 'Full remote or hybrid work options'
    },
    {
      icon: Zap,
      title: locale === 'az' ? 'Peşəkar İnkişaf' : 'Professional Growth',
      description: locale === 'az' ? 'Təlim və sertifikat proqramları' : 'Training and certification programs'
    },
    {
      icon: Users,
      title: locale === 'az' ? 'Komanda Mədəniyyəti' : 'Team Culture',
      description: locale === 'az' ? 'İnklüziv və dəstəkləyici iş mühiti' : 'Inclusive and supportive work environment'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Security Engineer',
      department: locale === 'az' ? 'Mühəndislik' : 'Engineering',
      location: locale === 'az' ? 'San Francisco / Uzaqdan' : 'San Francisco / Remote',
      type: locale === 'az' ? 'Tam vaxt' : 'Full-time',
      description: locale === 'az' 
        ? 'Email təhlükəsizlik sistemləri və AI alqoritmlərinin inkişafı'
        : 'Develop email security systems and AI algorithms'
    },
    {
      title: 'Product Manager',
      department: locale === 'az' ? 'Məhsul' : 'Product',
      location: locale === 'az' ? 'San Francisco / Uzaqdan' : 'San Francisco / Remote',
      type: locale === 'az' ? 'Tam vaxt' : 'Full-time',
      description: locale === 'az' 
        ? 'Məhsul strategiyası və roadmap idarəetməsi'
        : 'Lead product strategy and roadmap management'
    },
    {
      title: 'DevOps Engineer',
      department: locale === 'az' ? 'Mühəndislik' : 'Engineering',
      location: locale === 'az' ? 'Uzaqdan' : 'Remote',
      type: locale === 'az' ? 'Tam vaxt' : 'Full-time',
      description: locale === 'az' 
        ? 'Cloud infrastrukturu və CI/CD pipeline-ların idarəetməsi'
        : 'Manage cloud infrastructure and CI/CD pipelines'
    },
    {
      title: 'Sales Development Representative',
      department: locale === 'az' ? 'Satış' : 'Sales',
      location: locale === 'az' ? 'San Francisco / Uzaqdan' : 'San Francisco / Remote',
      type: locale === 'az' ? 'Tam vaxt' : 'Full-time',
      description: locale === 'az'
        ? 'Yeni müştəri imkanlarının aşkarlanması və inkişafı'
        : 'Identify and develop new customer opportunities'
    },
    {
      title: 'UX/UI Designer',
      department: locale === 'az' ? 'Dizayn' : 'Design',
      location: locale === 'az' ? 'San Francisco / Uzaqdan' : 'San Francisco / Remote',
      type: locale === 'az' ? 'Tam vaxt' : 'Full-time',
      description: locale === 'az'
        ? 'İstifadəçi təcrübəsi və interfeys dizaynı'
        : 'Design user experience and interface'
    },
    {
      title: 'Customer Success Manager',
      department: locale === 'az' ? 'Müştəri Uğuru' : 'Customer Success',
      location: locale === 'az' ? 'Uzaqdan' : 'Remote',
      type: locale === 'az' ? 'Tam vaxt' : 'Full-time',
      description: locale === 'az'
        ? 'Müştəri məmnuniyyəti və uğurunun təmin edilməsi'
        : 'Ensure customer satisfaction and success'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          {locale === 'az' ? 'Karyera' : 'Careers'}
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold">
          {locale === 'az' ? 'Bizimlə Qoşulun' : 'Join Our Team'}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {locale === 'az' 
            ? 'Kibertəhlükəsizliyin gələcəyini qurmaq üçün istedadlı mütəxəssislər axtarırıq'
            : 'We are looking for talented professionals to help build the future of cybersecurity'
          }
        </p>
      </div>

      {/* Why Join Us */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'az' ? 'Niyə PhishScope Pro?' : 'Why PhishScope Pro?'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {locale === 'az'
              ? 'Innovativ mühitdə çalışın və kibertəhlükəsizlik sahəsində fərq yaradın'
              : 'Work in an innovative environment and make a difference in cybersecurity'
            }
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
            {locale === 'az' ? 'Açıq Vəzifələr' : 'Open Positions'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {locale === 'az'
              ? 'Sizə uyğun vəzifəni tapın və karyeranızı bizimləbirgə inkişaf etdirin'
              : 'Find the right position for you and grow your career with us'
            }
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
                      {locale === 'az' ? 'Müraciət et' : 'Apply Now'}
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
            {locale === 'az' ? 'Şirkət Mədəniyyəti' : 'Company Culture'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {locale === 'az' 
              ? 'Biz müxtəliflik, inklüzivlik və innovasiyanı dəyərləndirən bir mədəniyyət qurmuşuq. Hər kəsin fikrini dinləyir və hər kəsin töhfəsini qiymətləndiririk.'
              : 'We have built a culture that values diversity, inclusion, and innovation. We listen to everyone and value every contribution.'
            }
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">
                  {locale === 'az' ? 'İnnovasiya' : 'Innovation'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {locale === 'az' 
                    ? 'Yeni ideyaları sınaqdan keçirmək və riskləri götürmək üçün təşviq edirik'
                    : 'We encourage testing new ideas and taking calculated risks'
                  }
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">
                  {locale === 'az' ? 'Əməkdaşlıq' : 'Collaboration'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {locale === 'az' 
                    ? 'Komanda işi və açıq ünsiyyəti prioritet edirik'
                    : 'We prioritize teamwork and open communication'
                  }
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">
                  {locale === 'az' ? 'İnkişaf' : 'Growth'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {locale === 'az' 
                    ? 'Hər kəsin peşəkar və şəxsi inkişafını dəstəkləyirik'
                    : 'We support everyone professional and personal development'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
            <Users className="h-16 w-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              {locale === 'az' ? 'Komandamıza Qoşulun' : 'Join Our Team'}
            </h3>
            <p className="mb-6">
              {locale === 'az'
                ? '50+ ölkədən 200+ əməkdaş bizimlə çalışır və kibertəhlükəsizliyin gələcəyini qurur.'
                : '200+ employees from 50+ countries work with us to build the future of cybersecurity.'
              }
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm opacity-90">
                  {locale === 'az' ? 'Əməkdaş' : 'Employees'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">
                  {locale === 'az' ? 'Ölkə' : 'Countries'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          {locale === 'az' 
            ? 'Axtardığınız vəzifəni tapmadınız?'
            : "Don't see the position you're looking for?"
          }
        </h2>
        <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
          {locale === 'az'
            ? 'Hələ də sizinlə tanış olmaq istəyirik! CV-nizi göndərin və gələcək imkanlar haqqında məlumat alın.'
            : "We'd still love to hear from you! Send us your resume and learn about future opportunities."
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              {locale === 'az' ? 'CV göndər' : 'Send Resume'}
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
            <Link href="/about">
              {locale === 'az' ? 'Şirkət haqqında' : 'Learn About Us'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}