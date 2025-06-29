export interface User {
  id: string;
  email: string;
  subscription_tier: 'free' | 'pro' | 'team' | 'enterprise';
  created_at: string;
  locale: 'az' | 'en';
}

export interface EmailAnalysis {
  id: string;
  user_id: string;
  email_file_name: string;
  email_content: string;
  parsed_data: EmailParsedData;
  authentication_results: AuthenticationResults;
  osint_results: OSINTResults;
  ai_analysis: AIAnalysis;
  threat_score: number;
  status: 'processing' | 'completed' | 'failed';
  created_at: string;
  updated_at: string;
}

export interface EmailParsedData {
  from: string;
  to: string[];
  subject: string;
  date: string;
  reply_to?: string;
  return_path?: string;
  headers: Record<string, string>;
  body_text?: string;
  body_html?: string;
  attachments: Attachment[];
  extracted_iocs: IOC[];
}

export interface Attachment {
  filename: string;
  content_type: string;
  size: number;
  hash_md5: string;
  hash_sha256: string;
}

export interface IOC {
  type: 'ip' | 'domain' | 'url' | 'email' | 'hash';
  value: string;
  source: string;
}

export interface AuthenticationResults {
  spf: {
    pass: boolean;
    record: string;
    explanation: string;
  };
  dkim: {
    pass: boolean;
    signature: string;
    explanation: string;
  };
  dmarc: {
    pass: boolean;
    policy: string;
    explanation: string;
  };
}

export interface OSINTResults {
  ip_enrichment: IPEnrichment[];
  domain_enrichment: DomainEnrichment[];
  url_enrichment: URLEnrichment[];
}

export interface IPEnrichment {
  ip: string;
  abuse_confidence: number;
  country: string;
  isp: string;
  is_malicious: boolean;
  reports: number;
}

export interface DomainEnrichment {
  domain: string;
  reputation_score: number;
  creation_date: string;
  registrar: string;
  is_suspicious: boolean;
}

export interface URLEnrichment {
  url: string;
  verdict: string;
  screenshot_url?: string;
  threats: string[];
  categories: string[];
}

export interface AIAnalysis {
  threat_assessment: {
    risk_score: number;
    confidence: number;
    summary: string;
  };
  mitre_attack: {
    techniques: string[];
    tactics: string[];
  };
  threat_attribution: {
    campaign?: string;
    threat_actor?: string;
    confidence: number;
  };
  recommendations: string[];
  report_text: string;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  threat_actor?: string;
  first_seen: string;
  last_seen: string;
  related_analyses: string[];
  shared_iocs: IOC[];
}

export interface Translations {
  [key: string]: {
    az: string;
    en: string;
  };
}