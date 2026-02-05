"use client";

import { useEffect, useState } from "react";

export default function Visitors() {
  const [visitors, setVisitors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVisitors = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch("/api/analytics", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data && typeof data.visitors === "number") {
        setVisitors(data.visitors);
      } else {
        throw new Error("Invalid data format");
      }
    } catch (err) {
      console.error("Failed to fetch visitors:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl">
          {isLoading ? (
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-6 w-48 bg-white/20 rounded animate-pulse"></div>
                  <div className="h-4 w-32 bg-white/20 rounded animate-pulse"></div>
                </div>
              </div>
              <p className="text-white/70 text-xs">Loading analytics...</p>
            </div>
          ) : error ? (
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-3xl">⚠️</span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-white/80 font-medium">
                    Total Visitors
                  </p>
                  <p className="text-2xl font-bold text-white/70">
                    Data Loading Failed
                  </p>
                </div>
              </div>
              <button
                onClick={fetchVisitors}
                className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-sm"
              >
                🔄 Retry
              </button>
              <p className="text-white/60 text-xs">{error}</p>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🌍</span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-white/80 font-medium">
                    Total Visitors
                  </p>
                  <p className="text-4xl md:text-5xl font-black text-white">
                    {visitors !== null ? visitors.toLocaleString("en-IN") : "0"}
                  </p>
                </div>
              </div>
              <p className="text-white/90 text-sm">
                🙏 धन्यवाद आपके विश्वास के लिए
              </p>
              <button
                onClick={fetchVisitors}
                className="mt-2 text-white/60 hover:text-white text-xs transition-colors"
              >
                🔄 Refresh
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}