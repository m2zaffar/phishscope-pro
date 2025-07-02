'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Shield, AlertTriangle, MapPin, Building } from 'lucide-react';
import { OSINTResults } from '@/types';
import { useLocale } from '@/hooks/use-locale';
import { t } from '@/lib/localization';

interface OSINTEnrichmentProps {
  results: OSINTResults;
}

export function OSINTEnrichment({ results }: OSINTEnrichmentProps) {
  const { locale } = useLocale();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">
        {t('osint.results', locale)}
      </h3>

      <Tabs defaultValue="ips" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ips" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            {t('osint.ips', locale)} ({results.ip_enrichment.length})
          </TabsTrigger>
          <TabsTrigger value="domains" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            {t('osint.domains', locale)} ({results.domain_enrichment.length})
          </TabsTrigger>
          <TabsTrigger value="urls" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            {t('osint.urls', locale)} ({results.url_enrichment.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ips" className="space-y-4">
          {results.ip_enrichment.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center text-muted-foreground">
                {t('osint.noIpData', locale)}
              </CardContent>
            </Card>
          ) : (
            results.ip_enrichment.map((ip, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="font-mono text-base">{ip.ip}</span>
                    <div className="flex gap-2">
                      <Badge variant={ip.is_malicious ? 'destructive' : 'default'}>
                        {ip.is_malicious 
                          ? t('osint.malicious', locale)
                          : t('osint.clean', locale)
                        }
                      </Badge>
                      <Badge variant="outline">
                        {ip.abuse_confidence}% {t('osint.confidence', locale)}
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{ip.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{ip.isp}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {ip.reports} {t('osint.reports', locale)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="domains" className="space-y-4">
          {results.domain_enrichment.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center text-muted-foreground">
                {t('osint.noDomainData', locale)}
              </CardContent>
            </Card>
          ) : (
            results.domain_enrichment.map((domain, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="font-mono text-base">{domain.domain}</span>
                    <div className="flex gap-2">
                      <Badge variant={domain.is_suspicious ? 'destructive' : 'default'}>
                        {domain.is_suspicious 
                          ? t('osint.suspicious', locale)
                          : t('osint.clean', locale)
                        }
                      </Badge>
                      <Badge variant="outline">
                        {domain.reputation_score}/100
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium">
                        {t('osint.created', locale)}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {new Date(domain.creation_date).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">
                        {t('osint.registrar', locale)}
                      </span>
                      <p className="text-sm text-muted-foreground">{domain.registrar}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="urls" className="space-y-4">
          {results.url_enrichment.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center text-muted-foreground">
                {t('osint.noUrlData', locale)}
              </CardContent>
            </Card>
          ) : (
            results.url_enrichment.map((url, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="font-mono text-sm break-all">{url.url}</span>
                    <Badge variant={url.verdict === 'malicious' ? 'destructive' : 'default'}>
                      {url.verdict}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {url.threats.length > 0 && (
                    <div>
                      <span className="text-sm font-medium">
                        {t('osint.threats', locale)}
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {url.threats.map((threat, i) => (
                          <Badge key={i} variant="destructive" className="text-xs">
                            {threat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {url.categories.length > 0 && (
                    <div>
                      <span className="text-sm font-medium">
                        {t('osint.categories', locale)}
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {url.categories.map((category, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {url.screenshot_url && (
                    <div>
                      <span className="text-sm font-medium">
                        {t('osint.screenshot', locale)}
                      </span>
                      <img 
                        src={url.screenshot_url} 
                        alt="URL Screenshot" 
                        className="mt-2 max-w-full h-32 object-cover rounded border"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}