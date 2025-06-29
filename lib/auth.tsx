'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  trialEndsAt?: string;
  subscription?: {
    plan: 'trial' | 'basic' | 'pro' | 'enterprise';
    status: 'active' | 'expired' | 'cancelled';
    endsAt?: string;
  };
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  isAuthenticated: boolean;
  isTrialExpired: boolean;
  canAccessFeature: (feature: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('phishscope_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        localStorage.removeItem('phishscope_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - in real app, this would come from your backend
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: 'user',
        trialEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days trial
        subscription: {
          plan: 'trial',
          status: 'active'
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('phishscope_user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        name,
        role: 'user',
        trialEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        subscription: {
          plan: 'trial',
          status: 'active'
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('phishscope_user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('phishscope_user');
  };

  const isTrialExpired = user ? new Date(user.trialEndsAt || '') < new Date() : false;

  const canAccessFeature = (feature: string): boolean => {
    if (!user) return false;
    
    // Demo users can access dashboard and analyze once
    if (user.subscription?.plan === 'trial') {
      if (feature === 'dashboard' || feature === 'analyze') {
        return true; // Allow one-time access
      }
      return false;
    }
    
    // Paid users can access everything
    if (user.subscription?.status === 'active') {
      return true;
    }
    
    return false;
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
    register,
    isAuthenticated: !!user,
    isTrialExpired,
    canAccessFeature
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 