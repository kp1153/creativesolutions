import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="px-6 py-10 max-w-3xl mx-auto space-y-10 text-base leading-relaxed text-justify text-gray-800">
      {/* Photo */}
      <div className="flex justify-center">
        <Image
          src="/2.jpeg"
          alt="Kamta Prasad - Web Developer specializing in Next.js and Laravel development"
          width={500}
          height={500}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Contact Information */}
      <div className="font-semibold text-[#1A365D]">
        <h2 className="text-xl font-bold text-center mb-4">📞 Contact</h2>

        <p>
          <strong>Kamta Prasad</strong>
        </p>
        <p>Tiwari Bhawan, Village – Gaharpur</p>
        <p>Post: Puarikalan – 221202</p>
        <p>Varanasi, Uttar Pradesh</p>
        <p>
          Email:{" "}
          <a href="mailto:prasad.kamta@gmail.com" className="underline">
            prasad.kamta@gmail.com
          </a>
        </p>
        <p>
          Mobile:{" "}
          <a href="tel:+919996865069" className="underline">
            9996865069
          </a>
        </p>
      </div>
    </section>
  );
}
