import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-6 text-sm">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 text-gray-400 mb-4">
          <MapPin size={16} />
          <span>Kamta Prasad Tiwari, Tiwari Bhawan, Village Gahrapur, Post Puarikalan-221202, Varanasi, Uttar Pradesh, India</span>
        </div>
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Nishant Softwaress — All rights reserved
        </p>
      </div>
    </footer>
  );
}