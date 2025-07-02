'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, FileText, AlertTriangle, CheckCircle, Users, Globe, Mail, Phone } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';
import { t } from '@/lib/localization';

export default function TermsPage() {
  const { locale } = useLocale();

  const sections = [
    {
      title: t('terms.serviceDescription', locale),
      content: t('terms.serviceDescriptionContent', locale)
    },
    {
      title: t('terms.usageTerms', locale),
      content: t('terms.usageTermsContent', locale)
    },
    {
      title: t('terms.paymentTerms', locale),
      content: t('terms.paymentTermsContent', locale)
    },
    {
      title: t('terms.liabilityLimitations', locale),
      content: t('terms.liabilityLimitationsContent', locale)
    },
    {
      title: t('terms.userResponsibilities', locale),
      content: t('terms.userResponsibilitiesContent', locale)
    },
    {
      title: t('terms.serviceSuspension', locale),
      content: t('terms.serviceSuspensionContent', locale)
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FileText className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">
              {t('terms.termsOfService', locale)}
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('terms.serviceTerms', locale)}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('terms.termsOfServiceDescription', locale)}
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <span>{t('terms.lastUpdated', locale)}</span>
            <span>2024 yanvar 15</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Important Notice */}
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {t('terms.importantNotice', locale)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('terms.importantNoticeDescription', locale)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Overview */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto" />
                  <h3 className="font-semibold">{t('terms.security', locale)}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('terms.aiProtection', locale)}
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto" />
                  <h3 className="font-semibold">{t('terms.reliability', locale)}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('terms.uptime', locale)}
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <Users className="h-8 w-8 text-purple-600 mx-auto" />
                  <h3 className="font-semibold">{t('terms.support', locale)}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('terms.support', locale)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          {sections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{section.content}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* Trial and Subscription Terms */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {t('terms.trialAndSubscription', locale)}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">{t('terms.freeTrial', locale)}</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• {t('terms.sevenDayTrial', locale)}</li>
                        <li>• {t('terms.noCreditCard', locale)}</li>
                        <li>• {t('terms.cancelAnytime', locale)}</li>
                        <li>• {t('terms.fullFeatures', locale)}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">{t('terms.subscription', locale)}</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• {t('terms.autoRenewal', locale)}</li>
                        <li>• {t('terms.guarantee', locale)}</li>
                        <li>• {t('terms.changeAnytime', locale)}</li>
                        <li>• {t('terms.moneyBack', locale)}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prohibited Activities */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-200 dark:border-red-800">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {t('terms.prohibitedActivities', locale)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t('terms.prohibitedActivitiesDescription', locale)}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-1">
                      <li>• {t('terms.illegalContent', locale)}</li>
                      <li>• {t('terms.serviceDisruption', locale)}</li>
                      <li>• {t('terms.accountSharing', locale)}</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• {t('terms.automatedAttacks', locale)}</li>
                      <li>• {t('terms.dataManipulation', locale)}</li>
                      <li>• {t('terms.licenseViolation', locale)}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">
                  {t('terms.haveQuestions', locale)}
                </h3>
                <p className="text-blue-100">
                  {t('terms.haveQuestionsDescription', locale)}
                </p>
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>legal@phishscope.pro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="secondary" asChild>
                    <Link href="/contact">
                      {t('terms.contactUs', locale)}
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                    <Link href="/privacy">
                      {t('terms.privacyPolicy', locale)}
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 