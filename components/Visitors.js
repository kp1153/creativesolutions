"use client";

import { useEffect, useState } from "react";

export default function Visitors() {
  const [visitors, setVisitors] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        setIsLoading(true);
        setError(false);

        const response = await fetch("/api/analytics", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        // Agar error bhi aaye to visitors 0 show karo
        if (data && typeof data.visitors !== "undefined") {
          setVisitors(data.visitors);
        } else {
          setVisitors(0);
        }

        // Error state sirf tab set karo jab data hi na mile
        if (!response.ok && !data.visitors) {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch visitors:", err);
        setError(true);
        setVisitors(0); // Default 0 show karo
      } finally {
        setIsLoading(false);
      }
    };

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
            </div>
          ) : (
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-3xl">🌐</span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-white/80 font-medium">
                    Total Visitors
                  </p>

                  <p className="text-4xl md:text-5xl font-black text-white">
                    {visitors > 0
                      ? parseInt(visitors).toLocaleString("en-IN")
                      : "Loading..."}
                  </p>
                </div>
              </div>

              <p className="text-white/90 text-sm">
                🙏 धन्यवाद आपके विश्वास के लिए
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
