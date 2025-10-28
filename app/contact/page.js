import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="px-6 py-10 max-w-3xl mx-auto space-y-10 text-base leading-relaxed text-justify text-gray-800">
      
      {/* तस्वीर */}
      <div className="flex justify-center">
        <Image
          src="/2.jpeg"
          alt="Kamta Prasad"
          width={500}
          height={500}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* हिंदी में संपर्क जानकारी */}
      <div className="font-semibold">
        <h2 className="text-xl font-bold text-center mb-4">📞 संपर्क करें</h2>
        <p><strong>कामता प्रसाद</strong></p>
        <p>तिवारी भवन, ग्राम–गहरपुर, पोस्टः पुआरीकलां–221202</p>
        <p>वाराणसी, उत्तर प्रदेश</p>
        <p>ईमेलः prasad.kamta@gmail.com</p>
        <p>मोबाइलः 9996865069</p>
      </div>

      {/* English Translation */}
      <div className="text-[#1A365D]">
        <h2 className="text-xl font-bold text-center mb-4">📞 Contact</h2>
        <p><strong>Kamta Prasad</strong></p>
        <p>Tiwari Bhawan, Village – Gaharpur, Post: Puarikalan – 221202</p>
        <p>Varanasi, Uttar Pradesh</p>
        <p>Email: prasad.kamta@gmail.com</p>
        <p>Mobile: 9996865069</p>
      </div>
    </section>
  );
}
