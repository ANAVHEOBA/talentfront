// src/components/AuthModal.tsx
'use client';

import { useState } from 'react';
import { userApi } from '@/api/user/api'; // ← import the helper

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Trigger Buttons */}
      <button
        onClick={openModal}
        className="text-sm text-gray-900 hover:text-gray-700 transition-colors font-semibold"
      >
        Login
      </button>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
      >
        Sign Up
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-sm w-full p-6 transform transition-all scale-100 z-10">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-lg font-bold">You&apos;re one step away</h2>
              <p className="text-gray-600 text-sm">From earning in global standards</p>
            </div>

            {/* Continue with Google */}
            <button
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              onClick={() => {
                userApi.startGoogle(); // ← use the helper
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F5"
                />
                <path
                  d="M12 23c2.97 0 5.46-.99 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.78 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.24-.73-.38-1.51-.38-2.31 0-.8.14-1.58.38-2.31V7.07H2.18C1.43 8.58 1 10.34 1 12c0 1.66.43 3.42 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.41 1 12 1 7.78 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Continue with Email */}
            <button
              className="w-full py-3 px-4 border border-gray-300 text-gray-700 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12h2V6h12V4zm-1 18H5v-2h14v2zm-7-3H5v-2h7v2zm0-4H5V9h7v2z"
                  fill="currentColor"
                />
              </svg>
              Continue with Email
            </button>

            {/* Terms & Privacy */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              By using this website, you agree to our{' '}
              <a href="#" className="text-blue-600 underline">
                Terms of Use
              </a>{' '}
              and our{' '}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>.
            </p>

            {/* Support Link */}
            <p className="text-xs text-gray-400 mt-2 text-center">
              Need help? Reach out to us at support@talentfront.com
            </p>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}