import { Zap, Database, Palette, Server, Cloud, Code, Lock } from "lucide-react";

export default function TechStack() {
  const coretech = [
    {
      name: "Next.js 16",
      desc: "Full-Stack Framework - Turbopack Stable",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      name: "Laravel",
      desc: "PHP Framework - Excellent for WordPress Migration",
      icon: <Server className="w-8 h-8" />,
    },
    {
      name: "MongoDB",
      desc: "NoSQL Database - Fast & Scalable",
      icon: <Database className="w-8 h-8" />,
    },
    {
      name: "Tailwind CSS",
      desc: "Modern Styling - Beautiful UI",
      icon: <Palette className="w-8 h-8" />,
    },
  ];

  const hosting = [
    {
      name: "Vercel",
      desc: "Perfect for Next.js – Free Tier Available",
      icon: <Cloud className="w-8 h-8" />,
    },
    {
      name: "Digital Ocean",
      desc: "Laravel/VPS Hosting – Starts at ₹400/month",
      icon: <Server className="w-8 h-8" />,
    },
    {
      name: "Google Cloud",
      desc: "Enterprise-Level Solutions",
      icon: <Cloud className="w-8 h-8" />,
    },
  ];

  const tools = [
    {
      name: "VS Code",
      desc: "Professional Code Editor",
      icon: <Code className="w-8 h-8" />,
    },
    {
      name: "Git Workflow",
      desc: "Version Control & Collaboration",
      icon: <Code className="w-8 h-8" />,
    },
    {
      name: "Domain & SSL",
      desc: "Complete Setup",
      icon: <Lock className="w-8 h-8" />,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern and reliable technologies we work with
          </p>
        </div>

        <div className="mb-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 shadow-xl text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Server className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                Laravel – Best Option for WordPress Migration
              </h3>
              <p className="text-white/90">PHP Based Full-Stack Framework</p>
            </div>
          </div>
          <div className="space-y-3 text-white/95">
            <p>
              ✅ <strong>Perfect for WordPress Users:</strong> Ideal for
              websites with large existing data.
            </p>
            <p>
              ✅ <strong>Affordable Hosting:</strong> Digital Ocean plans start
              at ₹400–₹800/month.
            </p>
            <p>
              ✅ <strong>Enterprise-Level Security:</strong> Much safer than
              WordPress.
            </p>
            <p>
              ✅ <strong>Database Support:</strong> MySQL / PostgreSQL – your
              data stays secure.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-4 border-indigo-600 pb-3 inline-block">
              Core Technologies
            </h3>
            <div className="space-y-4">
              {coretech.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-400"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-indigo-600">{tech.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-4 border-green-600 pb-3 inline-block">
              Hosting & Deployment
            </h3>
            <div className="space-y-4">
              {hosting.map((host, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-400"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-green-600">{host.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{host.name}</h4>
                      <p className="text-sm text-gray-600">{host.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-4 border-purple-600 pb-3 inline-block">
              Professional Tools
            </h3>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-400"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-purple-600">{tool.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{tool.name}</h4>
                      <p className="text-sm text-gray-600">{tool.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}