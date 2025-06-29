import { Translations } from '@/types';

export const translations: Translations = {
  // Navigation
  'nav.dashboard': { az: 'İdarə paneli', en: 'Dashboard' },
  'nav.analyze': { az: 'Təhlil', en: 'Analyze' },
  'nav.reports': { az: 'Hesabatlar', en: 'Reports' },
  'nav.settings': { az: 'Tənzimləmələr', en: 'Settings' },
  
  // Landing Page
  'hero.title': { 
    az: 'PhishScope Pro - Peşəkar Kibertəhlükəsizlik Platforması', 
    en: 'PhishScope Pro - Advanced Cybersecurity Platform' 
  },
  'hero.subtitle': { 
    az: 'SOC komandaları və təhlükəsizlik analitikləri üçün AI əsaslı phishing email təhlili', 
    en: 'AI-powered phishing email analysis for SOC teams and security analysts' 
  },
  'hero.cta': { az: 'Pulsuz başla', en: 'Start Free Trial' },
  
  // Features
  'features.email_parsing': { az: 'Email Təhlili', en: 'Email Parsing' },
  'features.auth_validation': { az: 'Autentifikasiya Yoxlaması', en: 'Authentication Validation' },
  'features.osint_enrichment': { az: 'OSINT Zənginləşdirmə', en: 'OSINT Enrichment' },
  'features.ai_attribution': { az: 'AI Təhdid Atributu', en: 'AI Threat Attribution' },
  
  // Analysis
  'analysis.upload_email': { az: 'Email yüklə', en: 'Upload Email' },
  'analysis.threat_score': { az: 'Təhdid səviyyəsi', en: 'Threat Score' },
  'analysis.processing': { az: 'İşlənir...', en: 'Processing...' },
  'analysis.completed': { az: 'Tamamlandı', en: 'Completed' },
  
  // Pricing
  'pricing.free': { az: 'Pulsuz', en: 'Free' },
  'pricing.pro': { az: 'Peşəkar', en: 'Pro' },
  'pricing.team': { az: 'Komanda', en: 'Team' },
  'pricing.enterprise': { az: 'Müəssisə', en: 'Enterprise' },
  
  // Common
  'common.loading': { az: 'Yüklənir...', en: 'Loading...' },
  'common.error': { az: 'Xəta', en: 'Error' },
  'common.success': { az: 'Uğurlu', en: 'Success' },
  'common.cancel': { az: 'Ləğv et', en: 'Cancel' },
  'common.save': { az: 'Saxla', en: 'Save' },
  'common.delete': { az: 'Sil', en: 'Delete' },
  'common.export': { az: 'İxrac et', en: 'Export' },
  'common.view': { az: 'Bax', en: 'View' },
};

export const getLocale = (): 'az' | 'en' => {
  if (typeof window === 'undefined') return 'en';
  
  // Check localStorage first
  const stored = localStorage.getItem('locale');
  if (stored === 'az' || stored === 'en') return stored;
  
  // Check browser locale
  const browserLocale = navigator.language.toLowerCase();
  if (browserLocale.startsWith('az')) return 'az';
  
  // Check geolocation (would need IP-based detection in real app)
  // For now, default to English
  return 'en';
};

export const setLocale = (locale: 'az' | 'en') => {
  localStorage.setItem('locale', locale);
  window.dispatchEvent(new Event('locale-change'));
};

export const t = (key: string, locale?: 'az' | 'en'): string => {
  const currentLocale = locale || getLocale();
  return translations[key]?.[currentLocale] || key;
};