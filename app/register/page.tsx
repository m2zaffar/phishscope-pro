'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Shield, Mail, Lock, Eye, EyeOff, User, CheckCircle } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { useLocale } from '@/hooks/use-locale';
import { toast } from 'sonner';

export default function RegisterPage() {
  const { locale } = useLocale();
  const { register } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error(locale === 'az' ? 'Şifrələr uyğun gəlmir' : 'Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      toast.error(locale === 'az' ? 'Şifrə ən azı 8 simvol olmalıdır' : 'Password must be at least 8 characters');
      return;
    }

    setIsLoading(true);
    
    try {
      const success = await register(formData.email, formData.password, formData.name);
      if (success) {
        toast.success(locale === 'az' ? 'Qeydiyyat uğurla tamamlandı!' : 'Registration successful!');
        router.push('/dashboard');
      } else {
        toast.error(locale === 'az' ? 'Qeydiyyat zamanı xəta baş verdi' : 'Registration failed');
      }
    } catch (error) {
      toast.error(locale === 'az' ? 'Xəta baş verdi' : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Header */}
        <div className="text-center space-y-4">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              PhishScope Pro
            </span>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">
              {locale === 'az' ? 'Hesab yaradın' : 'Create your account'}
            </h1>
            <p className="text-muted-foreground">
              {locale === 'az' 
                ? '7 günlük pulsuz sınaq dövrü ilə başlayın'
                : 'Start with a 7-day free trial'
              }
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <Card>
          <CardHeader>
            <CardTitle>
              {locale === 'az' ? 'Qeydiyyat' : 'Sign Up'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  {locale === 'az' ? 'Ad və Soyad' : 'Full Name'}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder={locale === 'az' ? 'Ad və soyadınızı daxil edin' : 'Enter your full name'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  {locale === 'az' ? 'Email ünvanı' : 'Email address'}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder={locale === 'az' ? 'Email ünvanınızı daxil edin' : 'Enter your email'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">
                  {locale === 'az' ? 'Şifrə' : 'Password'}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder={locale === 'az' ? 'Şifrənizi daxil edin' : 'Enter your password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                  {locale === 'az' ? 'Şifrəni təsdiqləyin' : 'Confirm Password'}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder={locale === 'az' ? 'Şifrənizi təkrar daxil edin' : 'Confirm your password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading 
                  ? (locale === 'az' ? 'Qeydiyyat olunur...' : 'Creating account...')
                  : (locale === 'az' ? 'Hesab yaradın' : 'Create account')
                }
              </Button>
            </form>

            <div className="mt-6">
              <Separator className="my-4" />
              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  {locale === 'az' ? 'Artıq hesabınız var?' : 'Already have an account?'}
                </span>{' '}
                <Link href="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                  {locale === 'az' ? 'Daxil olun' : 'Sign in'}
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trial Benefits */}
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                {locale === 'az' ? 'Pulsuz sınaq dövrü' : 'Free Trial Includes'}
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li>• {locale === 'az' ? '7 günlük tam funksionallıq' : '7 days of full functionality'}</li>
              <li>• {locale === 'az' ? 'Email təhlükəsizlik analizi' : 'Email security analysis'}</li>
              <li>• {locale === 'az' ? 'OSINT inteqrasiyası' : 'OSINT integration'}</li>
              <li>• {locale === 'az' ? 'Hesabatlar və analitika' : 'Reports and analytics'}</li>
            </ul>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          <p>
            {locale === 'az' 
              ? 'Qeydiyyatdan keçməklə siz bizim'
              : 'By creating an account, you agree to our'
            }{' '}
            <Link href="/terms" className="underline hover:text-foreground">
              {locale === 'az' ? 'İstifadə Şərtləri' : 'Terms of Service'}
            </Link>{' '}
            {locale === 'az' ? 'və' : 'and'}{' '}
            <Link href="/privacy" className="underline hover:text-foreground">
              {locale === 'az' ? 'Məxfilik Siyasəti' : 'Privacy Policy'}
            </Link>
            {locale === 'az' ? ' ilə razılaşırsınız' : ''}
          </p>
        </div>
      </div>
    </div>
  );
} 