'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    icon: '🎯',
    title: 'Expertise Reconnue',
    description:
      "Plus de 45 ans d'expérience dans tous les domaines du droit marocain. Nous avons traité des milliers de dossiers avec succès.",
  },
  {
    icon: '🤝',
    title: 'Proximité & Écoute',
    description:
      'Nous vous recevons, vous écoutons et vous expliquons tout simplement, sans jargon juridique. En arabe ou en français.',
  },
  {
    icon: '⚖️',
    title: 'Résultats Concrets',
    description:
      "Notre objectif est de résoudre votre affaire rapidement et efficacement. Nous nous battons pour vos droits jusqu'au bout.",
  },
  {
    icon: '🔒',
    title: 'Confidentialité Totale',
    description:
      'Vos informations et votre dossier sont traités avec la plus stricte confidentialité, conformément aux règles déontologiques.',
  },
  {
    icon: '📋',
    title: '17 Domaines d\'Expertise',
    description:
      "Du droit des affaires au droit de la famille, en passant par le droit pénal et l'immobilier, nous couvrons tous vos besoins.",
  },
  {
    icon: '⏱️',
    title: 'Réactivité 24h',
    description:
      'Nous répondons à toutes vos demandes sous 24h maximum. Votre urgence est notre priorité.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pourquoi Choisir le Cabinet ELKHORASSANI ?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Des raisons solides de nous confier votre dossier
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl block mb-4">{reason.icon}</span>
              <h3 className="font-playfair text-xl font-semibold mb-3">
                {reason.title}
              </h3>
              <p className="text-muted leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
