'use client';

import Link from 'next/link';
import { Shield, Menu, User, LogOut, X, Globe, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { useLocale } from '@/hooks/use-locale';
import { useAuth } from '@/lib/auth';
import { useState } from 'react';

export default function Navbar() {
  const { locale, setLocale } = useLocale();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simplified navigation items
  const navItems = user 
    ? [
        { href: '/dashboard', label: locale === 'az' ? 'Dashboard' : 'Dashboard' },
        { href: '/analyze', label: locale === 'az' ? 'Analiz' : 'Analyze' },
      ]
    : [
        { href: '/about', label: locale === 'az' ? 'Haqqımızda' : 'About' },
        { href: '/features', label: locale === 'az' ? 'Funksiyalar' : 'Features' },
        { href: '/pricing', label: locale === 'az' ? 'Qiymətlər' : 'Pricing' },
      ];

  return (
    <nav className="bg-white border-b border-gray-100 dark:bg-slate-900 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-7 w-7 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                PhishScope
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Language, Demo, Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 px-3">
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    {locale === 'az' ? 'AZ' : 'EN'}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem onClick={() => setLocale('en')}>
                  <Languages className="mr-2 h-4 w-4" />
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocale('az')}>
                  <Languages className="mr-2 h-4 w-4" />
                  Azərbaycan
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Demo Button (for unauthenticated users) */}
            {!user && (
              <Button variant="ghost" size="sm" asChild className="h-9">
                <Link href="/demo">
                  {locale === 'az' ? 'Demo' : 'Demo'}
                </Link>
              </Button>
            )}

            {/* Auth */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-9 px-3">
                    <User className="h-4 w-4 mr-2" />
                    <span className="text-sm">{user.email?.split('@')[0]}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    {locale === 'az' ? 'Çıxış' : 'Logout'}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild className="h-9">
                  <Link href="/login">
                    {locale === 'az' ? 'Daxil ol' : 'Sign in'}
                  </Link>
                </Button>
                <Button size="sm" asChild className="h-9 bg-blue-600 hover:bg-blue-700">
                  <Link href="/register">
                    {locale === 'az' ? 'Qeydiyyat' : 'Sign up'}
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden h-9 w-9 p-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-slate-800 py-4">
            <div className="space-y-4">
              {/* Navigation Links */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              {/* Language and Auth Section */}
              <div className="pt-4 border-t border-gray-100 dark:border-slate-800 space-y-3">
                {/* Language Selector */}
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <button
                    onClick={() => setLocale(locale === 'az' ? 'en' : 'az')}
                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
                  >
                    {locale === 'az' ? 'Switch to English' : 'Azərbaycan dilinə keç'}
                  </button>
                </div>

                {/* Demo Button */}
                {!user && (
                  <Button variant="ghost" size="sm" asChild className="w-full justify-start h-9">
                    <Link href="/demo">
                      {locale === 'az' ? 'Demo' : 'Demo'}
                    </Link>
                  </Button>
                )}
                
                {/* Auth Buttons */}
                {user ? (
                  <Button variant="ghost" size="sm" onClick={logout} className="w-full justify-start text-red-600 h-9">
                    <LogOut className="h-4 w-4 mr-2" />
                    {locale === 'az' ? 'Çıxış' : 'Logout'}
                  </Button>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" asChild className="flex-1 h-9">
                      <Link href="/login">
                        {locale === 'az' ? 'Daxil ol' : 'Sign in'}
                      </Link>
                    </Button>
                    <Button size="sm" asChild className="flex-1 h-9 bg-blue-600 hover:bg-blue-700">
                      <Link href="/register">
                        {locale === 'az' ? 'Qeydiyyat' : 'Sign up'}
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}