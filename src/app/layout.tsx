// src/app/layout.tsx
import type { Metadata } from "next";
// Import Geist as before
import { Geist, Geist_Mono } from "next/font/google";
// 1. Import Open Sans
import { Open_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Configure Open Sans
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TalentFront | Find Your Next High-Paying Crypto Gig",
  description: "A platform to discover crypto bounties, freelance gigs, and grants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply Open Sans variable to the html tag */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}