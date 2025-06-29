'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  CreditCard, 
  Activity, 
  TrendingUp, 
  Search,
  MoreHorizontal,
  Ban,
  CheckCircle,
  DollarSign
} from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

interface User {
  id: string;
  email: string;
  subscription: 'free' | 'pro' | 'team' | 'enterprise';
  status: 'active' | 'suspended' | 'pending';
  created_at: string;
  last_login: string;
  analyses_count: number;
  payment_status: 'paid' | 'pending' | 'failed';
}

export default function AdminPage() {
  const { locale } = useLocale();
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Mock data - in real app, this would come from Supabase
    const mockUsers: User[] = [
      {
        id: '1',
        email: 'john.doe@company.com',
        subscription: 'pro',
        status: 'active',
        created_at: '2025-01-01T00:00:00Z',
        last_login: '2025-01-10T10:30:00Z',
        analyses_count: 45,
        payment_status: 'paid'
      },
      {
        id: '2',
        email: 'jane.smith@enterprise.com',
        subscription: 'enterprise',
        status: 'active',
        created_at: '2024-12-15T00:00:00Z',
        last_login: '2025-01-10T09:15:00Z',
        analyses_count: 234,
        payment_status: 'paid'
      },
      {
        id: '3',
        email: 'user@startup.com',
        subscription: 'free',
        status: 'active',
        created_at: '2025-01-08T00:00:00Z',
        last_login: '2025-01-09T14:20:00Z',
        analyses_count: 3,
        payment_status: 'paid'
      },
      {
        id: '4',
        email: 'team@security.com',
        subscription: 'team',
        status: 'pending',
        created_at: '2025-01-09T00:00:00Z',
        last_login: '2025-01-09T16:45:00Z',
        analyses_count: 12,
        payment_status: 'pending'
      }
    ];
    setUsers(mockUsers);
  }, []);

  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === 'active').length,
    totalRevenue: users.reduce((sum, user) => {
      const prices = { free: 0, pro: 39, team: 299, enterprise: 999 };
      return sum + prices[user.subscription];
    }, 0),
    totalAnalyses: users.reduce((sum, user) => sum + user.analyses_count, 0)
  };

  const getSubscriptionBadge = (subscription: string) => {
    const variants = {
      free: 'secondary',
      pro: 'default',
      team: 'outline',
      enterprise: 'destructive'
    } as const;
    
    return (
      <Badge variant={variants[subscription as keyof typeof variants]}>
        {subscription.toUpperCase()}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'default',
      suspended: 'destructive',
      pending: 'secondary'
    } as const;
    
    return (
      <Badge variant={variants[status as keyof typeof variants]}>
        {locale === 'az' 
          ? (status === 'active' ? 'Aktiv' : status === 'suspended' ? 'Dayandırılmış' : 'Gözləyir')
          : status.charAt(0).toUpperCase() + status.slice(1)
        }
      </Badge>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          {locale === 'az' ? 'Admin Paneli' : 'Admin Dashboard'}
        </h1>
        <p className="text-muted-foreground">
          {locale === 'az' 
            ? 'İstifadəçiləri, ödənişləri və sistem statistikalarını idarə edin'
            : 'Manage users, payments, and system statistics'
          }
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'Ümumi İstifadəçilər' : 'Total Users'}
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              {stats.activeUsers} {locale === 'az' ? 'aktiv' : 'active'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'Aylıq Gəlir' : 'Monthly Revenue'}
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue}</div>
            <p className="text-xs text-muted-foreground">
              +12% {locale === 'az' ? 'keçən aydan' : 'from last month'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'Ümumi Təhlillər' : 'Total Analyses'}
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalAnalyses}</div>
            <p className="text-xs text-muted-foreground">
              +23% {locale === 'az' ? 'bu həftə' : 'this week'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {locale === 'az' ? 'Konversiya Dərəcəsi' : 'Conversion Rate'}
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% {locale === 'az' ? 'keçən aydan' : 'from last month'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="users" className="w-full">
        <TabsList>
          <TabsTrigger value="users">
            {locale === 'az' ? 'İstifadəçilər' : 'Users'}
          </TabsTrigger>
          <TabsTrigger value="payments">
            {locale === 'az' ? 'Ödənişlər' : 'Payments'}
          </TabsTrigger>
          <TabsTrigger value="analytics">
            {locale === 'az' ? 'Analitika' : 'Analytics'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={locale === 'az' ? 'İstifadəçi axtarın...' : 'Search users...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Users Table */}
          <Card>
            <CardHeader>
              <CardTitle>
                {locale === 'az' ? 'İstifadəçi İdarəetməsi' : 'User Management'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-3">
                        <p className="font-medium">{user.email}</p>
                        {getSubscriptionBadge(user.subscription)}
                        {getStatusBadge(user.status)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>
                          {locale === 'az' ? 'Qeydiyyat' : 'Joined'}: {new Date(user.created_at).toLocaleDateString()}
                        </span>
                        <span>
                          {locale === 'az' ? 'Son giriş' : 'Last login'}: {new Date(user.last_login).toLocaleDateString()}
                        </span>
                        <span>
                          {user.analyses_count} {locale === 'az' ? 'təhlil' : 'analyses'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        {locale === 'az' ? 'Redaktə et' : 'Edit'}
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                {locale === 'az' ? 'Ödəniş İdarəetməsi' : 'Payment Management'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-medium">{user.email}</p>
                        {getSubscriptionBadge(user.subscription)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>
                          ${user.subscription === 'free' ? 0 : 
                            user.subscription === 'pro' ? 39 :
                            user.subscription === 'team' ? 299 : 999}/
                          {locale === 'az' ? 'ay' : 'month'}
                        </span>
                        <Badge variant={user.payment_status === 'paid' ? 'default' : 
                                      user.payment_status === 'pending' ? 'secondary' : 'destructive'}>
                          {user.payment_status === 'paid' ? (locale === 'az' ? 'Ödənilib' : 'Paid') :
                           user.payment_status === 'pending' ? (locale === 'az' ? 'Gözləyir' : 'Pending') :
                           (locale === 'az' ? 'Uğursuz' : 'Failed')}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {user.payment_status === 'pending' && (
                        <Button variant="outline" size="sm">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          {locale === 'az' ? 'Təsdiqlə' : 'Approve'}
                        </Button>
                      )}
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {locale === 'az' ? 'Abunəlik Paylanması' : 'Subscription Distribution'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Free</span>
                    <span className="text-sm font-medium">
                      {users.filter(u => u.subscription === 'free').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Pro</span>
                    <span className="text-sm font-medium">
                      {users.filter(u => u.subscription === 'pro').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Team</span>
                    <span className="text-sm font-medium">
                      {users.filter(u => u.subscription === 'team').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Enterprise</span>
                    <span className="text-sm font-medium">
                      {users.filter(u => u.subscription === 'enterprise').length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  {locale === 'az' ? 'Aylıq Artım' : 'Monthly Growth'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      {locale === 'az' ? 'Yeni istifadəçilər' : 'New users'}
                    </span>
                    <span className="text-sm font-medium text-green-600">+24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      {locale === 'az' ? 'Yüksəltmələr' : 'Upgrades'}
                    </span>
                    <span className="text-sm font-medium text-green-600">+8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      {locale === 'az' ? 'Ləğvetmələr' : 'Cancellations'}
                    </span>
                    <span className="text-sm font-medium text-red-600">-2</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}