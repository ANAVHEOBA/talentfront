// src/components/HowItWorks.tsx
import { FC } from "react";

interface Props {
  className?: string;
}

const HowItWorks: FC<Props> = ({ className }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className ?? ""}`}>
      <h2 className="text-xl font-semibold mb-4">HOW IT WORKS</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li className="flex items-center gap-3">
          {/* profile icon */}
          <svg
            className="w-5 h-5 text-indigo-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Create your Profile by telling us about yourself
        </li>

        <li className="flex items-center gap-3">
          {/* trophy / bounty icon */}
          <svg
            className="w-5 h-5 text-indigo-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
            />
          </svg>
          Participate in Bounties & Projects to build proof of work
        </li>

        <li className="flex items-center gap-3">
          {/* money / payout icon */}
          <svg
            className="w-5 h-5 text-indigo-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Get Paid for Your Work in global standards
        </li>
      </ol>
    </div>
  );
};

export default HowItWorks;