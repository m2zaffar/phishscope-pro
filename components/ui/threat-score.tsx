'use client';

import { AlertTriangle, Shield, ShieldAlert } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocale } from '@/hooks/use-locale';

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
    if (score >= 80) return locale === 'az' ? 'Yüksək təhdid' : 'High Risk';
    if (score >= 60) return locale === 'az' ? 'Orta təhdid' : 'Medium Risk';
    if (score >= 40) return locale === 'az' ? 'Aşağı təhdid' : 'Low Risk';
    return locale === 'az' ? 'Təhlükəsiz' : 'Safe';
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          {getScoreIcon(score)}
          {locale === 'az' ? 'Təhdid səviyyəsi' : 'Threat Score'}
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
          
          <Progress 
            value={score} 
            className="h-2"
            // @ts-ignore - Custom color based on score
            style={{
              '--progress-foreground': score >= 80 ? 'hsl(0 84.2% 60.2%)' : 
                                     score >= 60 ? 'hsl(25 95% 53%)' : 
                                     score >= 40 ? 'hsl(45 93% 47%)' : 
                                     'hsl(142 76% 36%)'
            } as React.CSSProperties}
          />
          
          {confidence > 0 && (
            <div className="text-xs text-muted-foreground">
              {locale === 'az' ? 'Etibar səviyyəsi' : 'Confidence'}: {confidence}%
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}