// src/app/AuthContext.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Auth = { email: string } | null;
const AuthCtx = createContext<{
  auth: Auth;
  logout: () => void;
}>({ auth: null, logout: () => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<Auth>(null);

  useEffect(() => {
    const tok = localStorage.getItem('jwt');
    if (!tok) return;
    try {
      const payload = JSON.parse(atob(tok.split('.')[1])) as { email: string };
      setAuth({ email: payload.email });
    } catch {
      localStorage.removeItem('jwt');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('jwt');
    setAuth(null);
  };

  return <AuthCtx.Provider value={{ auth, logout }}>{children}</AuthCtx.Provider>;
};

export const useAuth = () => useContext(AuthCtx);