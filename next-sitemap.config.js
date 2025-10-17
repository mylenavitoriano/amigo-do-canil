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
        allow: "/", // permite o rastreamento de todas as páginas
      },
      {
        userAgent: "*",
        disallow: ["/404", "/api/"], // evita que o Google indexe APIs ou páginas de erro
      },
    ],
    additionalSitemaps: ["https://www.amigodocanil.com.br/sitemap.xml"],
  },
};
