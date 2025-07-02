'use client';

import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import { t } from '@/lib/localization';

export function Footer() {
  const { locale, setLocale } = useLocale();

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t('footer.product', locale),
      links: [
        { name: t('nav.features', locale), href: '/features' },
        { name: t('nav.pricing', locale), href: '/pricing' },
        { name: t('demo', locale), href: '/demo' },
        { name: t('api', locale), href: '/api' },
        { name: t('footer.documentation', locale), href: '/docs' }
      ]
    },
    {
      title: t('footer.company', locale),
      links: [
        { name: t('nav.about', locale), href: '/about' },
        { name: t('footer.careers', locale), href: '/careers' },
        { name: t('footer.contact', locale), href: '/contact' },
        { name: t('footer.status', locale), href: '/status' },
        { name: t('footer.blog', locale), href: '/blog' }
      ]
    },
    {
      title: t('footer.support', locale),
      links: [
        { name: t('footer.helpcenter', locale), href: '/help' },
        { name: t('footer.technicalsupport', locale), href: '/support' },
        { name: t('footer.training', locale), href: '/training' },
        { name: t('footer.community', locale), href: '/community' },
        { name: t('footer.security', locale), href: '/security' }
      ]
    },
    {
      title: t('footer.legal', locale),
      links: [
        { name: t('footer.terms', locale), href: '/terms' },
        { name: t('footer.privacy', locale), href: '/privacy' },
        { name: t('footer.cookies', locale), href: '/cookies' },
        { name: t('footer.license', locale), href: '/license' },
        { name: t('footer.gdpr', locale), href: '/gdpr' }
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">PhishScope Pro</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              {locale === 'az'
                ? 'AI texnologiyası ilə email təhlükəsizliyini inqilab etdirən lider platforma. Komandaların təhlükəli emailləri aşkarlamasına və qorunmasına kömək edirik.'
                : 'The leading platform revolutionizing email security with AI technology. We help teams detect and protect against malicious emails.'
              }
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="h-4 w-4" />
                <span>info@phishscope.pro</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span>Bakı, Azərbaycan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Security Badges */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-slate-300">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-sm">SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Shield className="h-4 w-4 text-purple-400" />
                <span className="text-sm">AES-256 Encryption</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <span>{t('footer.language', locale)}</span>
              <div className="flex items-center space-x-2">
                <button
                  className={`flex items-center space-x-1 hover:text-white transition-colors ${locale === 'az' ? 'font-bold' : ''}`}
                  onClick={() => setLocale('az')}
                >
                  <span className="text-lg">🇦🇿</span>
                  <span>Azərbaycan</span>
                </button>
                <span>|</span>
                <button
                  className={`flex items-center space-x-1 hover:text-white transition-colors ${locale === 'en' ? 'font-bold' : ''}`}
                  onClick={() => setLocale('en')}
                >
                  <span className="text-lg">🇺🇸</span>
                  <span>English</span>
                </button>
                <span>|</span>
                <button
                  className={`flex items-center space-x-1 hover:text-white transition-colors ${locale === 'tr' ? 'font-bold' : ''}`}
                  onClick={() => setLocale('tr')}
                >
                  <span className="text-lg">🇹🇷</span>
                  <span>Türkçe</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} PhishScope Pro. {t('footer.rights', locale)}
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                {t('footer.termsofservice', locale)}
              </Link>
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                {t('footer.privacypolicy', locale)}
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-white transition-colors">
                {t('footer.cookiepolicy', locale)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}