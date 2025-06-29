'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, AlertTriangle, Clock, Activity, Server, Database, Globe } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

export default function StatusPage() {
  const { locale } = useLocale();

  const services = [
    {
      name: locale === 'az' ? 'Email Analizi' : 'Email Analysis',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '120ms',
      icon: Shield
    },
    {
      name: locale === 'az' ? 'AI Təhlükə Aşkarlama' : 'AI Threat Detection',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '250ms',
      icon: Activity
    },
    {
      name: locale === 'az' ? 'OSINT İnteqrasiyası' : 'OSINT Integration',
      status: 'operational',
      uptime: '99.90%',
      responseTime: '180ms',
      icon: Globe
    },
    {
      name: locale === 'az' ? 'API Xidməti' : 'API Service',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '85ms',
      icon: Server
    },
    {
      name: locale === 'az' ? 'Verilənlər Bazası' : 'Database',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      icon: Database
    },
    {
      name: locale === 'az' ? 'Bildiriş Sistemi' : 'Notification System',
      status: 'operational',
      uptime: '99.85%',
      responseTime: '200ms',
      icon: Clock
    }
  ];

  const incidents = [
    {
      title: locale === 'az' ? 'Planlı Texniki Xidmət' : 'Planned Maintenance',
      description: locale === 'az' 
        ? 'Sistem təkmilləşdirmələri üçün qısa müddətli texniki xidmət'
        : 'Brief maintenance for system improvements',
      status: 'resolved',
      date: '2024-01-10',
      duration: locale === 'az' ? '30 dəqiqə' : '30 minutes'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'outage':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return locale === 'az' ? 'İşləyir' : 'Operational';
      case 'degraded':
        return locale === 'az' ? 'Pislaşmış' : 'Degraded';
      case 'outage':
        return locale === 'az' ? 'Dayanıq' : 'Outage';
      default:
        return locale === 'az' ? 'Naməlum' : 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">
              {locale === 'az' ? 'Sistem Statusu' : 'System Status'}
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {locale === 'az' ? 'Xidmət Statusu' : 'Service Status'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {locale === 'az'
              ? 'PhishScope Pro xidmətlərinin real vaxt statusu və performans göstəriciləri.'
              : 'Real-time status and performance metrics for PhishScope Pro services.'
            }
          </p>
        </div>
      </div>

      {/* Overall Status */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-2xl max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-8 w-8" />
                <h2 className="text-3xl font-bold">
                  {locale === 'az' ? 'Bütün Sistemlər İşləyir' : 'All Systems Operational'}
                </h2>
              </div>
              <p className="text-green-100 text-lg">
                {locale === 'az'
                  ? 'Bütün xidmətlər normal şəkildə işləyir və istifadəçilərə xidmət göstərir.'
                  : 'All services are running normally and serving users.'
                }
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{locale === 'az' ? 'Son yenilənmə:' : 'Last updated:'} 2 dəqiqə əvvəl</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4" />
                  <span>{locale === 'az' ? 'Ümumi uptime:' : 'Overall uptime:'} 99.95%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service Status */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'az' ? 'Xidmət Statusu' : 'Service Status'}
          </h2>
          <p className="text-muted-foreground">
            {locale === 'az'
              ? 'Hər bir xidmətin detallı statusu və performans göstəriciləri'
              : 'Detailed status and performance metrics for each service'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <service.icon className="h-6 w-6 text-blue-500" />
                    <h3 className="font-semibold">{service.name}</h3>
                  </div>
                  <Badge className={getStatusColor(service.status)}>
                    {getStatusText(service.status)}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{locale === 'az' ? 'Uptime:' : 'Uptime:'}</span>
                    <span className="font-medium">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{locale === 'az' ? 'Cavab vaxtı:' : 'Response time:'}</span>
                    <span className="font-medium">{service.responseTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {locale === 'az' ? 'Son Hadisələr' : 'Recent Incidents'}
          </h2>
          
          {incidents.length > 0 ? (
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <Card key={index} className="border-l-4 border-green-500">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <h3 className="font-semibold">{incident.title}</h3>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {locale === 'az' ? 'Həll edildi' : 'Resolved'}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{incident.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{incident.date}</span>
                          <span>•</span>
                          <span>{incident.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {locale === 'az' ? 'Heç Bir Hadisə Yoxdur' : 'No Recent Incidents'}
                </h3>
                <p className="text-muted-foreground">
                  {locale === 'az'
                    ? 'Bütün xidmətlər normal şəkildə işləyir.'
                    : 'All services are running normally.'
                  }
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Status History */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">
                {locale === 'az' ? 'Status Tarixçəsi' : 'Status History'}
              </h2>
              <p className="text-blue-100">
                {locale === 'az'
                  ? 'Son 30 gün ərzində sistem performansı və uptime statistikaları.'
                  : 'System performance and uptime statistics over the last 30 days.'
                }
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">99.95%</div>
                  <div className="text-sm text-blue-100">{locale === 'az' ? 'Ümumi Uptime' : 'Overall Uptime'}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-blue-100">{locale === 'az' ? 'Hadisə' : 'Incidents'}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">150ms</div>
                  <div className="text-sm text-blue-100">{locale === 'az' ? 'Orta Cavab Vaxtı' : 'Avg Response Time'}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}