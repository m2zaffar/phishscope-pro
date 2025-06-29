'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Search, 
  Plus, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Download, 
  Trash2,
  Mail,
  Shield,
  AlertTriangle,
  TrendingUp,
  Clock
} from 'lucide-react';
import { EmailAnalysis } from '@/types';
import { useLocale } from '@/hooks/use-locale';
import { ThreatScore } from '@/components/ui/threat-score';
import { ProtectedRoute } from '@/components/auth/protected-route';

function DashboardContent() {
  const { locale } = useLocale();
  const [analyses, setAnalyses] = useState<EmailAnalysis[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'processing' | 'completed' | 'failed'>('all');

  // Mock data - in real app, this would come from Supabase
  useEffect(() => {
    const mockAnalyses: EmailAnalysis[] = [
      {
        id: '1',
        user_id: 'user1',
        email_file_name: 'suspicious_email.eml',
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
        email_file_name: 'newsletter.eml',
        email_content: '',
        parsed_data: {
          from: 'newsletter@legitimate-site.com',
          to: ['user@company.com'],
          subject: 'Weekly Security Newsletter',
          date: '2025-01-09T08:00:00Z',
          headers: {},
          attachments: [],
          extracted_iocs: []
        },
        authentication_results: {
          spf: { pass: true, record: 'v=spf1 include:_spf.legitimate-site.com ~all', explanation: 'SPF validation passed' },
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
            risk_score: 15,
            confidence: 95,
            summary: 'Legitimate newsletter from trusted source'
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
        threat_score: 15,
        status: 'completed',
        created_at: '2025-01-09T08:05:00Z',
        updated_at: '2025-01-09T08:05:15Z'
      }
    ];
    setAnalyses(mockAnalyses);
  }, []);

  const filteredAnalyses = analyses.filter(analysis => {
    const matchesSearch = analysis.email_file_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         analysis.parsed_data.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         analysis.parsed_data.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || analysis.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    totalAnalyses: analyses.length,
    highRisk: analyses.filter(a => a.threat_score >= 70).length,
    processing: analyses.filter(a => a.status === 'processing').length,
    thisWeek: analyses.filter(a => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return new Date(a.created_at) > weekAgo;
    }).length
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            {locale === 'az' ? 'İdarə paneli' : 'Dashboard'}
          </h1>
          <p className="text-muted-foreground">
            {locale === 'az' 
              ? 'Email təhlillərinizi idarə edin və nəticələri izləyin'
              : 'Manage your email analyses and track results'
            }
          </p>
        </div>
        <Button asChild>
          <Link href="/analyze">
            <Plus className="h-4 w-4 mr-2" />
            {locale === 'az' ? 'Yeni təhlil' : 'New Analysis'}
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'Ümumi təhlillər' : 'Total Analyses'}
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalAnalyses}</div>
            <p className="text-xs text-muted-foreground">
              +{stats.thisWeek} {locale === 'az' ? 'bu həftə' : 'this week'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'Yüksək risk' : 'High Risk'}
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.highRisk}</div>
            <p className="text-xs text-muted-foreground">
              {locale === 'az' ? 'təhlükəli email' : 'threat emails'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'İşlənir' : 'Processing'}
            </CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.processing}</div>
            <p className="text-xs text-muted-foreground">
              {locale === 'az' ? 'aktiv təhlil' : 'active analyses'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'Orta təhlükə' : 'Avg Threat Score'}
            </CardTitle>
            <Shield className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analyses.length > 0 
                ? Math.round(analyses.reduce((sum, a) => sum + a.threat_score, 0) / analyses.length)
                : 0
              }
            </div>
            <p className="text-xs text-muted-foreground">
              {locale === 'az' ? '0-100 skala' : '0-100 scale'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={locale === 'az' ? 'Email axtar...' : 'Search emails...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              {locale === 'az' ? 'Filter' : 'Filter'}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setFilterStatus('all')}>
              {locale === 'az' ? 'Hamısı' : 'All'}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterStatus('processing')}>
              {locale === 'az' ? 'İşlənir' : 'Processing'}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterStatus('completed')}>
              {locale === 'az' ? 'Tamamlandı' : 'Completed'}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterStatus('failed')}>
              {locale === 'az' ? 'Uğursuz' : 'Failed'}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Analyses List */}
      <div className="space-y-4">
        {filteredAnalyses.map((analysis) => (
          <Card key={analysis.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">{analysis.email_file_name}</h3>
                    <Badge variant={analysis.status === 'completed' ? 'default' : 'secondary'}>
                      {analysis.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'az' ? 'Göndərən:' : 'From:'} {analysis.parsed_data.from}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'az' ? 'Mövzu:' : 'Subject:'} {analysis.parsed_data.subject}
                  </p>
                  <div className="flex items-center space-x-4">
                    <ThreatScore score={analysis.threat_score} />
                    <span className="text-sm text-muted-foreground">
                      {new Date(analysis.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      {locale === 'az' ? 'Görüntülə' : 'View'}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="h-4 w-4 mr-2" />
                      {locale === 'az' ? 'Endir' : 'Download'}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      {locale === 'az' ? 'Sil' : 'Delete'}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute requiredFeature="dashboard">
      <DashboardContent />
    </ProtectedRoute>
  );
}