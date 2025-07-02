'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, AlertTriangle, Clock, Activity, Server, Database, Globe } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import { t } from '@/lib/localization';

export default function StatusPage() {
  const { locale } = useLocale();

  const services = [
    {
      name: t('status.emailAnalysis', locale),
      status: 'operational',
      uptime: '99.99%',
      responseTime: '120ms',
      icon: Shield
    },
    {
      name: t('status.aiThreatDetection', locale),
      status: 'operational',
      uptime: '99.95%',
      responseTime: '250ms',
      icon: Activity
    },
    {
      name: t('status.osintIntegration', locale),
      status: 'operational',
      uptime: '99.90%',
      responseTime: '180ms',
      icon: Globe
    },
    {
      name: t('status.apiService', locale),
      status: 'operational',
      uptime: '99.98%',
      responseTime: '85ms',
      icon: Server
    },
    {
      name: t('status.database', locale),
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      icon: Database
    },
    {
      name: t('status.notificationSystem', locale),
      status: 'operational',
      uptime: '99.85%',
      responseTime: '200ms',
      icon: Clock
    }
  ];

  const incidents = [
    {
      title: t('status.plannedMaintenance', locale),
      description: t('status.plannedMaintenanceDescription', locale),
      status: 'resolved',
      date: '2024-01-10',
      duration: t('status.plannedMaintenanceDuration', locale)
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
        return t('status.operational', locale);
      case 'degraded':
        return t('status.degraded', locale);
      case 'outage':
        return t('status.outage', locale);
      default:
        return t('status.unknown', locale);
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
              {t('status.systemStatus', locale)}
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('status.serviceStatus', locale)}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('status.serviceStatusDescription', locale)}
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
                  {t('status.allSystemsOperational', locale)}
                </h2>
              </div>
              <p className="text-green-100 text-lg">
                {t('status.allSystemsOperationalDescription', locale)}
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{t('status.lastUpdated', locale)} 2 dəqiqə əvvəl</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4" />
                  <span>{t('status.overallUptime', locale)} 99.95%</span>
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
            {t('status.serviceStatus', locale)}
          </h2>
          <p className="text-muted-foreground">
            {t('status.serviceStatusDetailedDescription', locale)}
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
                    <span className="text-muted-foreground">{t('status.uptime', locale)}</span>
                    <span className="font-medium">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('status.responseTime', locale)}</span>
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
            {t('status.recentIncidents', locale)}
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
                            {t('status.resolved', locale)}
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
                  {t('status.noRecentIncidents', locale)}
                </h3>
                <p className="text-muted-foreground">
                  {t('status.allServicesRunningNormally', locale)}
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
                {t('status.statusHistory', locale)}
              </h2>
              <p className="text-blue-100">
                {t('status.systemPerformanceUptimeStatistics', locale)}
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">99.95%</div>
                  <div className="text-sm text-blue-100">{t('status.overallUptime', locale)}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-blue-100">{t('status.incidents', locale)}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">150ms</div>
                  <div className="text-sm text-blue-100">{t('status.avgResponseTime', locale)}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}