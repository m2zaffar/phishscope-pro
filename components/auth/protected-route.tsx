'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Crown } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';
import { t } from '@/lib/localization';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredFeature?: string;
  fallback?: React.ReactNode;
}

export function ProtectedRoute({ children, requiredFeature, fallback }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, canAccessFeature, isTrialExpired } = useAuth();
  const router = useRouter();
  const { locale } = useLocale();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="text-muted-foreground">
            {t('loading', locale)}
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  // Check if user has access to the required feature
  if (requiredFeature && !canAccessFeature(requiredFeature)) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Crown className="h-12 w-12 text-yellow-500" />
            </div>
            <CardTitle className="text-2xl">
              {t('premium.feature', locale)}
            </CardTitle>
            <p className="text-muted-foreground">
              {t('premium.paidRequired', locale)}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {isTrialExpired ? (
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-sm text-red-800 dark:text-red-200">
                  {t('premium.trialExpired', locale)}
                </p>
              </div>
            ) : (
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  {t('premium.limitedAccess', locale)}
                </p>
              </div>
            )}
            
            <div className="flex flex-col space-y-2">
              <Button asChild>
                <Link href="/pricing">
                  {t('premium.viewPlans', locale)}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard">
                  {t('premium.backToDashboard', locale)}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}

// Higher-order component for protecting pages
export function withAuth<P extends object>(
  Component: React.ComponentType<P>,
  requiredFeature?: string
) {
  return function AuthenticatedComponent(props: P) {
    return (
      <ProtectedRoute requiredFeature={requiredFeature}>
        <Component {...props} />
      </ProtectedRoute>
    );
  };
} 