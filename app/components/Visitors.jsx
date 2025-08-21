"use client";

import { useEffect, useState } from "react";

export default function Visitors() {
  const [visitors, setVisitors] = useState(null);

  useEffect(() => {
    fetch("/api/analytics")
      .then((res) => res.json())
      .then((data) => setVisitors(data.visitors))
      .catch(() => setVisitors("Error"));
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-md text-center mt-6">
      <p className="text-lg font-semibold">
        🌍 कुल विज़िटर्स:{" "}
        <span className="text-blue-600">{visitors ?? "लोड हो रहा है..."}</span>
      </p>
    </div>
  );
}
