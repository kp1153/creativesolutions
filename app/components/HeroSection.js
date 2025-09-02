"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-500 to-purple-700 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Next.js: वर्तमान और भविष्य
          </h1>
          <p className="mt-4 text-lg text-indigo-100">
            वर्डप्रेस पर बनी लचर और बेहद असुरक्षित वेबसाइटों से छुटकारा, Next.js
            से पाएं तेज़ और सुरक्षित वेबसाइट
          </p>
        </div>

        {/* Problems Section */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 shadow-xl text-left">
          <h2 className="text-2xl font-bold mb-4">
            WordPress पर बनी वेबसाइटों की समस्याएं
          </h2>
          <ul className="space-y-2">
            <li>हर साल होस्टिंग पर हजारों रुपए खर्च</li>
            <li>धीमी लोडिंग स्पीड - ग्राहक चले जाते हैं</li>
            <li>
              सिक्योरिटी इश्यूज (गंदे-गंदे कांटेंट खुद से अपलोड होने लगते हैं) -
              हैकिंग का डर
            </li>
            <li>थीम-प्लगइन में टकराव हुआ नहीं कि आपकी वेबसाइट बैठ जाती है</li>
            <li>Plugin की झंझट - साइट क्रैश हो जाती है</li>
          </ul>
        </div>

        {/* Solutions Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl p-8 shadow-xl text-left">
          <h2 className="text-2xl font-bold mb-4">Next.js के फायदे</h2>
          <ul className="space-y-2">
            <li>बिल्कुल फ्री होस्टिंग - Vercel पर</li>
            <li>सुपर फास्ट लोडिंग</li>
            <li>Modern Technology - Future Ready</li>
            <li>SEO Friendly - Google में टॉप रैंकिंग</li>
            <li>मोबाइल समेत सभी डिवाइसों पर परफेक्ट</li>
          </ul>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-xl shadow-2xl bg-white">
          <table className="w-full text-center text-base">
            <thead>
              <tr>
                <th className="bg-indigo-600 text-white py-3 px-4">फीचर</th>
                <th className="bg-indigo-600 text-white py-3 px-4">
                  WordPress
                </th>
                <th className="bg-indigo-600 text-white py-3 px-4">Next.js</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">होस्टिंग कॉस्ट</td>
                <td className="bg-red-50 text-red-600 py-3 px-4">
                  ₹5000-15000/साल
                </td>
                <td className="bg-green-50 text-green-600 py-3 px-4">
                  बिल्कुल फ्री
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">लोडिंग स्पीड</td>
                <td className="bg-red-50 text-red-600 py-3 px-4">
                  धीमी (3-5 सेकंड)
                </td>
                <td className="bg-green-50 text-green-600 py-3 px-4">
                  बहुत तेज़ (0.5 सेकंड)
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">सिक्योरिटी</td>
                <td className="bg-red-50 text-red-600 py-3 px-4">
                  हैकिंग का डर
                </td>
                <td className="bg-green-50 text-green-600 py-3 px-4">
                  100% सुरक्षित
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">अपडेट्स</td>
                <td className="bg-red-50 text-red-600 py-3 px-4">
                  मैन्युअल + पेड
                </td>
                <td className="bg-green-50 text-green-600 py-3 px-4">
                  ऑटोमेटिक + फ्री
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
