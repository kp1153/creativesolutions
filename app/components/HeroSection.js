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
        <strong>समस्त जन,</strong> वेबसाइटें दो प्रकार की होती हैं: पहली
        वर्डप्रेस पर बिना कोडिंग के बनने वाली, जो बिल्कुल भी सेफ नहीं होतीं और
        जिनके डेवलपर गली में चार पाए जाते हैं। दूसरी वेबसाइटें वे होती हैं जो
        कोडिंग सीखकर बनाई जाती हैं और जिनमें सुरक्षा और अनुकूलन के पुख्ता इंतजाम
        होते हैं।<br></br>वर्डप्रेस पर वेबसाइट बनाने वाले मूलतः फांदेबाज-धंधेबाज
        होते हैं और हर साल आपसे होस्टिंग-मेनटीनेंस के नाम पर धन-उगाही करते हैं,
        जबकि मैं नेक्स्ट.जेएस पर वेबसाइट डेवलप करता हूँ और होस्टिंग प्रायः मुफ्त
        रहती है, ताउम्र के लिए।<br></br> सबसे पहले मैं VS Code पर वेबसाइट डेवलप
        करता हूँ। फिर मैं उसे GitHub पर एक नई रेपोजिटरी में पुश करता हूँ। वहाँ
        से उसे Vercel पर लाइव कर देता हूँ। GitHub और Vercel आपस में जुड़े होते
        हैं, जिससे किसी भी लेआउट या डिज़ाइन में बदलाव अपने आप वेबसाइट पर कुछ ही
        क्षणों में लाइव हो जाता है। <br></br> मेरा नाम कामता प्रसाद है और मैं
        पिछले तीन दशकों से हिंदी पत्रकारिता में सक्रिय हूँ। मैं अंग्रेज़ी और
        उर्दू भाषा का भी जानकार हूँ। यदि आप चाहेंगे तो मैं आपकी वेबसाइट की
        सामग्री तैयार करने में भी आपकी सहायता कर सकता हूँ।<br></br>मैं आपकी
        वेबसाइट को किसी भी प्लेटफॉर्म पर होस्ट यानि कि डिप्लॉय कर सकता हूँ।
      </p>

      <p>
        <strong>Dear All,</strong> Websites are of two types: the first are
        built on WordPress without any coding — these are generally not secure,
        and their developers are found on every street corner. The second type
        are websites built by actually learning to code, with strong measures
        for security and customization.<br></br>
        WordPress website builders are, in essence, opportunists who charge you
        every year under the name of hosting and maintenance, whereas I develop
        websites in Next.js, where hosting is often free — for a lifetime.
        <br></br>
        First, I develop the website on VS Code. Then I push it to a new
        repository on GitHub. From there, I deploy it live on Vercel. GitHub and
        Vercel are connected, so any change in layout or design goes live on the
        website within seconds.<br></br>
        My name is Kamta Prasad, and I have been active in Hindi journalism for
        the past three decades. I am also proficient in English and Urdu. If you
        wish, I can also help you prepare the content for your website.<br></br>
        I can host, i.e., deploy, your website on any platform.
      </p>
    </section>
  );
}
