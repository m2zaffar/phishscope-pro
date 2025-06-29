'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Brain, Target, Users, Lightbulb } from 'lucide-react';
import { AIAnalysis } from '@/types';
import { ThreatScore } from '@/components/ui/threat-score';
import { useLocale } from '@/hooks/use-locale';

interface AIAnalysisProps {
  analysis: AIAnalysis;
}

export function AIAnalysisComponent({ analysis }: AIAnalysisProps) {
  const { locale } = useLocale();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Brain className="h-5 w-5 text-blue-500" />
        {locale === 'az' ? 'AI Təhdid Təhlili' : 'AI Threat Analysis'}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Threat Score */}
        <ThreatScore 
          score={analysis.threat_assessment.risk_score} 
          confidence={analysis.threat_assessment.confidence}
        />

        {/* MITRE ATT&CK */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="h-4 w-4" />
              MITRE ATT&CK
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <span className="text-xs font-medium text-muted-foreground">
                {locale === 'az' ? 'Texnikalar' : 'Techniques'}
              </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {analysis.mitre_attack.techniques.map((technique) => (
                  <Badge key={technique} variant="outline" className="text-xs">
                    {technique}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground">
                {locale === 'az' ? 'Taktikalar' : 'Tactics'}
              </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {analysis.mitre_attack.tactics.map((tactic) => (
                  <Badge key={tactic} variant="secondary" className="text-xs">
                    {tactic}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attribution */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              {locale === 'az' ? 'Təhdid Atributu' : 'Threat Attribution'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {analysis.threat_attribution.campaign && (
              <div>
                <span className="text-xs font-medium text-muted-foreground">
                  {locale === 'az' ? 'Kampaniya' : 'Campaign'}
                </span>
                <p className="text-sm font-medium">{analysis.threat_attribution.campaign}</p>
              </div>
            )}
            {analysis.threat_attribution.threat_actor && (
              <div>
                <span className="text-xs font-medium text-muted-foreground">
                  {locale === 'az' ? 'Təhdid aktoru' : 'Threat Actor'}
                </span>
                <p className="text-sm font-medium">{analysis.threat_attribution.threat_actor}</p>
              </div>
            )}
            <div>
              <span className="text-xs font-medium text-muted-foreground">
                {locale === 'az' ? 'Etibar səviyyəsi' : 'Confidence'}
              </span>
              <p className="text-sm">{analysis.threat_attribution.confidence}%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assessment Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            {locale === 'az' ? 'Təhlil xülasəsi' : 'Assessment Summary'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">{analysis.threat_assessment.summary}</p>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            {locale === 'az' ? 'Tövsiyələr' : 'Recommendations'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {analysis.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm">{recommendation}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Separator />

      {/* Full Report */}
      <Card>
        <CardHeader>
          <CardTitle>
            {locale === 'az' ? 'Detallı hesabat' : 'Detailed Report'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <pre className="whitespace-pre-wrap text-sm">{analysis.report_text}</pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}