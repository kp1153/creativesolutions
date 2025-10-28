"use client";

import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const projects = [
    {
      url: "https://www.interiordesignerchandni.com/",
      name: "Interior Designer Chandni",
    },
    {
      url: "https://www.kashipanchakarmahospital.in/",
      name: "Kashi Panchakarma Hospital",
    },
    {
      url: "https://www.leninraghuvanshiofkashi.com/",
      name: "Lenin Raghuvanshi Official",
    },
    { url: "https://www.hamaramorcha.com/", name: "Hamara Morcha News" },
    { url: "https://www.web-developer-kp.com/", name: "Web Developer KP" },
    { url: "https://www.bloomingkashmir.org/", name: "Blooming Kashmir" },
    { url: "https://www.indiannewsviews.com/", name: "Indian News Views" },
    { url: "https://mothertongue.co.in/", name: "Mother Tongue" },
    { url: "https://www.shop-at-albelee.com/", name: "Shop at Albelee" },
    { url: "https://www.medvally.com/", name: "Medvally" },
    {
      url: "https://www.vistarapremiumsolaragency.com",
      name: "Vistara Premium Solar Agency",
    },
    { url: "https://www.shrutinagvanshi.in/", name: "Shruti Nagvanshi" },
    { url: "https://www.arpindia.org/", name: "ARP India" },
    { url: "https://www.irexpharmacy.com/", name: "Irex Pharmacy" },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Next.js: वर्तमान और भविष्य
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              वर्डप्रेस पर बनी लचर और बेहद असुरक्षित वेबसाइटों से छुटकारा,
              Next.js से पाएं तेज़ और सुरक्षित वेबसाइट
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  WordPress की समस्याएं
                </h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>हर साल होस्टिंग पर हजारों रुपए खर्च</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>धीमी लोडिंग स्पीड - ग्राहक चले जाते हैं</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>सिक्योरिटी इश्यूज - हैकिंग का डर</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>थीम-प्लगइन में टकराव</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>Plugin की झंझट - साइट क्रैश</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Next.js के फायदे
                </h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-green-400 mt-1">✅</span>
                  <span>बिल्कुल फ्री होस्टिंग - Vercel पर</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-green-400 mt-1">✅</span>
                  <span>सुपर फास्ट लोडिंग</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-green-400 mt-1">✅</span>
                  <span>Modern Technology - Future Ready</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-green-400 mt-1">✅</span>
                  <span>SEO Friendly - Google में टॉप रैंकिंग</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-green-400 mt-1">✅</span>
                  <span>सभी डिवाइसों पर परफेक्ट</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-center">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-purple-600">
                    <th className="text-white py-4 px-6 text-lg font-bold">
                      फीचर
                    </th>
                    <th className="text-white py-4 px-6 text-lg font-bold">
                      WordPress
                    </th>
                    <th className="text-white py-4 px-6 text-lg font-bold">
                      Next.js
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-900">
                      होस्टिंग कॉस्ट
                    </td>
                    <td className="py-4 px-6 bg-red-50 text-red-700 font-medium">
                      ₹5000-15000/साल
                    </td>
                    <td className="py-4 px-6 bg-green-50 text-green-700 font-medium">
                      बिल्कुल फ्री
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-900">
                      लोडिंग स्पीड
                    </td>
                    <td className="py-4 px-6 bg-red-50 text-red-700 font-medium">
                      धीमी (3-5 सेकंड)
                    </td>
                    <td className="py-4 px-6 bg-green-50 text-green-700 font-medium">
                      बहुत तेज़ (0.5 सेकंड)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-900">
                      सिक्योरिटी
                    </td>
                    <td className="py-4 px-6 bg-red-50 text-red-700 font-medium">
                      हैकिंग का डर
                    </td>
                    <td className="py-4 px-6 bg-green-50 text-green-700 font-medium">
                      100% सुरक्षित
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-900">
                      अपडेट्स
                    </td>
                    <td className="py-4 px-6 bg-red-50 text-red-700 font-medium">
                      मैन्युअल + पेड
                    </td>
                    <td className="py-4 px-6 bg-green-50 text-green-700 font-medium">
                      ऑटोमेटिक + फ्री
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Recent Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-md hover:shadow-xl transition"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={project.url} target="_blank" rel="noreferrer">
                    <Button className="w-full">Visit Website</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
