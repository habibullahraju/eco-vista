// app/not-found.js
"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className=" flex flex-col items-center justify-center text-center p-6 max-w-md border border-gray-200 bg-white rounded-lg shadow">
        <div className="feature-main flex flex-col items-center">
          <div className="w-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="feature-title text-gray-700 mb-2">
            Oops! This page doesn’t exist
          </h3>
          <span className="feature-name text-gray-500 mb-6">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </span>
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
}
