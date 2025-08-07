// components/TechStack.js
export default function TechStack() {
  const coretech = [
    "Next.js 15.4 (Full-Stack Framework)",
    "MongoDB (Database)",
    "Tailwind CSS (Styling)",
    "SEO Friendly",
  ];

  const hosting = [
    "Digital Ocean (VPS Hosting)",
    "Vercel (Static & Serverless)",
    "Google Cloud Console",
  ];

  const tools = [
    "VS Code",
    "Git Workflow",
    "Domain Management",
    "SSL Configuration",
  ];

  return (
    <section className="bg-white text-pink-700 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technology Stack
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Core Technologies */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b-2 border-pink-700 pb-2">
              Core Technologies
            </h3>
            <ul className="space-y-3">
              {coretech.map((tech, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-pink-700 rounded-full mr-3"></span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Hosting & Deployment */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b-2 border-pink-700 pb-2">
              Hosting & Deployment
            </h3>
            <ul className="space-y-3">
              {hosting.map((host, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-pink-700 rounded-full mr-3"></span>
                  {host}
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Tools */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b-2 border-pink-700 pb-2">
              Professional Tools
            </h3>
            <ul className="space-y-3">
              {tools.map((tool, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-pink-700 rounded-full mr-3"></span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
