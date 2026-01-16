"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { ExternalLink } from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      url: "https://www.pashuchikitsakshukla.online",
      name: "Pashu Chikitsak Shukla",
    },
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
    {
      url: "https://www.itpointcomputershop.com",
      name: "IT Point Computer Shop",
    },
    { url: "https://www.sangopang.com", name: "Sangopang" },
    {
      url: "https://www.artistuttamadixit.online/",
      name: "Prof. Uttama Dixit",
    },
    { url: "https://medhabooks.site", name: "Medha Books" },
    { url: "http://www.abhivyakti.xyz/", name: "Abhivyakti" },
    { url: "https://www.drkushwahark.in/", name: "Dr Kushwaha RK" },
    { url: "http://www.itservicespoint.com/", name: "IT Services Point" },
  ];

  const sliderImages = [
    {
      src: "/images/1.jpeg",
      alt: "Interior Designer Chandni portfolio website",
    },
    {
      src: "/images/2.jpeg",
      alt: "Kashi Panchakarma Hospital website",
    },
    {
      src: "/images/3.jpeg",
      alt: "Lenin Raghuvanshi official website",
    },
    {
      src: "/images/4.jpeg",
      alt: "Hamara Morcha News portal",
    },
    {
      src: "/images/5.jpeg",
      alt: "Web Developer KP portfolio",
    },
    {
      src: "/images/6.jpeg",
      alt: "IT Point Computer Shop website",
    },
    {
      src: "/images/7.jpeg",
      alt: "Indian News Views platform",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Next.js + Laravel: The Present and the Future
            </h1>
            <p className="text-lg md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Get your Website, Mobile App, or Business Software built on
              cutting-edge technology. We provide affordable and high-quality
              solutions tailored to your needs.
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 overflow-hidden rounded-2xl shadow-2xl">
            {sliderImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  quality={85}
                />
              </div>
            ))}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/80 w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">
                Problems with WordPress
              </h2>
              <ul className="space-y-4 text-white/90">
                <li>❌ High recurring hosting costs</li>
                <li>❌ Slow loading speed</li>
                <li>❌ Security vulnerabilities</li>
                <li>❌ Theme & plugin conflicts</li>
                <li>❌ Plugins often break the site</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">
                Advantages of Next.js + Laravel
              </h2>
              <ul className="space-y-4 text-white/90">
                <li>✅ Free hosting for new websites</li>
                <li>✅ Super-fast performance</li>
                <li>✅ Modern, future-ready technology</li>
                <li>✅ SEO-friendly for top Google ranking</li>
                <li>✅ Flawless on all devices</li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl bg-white">
            <table className="w-full text-center min-w-[600px]">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-purple-600">
                  <th className="text-white py-4 px-6 text-lg font-bold">
                    Feature
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
                    Hosting Cost
                  </td>
                  <td className="py-4 px-6 bg-red-50 text-red-700 font-medium">
                    ₹5000–15000/year
                  </td>
                  <td className="py-4 px-6 bg-green-50 text-green-700 font-medium">
                    Free / Very Low
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    Loading Speed
                  </td>
                  <td className="py-4 px-6 bg-red-50 text-red-700 font-medium">
                    Slow (3–5 sec)
                  </td>
                  <td className="py-4 px-6 bg-green-50 text-green-700 font-medium">
                    Ultra-fast (0.5 sec)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    Security
                  </td>
                  <td className="py-4 px-6 bg-red-50 text-red-700 font-medium">
                    High risk
                  </td>
                  <td className="py-4 px-6 bg-green-50 text-green-700 font-medium">
                    Very secure
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    Updates
                  </td>
                  <td className="py-4 px-6 bg-red-50 text-red-700 font-medium">
                    Manual + Paid
                  </td>
                  <td className="py-4 px-6 bg-green-50 text-green-700 font-medium">
                    Automatic + Free
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto border rounded-2xl shadow-lg bg-white p-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Recent Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-md hover:shadow-xl transition">
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}