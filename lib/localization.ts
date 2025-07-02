import { Translations } from '@/types';

export const translations: Translations = {
  // Navigation
  'nav.dashboard': { az: 'İdarə paneli', en: 'Dashboard', tr: 'Kontrol Paneli' },
  'nav.analyze': { az: 'Təhlil', en: 'Analyze', tr: 'Analiz' },
  'nav.reports': { az: 'Hesabatlar', en: 'Reports', tr: 'Raporlar' },
  'nav.settings': { az: 'Tənzimləmələr', en: 'Settings', tr: 'Ayarlar' },
  
  // Landing Page
  'hero.title': { 
    az: 'PhishScope Pro - Peşəkar Kibertəhlükəsizlik Platforması', 
    en: 'PhishScope Pro - Advanced Cybersecurity Platform',
    tr: 'PhishScope Pro - Gelişmiş Siber Güvenlik Platformu' 
  },
  'hero.subtitle': { 
    az: 'SOC komandaları və təhlükəsizlik analitikləri üçün AI əsaslı phishing email təhlili', 
    en: 'AI-powered phishing email analysis for SOC teams and security analysts',
    tr: 'SOC ekipleri ve güvenlik analistleri için yapay zeka destekli phishing e-posta analizi' 
  },
  'hero.cta': { az: 'Pulsuz başla', en: 'Start Free Trial', tr: 'Ücretsiz Başla' },
  
  // Features
  'features.email_parsing': { az: 'Email Təhlili', en: 'Email Parsing', tr: 'E-posta Analizi' },
  'features.auth_validation': { az: 'Autentifikasiya Yoxlaması', en: 'Authentication Validation', tr: 'Kimlik Doğrulama Doğrulaması' },
  'features.osint_enrichment': { az: 'OSINT Zənginləşdirmə', en: 'OSINT Enrichment', tr: 'OSINT Zenginleştirme' },
  'features.ai_attribution': { az: 'AI Təhdid Atributu', en: 'AI Threat Attribution', tr: 'Yapay Zeka Tehdit Ataması' },
  
  // Analysis
  'analysis.upload_email': { az: 'Email yüklə', en: 'Upload Email', tr: 'E-posta Yükle' },
  'analysis.threat_score': { az: 'Təhdid səviyyəsi', en: 'Threat Score', tr: 'Tehdit Skoru' },
  'analysis.processing': { az: 'İşlənir...', en: 'Processing...', tr: 'İşleniyor...' },
  'analysis.completed': { az: 'Tamamlandı', en: 'Completed', tr: 'Tamamlandı' },
  
  // Pricing
  'pricing.free': { az: 'Pulsuz', en: 'Free', tr: 'Ücretsiz' },
  'pricing.pro': { az: 'Peşəkar', en: 'Pro', tr: 'Pro' },
  'pricing.team': { az: 'Komanda', en: 'Team', tr: 'Takım' },
  'pricing.enterprise': { az: 'Müəssisə', en: 'Enterprise', tr: 'Kurumsal' },
  
  // Common
  'common.loading': { az: 'Yüklənir...', en: 'Loading...', tr: 'Yükleniyor...' },
  'common.error': { az: 'Xəta', en: 'Error', tr: 'Hata' },
  'common.success': { az: 'Uğurlu', en: 'Success', tr: 'Başarılı' },
  'common.cancel': { az: 'Ləğv et', en: 'Cancel', tr: 'İptal' },
  'common.save': { az: 'Saxla', en: 'Save', tr: 'Kaydet' },
  'common.delete': { az: 'Sil', en: 'Delete', tr: 'Sil' },
  'common.export': { az: 'İxrac et', en: 'Export', tr: 'Dışa Aktar' },
  'common.view': { az: 'Bax', en: 'View', tr: 'Görüntüle' },
};

export const getLocale = (): 'az' | 'en' | 'tr' => {
  if (typeof window === 'undefined') return 'en';
  
  // Check localStorage first
  const stored = localStorage.getItem('locale');
  if (stored === 'az' || stored === 'en' || stored === 'tr') return stored as 'az' | 'en' | 'tr';
  
  // Check browser locale
  const browserLocale = navigator.language.toLowerCase();
  if (browserLocale.startsWith('az')) return 'az';
  if (browserLocale.startsWith('tr')) return 'tr';
  
  // Check geolocation (would need IP-based detection in real app)
  // For now, default to English
  return 'en';
};

export const setLocale = (locale: 'az' | 'en' | 'tr') => {
  localStorage.setItem('locale', locale);
  window.dispatchEvent(new Event('locale-change'));
};

export const t = (key: string, locale?: 'az' | 'en' | 'tr'): string => {
  const currentLocale = locale || getLocale();
  return translations[key]?.[currentLocale] || key;
};