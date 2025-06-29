'use client';

import { useState, useEffect } from 'react';
import { getLocale, setLocale as setGlobalLocale } from '@/lib/localization';

export const useLocale = () => {
  const [locale, setLocaleState] = useState<'az' | 'en'>('en');

  useEffect(() => {
    const currentLocale = getLocale();
    setLocaleState(currentLocale);

    const handleLocaleChange = () => {
      const newLocale = getLocale();
      setLocaleState(newLocale);
    };

    window.addEventListener('locale-change', handleLocaleChange);
    return () => window.removeEventListener('locale-change', handleLocaleChange);
  }, []);

  const setLocale = (newLocale: 'az' | 'en') => {
    setGlobalLocale(newLocale);
    setLocaleState(newLocale);
  };

  return { locale, setLocale };
};