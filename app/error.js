"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ErrorCard() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // navigate to home page
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card flex flex-col items-center justify-center text-center p-6 border border-red-300 bg-red-50">
        <h6 className="feature-name mb-4 text-red-600">Error</h6>
        <div className="feature-main flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-red-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L4.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h3 className="feature-title text-red-600">Something Went Wrong</h3>
          <span className="feature-name text-red-400">
            Redirecting to home page...
          </span>
        </div>
      </div>
    </div>
  );
}
