"use client";

const CLINIC_PWA_URL = "https://medical-saas-32pt.vercel.app/login";
const CLINIC_EXE_URL = "https://pub-70d93acc97f04394bd956a27e7e6b849.r2.dev/ClinicOS%20Setup%201.0.0.exe";

const features = [
  { icon: "ðŸ‘¥", hi: "à¤®à¤°à¥€à¤œà¤¼ à¤•à¥€ à¤²à¤¾à¤‡à¤¨ â€” à¤Ÿà¥‹à¤•à¤¨ à¤…à¤ªà¤¨à¥‡ à¤†à¤ª à¤¬à¤¨à¥‡à¤—à¤¾, à¤•à¥‹à¤ˆ à¤à¤‚à¤à¤Ÿ à¤¨à¤¹à¥€à¤‚", en: "à¤®à¤°à¥€à¤œà¤¼ à¤†à¤, à¤Ÿà¥‹à¤•à¤¨ à¤®à¤¿à¤²à¤¾, à¤¬à¤¾à¤°à¥€ à¤†à¤¨à¥‡ à¤ªà¤° à¤¬à¥à¤²à¤¾à¤“ â€” à¤°à¤¿à¤¸à¥‡à¤ªà¥à¤¶à¤¨ à¤ªà¤° à¤•à¥‹à¤ˆ à¤­à¥€à¤¡à¤¼-à¤­à¤¾à¤¡à¤¼ à¤¨à¤¹à¥€à¤‚" },
  { icon: "ðŸ“‹", hi: "à¤¡à¤¿à¤œà¤¿à¤Ÿà¤² à¤ªà¤°à¥à¤šà¤¾ â€” à¤²à¤¿à¤–à¥‹, à¤›à¤¾à¤ªà¥‹ à¤¯à¤¾ à¤µà¥à¤¹à¤¾à¤Ÿà¥à¤¸à¤à¤ª à¤ªà¤° à¤­à¥‡à¤œà¥‹", en: "à¤•à¤‚à¤ªà¥à¤¯à¥‚à¤Ÿà¤° à¤ªà¤° à¤ªà¤°à¥à¤šà¤¾ à¤²à¤¿à¤–à¥‹, à¤à¤• à¤•à¥à¤²à¤¿à¤• à¤®à¥‡à¤‚ à¤®à¤°à¥€à¤œà¤¼ à¤•à¥‡ à¤µà¥à¤¹à¤¾à¤Ÿà¥à¤¸à¤à¤ª à¤ªà¤° à¤ªà¤¹à¥à¤à¤š à¤œà¤¾à¤à¤—à¤¾" },
  { icon: "ðŸ§ª", hi: "à¤²à¥ˆà¤¬ à¤Ÿà¥‡à¤¸à¥à¤Ÿ â€” à¤ªà¤°à¥à¤šà¥‡ à¤¸à¥‡ à¤†à¤°à¥à¤¡à¤°, à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤­à¥€ à¤¯à¤¹à¥€à¤‚", en: "à¤ªà¤°à¥à¤šà¥‡ à¤®à¥‡à¤‚ à¤Ÿà¥‡à¤¸à¥à¤Ÿ à¤²à¤¿à¤–à¥‹, à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤†à¤¨à¥‡ à¤ªà¤° à¤‰à¤¸à¥€ à¤®à¤°à¥€à¤œà¤¼ à¤•à¥‡ à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡ à¤®à¥‡à¤‚ à¤œà¥‹à¤¡à¤¼à¥‹" },
  { icon: "ðŸ§¾", hi: "à¤œà¥€à¤à¤¸à¤Ÿà¥€ à¤¬à¤¿à¤² â€” à¤¨à¤•à¤¦, à¤¯à¥‚à¤ªà¥€à¤†à¤ˆ, à¤‰à¤§à¤¾à¤° à¤¸à¤¬ à¤šà¤²à¥‡à¤—à¤¾", en: "à¤¬à¤¿à¤² à¤¬à¤¨à¤¾à¤¨à¥‡ à¤®à¥‡à¤‚ à¤¬à¤¸ à¤•à¥à¤› à¤¸à¥‡à¤•à¤‚à¤¡ â€” à¤¨à¤•à¤¦ à¤¹à¥‹, à¤¯à¥‚à¤ªà¥€à¤†à¤ˆ à¤¹à¥‹ à¤¯à¤¾ à¤‰à¤§à¤¾à¤°, à¤¸à¤¬ à¤•à¤¾ à¤¹à¤¿à¤¸à¤¾à¤¬" },
  { icon: "ðŸ’Š", hi: "à¤¦à¤µà¤¾à¤–à¤¾à¤¨à¤¾ â€” à¤ªà¤°à¥à¤šà¥‡ à¤¸à¥‡ à¤¸à¥€à¤§à¥‡ à¤¬à¤¿à¤² à¤¬à¤¨ à¤œà¤¾à¤à¤—à¤¾", en: "à¤¡à¥‰à¤•à¥à¤Ÿà¤° à¤•à¤¾ à¤ªà¤°à¥à¤šà¤¾ à¤¦à¤µà¤¾à¤–à¤¾à¤¨à¥‡ à¤ªà¤° à¤ªà¤¹à¥à¤à¤šà¤¾, à¤à¤• à¤•à¥à¤²à¤¿à¤• à¤®à¥‡à¤‚ à¤¬à¤¿à¤² à¤¤à¥ˆà¤¯à¤¾à¤°" },
  { icon: "ðŸ“¦", hi: "à¤¦à¤µà¤¾ à¤•à¤¾ à¤¸à¥à¤Ÿà¥‰à¤• â€” à¤à¤•à¥à¤¸à¤ªà¤¾à¤¯à¤°à¥€ à¤•à¥€ à¤šà¥‡à¤¤à¤¾à¤µà¤¨à¥€ à¤ªà¤¹à¤²à¥‡ à¤®à¤¿à¤²à¥‡à¤—à¥€", en: "à¤•à¥Œà¤¨ à¤¸à¥€ à¤¦à¤µà¤¾ à¤•à¤¿à¤¤à¤¨à¥€ à¤¬à¤šà¥€, à¤•à¤¬ à¤–à¤°à¤¾à¤¬ à¤¹à¥‹à¤—à¥€ â€” à¤¸à¤¬ à¤¦à¤¿à¤–à¥‡à¤—à¤¾" },
  { icon: "ðŸ“Š", hi: "à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ â€” à¤†à¤œ à¤•à¤¾, à¤®à¤¹à¥€à¤¨à¥‡ à¤•à¤¾, à¤«à¤¾à¤¯à¤¦à¤¾-à¤¨à¥à¤•à¤¸à¤¾à¤¨ à¤¸à¤¬", en: "à¤¬à¤¿à¤•à¥à¤°à¥€ à¤•à¥€ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ, à¤«à¤¾à¤¯à¤¦à¤¾-à¤¨à¥à¤•à¤¸à¤¾à¤¨, à¤‰à¤§à¤¾à¤° à¤¬à¤¾à¤•à¥€ â€” à¤à¤• à¤œà¤—à¤¹" },
  { icon: "ðŸ”’", hi: "à¤‰à¤§à¤¾à¤° à¤•à¤¾ à¤¹à¤¿à¤¸à¤¾à¤¬ â€” à¤•à¤¿à¤¸à¤¨à¥‡ à¤•à¤¿à¤¤à¤¨à¤¾ à¤²à¥‡à¤¨à¤¾ à¤¹à¥ˆ", en: "à¤‰à¤§à¤¾à¤° à¤•à¤¾ à¤ªà¥‚à¤°à¤¾ à¤¹à¤¿à¤¸à¤¾à¤¬, à¤µà¥à¤¹à¤¾à¤Ÿà¥à¤¸à¤à¤ª à¤¸à¥‡ à¤¯à¤¾à¤¦ à¤¦à¤¿à¤²à¤¾ à¤¸à¤•à¤¤à¥‡ à¤¹à¥‹" },
  { icon: "ðŸ©º", hi: "à¤•à¤ˆ à¤¡à¥‰à¤•à¥à¤Ÿà¤° â€” à¤…à¤²à¤—-à¤…à¤²à¤— à¤²à¤¾à¤‡à¤¨ à¤”à¤° à¤ªà¤°à¥à¤šà¥‡", en: "à¤¹à¤° à¤¡à¥‰à¤•à¥à¤Ÿà¤° à¤•à¥€ à¤…à¤²à¤— à¤²à¤¾à¤‡à¤¨, à¤…à¤²à¤— à¤ªà¤°à¥à¤šà¥‡, à¤…à¤²à¤— à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡" },
  { icon: "ðŸ“±", hi: "à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤”à¤° à¤•à¤‚à¤ªà¥à¤¯à¥‚à¤Ÿà¤° à¤¦à¥‹à¤¨à¥‹à¤‚ à¤ªà¤° à¤šà¤²à¥‡à¤—à¤¾", en: "à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤ªà¤° à¤­à¥€ à¤–à¥à¤²à¥‡à¤—à¤¾, à¤µà¤¿à¤‚à¤¡à¥‹à¤œà¤¼ à¤ªà¤° à¤­à¥€ â€” à¤•à¤¹à¥€à¤‚ à¤¸à¥‡ à¤­à¥€ à¤¦à¥‡à¤–à¥‹" },
];

const howTo = [
  { step: "à¤ªà¤¹à¤²à¤¾", icon: "ðŸ”", hi: "à¤—à¥‚à¤—à¤² à¤¸à¥‡ à¤²à¥‰à¤—à¤¿à¤¨ à¤•à¤°à¥‹", en: "à¤¡à¥‰à¤•à¥à¤Ÿà¤° à¤…à¤ªà¤¨à¥‡ à¤—à¥‚à¤—à¤² à¤–à¤¾à¤¤à¥‡ à¤¸à¥‡ à¤²à¥‰à¤—à¤¿à¤¨ à¤•à¤°à¥‡à¤‚ â€” à¤•à¥‹à¤ˆ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¯à¤¾à¤¦ à¤¨à¤¹à¥€à¤‚ à¤°à¤–à¤¨à¤¾" },
  { step: "à¤¦à¥‚à¤¸à¤°à¤¾", icon: "âš™ï¸", hi: "à¤•à¥à¤²à¤¿à¤¨à¤¿à¤• à¤•à¥€ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤­à¤°à¥‹", en: "à¤•à¥à¤²à¤¿à¤¨à¤¿à¤• à¤•à¤¾ à¤¨à¤¾à¤®, à¤¡à¥‰à¤•à¥à¤Ÿà¤° à¤•à¤¾ à¤¨à¤¾à¤®, à¤ªà¤¤à¤¾, à¤œà¥€à¤à¤¸à¤Ÿà¥€à¤†à¤ˆà¤à¤¨ â€” à¤à¤• à¤¬à¤¾à¤° à¤­à¤°à¥‹, à¤¹à¤®à¥‡à¤¶à¤¾ à¤•à¤¾à¤® à¤†à¤à¤—à¤¾" },
  { step: "à¤¤à¥€à¤¸à¤°à¤¾", icon: "ðŸ‘¤", hi: "à¤®à¤°à¥€à¤œà¤¼ à¤•à¥‹ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‹", en: "à¤¨à¤¾à¤®, à¤‰à¤®à¥à¤°, à¤«à¤¼à¥‹à¤¨, à¤¤à¤•à¤²à¥€à¤« à¤²à¤¿à¤–à¥‹ â€” à¤Ÿà¥‹à¤•à¤¨ à¤…à¤ªà¤¨à¥‡ à¤†à¤ª à¤®à¤¿à¤² à¤œà¤¾à¤à¤—à¤¾" },
  { step: "à¤šà¥Œà¤¥à¤¾", icon: "ðŸ©º", hi: "à¤¡à¥‰à¤•à¥à¤Ÿà¤° à¤¦à¥‡à¤–à¥‡ à¤”à¤° à¤ªà¤°à¥à¤šà¤¾ à¤²à¤¿à¤–à¥‡", en: "à¤®à¤°à¥€à¤œà¤¼ à¤•à¤¾ à¤¨à¤¾à¤® à¤–à¥‹à¤²à¥‹, à¤ªà¤°à¥à¤šà¤¾ à¤²à¤¿à¤–à¥‹, à¤Ÿà¥‡à¤¸à¥à¤Ÿ à¤²à¤¿à¤–à¥‹" },
  { step: "à¤ªà¤¾à¤à¤šà¤µà¤¾à¤", icon: "ðŸ’Š", hi: "à¤¦à¤µà¤¾à¤–à¤¾à¤¨à¥‡ à¤ªà¤° à¤¬à¤¿à¤² à¤¬à¤¨à¥‡", en: "à¤ªà¤°à¥à¤šà¤¾ à¤¦à¤µà¤¾à¤–à¤¾à¤¨à¥‡ à¤ªà¤° à¤ªà¤¹à¥à¤à¤šà¤¾, à¤¦à¤µà¤¾ à¤¦à¥‹ à¤”à¤° à¤¬à¤¿à¤² à¤¬à¤¨à¤¾à¤“" },
  { step: "à¤›à¤ à¤¾", icon: "ðŸ“Š", hi: "à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤¦à¥‡à¤–à¥‹", en: "à¤†à¤œ à¤•à¥€ à¤¬à¤¿à¤•à¥à¤°à¥€, à¤«à¤¾à¤¯à¤¦à¤¾, à¤‰à¤§à¤¾à¤° â€” à¤•à¤­à¥€ à¤­à¥€ à¤¦à¥‡à¤– à¤¸à¤•à¤¤à¥‡ à¤¹à¥‹" },
];

const whyUs = [
  { icon: "ðŸ’¸", title: "à¤¸à¤¬à¤¸à¥‡ à¤¸à¤¸à¥à¤¤à¤¾", desc: "â‚¹à¥ª,à¥¯à¥¯à¥¯ à¤®à¥‡à¤‚ à¤ªà¥‚à¤°à¤¾ à¥§ à¤¸à¤¾à¤² â€” à¤•à¥‹à¤ˆ à¤®à¤¾à¤¸à¤¿à¤• à¤¶à¥à¤²à¥à¤• à¤¨à¤¹à¥€à¤‚, à¤•à¥‹à¤ˆ à¤›à¥à¤ªà¥€ à¤¹à¥à¤ˆ à¤«à¥€à¤¸ à¤¨à¤¹à¥€à¤‚à¥¤" },
  { icon: "ðŸ“´", title: "à¤‡à¤‚à¤Ÿà¤°à¤¨à¥‡à¤Ÿ à¤¨ à¤¹à¥‹ à¤¤à¥‹ à¤­à¥€ à¤šà¤²à¥‡à¤—à¤¾", desc: "à¤µà¤¿à¤‚à¤¡à¥‹à¤œà¤¼ à¤µà¤¾à¤²à¤¾ à¤à¤ª à¤¬à¤¿à¤¨à¤¾ à¤‡à¤‚à¤Ÿà¤°à¤¨à¥‡à¤Ÿ à¤•à¥‡ à¤­à¥€ à¤•à¤¾à¤® à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ â€” à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤°à¤¹à¤¤à¤¾ à¤¹à¥ˆà¥¤" },
  { icon: "ðŸ‡®ðŸ‡³", title: "à¤­à¤¾à¤°à¤¤ à¤•à¥‡ à¤²à¤¿à¤ à¤¬à¤¨à¤¾", desc: "à¤œà¥€à¤à¤¸à¤Ÿà¥€, à¤à¤šà¤à¤¸à¤à¤¨ à¤•à¥‹à¤¡, à¤¹à¤¿à¤‚à¤¦à¥€ â€” à¤­à¤¾à¤°à¤¤à¥€à¤¯ à¤•à¥à¤²à¤¿à¤¨à¤¿à¤• à¤•à¥€ à¤¹à¤° à¤œà¤¼à¤°à¥‚à¤°à¤¤à¥¤" },
  { icon: "ðŸ”’", title: "à¤¡à¥‡à¤Ÿà¤¾ à¤†à¤ªà¤•à¤¾ â€” à¤†à¤ªà¤•à¥‡ à¤ªà¤¾à¤¸", desc: "à¤•à¥‹à¤ˆ à¤¬à¤¾à¤¹à¤°à¥€ à¤•à¤‚à¤ªà¤¨à¥€ à¤•à¥‹ à¤¡à¥‡à¤Ÿà¤¾ à¤¨à¤¹à¥€à¤‚ à¤œà¤¾à¤¤à¤¾ â€” à¤ªà¥‚à¤°à¥€ à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾à¥¤" },
  { icon: "ðŸ“ž", title: "à¤¸à¥€à¤§à¥‡ à¤¬à¤¾à¤¤ à¤•à¤°à¥‹", desc: "à¤µà¥à¤¹à¤¾à¤Ÿà¥à¤¸à¤à¤ª à¤ªà¤° à¤¸à¥€à¤§à¥‡ à¤¬à¤¨à¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤¸à¥‡ à¤¬à¤¾à¤¤ â€” à¤•à¥‹à¤ˆ à¤•à¥‰à¤² à¤¸à¥‡à¤‚à¤Ÿà¤° à¤¨à¤¹à¥€à¤‚à¥¤" },
  { icon: "ðŸ”„", title: "à¤…à¤ªà¤¡à¥‡à¤Ÿ à¤®à¥à¤«à¥à¤¤", desc: "à¤œà¥€à¤à¤¸à¤Ÿà¥€ à¤¬à¤¦à¤²à¥‡ à¤¯à¤¾ à¤¨à¤¯à¤¾ à¤«à¥€à¤šà¤° à¤†à¤ â€” à¤¸à¤¬ à¤…à¤ªà¤¨à¥‡ à¤†à¤ª à¤…à¤ªà¤¡à¥‡à¤Ÿ à¤¹à¥‹à¤—à¤¾, à¤•à¥‹à¤ˆ à¤…à¤²à¤— à¤ªà¥ˆà¤¸à¤¾ à¤¨à¤¹à¥€à¤‚à¥¤" },
];

export default function ClinicPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <div className="bg-teal-700 py-2 px-4 text-center text-base font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">ðŸ“ž 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">ðŸ’¬ à¤µà¥à¤¹à¤¾à¤Ÿà¥à¤¸à¤à¤ª</a>
      </div>

      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">ðŸ–¥ï¸ <span className="text-amber-400">à¤¨à¤¿à¤¶à¤¾à¤‚à¤¤</span> à¤¸à¥‰à¤«à¥à¤Ÿà¤µà¥‡à¤¯à¤°</a>
          <a href="/" className="text-sm text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">â† à¤¸à¤­à¥€ à¤‰à¤¤à¥à¤ªà¤¾à¤¦</a>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
            à¥­ à¤¦à¤¿à¤¨ à¤¬à¤¿à¤²à¥à¤•à¥à¤² à¤®à¥à¤«à¥à¤¤ â€” à¤•à¥‹à¤ˆ à¤•à¤¾à¤°à¥à¤¡ à¤¨à¤¹à¥€à¤‚
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
            ðŸ¥ à¤•à¥à¤²à¤¿à¤¨à¤¿à¤•à¤“à¤à¤¸<br />
            <span className="text-teal-200">à¤¸à¥à¤®à¤¾à¤°à¥à¤Ÿ à¤•à¥à¤²à¤¿à¤¨à¤¿à¤• à¤ªà¥à¤°à¤¬à¤‚à¤§à¤¨</span>
          </h1>
          <p className="text-xl mb-2 font-semibold text-teal-100">
            à¥© à¤¸à¥‡ à¥ª à¤¡à¥‰à¤•à¥à¤Ÿà¤° à¤¤à¤• à¤•à¥‡ à¤…à¤¸à¥à¤ªà¤¤à¤¾à¤² à¤•à¥‡ à¤²à¤¿à¤ â€” à¤®à¤°à¥€à¤œà¤¼ à¤•à¥€ à¤²à¤¾à¤‡à¤¨, à¤ªà¤°à¥à¤šà¤¾, à¤¦à¤µà¤¾à¤–à¤¾à¤¨à¤¾, à¤¬à¤¿à¤² â€” à¤¸à¤¬ à¤à¤• à¤œà¤—à¤¹à¥¤
          </p>
          <p className="text-base mb-8 text-teal-200/80">
            à¤à¤• à¤¬à¤¾à¤° à¤¸à¥‡à¤Ÿ à¤•à¤°à¥‹, à¤°à¥‹à¤œà¤¼ à¤•à¤¾à¤® à¤†à¤à¤—à¤¾à¥¤
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CLINIC_PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-bold text-lg px-8 py-3.5 rounded-2xl shadow-lg hover:bg-teal-50 transition active:scale-95"
            >
              ðŸ“± à¤®à¥à¤«à¥à¤¤ à¤®à¥‡à¤‚ à¤†à¤œà¤¼à¤®à¤¾à¤à¤
            </a>
            <a
              href={CLINIC_EXE_URL}
              className="inline-flex items-center justify-center gap-2 bg-teal-600 border-2 border-white/40 text-white font-bold text-lg px-8 py-3.5 rounded-2xl shadow-lg hover:bg-teal-500 transition active:scale-95"
            >
              ðŸ’» à¤µà¤¿à¤‚à¤¡à¥‹à¤œà¤¼ à¤ªà¤° à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚
            </a>
          </div>
          <p className="text-sm text-teal-200/60 mt-3">
            à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤ªà¤°: à¤•à¥à¤°à¥‹à¤® à¤®à¥‡à¤¨à¥‚ â‹® â†’ à¤¹à¥‹à¤® à¤¸à¥à¤•à¥à¤°à¥€à¤¨ à¤ªà¤° à¤œà¥‹à¤¡à¤¼à¥‡à¤‚ &nbsp;|&nbsp; à¤µà¤¿à¤‚à¤¡à¥‹à¤œà¤¼: à¤¸à¥‡à¤Ÿà¤…à¤ª à¤«à¤¾à¤‡à¤² à¤šà¤²à¤¾à¤“
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-teal-400">
            à¤•à¥à¤¯à¤¾-à¤•à¥à¤¯à¤¾ à¤®à¤¿à¤²à¥‡à¤—à¤¾?
          </h2>
          <p className="text-center text-gray-400 text-base mb-10">
            à¤à¤• à¤¸à¥‰à¤«à¥à¤Ÿà¤µà¥‡à¤¯à¤° â€” à¤ªà¥‚à¤°à¥‡ à¤•à¥à¤²à¤¿à¤¨à¤¿à¤• à¤•à¥€ à¤œà¤¼à¤°à¥‚à¤°à¤¤
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-teal-500/20 rounded-xl px-5 py-4 flex gap-4 items-start">
                <span className="text-2xl mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-teal-400 font-semibold text-base mb-1">{f.hi}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">{f.en}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-teal-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-gray-800">
            à¤•à¥ˆà¤¸à¥‡ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚?
          </h2>
          <p className="text-center text-gray-500 text-base mb-10">
            à¥« à¤®à¤¿à¤¨à¤Ÿ à¤®à¥‡à¤‚ à¤¸à¥‡à¤Ÿ à¤¹à¥‹ à¤œà¤¾à¤à¤—à¤¾ â€” à¤•à¥‹à¤ˆ à¤Ÿà¥à¤°à¥‡à¤¨à¤¿à¤‚à¤— à¤¨à¤¹à¥€à¤‚ à¤šà¤¾à¤¹à¤¿à¤
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-teal-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{h.icon}</span>
                  <span className="text-sm font-bold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">{h.step} à¤•à¤¾à¤®</span>
                </div>
                <div className="font-bold text-gray-800 text-base mb-1">{h.hi}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{h.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-gray-800">
            à¤•à¥à¤²à¤¿à¤¨à¤¿à¤•à¤“à¤à¤¸ à¤¹à¥€ à¤•à¥à¤¯à¥‹à¤‚?
          </h2>
          <p className="text-center text-gray-400 text-base mb-10">
            à¤œà¥‹ à¤¬à¤¾à¤¤ à¤¹à¤®à¥‡à¤‚ à¤¬à¤¾à¤•à¥€ à¤¸à¤¬à¤¸à¥‡ à¤…à¤²à¤— à¤•à¤°à¤¤à¥€ à¤¹à¥ˆ
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {whyUs.map((w, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-teal-400 transition">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-bold text-gray-800 text-base mb-1">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-gray-800">à¤•à¥€à¤®à¤¤</h2>
          <p className="text-center text-gray-400 text-base mb-10">à¤•à¥‹à¤ˆ à¤®à¤¾à¤¸à¤¿à¤• à¤¶à¥à¤²à¥à¤• à¤¨à¤¹à¥€à¤‚ â€” à¤à¤• à¤¬à¤¾à¤° à¤–à¤°à¥€à¤¦à¥‹, à¤¸à¤¾à¤² à¤­à¤° à¤šà¤²à¤¾à¤“</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-teal-500 p-6 text-center shadow-lg relative bg-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                à¤¨à¤¯à¤¾ à¤–à¤¾à¤¤à¤¾
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">à¤ªà¤¹à¤²à¥€ à¤¬à¤¾à¤°</h3>
              <div className="text-4xl font-extrabold text-teal-600 mb-1">â‚¹4,999</div>
              <p className="text-gray-400 text-base mb-1">à¤à¤• à¤¬à¤¾à¤° â€” à¥§ à¤¸à¤¾à¤² à¤¶à¤¾à¤®à¤¿à¤²</p>
              <p className="text-gray-400 text-sm mb-5">à¥­ à¤¦à¤¿à¤¨ à¤®à¥à¤«à¥à¤¤ â€” à¤•à¥‹à¤ˆ à¤•à¤¾à¤°à¥à¤¡ à¤¨à¤¹à¥€à¤‚</p>
              <a
                href={CLINIC_PWA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-500 transition mb-2 text-base"
              >
                à¤®à¥à¤«à¥à¤¤ à¤®à¥‡à¤‚ à¤†à¤œà¤¼à¤®à¤¾à¤à¤
              </a>
              <a
                href="/payment?software=clinic"
                className="block w-full border border-teal-500 text-teal-600 font-bold py-3 rounded-xl hover:bg-teal-50 transition text-base"
              >
                à¤…à¤­à¥€ à¤–à¤°à¥€à¤¦à¥‡à¤‚ â€” â‚¹4,999
              </a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm bg-white">
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">à¤¨à¤µà¥€à¤•à¤°à¤£</h3>
              <div className="text-4xl font-extrabold text-teal-600 mb-1">â‚¹1,999</div>
              <p className="text-gray-400 text-base mb-1">à¤¹à¤° à¤¸à¤¾à¤²</p>
              <p className="text-gray-400 text-sm mb-5">à¤¸à¤®à¤¾à¤ªà¥à¤¤à¤¿ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤¨à¤µà¥€à¤•à¤°à¤£ à¤•à¤°à¥‡à¤‚</p>
              <a
                href="/payment?software=clinic&plan=renewal"
                className="block w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-500 transition text-base"
              >
                à¤…à¤­à¥€ à¤¨à¤µà¥€à¤•à¤°à¤£ à¤•à¤°à¥‡à¤‚ â€” â‚¹2500
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-700 py-12 px-4 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-2">à¤†à¤œ à¤¹à¥€ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚ â€” à¤¬à¤¿à¤²à¥à¤•à¥à¤² à¤®à¥à¤«à¥à¤¤</h2>
          <p className="text-teal-200 mb-6 text-base">à¥­ à¤¦à¤¿à¤¨ à¤ªà¥‚à¤°à¥€ à¤¤à¤°à¤¹ à¤®à¥à¤«à¥à¤¤ â€” à¤•à¥‹à¤ˆ à¤•à¤¾à¤°à¥à¤¡ à¤¨à¤¹à¥€à¤‚, à¤•à¥‹à¤ˆ à¤µà¤¾à¤¦à¤¾ à¤¨à¤¹à¥€à¤‚</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href={CLINIC_PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-700 font-bold px-8 py-3 rounded-2xl hover:bg-teal-50 transition text-base"
            >
              ðŸ“± à¤®à¥à¤«à¥à¤¤ à¤®à¥‡à¤‚ à¤–à¥‹à¤²à¥‡à¤‚
            </a>
            <a
              href={CLINIC_EXE_URL}
              className="bg-teal-600 border-2 border-white/40 text-white font-bold px-8 py-3 rounded-2xl hover:bg-teal-500 transition text-base"
            >
              ðŸ’» à¤µà¤¿à¤‚à¤¡à¥‹à¤œà¤¼ à¤ªà¤° à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-base font-semibold">
            <a href="tel:+919996865069" className="hover:underline">ðŸ“ž 9996865069</a>
            <span className="hidden sm:inline">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">ðŸ’¬ à¤µà¥à¤¹à¤¾à¤Ÿà¥à¤¸à¤à¤ª</a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">âœ‰ï¸ à¤ˆà¤®à¥‡à¤²</a>
          </div>
        </div>
      </section>

    </main>
  );
}

