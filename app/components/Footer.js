export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-6 text-sm leading-relaxed">
      <div className="max-w-4xl mx-auto text-left text-justify space-y-6">

        {/* Hindi Section */}
        <div className="text-[#2D3748] font-bold">
          <p>
            <strong>हमारा मोर्चा</strong> के संचालक और कार्यकारी संपादक <strong>कामता प्रसाद</strong> Next.js पर वेबसाइट बनाने का काम करते हैं और यही उनकी आजीविका का जरिया है।
          </p>
          <p>
            हमारा मोर्चा को बनाने के लिए उन्होंने HTML, CSS और JavaScript सीखी। फिर Tailwind CSS, React.js, Node.js पर हाथ साफ किया और Next.js 15 की जमकर प्रैक्टिस की और अभी भी कर ही रहे हैं।
          </p>
          <p>
            उन्होंने JavaScript के सुपरसेट TypeScript पर भी हाथ साफ किया और इस तरह से इंडस्ट्री स्टैंडर्ड पर खुद को खरा उतारने के लिए दिन-रात एक किए हुए हैं।
          </p>
          <p>
            चूँकि कामता प्रसाद हिंदी-अंग्रेजी के अलावा उर्दू भी जानते हैं तो कांटेंट राइटिंग में भी आप उनसे मदद ले सकते हैं।
          </p>
          <p>
            बस, आम लोगों की जानकारी के लिए, नेक्स्ट.जेएस पर बनी वेबसाइट वर्सेल पर मुफ्त में होस्ट हो सकती है वर्ना बाजार में ठग बैठे हैं और हर साल आपसे पैसा वसूलेंगे, जबकि मैं सिर्फ एक बार मजदूरी लूँगा और ताला-कुंजी सब आपके हवाले कर दूँगा।
          </p>
          <p className="mt-4">
            <strong>संपर्क:</strong> prasad.kamta@gmail.com, मो. 9996865069
          </p>
        </div>

        <hr className="my-6 border-gray-400" />

        {/* English Section */}
        <div className="text-[#1A365D]">
          <p>
            The editor and executive director of <strong>Hamara Morcha</strong>, Kamta Prasad, builds websites using Next.js, which is also his source of livelihood.
          </p>
          <p>
            To create Hamara Morcha, he learned HTML, CSS, and JavaScript. Then he practiced Tailwind CSS, React.js, and Node.js thoroughly, followed by intensive work on Next.js 15, which he is still actively practicing.
          </p>
          <p>
            He also gained proficiency in TypeScript, the superset of JavaScript, and continues working day and night to meet industry standards.
          </p>
          <p>
            Since Kamta Prasad knows Hindi, English, and also Urdu, you may also seek his assistance in content writing.
          </p>
          <p>
            Just for public awareness — websites built on Next.js can be hosted for free on Vercel. Otherwise, the market is full of tricksters who will charge you every year, while I will only charge once for my labor and will hand over everything — lock, key, and control — to you.
          </p>
          <p className="mt-4">
            <strong>Contact:</strong> prasad.kamta@gmail.com, Mob. 9996865069
          </p>
        </div>
      </div>
    </footer>
  );
}
