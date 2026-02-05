"use client";

export default function Visitors() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl">
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
                  Coming Soon
                </p>
              </div>
            </div>
            <p className="text-white/90 text-sm">
              🙏 धन्यवाद आपके विश्वास के लिए
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}