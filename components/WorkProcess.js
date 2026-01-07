import { Target, Code, Rocket, Sparkles } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Planning",
      icon: <Target className="w-12 h-12" />,
      description:
        "I start by understanding your requirements and then plan the structure and content accordingly. If you are new to business, I use my linguistic skills to create impactful content.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "How the Website Is Built",
      icon: <Code className="w-12 h-12" />,
      description:
        "Using VS Code and Next.js, I develop the website with special attention to cross-browser and mobile responsiveness. Every detail is tested thoroughly.",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Hosting & Deployment",
      icon: <Rocket className="w-12 h-12" />,
      description:
        "The project is pushed to GitHub and deployed via Vercel, ensuring that future updates become extremely easy and streamlined.",
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "04",
      title: "Going Live",
      icon: <Sparkles className="w-12 h-12" />,
      description:
        "As you share new ideas, we update the website accordingly and Vercel shows live changes instantly. That's the beauty of modern deployment.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How I Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparency at every step
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute left-12 top-32 w-0.5 h-24 bg-gradient-to-b from-gray-300 to-transparent" />
              )}

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:border-gray-300 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg text-white`}
                    >
                      {step.icon}
                    </div>
                    <div
                      className={`text-6xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                    >
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            Transparent Process, Reliable Results
          </h3>
          <p className="text-lg text-white/90">
            Full clarity at every step – no hidden charges
          </p>
        </div>
      </div>
    </section>
  );
}