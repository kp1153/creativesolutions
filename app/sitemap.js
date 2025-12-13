export default function sitemap() {
  return [
    {
      url: "https://www.web-developer-kp.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.web-developer-kp.com/payment",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
