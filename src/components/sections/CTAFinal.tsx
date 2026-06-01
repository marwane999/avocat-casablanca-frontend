'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/utils';

export default function CTAFinal() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ne Laissez Pas Vos Droits<br />
            Entre les Mains du Hasard
          </h2>
          <p className="text-lg sm:text-xl text-white/70 mb-4 max-w-2xl mx-auto">
            Chaque jour sans conseil juridique est un risque pour vos affaires 
            et votre famille.
          </p>
          <p className="text-accent font-semibold mb-10">
            ⏰ Une réponse sous 24h maximum
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demande-de-devis">
              <Button variant="default" size="xl" className="w-full sm:w-auto">
                📋 Demande de Devis
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <Button variant="outline" size="xl" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-primary">
                📞 {siteConfig.phone}
              </Button>
            </a>
          </div>
          <p className="text-white/40 text-sm mt-6">
            Consultation confidentielle • Devis gratuit • Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
