'use client';

import { AlertTriangle, Shield, ShieldAlert } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocale } from '@/hooks/use-locale';
import { t } from '@/lib/localization';

interface ThreatScoreProps {
  score: number;
  confidence?: number;
  className?: string;
}

export function ThreatScore({ score, confidence = 0, className = '' }: ThreatScoreProps) {
  const { locale } = useLocale();

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-red-500';
    if (score >= 60) return 'text-orange-500';
    if (score >= 40) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <ShieldAlert className="h-5 w-5 text-red-500" />;
    if (score >= 60) return <AlertTriangle className="h-5 w-5 text-orange-500" />;
    return <Shield className="h-5 w-5 text-green-500" />;
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return t('threatscore.high', locale);
    if (score >= 60) return t('threatscore.medium', locale);
    if (score >= 40) return t('threatscore.low', locale);
    return t('threatscore.safe', locale);
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-red-500';
    if (score >= 60) return 'bg-orange-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          {getScoreIcon(score)}
          {t('threatscore.label', locale)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
              {score}/100
            </span>
            <span className="text-sm text-muted-foreground">
              {getScoreLabel(score)}
            </span>
          </div>
          
          <div className="relative h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${getProgressColor(score)}`}
              style={{ width: `${score}%` }}
            />
          </div>
          
          {confidence > 0 && (
            <div className="text-xs text-muted-foreground">
              {t('threatscore.confidence', locale)}: {confidence}%
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}