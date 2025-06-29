'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  FileText, 
  Search, 
  Download, 
  Filter,
  Calendar,
  TrendingUp,
  TrendingDown,
  Shield,
  AlertTriangle
} from 'lucide-react';
import { EmailAnalysis } from '@/types';
import { useLocale } from '@/hooks/use-locale';
import { ThreatScore } from '@/components/ui/threat-score';
import { ProtectedRoute } from '@/components/auth/protected-route';

function ReportsContent() {
  const { locale } = useLocale();
  const [reports, setReports] = useState<EmailAnalysis[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - in real app, this would come from Supabase
  useEffect(() => {
    const mockReports: EmailAnalysis[] = [
      {
        id: '1',
        user_id: 'user1',
        email_file_name: 'banking_phish.eml',
        email_content: '',
        parsed_data: {
          from: 'security@fake-bank.com',
          to: ['user@company.com'],
          subject: 'Urgent: Verify Your Account',
          date: '2025-01-10T10:30:00Z',
          headers: {},
          attachments: [],
          extracted_iocs: [
            { type: 'domain', value: 'fake-bank.com', source: 'email_header' },
            { type: 'url', value: 'https://fake-bank.com/login', source: 'email_body' }
          ]
        },
        authentication_results: {
          spf: { pass: false, record: '', explanation: 'SPF record not found' },
          dkim: { pass: false, signature: '', explanation: 'DKIM signature invalid' },
          dmarc: { pass: false, policy: '', explanation: 'DMARC policy violation' }
        },
        osint_results: {
          ip_enrichment: [],
          domain_enrichment: [],
          url_enrichment: []
        },
        ai_analysis: {
          threat_assessment: {
            risk_score: 85,
            confidence: 92,
            summary: 'High-risk phishing attempt targeting banking credentials'
          },
          mitre_attack: {
            techniques: ['T1566.002'],
            tactics: ['Initial Access']
          },
          threat_attribution: {
            campaign: 'Banking Phish Q1 2025',
            confidence: 75
          },
          recommendations: ['Block sender domain', 'Alert end users'],
          report_text: 'Detailed analysis report...'
        },
        threat_score: 85,
        status: 'completed',
        created_at: '2025-01-10T10:35:00Z',
        updated_at: '2025-01-10T10:35:30Z'
      },
      {
        id: '2',
        user_id: 'user1',
        email_file_name: 'business_email_compromise.eml',
        email_content: '',
        parsed_data: {
          from: 'ceo@company-typo.com',
          to: ['finance@company.com'],
          subject: 'Urgent Wire Transfer Request',
          date: '2025-01-09T14:20:00Z',
          headers: {},
          attachments: [],
          extracted_iocs: [
            { type: 'domain', value: 'company-typo.com', source: 'email_header' }
          ]
        },
        authentication_results: {
          spf: { pass: false, record: '', explanation: 'SPF record not found' },
          dkim: { pass: false, signature: '', explanation: 'DKIM signature invalid' },
          dmarc: { pass: false, policy: '', explanation: 'DMARC policy violation' }
        },
        osint_results: {
          ip_enrichment: [],
          domain_enrichment: [],
          url_enrichment: []
        },
        ai_analysis: {
          threat_assessment: {
            risk_score: 78,
            confidence: 88,
            summary: 'Business Email Compromise attempt with CEO impersonation'
          },
          mitre_attack: {
            techniques: ['T1566.001', 'T1534'],
            tactics: ['Initial Access', 'Lateral Movement']
          },
          threat_attribution: {
            campaign: 'BEC Campaign 2025',
            confidence: 65
          },
          recommendations: ['Verify sender through alternate channel', 'Implement additional verification for financial requests'],
          report_text: 'Detailed BEC analysis...'
        },
        threat_score: 78,
        status: 'completed',
        created_at: '2025-01-09T14:25:00Z',
        updated_at: '2025-01-09T14:25:45Z'
      },
      {
        id: '3',
        user_id: 'user1',
        email_file_name: 'legitimate_newsletter.eml',
        email_content: '',
        parsed_data: {
          from: 'newsletter@securitycompany.com',
          to: ['user@company.com'],
          subject: 'Weekly Security Newsletter',
          date: '2025-01-08T08:00:00Z',
          headers: {},
          attachments: [],
          extracted_iocs: []
        },
        authentication_results: {
          spf: { pass: true, record: 'v=spf1 include:_spf.securitycompany.com ~all', explanation: 'SPF validation passed' },
          dkim: { pass: true, signature: 'valid', explanation: 'DKIM signature verified' },
          dmarc: { pass: true, policy: 'p=reject', explanation: 'DMARC policy compliant' }
        },
        osint_results: {
          ip_enrichment: [],
          domain_enrichment: [],
          url_enrichment: []
        },
        ai_analysis: {
          threat_assessment: {
            risk_score: 12,
            confidence: 96,
            summary: 'Legitimate newsletter from trusted security vendor'
          },
          mitre_attack: {
            techniques: [],
            tactics: []
          },
          threat_attribution: {
            confidence: 0
          },
          recommendations: ['No action required'],
          report_text: 'This appears to be a legitimate newsletter...'
        },
        threat_score: 12,
        status: 'completed',
        created_at: '2025-01-08T08:05:00Z',
        updated_at: '2025-01-08T08:05:15Z'
      }
    ];
    setReports(mockReports);
  }, []);

  const filteredReports = reports.filter(report => 
    report.email_file_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.parsed_data.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.parsed_data.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalReports: reports.length,
    highRisk: reports.filter(r => r.threat_score >= 70).length,
    mediumRisk: reports.filter(r => r.threat_score >= 40 && r.threat_score < 70).length,
    lowRisk: reports.filter(r => r.threat_score < 40).length,
    avgThreatScore: Math.round(reports.reduce((sum, r) => sum + r.threat_score, 0) / reports.length)
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            {locale === 'az' ? 'Hesabatlar' : 'Reports'}
          </h1>
          <p className="text-muted-foreground">
            {locale === 'az' 
              ? 'Email təhlillərinizin detallı hesabatları'
              : 'Detailed reports of your email analyses'
            }
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            {locale === 'az' ? 'Həftəlik' : 'Weekly'}
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            {locale === 'az' ? 'İxrac Et' : 'Export'}
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'Ümumi Hesabatlar' : 'Total Reports'}
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalReports}</div>
            <p className="text-xs text-muted-foreground">
              {locale === 'az' ? 'təhlil edilmiş' : 'analyzed'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'Yüksək Risk' : 'High Risk'}
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.highRisk}</div>
            <p className="text-xs text-muted-foreground">
              {locale === 'az' ? 'təhlükəli' : 'threats'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'Orta Risk' : 'Medium Risk'}
            </CardTitle>
            <Shield className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.mediumRisk}</div>
            <p className="text-xs text-muted-foreground">
              {locale === 'az' ? 'şübhəli' : 'suspicious'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'Aşağı Risk' : 'Low Risk'}
            </CardTitle>
            <Shield className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.lowRisk}</div>
            <p className="text-xs text-muted-foreground">
              {locale === 'az' ? 'təhlükəsiz' : 'safe'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'Orta Təhlükə' : 'Avg Threat'}
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.avgThreatScore}</div>
            <p className="text-xs text-muted-foreground">
              {locale === 'az' ? '0-100 skala' : '0-100 scale'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={locale === 'az' ? 'Hesabat axtar...' : 'Search reports...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          {locale === 'az' ? 'Filter' : 'Filter'}
        </Button>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {filteredReports.map((report) => (
          <Card key={report.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4">
                    <h3 className="font-semibold">{report.email_file_name}</h3>
                    <Badge variant={
                      report.threat_score >= 70 ? 'destructive' :
                      report.threat_score >= 40 ? 'secondary' : 'default'
                    }>
                      {report.threat_score >= 70 ? (locale === 'az' ? 'Yüksək Risk' : 'High Risk') :
                       report.threat_score >= 40 ? (locale === 'az' ? 'Orta Risk' : 'Medium Risk') :
                       (locale === 'az' ? 'Aşağı Risk' : 'Low Risk')}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">
                        {locale === 'az' ? 'Göndərən' : 'From'}:
                      </span>
                      <p className="font-medium">{report.parsed_data.from}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">
                        {locale === 'az' ? 'Mövzu' : 'Subject'}:
                      </span>
                      <p className="font-medium truncate">{report.parsed_data.subject}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">
                        {locale === 'az' ? 'Tarix' : 'Date'}:
                      </span>
                      <p className="font-medium">
                        {new Date(report.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <ThreatScore score={report.threat_score} className="w-full" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function ReportsPage() {
  return (
    <ProtectedRoute requiredFeature="reports">
      <ReportsContent />
    </ProtectedRoute>
  );
}