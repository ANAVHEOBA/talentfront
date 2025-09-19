// src/components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import AuthModal from "./AuthModal"; // Import the new component

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="TalentFront Logo"
            width={48}
            height={48}
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-open-sans">
          <Link href="#" className="text-gray-900 hover:text-gray-700 transition-colors font-semibold">
            Bounties
          </Link>
          <Link href="#" className="text-gray-900 hover:text-gray-700 transition-colors font-semibold">
            Projects
          </Link>
          <Link href="#" className="text-gray-900 hover:text-gray-700 transition-colors font-semibold">
            Grants
          </Link>
        </nav>

        {/* Search Icon */}
        <button className="p-2 text-gray-900 hover:text-gray-700 transition-colors font-open-sans">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 font-open-sans">
          <button className="text-sm text-gray-900 hover:underline transition-colors font-semibold">
            Become a Sponsor
          </button>
          <AuthModal /> {/* Use the modal here */}
        </div>
      </div>
    </header>
  );
}