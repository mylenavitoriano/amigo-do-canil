/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.amigodocanil.com.br", // domínio principal com www
  generateRobotsTxt: true, // gera o arquivo robots.txt automaticamente
  sitemapSize: 5000, // separa o sitemap se houver muitas páginas
  changefreq: "weekly", // frequência esperada de atualização das páginas
  priority: 0.7, // prioridade padrão
  autoLastmod: true, // adiciona automaticamente a data da última modificação
  exclude: ["/404"], // exclui páginas de erro do sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/", // permite indexar todas as páginas principais
        disallow: ["/404", "/api/", "/admin", "/server-sitemap-index.xml"],
      },
      {
        userAgent: "Googlebot-Image", // otimização para o Google Imagens
        allow: ["/images/", "/public/"],
      },
    ],
    additionalSitemaps: ["https://www.amigodocanil.com.br/sitemap.xml"],
  },
};
