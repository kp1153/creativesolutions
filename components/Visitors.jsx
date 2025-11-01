"use client";

import { useEffect, useState } from "react";

export default function Visitors() {
  const [visitors, setVisitors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/analytics")
      .then((res) => res.json())
      .then((data) => {
        setVisitors(data.visitors);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl">
          
          {/* Loading State */}
          {isLoading && (
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-6 w-48 bg-white/20 rounded animate-pulse"></div>
                  <div className="h-4 w-32 bg-white/20 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="text-center">
              <p className="text-lg font-semibold text-white flex items-center justify-center gap-2">
                <span className="text-2xl">⚠️</span>
                <span>Analytics data unavailable</span>
              </p>
            </div>
          )}

          {/* Success State */}
          {!isLoading && !error && visitors && (
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-3xl">🌍</span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-white/80 font-medium">
                    Total Visitors 
                  </p>
                  
                  <p className="text-4xl md:text-5xl font-black text-white">
                    {parseInt(visitors).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
              
              <p className="text-white/90 text-sm">
                🙏 आपके विश्वास के लिए धन्यवाद | Thank you for your trust
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}