'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Upload, 
  Mail, 
  Shield, 
  Search, 
  Brain, 
  AlertTriangle, 
  CheckCircle, 
  FileText,
  ArrowLeft,
  Download
} from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import { ThreatScore } from '@/components/ui/threat-score';
import { ProtectedRoute } from '@/components/auth/protected-route';

function AnalyzeContent() {
  const { locale } = useLocale();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile(file);
      startAnalysis();
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'message/rfc822': ['.eml'],
      'application/vnd.ms-outlook': ['.msg'],
      'text/plain': ['.txt']
    },
    maxFiles: 1
  });

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    
    // Simulate analysis progress
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setAnalysisComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const resetAnalysis = () => {
    setUploadedFile(null);
    setAnalysisProgress(0);
    setIsAnalyzing(false);
    setAnalysisComplete(false);
  };

  if (analysisComplete) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={resetAnalysis}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">
              {locale === 'az' ? 'Təhlil Nəticələri' : 'Analysis Results'}
            </h1>
            <p className="text-muted-foreground">
              {uploadedFile?.name}
            </p>
          </div>
          <div className="ml-auto">
            <Button>
              <Download className="h-4 w-4 mr-2" />
              {locale === 'az' ? 'Hesabat İxrac Et' : 'Export Report'}
            </Button>
          </div>
        </div>

        {/* Threat Score Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              {locale === 'az' ? 'Təhdid Qiymətləndirməsi' : 'Threat Assessment'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <ThreatScore score={85} confidence={92} />
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {locale === 'az' ? 'Təhdid Növü' : 'Threat Type'}
                  </span>
                  <p className="font-semibold text-red-600">
                    {locale === 'az' ? 'Phishing Hücumu' : 'Phishing Attack'}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {locale === 'az' ? 'Kampaniya' : 'Campaign'}
                  </span>
                  <p className="font-medium">Banking Phish Q1 2025</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {locale === 'az' ? 'MITRE ATT&CK' : 'MITRE ATT&CK'}
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <Badge variant="outline">T1566.002</Badge>
                    <Badge variant="outline">T1534</Badge>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {locale === 'az' ? 'IOC Sayı' : 'IOC Count'}
                  </span>
                  <p className="font-medium">7 {locale === 'az' ? 'indikator' : 'indicators'}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Analysis */}
        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="email">
              {locale === 'az' ? 'Email Məlumatları' : 'Email Details'}
            </TabsTrigger>
            <TabsTrigger value="auth">
              {locale === 'az' ? 'Autentifikasiya' : 'Authentication'}
            </TabsTrigger>
            <TabsTrigger value="osint">
              {locale === 'az' ? 'OSINT Məlumatları' : 'OSINT Data'}
            </TabsTrigger>
            <TabsTrigger value="ai">
              {locale === 'az' ? 'AI Təhlili' : 'AI Analysis'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  {locale === 'az' ? 'Email Başlıqları' : 'Email Headers'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {locale === 'az' ? 'Göndərən' : 'From'}
                    </span>
                    <p className="font-mono text-sm">security@fake-bank.com</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {locale === 'az' ? 'Alan' : 'To'}
                    </span>
                    <p className="font-mono text-sm">user@company.com</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {locale === 'az' ? 'Mövzu' : 'Subject'}
                    </span>
                    <p className="font-medium">Urgent: Verify Your Account</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {locale === 'az' ? 'Tarix' : 'Date'}
                    </span>
                    <p className="text-sm">2025-01-10 10:30:00 UTC</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {locale === 'az' ? 'Email Məzmunu' : 'Email Content'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm whitespace-pre-wrap">
                    Dear valued customer,

                    We have detected suspicious activity on your account. Please verify your identity immediately by clicking the link below.

                    [Verify Account]

                    If you don't take action within 24 hours, your account will be suspended.

                    Best regards,
                    Security Team
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="auth" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  {locale === 'az' ? 'Autentifikasiya Nəticələri' : 'Authentication Results'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <span className="font-medium">SPF</span>
                    <Badge variant="destructive">FAIL</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <span className="font-medium">DKIM</span>
                    <Badge variant="destructive">FAIL</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <span className="font-medium">DMARC</span>
                    <Badge variant="destructive">FAIL</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="osint" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  {locale === 'az' ? 'OSINT Məlumatları' : 'OSINT Data'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {locale === 'az' 
                    ? 'OSINT məlumatları yüklənir...'
                    : 'Loading OSINT data...'
                  }
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  {locale === 'az' ? 'AI Təhlili' : 'AI Analysis'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">
                    {locale === 'az' ? 'Təhlükə Qiymətləndirməsi' : 'Threat Assessment'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    This email exhibits multiple characteristics of a sophisticated phishing attack targeting banking credentials.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">
                    {locale === 'az' ? 'Tövsiyələr' : 'Recommendations'}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Block sender domain immediately
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Alert all users about this campaign
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Update email security policies
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          {locale === 'az' ? 'Email Təhlili' : 'Email Analysis'}
        </h1>
        <p className="text-muted-foreground">
          {locale === 'az'
            ? 'Şübhəli emailləri yükləyin və AI əsaslı təhlükə analizi əldə edin'
            : 'Upload suspicious emails and get AI-powered threat analysis'
          }
        </p>
      </div>

      {/* Upload Area */}
      <Card>
        <CardContent className="p-8">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                : 'border-muted-foreground/25 hover:border-muted-foreground/50'
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">
              {isDragActive
                ? (locale === 'az' ? 'Faylı buraya buraxın' : 'Drop the file here')
                : (locale === 'az' ? 'Email faylını yükləyin' : 'Upload email file')
              }
            </h3>
            <p className="text-muted-foreground mb-4">
              {locale === 'az'
                ? 'EML, MSG və ya TXT fayllarını dəstəkləyirik'
                : 'We support EML, MSG, and TXT files'
              }
            </p>
            <Button variant="outline">
              {locale === 'az' ? 'Fayl Seç' : 'Choose File'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              {locale === 'az' ? 'Təhlil Edilir' : 'Analyzing'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={analysisProgress} className="w-full" />
            <p className="text-sm text-muted-foreground">
              {analysisProgress}% {locale === 'az' ? 'tamamlandı' : 'complete'}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Shield className="h-8 w-8 mx-auto mb-4 text-blue-500" />
            <h3 className="font-semibold mb-2">
              {locale === 'az' ? 'Təhlükə Təsnifatı' : 'Threat Classification'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {locale === 'az'
                ? 'AI əsaslı təhlükə təsnifatı və risk qiymətləndirməsi'
                : 'AI-powered threat classification and risk assessment'
              }
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Search className="h-8 w-8 mx-auto mb-4 text-green-500" />
            <h3 className="font-semibold mb-2">
              {locale === 'az' ? 'OSINT İnteqrasiyası' : 'OSINT Integration'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {locale === 'az'
                ? 'Açıq mənbələrdən məlumat toplama və zənginləşdirmə'
                : 'Data collection and enrichment from open sources'
              }
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Brain className="h-8 w-8 mx-auto mb-4 text-purple-500" />
            <h3 className="font-semibold mb-2">
              {locale === 'az' ? 'MITRE ATT&CK' : 'MITRE ATT&CK'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {locale === 'az'
                ? 'Təhlükə texnikalarının xəritələndirilməsi'
                : 'Mapping of threat techniques and tactics'
              }
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function AnalyzePage() {
  return (
    <ProtectedRoute requiredFeature="analyze">
      <AnalyzeContent />
    </ProtectedRoute>
  );
}