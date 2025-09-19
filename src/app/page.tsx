// src/app/page.tsx
import { Suspense } from 'react';
import HeroBanner from '@/components/HeroBanner';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import TokenCapture from './TokenCapture.client';// tiny client component

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* capture token after hydration */}
      <Suspense fallback={null}>
        <TokenCapture />
      </Suspense>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-9/12">
            <HeroBanner />
          </div>
          <div className="w-full md:w-3/12">
            <HowItWorks />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-center text-gray-500">More content will go here.</p>
      </div>

      <Footer />
    </main>
  );
}