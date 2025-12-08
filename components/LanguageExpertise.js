export default function LanguageExpertise() {
  const languageQualities = [
    {
      title: "Hindi Journalism",
      description:
        "Decades of experience with deep understanding of diverse subjects.",
      icon: "📰",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Working Knowledge of Urdu",
      description:
        "Conversational Urdu learned during long stays in Lucknow, guided by a mosque Qari.",
      icon: "📚",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Mastery in Translation",
      description:
        "Extensive experience translating English to Hindi — including several full-length books.",
      icon: "🔄",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Wide Subject Coverage",
      description:
        "From poetry to nuclear physics — versatility across genres.",
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Human-Crafted Language",
      description: "Natural, meaningful, and emotionally resonant writing.",
      icon: "✍️",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Reader-Centric Content",
      description: "Website copy that genuinely connects with your audience.",
      icon: "❤️",
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-50 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Language Expertise
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Three decades of refined linguistic craftsmanship that gives your
            website a unique voice.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {languageQualities.map((quality, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 overflow-hidden"
            >
              {/* Gradient Hover Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${quality.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative z-10 text-center space-y-4">
                {/* Icon */}
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${quality.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-4xl">{quality.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900">
                  {quality.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {quality.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Box */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-amber-200">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
              <span className="text-3xl">💡</span>
            </div>

            <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Choose a Language-First Approach?
            </h4>

            <p className="text-lg text-gray-700 leading-relaxed">
              Even in the age of AI-generated content, human-crafted language
              holds a timeless value. Real creators write with intention,
              clarity, and empathy — keeping the target reader at the center.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="bg-amber-100 rounded-full px-6 py-2 text-sm font-semibold text-amber-800">
                🎨 Creative Writing
              </div>
              <div className="bg-orange-100 rounded-full px-6 py-2 text-sm font-semibold text-orange-800">
                📖 Translation Expertise
              </div>
              <div className="bg-yellow-100 rounded-full px-6 py-2 text-sm font-semibold text-yellow-800">
                ✨ Authentic Human Content
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
