export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://www.web-developer-kp.com/sitemap.xml",
  };
}
