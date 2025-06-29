'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Shield, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { useLocale } from '@/hooks/use-locale';
import { toast } from 'sonner';

export default function LoginPage() {
  const { locale } = useLocale();
  const { login } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        toast.success(locale === 'az' ? 'Uğurla daxil oldunuz!' : 'Successfully logged in!');
        router.push('/dashboard');
      } else {
        toast.error(locale === 'az' ? 'Email və ya şifrə yanlışdır' : 'Invalid email or password');
      }
    } catch (error) {
      toast.error(locale === 'az' ? 'Daxil olma zamanı xəta baş verdi' : 'Login failed');
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
              {locale === 'az' ? 'Hesabınıza daxil olun' : 'Sign in to your account'}
            </h1>
            <p className="text-muted-foreground">
              {locale === 'az' 
                ? 'Email təhlükəsizlik platformasına xoş gəlmisiniz'
                : 'Welcome to the email security platform'
              }
            </p>
          </div>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>
              {locale === 'az' ? 'Daxil ol' : 'Sign In'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div className="flex items-center justify-between">
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  {locale === 'az' ? 'Şifrəni unutmusunuz?' : 'Forgot password?'}
                </Link>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading 
                  ? (locale === 'az' ? 'Daxil olunur...' : 'Signing in...')
                  : (locale === 'az' ? 'Daxil ol' : 'Sign in')
                }
              </Button>
            </form>

            <div className="mt-6">
              <Separator className="my-4" />
              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  {locale === 'az' ? 'Hesabınız yoxdur?' : "Don't have an account?"}
                </span>{' '}
                <Link href="/register" className="text-blue-600 hover:text-blue-500 font-medium">
                  {locale === 'az' ? 'Qeydiyyatdan keçin' : 'Sign up'}
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo Access */}
        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                {locale === 'az' ? 'Demo hesabı ilə sınayın' : 'Try with demo account'}
              </h3>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                {locale === 'az' 
                  ? 'Demo hesabı ilə platformanın funksiyalarını sınayın'
                  : 'Test the platform features with a demo account'
                }
              </p>
              <Button 
                variant="outline" 
                className="border-green-300 text-green-700 hover:bg-green-100"
                onClick={() => {
                  setFormData({ email: 'demo@phishscope.com', password: 'demo123' });
                }}
              >
                {locale === 'az' ? 'Demo hesabı yüklə' : 'Load demo account'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          <p>
            {locale === 'az' 
              ? 'Daxil olmaqla siz bizim'
              : 'By signing in, you agree to our'
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