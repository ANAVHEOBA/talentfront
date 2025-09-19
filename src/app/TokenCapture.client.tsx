// src/app/TokenCapture.tsx
'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function TokenCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      localStorage.setItem('jwt', token);
      window.history.replaceState(null, '', '/'); // clean URL
    }
  }, [searchParams]);

  return null;
}