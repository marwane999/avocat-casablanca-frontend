'use client';

import { motion } from 'framer-motion';

const badges = [
  { icon: '⚖️', label: "45+ ans d'expérience" },
  { icon: '🏛️', label: 'Barreau de Casablanca' },
  { icon: '📚', label: 'Ancien Professeur de Droit' },
  { icon: '🌐', label: 'Bilingue Arabe / Français' },
  { icon: '📋', label: '17 domaines de compétence' },
  { icon: '🤝', label: 'Des milliers de clients' },
];

export default function TrustBar() {
  return (
    <section className="bg-primary-light py-6 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-2 text-white/80 text-sm"
            >
              <span className="text-accent">{badge.icon}</span>
              <span>{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
