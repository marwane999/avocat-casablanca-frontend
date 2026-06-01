import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.avocat-casablanca.com';

  const domainPages = [
    'droit-des-affaires', 'droit-des-societes', 'droit-des-assurances',
    'droit-bancaire', 'droit-de-la-concurrence', 'droit-de-la-distribution',
    'procedures-collectives', 'droit-civil', 'droit-social',
    'droit-immobilier', 'droit-de-la-famille', 'droit-penal',
    'droit-penal-des-affaires', 'droit-penal-fiscal', 'droit-de-la-presse',
    'propriete-industrielle', 'recouvrement-des-creances',
  ];

  const staticPages = [
    '', 'contact', 'demande-de-devis', 'domaines-de-competences',
    'mentions-legales', 'politique-confidentialite',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of staticPages) {
    entries.push({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority: page === '' ? 1 : 0.8,
    });
  }

  for (const page of domainPages) {
    entries.push({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  return entries;
}
