import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-6 text-sm">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 text-gray-400 mb-4">
          <MapPin size={16} />
          <span>तिवारी भवन, ग्रामः गहरपुर, पोस्टः पुआरीकलाँ-221202, वाराणसी, उत्तर प्रदेश, भारत</span>
        </div>
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} निशांत सॉफ्टवेयर — सर्वाधिकार सुरक्षित
        </p>
      </div>
    </footer>
  );
}