import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const OG_IMAGE_URL = "https://www.web-developer-kp.com/og-image.png";

export const metadata = {
  metadataBase: new URL("https://www.web-developer-kp.com"),
  title: {
    default: "Nishant ERPBridge — Tally BI Software | Magenta से सस्ता, features ज़्यादा",
    template: "%s | Nishant Softwares",
  },
  description:
    "Tally, Busy, Marg का data — Sales, Purchase, Outstanding, Inventory सब एक जगह। Magenta BI से 3x सस्ता। 7 दिन free trial, कोई card नहीं।",
  keywords:
    "tally business intelligence software, magenta bi alternative, erp bridge tally, outstanding tracking, inventory monitoring, tally reports hindi, GST billing software",
  authors: [{ name: "Kamta Prasad" }],
  creator: "Kamta Prasad",
  publisher: "Kamta Prasad",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: "https://www.web-developer-kp.com",
    siteName: "Nishant ERPBridge",
    title: "Nishant ERPBridge — Tally BI | Magenta से सस्ता",
    description:
      "Tally का data — Outstanding, Inventory, Purchase Insights एक जगह। ₹11,999 एक बार। Magenta BI ₹36,000/year लेता है।",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Nishant ERPBridge — Tally Business Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishant ERPBridge — Tally BI Software",
    description: "Magenta BI से 3x सस्ता। Outstanding, Inventory, WhatsApp Reminder सब।",
    images: [OG_IMAGE_URL],
    creator: "@Webdeveloperkp",
  },
  alternates: {
    canonical: "https://www.web-developer-kp.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5c842",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nishant ERPBridge Business Intelligence",
  operatingSystem: "Windows, Android",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "11999",
    priceCurrency: "INR",
  },
  url: "https://www.web-developer-kp.com",
  telephone: "+91-9996865069",
  email: "prasad.kamta@gmail.com",
  description: "Tally, Busy, Marg integrated Business Intelligence — Sales, Purchase, Outstanding, Inventory reports",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ERPBridge" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="beforeInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FKX0BH3EQ5"
          strategy="afterInteractive"
        />
        <Script id="ga4-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FKX0BH3EQ5');
          `}
        </Script>
        <Script id="whatsapp-widget" strategy="lazyOnload">
          {`
            const link = document.createElement('a');
            link.href = 'https://wa.me/919996865069?text=Hello, I need information about Nishant Softwares';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.style.cssText = 'position:fixed;bottom:20px;left:20px;width:60px;height:60px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.15);z-index:9999;transition:transform 0.3s;';
            link.innerHTML = '<svg viewBox="0 0 24 24" width="32" height="32" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
            link.onmouseover = () => link.style.transform = 'scale(1.1)';
            link.onmouseout = () => link.style.transform = 'scale(1)';
            document.body.appendChild(link);
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}