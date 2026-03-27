"use client";

export default function HotelPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans flex flex-col">
      <div className="bg-amber-500 py-2 px-4 text-center text-sm font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
      </div>
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">🖥️ <span className="text-amber-400">Nishant</span> Software</a>
          <a href="/" className="text-xs text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी Products</a>
        </div>
      </nav>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="text-6xl mb-6">🏨</div>
        <div className="inline-block bg-pink-500/20 text-pink-400 text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">Coming Soon</div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Nishant Hotel Pro</h1>
        <p className="text-gray-400 text-lg mb-2">Hotel Management Software</p>
        <p className="text-gray-500 max-w-md mb-8">Room booking, check-in/check-out, billing, restaurant billing & staff management — जल्द आ रहा है।</p>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-sm w-full">
          <p className="text-gray-400 text-sm mb-3">अभी notify करें — जब launch हो तो पता चले</p>
          <a href="https://wa.me/919996865069?text=Hotel Pro के launch होने पर notify करें" target="_blank" rel="noopener noreferrer"
            className="block w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-500 transition">
            💬 WhatsApp पर notify करें
          </a>
        </div>
      </div>
    </main>
  );
}