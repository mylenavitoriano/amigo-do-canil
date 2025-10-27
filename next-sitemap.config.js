/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.amigodocanil.com.br",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  autoLastmod: true,
  exclude: ["/404"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/404", "/api/", "/admin", "/server-sitemap-index.xml"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/public/"],
      },
    ],
  },
};
