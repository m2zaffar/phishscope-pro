'use client';

import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

export function Footer() {
  const { locale } = useLocale();

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: locale === 'az' ? 'Məhsul' : 'Product',
      links: [
        { name: locale === 'az' ? 'Funksiyalar' : 'Features', href: '/features' },
        { name: locale === 'az' ? 'Qiymətlər' : 'Pricing', href: '/pricing' },
        { name: locale === 'az' ? 'Demo' : 'Demo', href: '/demo' },
        { name: locale === 'az' ? 'API' : 'API', href: '/api' },
        { name: locale === 'az' ? 'Sənədlər' : 'Documentation', href: '/docs' }
      ]
    },
    {
      title: locale === 'az' ? 'Şirkət' : 'Company',
      links: [
        { name: locale === 'az' ? 'Haqqımızda' : 'About', href: '/about' },
        { name: locale === 'az' ? 'Karyera' : 'Careers', href: '/careers' },
        { name: locale === 'az' ? 'Əlaqə' : 'Contact', href: '/contact' },
        { name: locale === 'az' ? 'Status' : 'Status', href: '/status' },
        { name: locale === 'az' ? 'Blog' : 'Blog', href: '/blog' }
      ]
    },
    {
      title: locale === 'az' ? 'Dəstək' : 'Support',
      links: [
        { name: locale === 'az' ? 'Kömək Mərkəzi' : 'Help Center', href: '/help' },
        { name: locale === 'az' ? 'Texniki Dəstək' : 'Technical Support', href: '/support' },
        { name: locale === 'az' ? 'Təlimlər' : 'Training', href: '/training' },
        { name: locale === 'az' ? 'İcma' : 'Community', href: '/community' },
        { name: locale === 'az' ? 'Təhlükəsizlik' : 'Security', href: '/security' }
      ]
    },
    {
      title: locale === 'az' ? 'Hüquqi' : 'Legal',
      links: [
        { name: locale === 'az' ? 'İstifadə Şərtləri' : 'Terms of Service', href: '/terms' },
        { name: locale === 'az' ? 'Gizlilik Siyasəti' : 'Privacy Policy', href: '/privacy' },
        { name: locale === 'az' ? 'Cookie Siyasəti' : 'Cookie Policy', href: '/cookies' },
        { name: locale === 'az' ? 'Lisenziya' : 'License', href: '/license' },
        { name: locale === 'az' ? 'GDPR' : 'GDPR', href: '/gdpr' }
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
              <span>{locale === 'az' ? 'Dil:' : 'Language:'}</span>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 hover:text-white transition-colors">
                  <span className="text-lg">🇦🇿</span>
                  <span>Azərbaycan</span>
                </button>
                <span>|</span>
                <button className="flex items-center space-x-1 hover:text-white transition-colors">
                  <span className="text-lg">🇺🇸</span>
                  <span>English</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} PhishScope Pro. {locale === 'az' ? 'Bütün hüquqlar qorunur.' : 'All rights reserved.'}
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                {locale === 'az' ? 'İstifadə Şərtləri' : 'Terms of Service'}
              </Link>
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                {locale === 'az' ? 'Gizlilik Siyasəti' : 'Privacy Policy'}
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-white transition-colors">
                {locale === 'az' ? 'Cookie Siyasəti' : 'Cookie Policy'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}