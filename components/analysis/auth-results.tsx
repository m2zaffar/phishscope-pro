'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Info } from 'lucide-react';
import { AuthenticationResults } from '@/types';
import { useLocale } from '@/hooks/use-locale';

interface AuthResultsProps {
  results: AuthenticationResults;
}

export function AuthResults({ results }: AuthResultsProps) {
  const { locale } = useLocale();

  const AuthCard = ({ 
    title, 
    result, 
    record, 
    explanation 
  }: { 
    title: string; 
    result: boolean; 
    record: string; 
    explanation: string; 
  }) => (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-base">
          {title}
          <Badge variant={result ? 'default' : 'destructive'} className="flex items-center gap-1">
            {result ? (
              <CheckCircle className="h-3 w-3" />
            ) : (
              <XCircle className="h-3 w-3" />
            )}
            {result ? (locale === 'az' ? 'Keçdi' : 'PASS') : (locale === 'az' ? 'Uğursuz' : 'FAIL')}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm font-medium mb-1">
            {locale === 'az' ? 'Qeyd' : 'Record'}:
          </p>
          <code className="text-xs bg-muted p-2 rounded block break-all">
            {record || (locale === 'az' ? 'Mövcud deyil' : 'Not available')}
          </code>
        </div>
        <div className="flex items-start gap-2">
          <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">{explanation}</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {locale === 'az' ? 'Email Autentifikasiya Nəticələri' : 'Email Authentication Results'}
        </h3>
        <div className="flex gap-2">
          <Badge variant={results.spf.pass ? 'default' : 'secondary'}>SPF</Badge>
          <Badge variant={results.dkim.pass ? 'default' : 'secondary'}>DKIM</Badge>
          <Badge variant={results.dmarc.pass ? 'default' : 'secondary'}>DMARC</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AuthCard
          title="SPF (Sender Policy Framework)"
          result={results.spf.pass}
          record={results.spf.record}
          explanation={results.spf.explanation}
        />
        
        <AuthCard
          title="DKIM (DomainKeys Identified Mail)"
          result={results.dkim.pass}
          record={results.dkim.signature}
          explanation={results.dkim.explanation}
        />
        
        <AuthCard
          title="DMARC (Domain-based Message Authentication)"
          result={results.dmarc.pass}
          record={results.dmarc.policy}
          explanation={results.dmarc.explanation}
        />
      </div>
    </div>
  );
}