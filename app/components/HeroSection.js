import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-6 py-10 max-w-4xl mx-auto space-y-10 text-base leading-relaxed text-gray-800">
      <div className="flex justify-center">
        <Image
          src="/1.jpeg"
          alt="Kamta Prasad"
          width={600}
          height={400}
          className="rounded-xl shadow-md"
        />
      </div>

      <p>
        <strong>समस्त जन,</strong> वेबसाइटें दो प्रकार की होती हैं: पहली स्थिर (परिचयात्मक) और दूसरी गतिशील। जिन वेबसाइटों को हर दिन या दिन में कई बार अपडेट किया जाता है, उन्हें गतिशील (डायनामिक) वेबसाइट कहा जाता है। वर्तमान में मैं मुख्य रूप से पोर्टफोलियो वेबसाइटें ही बना रहा हूँ, अभी मैं नेक्स्ट.जेएस के लेटेस्ट एडिशन पर सिर्फ स्टैटिक वेबसाइटें ही बना पाता हूँ क्योंकि डेटाबेस को प्रोजेक्ट से इंटीग्रेट करना सीख रहा हूँ। मेरी कार्यप्रणाली सबसे पहले मैं VS Code पर वेबसाइट बनाता हूँ। फिर मैं उसे GitHub पर एक नई रेपोजिटरी में पुश करता हूँ। वहाँ से उसे Vercel पर लाइव कर देता हूँ। GitHub और Vercel आपस में जुड़े होते हैं, जिससे किसी भी लेआउट या डिज़ाइन में बदलाव अपने आप लाइव वेबसाइट पर कुछ ही क्षणों में दिखने लगता है — कोई अतिरिक्त प्रक्रिया नहीं करनी पड़ती। 🙋‍♂️ मेरे बारे में मेरा नाम कामता प्रसाद है और मैं पिछले तीन दशकों से हिंदी पत्रकारिता में सक्रिय हूँ। मैं अंग्रेज़ी और उर्दू भाषा का भी जानकार हूँ। यदि आप चाहेंगे तो मैं आपकी वेबसाइट की सामग्री तैयार करने में भी आपकी सहायता कर सकता हूँ। 💰 कीमत अब बात करते हैं शुल्क की। मैं आपसे ₹5000 से ₹8000 (भारतीय रुपए) के बीच एकमुश्त राशि का अनुरोध करता हूँ। भविष्य के सभी अपडेट्स बिल्कुल मुफ्त होंगे।
      </p>

      <p>
        <strong>Dear all,</strong> Websites generally fall into two categories: introductory (static) and dynamic. Websites that are updated daily—or even multiple times a day—with new content are referred to as dynamic websites. At present, I am working primarily on portfolio websites using the latest version of Next.js, as I am still learning how to integrate a database into a project. 🔧 My Workflow My workflow is as follows: I first develop the website locally using VS Code. Once ready, I push the project to a new GitHub repository. From there, I deploy it live using Vercel. GitHub and Vercel are interconnected, which means any layout or design changes made in the project are automatically reflected on the live website within moments — no additional steps are required. 🙋‍♂️ About Me My name is Kamta Prasad, and I have been actively involved in Hindi journalism for over three decades. I am also proficient in English and Urdu. If you need help preparing content for your website — in Hindi, English, or Urdu — I would be more than happy to assist. 💰 Pricing Now let us talk about pricing. I request a one-time payment between ₹5000 to ₹8000 (INR). All future updates will be completely free of cost.
      </p>
    </section>
  );
}
