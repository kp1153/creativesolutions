"use client";

const LEGAL_PWA_URL = "https://judicial-phi.vercel.app/login";
const WINDOWS_EXE_URL = "https://pub-b1d62729c0a54dd6b851eb17bd62a93c.r2.dev/Legal%20Pro%20Setup%200.1.0.exe";

const features = [
  { icon: "âš–ï¸", en: "Case Management", hi: "à¤•à¥‡à¤¸ à¤ªà¥à¤°à¤¬à¤‚à¤§à¤¨", desc_en: "Case number, court, opposite party, filing date â€” everything in one place. District Court to Supreme Court.", desc_hi: "à¤•à¥‡à¤¸ à¤¨à¤‚à¤¬à¤°, à¤…à¤¦à¤¾à¤²à¤¤, à¤µà¤¿à¤ªà¤•à¥à¤·à¥€ à¤ªà¤¾à¤°à¥à¤Ÿà¥€, à¤¦à¤¾à¤–à¤¿à¤² à¤¤à¤¾à¤°à¥€à¤– â€” à¤¸à¤¬ à¤à¤• à¤œà¤—à¤¹à¥¤ à¤œà¤¿à¤²à¤¾ à¤…à¤¦à¤¾à¤²à¤¤ à¤¸à¥‡ à¤¸à¥à¤ªà¥à¤°à¥€à¤® à¤•à¥‹à¤°à¥à¤Ÿ à¤¤à¤•à¥¤" },
  { icon: "ðŸ“…", en: "Court Date Tracker", hi: "à¤ªà¥‡à¤¶à¥€ à¤¤à¤¾à¤°à¥€à¤– à¤Ÿà¥à¤°à¥ˆà¤•à¤°", desc_en: "Record every hearing date. Email reminder arrives before the date â€” never miss a hearing.", desc_hi: "à¤¹à¤° à¤ªà¥‡à¤¶à¥€ à¤•à¥€ à¤¤à¤¾à¤°à¥€à¤– à¤¦à¤°à¥à¤œ à¤•à¤°à¥‹à¥¤ à¤¤à¤¾à¤°à¥€à¤– à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ email reminder à¤†à¤à¤—à¤¾ â€” à¤ªà¥‡à¤¶à¥€ à¤•à¤­à¥€ à¤¨à¤¹à¥€à¤‚ à¤›à¥‚à¤Ÿà¥‡à¤—à¥€à¥¤" },
  { icon: "ðŸ‘¤", en: "Client Management", hi: "à¤®à¥à¤µà¤•à¥à¤•à¤¿à¤² à¤ªà¥à¤°à¤¬à¤‚à¤§à¤¨", desc_en: "Every client's profile â€” contact, cases, documents, fees â€” all linked together.", desc_hi: "à¤¹à¤° à¤®à¥à¤µà¤•à¥à¤•à¤¿à¤² à¤•à¥€ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ â€” à¤¸à¤‚à¤ªà¤°à¥à¤•, à¤•à¥‡à¤¸, à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œà¤¼, à¤«à¥€à¤¸ â€” à¤¸à¤¬ à¤à¤• à¤¸à¤¾à¤¥à¥¤" },
  { icon: "ðŸ“‹", en: "Case Diary", hi: "à¤•à¥‡à¤¸ à¤¡à¤¾à¤¯à¤°à¥€", desc_en: "After every hearing â€” notes on what happened, what was argued, why the next date was given.", desc_hi: "à¤¹à¤° à¤¸à¥à¤¨à¤µà¤¾à¤ˆ à¤•à¥‡ à¤¬à¤¾à¤¦ â€” à¤•à¥à¤¯à¤¾ à¤¹à¥à¤†, à¤•à¥à¤¯à¤¾ à¤¬à¤¹à¤¸ à¤¹à¥à¤ˆ, à¤…à¤—à¤²à¥€ à¤¤à¤¾à¤°à¥€à¤– à¤•à¥à¤¯à¥‹à¤‚ à¤®à¤¿à¤²à¥€à¥¤" },
  { icon: "ðŸ’°", en: "Fee Ledger", hi: "à¤«à¥€à¤¸ à¤¬à¤¹à¥€", desc_en: "How much charged, how much received, how much pending â€” client-wise clear account.", desc_hi: "à¤•à¤¿à¤¤à¤¨à¤¾ à¤²à¤¿à¤¯à¤¾, à¤•à¤¿à¤¤à¤¨à¤¾ à¤®à¤¿à¤²à¤¾, à¤•à¤¿à¤¤à¤¨à¤¾ à¤¬à¤¾à¤•à¥€ â€” à¤®à¥à¤µà¤•à¥à¤•à¤¿à¤²-à¤µà¤¾à¤° à¤¸à¤¾à¤« à¤¹à¤¿à¤¸à¤¾à¤¬à¥¤" },
  { icon: "ðŸ“Ž", en: "Document Attach", hi: "à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œà¤¼ à¤¸à¤‚à¤²à¤—à¥à¤¨", desc_en: "Vakalatnama, FIR copy, petition, judgment â€” attach to the case digitally.", desc_hi: "à¤µà¤•à¤¾à¤²à¤¤à¤¨à¤¾à¤®à¤¾, FIR à¤•à¥‰à¤ªà¥€, à¤…à¤°à¥à¤œà¥€, à¤†à¤¦à¥‡à¤¶ â€” à¤•à¥‡à¤¸ à¤¸à¥‡ à¤¡à¤¿à¤œà¤¿à¤Ÿà¤² à¤°à¥‚à¤ª à¤®à¥‡à¤‚ à¤œà¥‹à¤¡à¤¼à¥‹à¥¤" },
  { icon: "ðŸ“Š", en: "Today's Cause List", hi: "à¤†à¤œ à¤•à¥€ à¤•à¥‰à¤œà¤¼ à¤²à¤¿à¤¸à¥à¤Ÿ", desc_en: "All today's cases at a glance â€” prepare before going to court.", desc_hi: "à¤†à¤œ à¤•à¥‡ à¤¸à¤­à¥€ à¤•à¥‡à¤¸ à¤à¤• à¤¨à¤œà¤¼à¤° à¤®à¥‡à¤‚ â€” à¤•à¥‹à¤°à¥à¤Ÿ à¤œà¤¾à¤¨à¥‡ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤¤à¥ˆà¤¯à¤¾à¤°à¥€à¥¤" },
  { icon: "ðŸ“±", en: "Mobile Ready", hi: "à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤ªà¤° à¤­à¥€ à¤šà¤²à¥‡", desc_en: "Works on Android like an app â€” install from Chrome, no app store needed.", desc_hi: "Android à¤ªà¤° app à¤•à¥€ à¤¤à¤°à¤¹ à¤šà¤²à¤¤à¤¾ à¤¹à¥ˆ â€” Chrome à¤¸à¥‡ install à¤•à¤°à¥‹, à¤•à¥‹à¤ˆ app store à¤¨à¤¹à¥€à¤‚à¥¤" },
  { icon: "â˜ï¸", en: "Cloud Backup", hi: "à¤•à¥à¤²à¤¾à¤‰à¤¡ à¤¬à¥ˆà¤•à¤…à¤ª", desc_en: "All data saved securely in the cloud â€” accessible from any device, anywhere.", desc_hi: "à¤¸à¤¾à¤°à¤¾ à¤¡à¥‡à¤Ÿà¤¾ cloud à¤®à¥‡à¤‚ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ â€” à¤•à¤¿à¤¸à¥€ à¤­à¥€ à¤¡à¤¿à¤µà¤¾à¤‡à¤¸ à¤¸à¥‡, à¤•à¤¹à¥€à¤‚ à¤¸à¥‡ à¤­à¥€à¥¤" },
  { icon: "ðŸ”", en: "Google Login", hi: "à¤—à¥‚à¤—à¤² à¤²à¥‰à¤—à¤¿à¤¨", desc_en: "One click login with Google â€” no password to remember, no registration form.", desc_hi: "Google à¤¸à¥‡ à¤à¤• à¤•à¥à¤²à¤¿à¤• à¤®à¥‡à¤‚ login â€” à¤•à¥‹à¤ˆ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¨à¤¹à¥€à¤‚, à¤•à¥‹à¤ˆ à¤«à¥‰à¤°à¥à¤® à¤¨à¤¹à¥€à¤‚à¥¤" },
];

const courts = [
  "District Court Â· à¤œà¤¿à¤²à¤¾ à¤…à¤¦à¤¾à¤²à¤¤",
  "Sessions Court Â· à¤¸à¤¤à¥à¤° à¤¨à¥à¤¯à¤¾à¤¯à¤¾à¤²à¤¯",
  "High Court Â· à¤‰à¤šà¥à¤š à¤¨à¥à¤¯à¤¾à¤¯à¤¾à¤²à¤¯",
  "Supreme Court Â· à¤¸à¤°à¥à¤µà¥‹à¤šà¥à¤š à¤¨à¥à¤¯à¤¾à¤¯à¤¾à¤²à¤¯",
  "Consumer Forum Â· à¤‰à¤ªà¤­à¥‹à¤•à¥à¤¤à¤¾ à¤«à¥‹à¤°à¤®",
  "Family Court Â· à¤ªà¤°à¤¿à¤µà¤¾à¤° à¤¨à¥à¤¯à¤¾à¤¯à¤¾à¤²à¤¯",
  "Labour Court Â· à¤¶à¥à¤°à¤® à¤¨à¥à¤¯à¤¾à¤¯à¤¾à¤²à¤¯",
  "Revenue Court Â· à¤°à¤¾à¤œà¤¸à¥à¤µ à¤¨à¥à¤¯à¤¾à¤¯à¤¾à¤²à¤¯",
  "RERA", "NCLT", "NGT", "Debt Recovery Tribunal",
  "Magistrate Court", "Civil Court",
];

const compare = [
  { label: "Court Date Reminder Â· à¤ªà¥‡à¤¶à¥€ reminder", them: false, us: true },
  { label: "Fee Ledger Â· à¤«à¥€à¤¸ à¤¬à¤¹à¥€", them: false, us: true },
  { label: "Cloud Backup Â· à¤•à¥à¤²à¤¾à¤‰à¤¡ à¤¬à¥ˆà¤•à¤…à¤ª", them: false, us: true },
  { label: "Mobile PWA Â· à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤à¤ª", them: false, us: true },
  { label: "Case Diary Â· à¤•à¥‡à¤¸ à¤¡à¤¾à¤¯à¤°à¥€", them: true, us: true },
  { label: "Document Attach Â· à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œà¤¼", them: true, us: true },
  { label: "Client Management Â· à¤®à¥à¤µà¤•à¥à¤•à¤¿à¤²", them: true, us: true },
];

const steps = [
  {
    step: "01", icon: "ðŸ’»",
    en: "Download & Install",
    hi: "à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤”à¤° à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤² à¤•à¤°à¥‡à¤‚",
    en_detail: "Click the 'Download for Windows' button. A .exe file will download. Double-click it to install. If Windows shows a warning, click 'More info' â†’ 'Run anyway'.",
    hi_detail: "à¤¨à¥€à¤šà¥‡ à¤¦à¤¿à¤ 'Windows à¤ªà¤° Download à¤•à¤°à¥‡à¤‚' à¤¬à¤Ÿà¤¨ à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤ à¤à¤• .exe à¤«à¤¾à¤‡à¤² à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤¹à¥‹à¤—à¥€à¥¤ à¤‰à¤¸ à¤ªà¤° double-click à¤•à¤°à¥‡à¤‚à¥¤ à¤…à¤—à¤° Windows à¤•à¥‹à¤ˆ warning à¤¦à¤¿à¤–à¤¾à¤ à¤¤à¥‹ 'More info' â†’ 'Run anyway' à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤",
  },
  {
    step: "02", icon: "ðŸ”",
    en: "Login with Google",
    hi: "Google à¤¸à¥‡ Login à¤•à¤°à¥‡à¤‚",
    en_detail: "Open the app. Click 'Sign in with Google'. Select your Gmail account. That's it â€” you are now logged in. No password, no registration.",
    hi_detail: "à¤à¤ª à¤–à¥‹à¤²à¥‡à¤‚à¥¤ 'Google à¤¸à¥‡ Login à¤•à¤°à¥‹' à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤ à¤…à¤ªà¤¨à¤¾ Gmail account à¤šà¥à¤¨à¥‡à¤‚à¥¤ à¤¬à¤¸ â€” à¤†à¤ª logged in à¤¹à¥‹ à¤—à¤à¥¤ à¤•à¥‹à¤ˆ password à¤¨à¤¹à¥€à¤‚, à¤•à¥‹à¤ˆ registration à¤¨à¤¹à¥€à¤‚à¥¤",
  },
  {
    step: "03", icon: "ðŸ‘¤",
    en: "Add Your First Client",
    hi: "à¤ªà¤¹à¤²à¤¾ à¤®à¥à¤µà¤•à¥à¤•à¤¿à¤² à¤œà¥‹à¤¡à¤¼à¥‡à¤‚",
    en_detail: "Go to 'New Client' from the sidebar. Fill in the client's name and mobile number. Save. Your client is now in the system.",
    hi_detail: "Sidebar à¤¸à¥‡ 'New Client' à¤ªà¤° à¤œà¤¾à¤à¤‚à¥¤ à¤®à¥à¤µà¤•à¥à¤•à¤¿à¤² à¤•à¤¾ à¤¨à¤¾à¤® à¤”à¤° à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤¨à¤‚à¤¬à¤° à¤­à¤°à¥‡à¤‚à¥¤ Save à¤•à¤°à¥‡à¤‚à¥¤ à¤†à¤ªà¤•à¤¾ à¤®à¥à¤µà¤•à¥à¤•à¤¿à¤² system à¤®à¥‡à¤‚ à¤† à¤—à¤¯à¤¾à¥¤",
  },
  {
    step: "04", icon: "âš–ï¸",
    en: "Add a Case",
    hi: "à¤•à¥‡à¤¸ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
    en_detail: "Go to 'New Case'. Select the client, enter the case title, court name, case number, and next hearing date. Save the case.",
    hi_detail: "'New Case' à¤ªà¤° à¤œà¤¾à¤à¤‚à¥¤ à¤®à¥à¤µà¤•à¥à¤•à¤¿à¤² à¤šà¥à¤¨à¥‡à¤‚, à¤•à¥‡à¤¸ à¤•à¤¾ à¤¨à¤¾à¤®, à¤…à¤¦à¤¾à¤²à¤¤, à¤•à¥‡à¤¸ à¤¨à¤‚à¤¬à¤° à¤”à¤° à¤…à¤—à¤²à¥€ à¤ªà¥‡à¤¶à¥€ à¤•à¥€ à¤¤à¤¾à¤°à¥€à¤– à¤­à¤°à¥‡à¤‚à¥¤ Case Save à¤•à¤°à¥‡à¤‚à¥¤",
  },
  {
    step: "05", icon: "ðŸ“‹",
    en: "After Every Hearing",
    hi: "à¤¹à¤° à¤ªà¥‡à¤¶à¥€ à¤•à¥‡ à¤¬à¤¾à¤¦",
    en_detail: "Open the case. Click 'Add Hearing'. Write what happened in court and enter the next date. This takes 30 seconds. Your diary is always up to date.",
    hi_detail: "à¤•à¥‡à¤¸ à¤–à¥‹à¤²à¥‡à¤‚à¥¤ 'Add Hearing' à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤ à¤…à¤¦à¤¾à¤²à¤¤ à¤®à¥‡à¤‚ à¤•à¥à¤¯à¤¾ à¤¹à¥à¤† à¤²à¤¿à¤–à¥‡à¤‚ à¤”à¤° à¤…à¤—à¤²à¥€ à¤¤à¤¾à¤°à¥€à¤– à¤¡à¤¾à¤²à¥‡à¤‚à¥¤ à¤¯à¤¹ 30 à¤¸à¥‡à¤•à¤‚à¤¡ à¤•à¤¾ à¤•à¤¾à¤® à¤¹à¥ˆà¥¤ à¤†à¤ªà¤•à¥€ à¤¡à¤¾à¤¯à¤°à¥€ à¤¹à¤®à¥‡à¤¶à¤¾ à¤…à¤ª-à¤Ÿà¥-à¤¡à¥‡à¤Ÿ à¤°à¤¹à¥‡à¤—à¥€à¥¤",
  },
  {
    step: "06", icon: "ðŸ’°",
    en: "Record Fees",
    hi: "à¤«à¥€à¤¸ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
    en_detail: "In the case, go to Fee Ledger. Enter how much you charged and how much was paid. The pending amount is calculated automatically.",
    hi_detail: "à¤•à¥‡à¤¸ à¤®à¥‡à¤‚ Fee Ledger à¤®à¥‡à¤‚ à¤œà¤¾à¤à¤‚à¥¤ à¤•à¤¿à¤¤à¤¨à¤¾ charge à¤•à¤¿à¤¯à¤¾ à¤”à¤° à¤•à¤¿à¤¤à¤¨à¤¾ à¤®à¤¿à¤²à¤¾ â€” à¤­à¤°à¥‡à¤‚à¥¤ à¤¬à¤•à¤¾à¤¯à¤¾ à¤°à¤•à¤® à¤–à¥à¤¦ calculate à¤¹à¥‹ à¤œà¤¾à¤à¤—à¥€à¥¤",
  },
  {
    step: "07", icon: "ðŸ“…",
    en: "Check Today's Cause List",
    hi: "à¤†à¤œ à¤•à¥€ à¤•à¥‰à¤œà¤¼ à¤²à¤¿à¤¸à¥à¤Ÿ à¤¦à¥‡à¤–à¥‡à¤‚",
    en_detail: "Every morning open the dashboard. Today's Cause List shows all cases with hearings today. No need to search â€” everything is visible at once.",
    hi_detail: "à¤¹à¤° à¤¸à¥à¤¬à¤¹ dashboard à¤–à¥‹à¤²à¥‡à¤‚à¥¤ Today's Cause List à¤®à¥‡à¤‚ à¤†à¤œ à¤•à¥€ à¤¸à¤­à¥€ à¤ªà¥‡à¤¶à¤¿à¤¯à¤¾à¤ à¤¦à¤¿à¤–à¥‡à¤‚à¤—à¥€à¥¤ à¤–à¥‹à¤œà¤¨à¥‡ à¤•à¥€ à¤œà¤°à¥‚à¤°à¤¤ à¤¨à¤¹à¥€à¤‚ â€” à¤¸à¤¬ à¤à¤• à¤¨à¤œà¤¼à¤° à¤®à¥‡à¤‚à¥¤",
  },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@500;600;700;800&display=swap');
        .hf { font-family: 'Playfair Display', Georgia, serif; }
        .bf { font-family: 'DM Sans', sans-serif; font-weight: 600; }
        .gold { color: #c9a84c; }
        .gold-bg { background: #c9a84c; }
        .card { background: rgba(255,255,255,0.04); border: 1px solid rgba(201,168,76,0.15); transition: all 0.25s ease; }
        .card:hover { background: rgba(201,168,76,0.08); border-color: rgba(201,168,76,0.4); transform: translateY(-2px); }
        .stamp { background: linear-gradient(135deg, #1a1206 0%, #2d1f08 100%); border: 2px solid #c9a84c; box-shadow: 0 0 0 4px rgba(201,168,76,0.1); }
        .hero-bg { background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.12) 0%, transparent 70%), #0a0a0f; }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent); }
        .pill { background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3); color: #c9a84c; }
        .cta-primary { background: linear-gradient(135deg, #c9a84c 0%, #e8c96a 50%, #c9a84c 100%); color: #0a0a0f; font-weight: 800; transition: all 0.2s; box-shadow: 0 4px 24px rgba(201,168,76,0.3); }
        .cta-primary:hover { box-shadow: 0 6px 32px rgba(201,168,76,0.5); transform: translateY(-1px); }
        .cta-secondary { background: transparent; border: 2px solid rgba(201,168,76,0.5); color: #c9a84c; font-weight: 700; transition: all 0.2s; }
        .cta-secondary:hover { background: rgba(201,168,76,0.1); border-color: #c9a84c; }
        .step-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(201,168,76,0.2); border-radius: 16px; padding: 24px; }
        .hi-text { color: #e0d4b0; font-size: 0.9em; }
      `}</style>

      {/* Top Bar */}
      <div className="bf bg-[#c9a84c] py-2 px-4 text-center text-sm font-bold text-[#0a0a0f] flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">ðŸ“ž 9996865069</a>
        <span className="hidden sm:inline">Â·</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">ðŸ’¬ WhatsApp Support</a>
      </div>

      {/* Nav */}
      <nav className="bf sticky top-0 z-50 border-b border-white/5 px-4 py-3" style={{ background: "rgba(10,10,15,0.95)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-black text-white text-lg hf">ðŸ–¥ï¸ <span className="gold">Nishant</span> Software</span>
          <a href="/" className="bf text-sm text-gray-400 hover:text-white border border-white/10 px-3 py-1.5 rounded-lg transition">â† All Products</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-bg py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }} />
        <div className="max-w-4xl mx-auto">
          <div className="pill inline-block bf text-sm px-5 py-2 rounded-full mb-6">
            âš–ï¸ For Every Lawyer in India â€” District Court to Supreme Court
          </div>
          <h1 className="hf text-5xl md:text-7xl font-black mb-2 leading-tight">
            Nishant<br /><span className="gold">Legal Pro</span>
          </h1>
          <p className="bf text-base text-[#c9a84c] mb-2">à¤­à¤¾à¤°à¤¤ à¤•à¥‡ à¤¹à¤° à¤µà¤•à¥€à¤² à¤•à¥‡ à¤²à¤¿à¤ â€” à¤œà¤¿à¤²à¤¾ à¤…à¤¦à¤¾à¤²à¤¤ à¤¸à¥‡ à¤¸à¤°à¥à¤µà¥‹à¤šà¥à¤š à¤¨à¥à¤¯à¤¾à¤¯à¤¾à¤²à¤¯ à¤¤à¤•</p>
          <p className="bf text-xl md:text-2xl text-gray-200 mb-2 max-w-2xl mx-auto">
            Cases Â· Clients Â· Hearings Â· Fee Ledger â€” All in One Place
          </p>
          <p className="bf text-base text-[#e0d4b0] mb-10 max-w-2xl mx-auto">
            à¤•à¥‡à¤¸ Â· à¤®à¥à¤µà¤•à¥à¤•à¤¿à¤² Â· à¤ªà¥‡à¤¶à¥€ Â· à¤«à¥€à¤¸ â€” à¤¸à¤¬ à¤à¤• à¤œà¤—à¤¹
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href={WINDOWS_EXE_URL} className="cta-primary bf inline-block text-lg px-10 py-4 rounded-2xl shadow-xl">
              ðŸ’» Download for Windows (.exe)
            </a>
            <a href={LEGAL_PWA_URL} target="_blank" rel="noopener noreferrer" className="cta-secondary bf inline-block text-lg px-10 py-4 rounded-2xl">
              ðŸŒ Open in Browser / Mobile
            </a>
          </div>
          <p className="bf text-sm text-gray-500">7-day free trial Â· No credit card Â· No commitment<br /><span className="hi-text">7 à¤¦à¤¿à¤¨ à¤®à¥à¤«à¥à¤¤ Â· à¤•à¥‹à¤ˆ card à¤¨à¤¹à¥€à¤‚ Â· à¤•à¥‹à¤ˆ commitment à¤¨à¤¹à¥€à¤‚</span></p>
        </div>
      </section>

      <div className="divider" />

      {/* Windows Warning */}
      <section className="py-6 px-4 bg-[#0d0d12] border-b border-white/5">
        <div className="max-w-3xl mx-auto" style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"14px",padding:"20px 24px"}}>
          <p className="bf font-black text-white text-sm mb-2">⚠️ Windows install करते समय यह संदेश आ सकता है</p>
          <p className="bf text-gray-300 text-sm mb-3">Windows 11 में <strong className="text-white">Smart App Control</strong> नाम की सुरक्षा होती है जो नए software को रोकती है। घबराएं नहीं — software पूरी तरह सुरक्षित है।</p>
          <p className="bf text-white font-bold text-sm mb-1">इस तरह install करें:</p>
          <p className="bf text-gray-300 text-sm leading-relaxed">१. Start menu में <strong className="text-white">Windows Security</strong> खोजें और खोलें<br />२. <strong className="text-white">App &amp; browser control</strong> पर click करें<br />३. <strong className="text-white">Smart App Control</strong> को <strong className="text-white">Off</strong> करें<br />४. अब .exe file दोबारा चलाएं — install हो जाएगा<br />५. install होने के बाद Smart App Control वापस On कर सकते हैं</p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-14 px-4 bg-[#0d0d12]">
        <div className="max-w-4xl mx-auto">
          <h2 className="hf text-3xl md:text-4xl text-center mb-2 font-black">Are These Your Problems?</h2>
          <p className="bf text-center text-[#e0d4b0] text-base mb-10">à¤•à¥à¤¯à¤¾ à¤¯à¥‡ à¤†à¤ªà¤•à¥€ à¤ªà¤°à¥‡à¤¶à¤¾à¤¨à¤¿à¤¯à¤¾à¤ à¤¹à¥ˆà¤‚?</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "ðŸ˜°", en: "Missed a hearing date?", hi: "à¤ªà¥‡à¤¶à¥€ à¤•à¥€ à¤¤à¤¾à¤°à¥€à¤– à¤­à¥‚à¤² à¤—à¤?", fix_en: "Get email reminder before every hearing automatically.", fix_hi: "à¤¹à¤° à¤ªà¥‡à¤¶à¥€ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤–à¥à¤¦ email reminder à¤†à¤à¤—à¤¾à¥¤" },
              { icon: "ðŸ“ž", en: "Client calling again and again?", hi: "à¤®à¥à¤µà¤•à¥à¤•à¤¿à¤² à¤¬à¤¾à¤°-à¤¬à¤¾à¤° à¤«à¥‹à¤¨ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ?", fix_en: "Client can check case status online anytime.", fix_hi: "à¤®à¥à¤µà¤•à¥à¤•à¤¿à¤² à¤–à¥à¤¦ online à¤•à¥‡à¤¸ à¤•à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤¦à¥‡à¤– à¤¸à¤•à¤¤à¤¾ à¤¹à¥ˆà¥¤" },
              { icon: "ðŸ’¸", en: "Fee records are a mess?", hi: "à¤«à¥€à¤¸ à¤•à¤¾ à¤¹à¤¿à¤¸à¤¾à¤¬ à¤—à¤¡à¤¼à¤¬à¤¡à¤¼ à¤¹à¥ˆ?", fix_en: "Every client's dues visible at a glance.", fix_hi: "à¤¹à¤° à¤®à¥à¤µà¤•à¥à¤•à¤¿à¤² à¤•à¤¾ à¤¬à¤•à¤¾à¤¯à¤¾ à¤à¤• à¤¨à¤œà¤¼à¤° à¤®à¥‡à¤‚à¥¤" },
              { icon: "ðŸ“", en: "Drowning in paper files?", hi: "à¤•à¤¾à¤—à¤œà¤¼à¥‹à¤‚ à¤•à¥‡ à¤¢à¥‡à¤° à¤®à¥‡à¤‚ à¤¡à¥‚à¤¬à¥‡ à¤¹à¥‹?", fix_en: "FIR, petition, order â€” store everything digitally.", fix_hi: "FIR, à¤…à¤°à¥à¤œà¥€, à¤†à¤¦à¥‡à¤¶ â€” à¤¸à¤¬ digital à¤à¤• à¤œà¤—à¤¹à¥¤" },
            ].map((p, i) => (
              <div key={i} className="card rounded-2xl p-6 flex gap-4 items-start">
                <div className="text-3xl">{p.icon}</div>
                <div>
                  <div className="bf text-red-400 font-bold text-base mb-0.5">{p.en}</div>
                  <div className="bf text-[#e0d4b0] text-sm mb-2">{p.hi}</div>
                  <div className="bf text-green-400 text-sm">âœ“ {p.fix_en}</div>
                  <div className="bf text-[#c9a84c] text-xs mt-0.5">{p.fix_hi}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Features */}
      <section className="py-16 px-4 bg-[#0a0a0f]">
        <div className="max-w-5xl mx-auto">
          <h2 className="hf text-3xl md:text-4xl text-center mb-2 font-black">Everything a Lawyer Needs</h2>
          <p className="bf text-center text-[#e0d4b0] text-base mb-10">à¤à¤• à¤µà¤•à¥€à¤² à¤•à¥‹ à¤œà¥‹ à¤šà¤¾à¤¹à¤¿à¤ â€” à¤¸à¤¬ à¤¯à¤¹à¤¾à¤ à¤¹à¥ˆ</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="card rounded-2xl p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="bf font-black text-white text-lg mb-0.5">{f.en}</div>
                <div className="bf text-[#c9a84c] text-sm font-bold mb-2">{f.hi}</div>
                <div className="bf text-gray-300 text-sm leading-relaxed">{f.desc_en}</div>
                <div className="bf text-[#e0d4b0] text-xs leading-relaxed mt-1">{f.desc_hi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Courts */}
      <section className="py-12 px-4 bg-[#0d0d12]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="hf text-3xl font-black mb-2">Works for Every Court</h2>
          <p className="bf text-[#e0d4b0] text-base mb-8">à¤¹à¤° à¤…à¤¦à¤¾à¤²à¤¤ à¤•à¥‡ à¤²à¤¿à¤</p>
          <div className="flex flex-wrap justify-center gap-3">
            {courts.map((c, i) => (
              <span key={i} className="bf text-sm px-4 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#ccc" }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* How to Use â€” Step by Step */}
      <section className="py-16 px-4 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto">
          <h2 className="hf text-3xl md:text-4xl text-center mb-2 font-black">How to Use Legal Pro</h2>
          <p className="bf text-center text-[#e0d4b0] text-base mb-2">Legal Pro à¤•à¥ˆà¤¸à¥‡ à¤‡à¤¸à¥à¤¤à¥‡à¤®à¤¾à¤² à¤•à¤°à¥‡à¤‚</p>
          <p className="bf text-center text-gray-500 text-sm mb-12">Step-by-step guide for every lawyer Â· à¤¹à¤° à¤µà¤•à¥€à¤² à¤•à¥‡ à¤²à¤¿à¤ à¤†à¤¸à¤¾à¤¨ à¤—à¤¾à¤‡à¤¡</p>

          <div className="flex flex-col gap-5">
            {steps.map((s) => (
              <div key={s.step} className="step-box flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a84c] text-[#0a0a0f] font-black text-base flex items-center justify-center hf">{s.step}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{s.icon}</span>
                    <span className="bf font-black text-white text-lg">{s.en}</span>
                  </div>
                  <div className="bf text-[#c9a84c] font-bold text-sm mb-3">{s.hi}</div>
                  <div className="bf text-gray-200 text-sm leading-relaxed mb-1">{s.en_detail}</div>
                  <div className="bf text-[#e0d4b0] text-xs leading-relaxed">{s.hi_detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Comparison */}
      <section className="py-14 px-4 bg-[#0d0d12]">
        <div className="max-w-3xl mx-auto">
          <h2 className="hf text-3xl text-center mb-2 font-black">Legal Pro vs Old Software</h2>
          <p className="bf text-center text-[#e0d4b0] text-base mb-8">à¤ªà¥à¤°à¤¾à¤¨à¥‡ software à¤¸à¥‡ à¤¤à¥à¤²à¤¨à¤¾</p>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <table className="w-full bf">
              <thead>
                <tr style={{ background: "rgba(201,168,76,0.08)" }}>
                  <th className="text-left px-5 py-4 text-gray-200 font-bold text-base">Feature</th>
                  <th className="text-center px-5 py-4 text-gray-400 font-bold text-base">Old Software</th>
                  <th className="text-center px-5 py-4 gold font-black text-base">Legal Pro</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td className="px-5 py-4 text-gray-200 text-sm bf font-semibold">{row.label}</td>
                    <td className="px-5 py-4 text-center text-xl">{row.them ? "âœ…" : "âŒ"}</td>
                    <td className="px-5 py-4 text-center text-xl">âœ…</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Pricing */}
      <section className="py-16 px-4 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto">
          <h2 className="hf text-3xl text-center mb-2 font-black">Pricing Â· <span className="gold">à¤®à¥‚à¤²à¥à¤¯</span></h2>
          <p className="bf text-center text-[#e0d4b0] text-base mb-10">One year subscription Â· à¤à¤• à¤¸à¤¾à¤² à¤•à¥€ à¤¸à¤¦à¤¸à¥à¤¯à¤¤à¤¾</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="stamp rounded-2xl p-7 text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-bg text-[#0a0a0f] text-sm font-black px-5 py-1 rounded-full bf">New Account Â· à¤¨à¤¯à¤¾ Account</div>
              <h3 className="hf text-xl mb-3 text-gray-300 mt-2">First Time Â· à¤ªà¤¹à¤²à¥€ à¤¬à¤¾à¤°</h3>
              <div className="hf text-5xl font-black gold mb-1">â‚¹4,999</div>
              <p className="bf text-gray-400 text-sm mb-1">One time Â· à¤à¤• à¤¬à¤¾à¤°</p>
              <p className="bf text-[#e0d4b0] text-xs mb-6">1 year included Â· 1 à¤¸à¤¾à¤² included Â· 7-day free trial</p>
              <a href={LEGAL_PWA_URL} target="_blank" rel="noopener noreferrer" className="cta-primary bf block w-full py-3 rounded-xl text-center text-base mb-3">
                Start Free Trial Â· à¤®à¥à¤«à¥à¤¤ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‹
              </a>
              <a href="https://www.web-developer-kp.com/payment?software=legal" className="cta-secondary bf block w-full py-3 rounded-xl text-center text-base">
                Buy Now â€” â‚¹4,999
              </a>
            </div>
            <div className="card rounded-2xl p-7 text-center">
              <h3 className="hf text-xl mb-3 text-gray-300 mt-2">Renewal Â· à¤¨à¤µà¥€à¤¨à¥€à¤•à¤°à¤£</h3>
              <div className="hf text-5xl font-black gold mb-1">â‚¹1,999</div>
              <p className="bf text-gray-400 text-sm mb-1">Per year Â· à¤ªà¥à¤°à¤¤à¤¿ à¤µà¤°à¥à¤·</p>
              <p className="bf text-[#e0d4b0] text-xs mb-6">All features Â· Cloud backup Â· à¤¸à¤­à¥€ à¤¸à¥à¤µà¤¿à¤§à¤¾à¤à¤‚</p>
              <a href="https://www.web-developer-kp.com/payment?software=legal&plan=renewal" className="cta-secondary bf block w-full py-3 rounded-xl text-center text-base">
                Renew Now â€” â‚¹1,999
              </a>
            </div>
          </div>
          <div className="mt-8 card rounded-2xl p-5 text-center bf">
            <p className="text-gray-300 text-base">
              ðŸ’¬ <strong className="text-white">Need a demo?</strong> WhatsApp us, we will show you live. Â·
              <strong className="text-[#e0d4b0]"> Demo à¤šà¤¾à¤¹à¤¿à¤?</strong> WhatsApp à¤•à¤°à¥‹, live à¤¦à¤¿à¤–à¤¾à¤à¤‚à¤—à¥‡à¥¤
              <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="gold ml-1 hover:underline">wa.me/919996865069</a>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-bg py-20 px-4 text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="hf text-3xl md:text-4xl mb-2 font-black">No more paper. Go Digital.</h2>
          <p className="bf text-[#e0d4b0] text-xl mb-2">à¤…à¤¬ à¤”à¤° à¤•à¤¾à¤—à¤œà¤¼ à¤¨à¤¹à¥€à¤‚à¥¤ <span className="gold">Digital à¤šà¤²à¥‹à¥¤</span></p>
          <p className="bf text-gray-500 text-sm mb-8">7-day free trial Â· No card required Â· à¤•à¥‹à¤ˆ card à¤¨à¤¹à¥€à¤‚ Â· 7 à¤¦à¤¿à¤¨ à¤®à¥à¤«à¥à¤¤</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={LEGAL_PWA_URL} target="_blank" rel="noopener noreferrer" className="cta-primary bf inline-block text-lg px-12 py-4 rounded-xl">
              âš–ï¸ Start Free Trial Â· à¤®à¥à¤«à¥à¤¤ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‹
            </a>
            <a href={WINDOWS_EXE_URL} className="cta-secondary bf inline-block text-lg px-12 py-4 rounded-xl">
              ðŸ’» Download Windows App
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bf py-6 px-4 text-center text-gray-500 text-sm border-t border-white/5 bg-[#0a0a0f]">
        Â© 2026 Nishant Softwares Â· Made for India Â· à¤­à¤¾à¤°à¤¤ à¤•à¥‡ à¤²à¤¿à¤ à¤¬à¤¨à¤¾ Â·
        <a href="tel:+919996865069" className="gold hover:underline ml-1">9996865069</a>
      </footer>
    </main>
  );
}
