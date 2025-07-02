'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Shield, 
  Search, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle,
  ArrowRight,
  Globe,
  Lock,
  BarChart3,
  FileText
} from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';
import { t } from '@/lib/localization';

export default function FeaturesPage() {
  const { locale } = useLocale();

  const features = [
    {
      icon: Mail,
      title: t('features.emailAnalysis', locale),
      description: t('features.emailAnalysis.description', locale),
      features: [
        t('features.emailAnalysis.multipleFormatSupport', locale),
        t('features.emailAnalysis.automaticIOCextraction', locale),
        t('features.emailAnalysis.headerAnalysis', locale),
        t('features.emailAnalysis.attachmentScanning', locale)
      ]
    },
    {
      icon: Shield,
      title: t('features.authenticationValidation', locale),
      description: t('features.authenticationValidation.description', locale),
      features: [
        'SPF ' + t('features.authenticationValidation.validation', locale),
        'DKIM ' + t('features.authenticationValidation.signatureVerification', locale),
        'DMARC ' + t('features.authenticationValidation.policyCheck', locale),
        t('features.authenticationValidation.naturalLanguageExplanations', locale)
      ]
    },
    {
      icon: Search,
      title: 'OSINT ' + t('features.enrichment', locale),
      description: t('features.enrichment.description', locale),
      features: [
        'AbuseIPDB ' + t('features.enrichment.integration', locale),
        'VirusTotal ' + t('features.enrichment.scanning', locale),
        'URLScan.io ' + t('features.enrichment.analysis', locale),
        'WHOISXML ' + t('features.enrichment.data', locale)
      ]
    },
    {
      icon: Brain,
      title: 'AI ' + t('features.threatAnalysis', locale),
      description: t('features.threatAnalysis.description', locale),
      features: [
        t('features.threatAnalysis.threatScoring', locale),
        'MITRE ATT&CK ' + t('features.threatAnalysis.mapping', locale),
        t('features.threatAnalysis.campaignAttribution', locale),
        t('features.threatAnalysis.automatedReporting', locale)
      ]
    },
    {
      icon: Zap,
      title: t('features.fastResults', locale),
      description: t('features.fastResults.description', locale),
      features: [
        t('features.fastResults.realTimeAnalysis', locale),
        t('features.fastResults.parallelProcessing', locale),
        t('features.fastResults.cachingSystem', locale),
        t('features.fastResults.apiOptimization', locale)
      ]
    },
    {
      icon: Users,
      title: t('features.teamCollaboration', locale),
      description: t('features.teamCollaboration.description', locale),
      features: [
        t('features.teamCollaboration.sharedDashboard', locale),
        t('features.teamCollaboration.roleBasedAccess', locale),
        t('features.teamCollaboration.teamComments', locale),
        t('features.teamCollaboration.auditTrail', locale)
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Globe,
      title: t('features.globalThreatIntelligence', locale),
      description: t('features.globalThreatIntelligence.description', locale)
    },
    {
      icon: Lock,
      title: t('features.enterpriseSecurity', locale),
      description: t('features.enterpriseSecurity.description', locale)
    },
    {
      icon: BarChart3,
      title: t('features.analyticsDashboard', locale),
      description: t('features.analyticsDashboard.description', locale)
    },
    {
      icon: FileText,
      title: t('features.automatedReports', locale),
      description: t('features.automatedReports.description', locale)
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          {t('features.title', locale)}
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold">
          {t('features.powerfulCybersecurityTools', locale)}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('features.everythingYouNeed', locale)}
        </p>
      </div>

      {/* Main Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Features */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('features.additionalCapabilities', locale)}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('features.otherPowerfulFeatures', locale)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          {t('features.getStartedToday', locale)}
        </h2>
        <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
          {t('features.takeYourEmailSecurity', locale)}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/dashboard">
              {t('features.startFreeTrial', locale)}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
            <Link href="/contact">
              {t('features.contactSales', locale)}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}