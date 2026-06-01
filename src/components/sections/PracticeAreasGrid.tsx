'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const topAreas = [
  {
    slug: '/droit-des-affaires',
    title: 'Droit des Affaires',
    excerpt: 'Droit relatif aux affaires des Entreprises, régi par le Code de Commerce et le Code des Obligations et des Contrats.',
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/id9ee323332dc454d/version/1630690896/avocat-droit-des-affaires-maroc.jpg',
  },
  {
    slug: '/droit-des-societes',
    title: 'Droit des Sociétés',
    excerpt: 'Création, accompagnement et liquidation des sociétés. Litiges entre associés et avec les tiers.',
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i7f7c2ebfa4e3aa54/version/1630690896/avocat-droit-des-soci%C3%A9t%C3%A9s-maroc.jpg',
  },
  {
    slug: '/droit-de-la-famille',
    title: 'Droit de la Famille',
    excerpt: 'Mariage, Divorce, Héritage. Les plus grands dossiers judiciaires du Maroc actuel.',
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i5d05081aa106b4d3/version/1627559005/avocat-droit-de-la-famille-maroc.jpg',
  },
  {
    slug: '/droit-immobilier',
    title: 'Droit Immobilier',
    excerpt: 'Investissement, conservation foncière, litiges immobiliers. Expertise reconnue dans le secteur.',
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/id7f4a08b302a568e/version/1627556824/avocat-droit-immobilier-maroc.jpg',
  },
];

export default function PracticeAreasGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nos Domaines de Compétence
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            17 domaines d&apos;expertise pour vous accompagner dans tous vos besoins juridiques au Maroc
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topAreas.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={area.slug} className="group block">
                <div className="bg-white border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {area.excerpt}
                    </p>
                    <span className="text-accent font-semibold text-sm group-hover:underline">
                      En savoir plus →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/domaines-de-competences"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded font-semibold hover:bg-primary-light transition-colors"
          >
            Voir tous les domaines →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
