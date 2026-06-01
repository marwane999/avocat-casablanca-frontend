'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://image.jimcdn.com/app/cms/image/transf/dimension=1920x10000:format=jpg/path/sd1b0153e8d408d57/image/i4d99293713493bd0/version/1627457207/image.jpg')`,
        }}
      />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-accent/20 text-accent px-4 py-1 text-sm font-semibold mb-6">
              Depuis 1979 • Barreau de Casablanca
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Votre Avocat à Casablanca<br />
              <span className="text-accent">depuis 1979</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
              Cabinet d&apos;avocats spécialisé en droit des affaires, droit civil, 
              droit immobilier et droit de la famille. Une expertise reconnue 
              au service de vos droits au Maroc.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/demande-de-devis">
                <Button variant="default" size="lg">
                  Prendre Rendez-vous
                </Button>
              </Link>
              <Link href="/domaines-de-competences">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary">
                  Nos Domaines d&apos;Expertise
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-white/50 text-sm">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                📞 {siteConfig.phone}
              </a>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Réponse sous 24h</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '45+', label: "Années d'expérience" },
                { value: '17', label: 'Domaines de compétence' },
                { value: '1000+', label: 'Dossiers traités' },
                { value: '24h', label: 'Réponse garantie' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm p-6 text-center rounded">
                  <p className="text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
