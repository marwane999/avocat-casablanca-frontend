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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-accent/20 text-accent px-4 py-1 text-sm font-semibold mb-6">
              Cabinet d&apos;Avocats à Casablanca depuis 1979
            </div>
            <div className="text-white/80 text-base sm:text-lg leading-relaxed space-y-5">
              <p>
                Le cabinet ELKHORASSANI est l&apos;un des principaux cabinets d&apos;avocats
                d&apos;affaires à Casablanca au Maroc. Le cabinet vise l&apos;excellence et
                s&apos;applique à résoudre chacune des affaires qui lui sont confiées
                avec la plus grande attention.
              </p>
              <p>
                Le cabinet a bâti sa réputation sur les engagements forts et solides
                qu&apos;il assure à ses clients. Nous accordons une grande importance
                à l&apos;établissement d&apos;une relation de confiance basée sur l&apos;intégrité,
                la fidélité et l&apos;engagement.
              </p>
              <p>
                Depuis 1979, nous fournissons des conseils personnalisés aux
                particuliers et professionnels. Notre objectif est de vous assister
                dans la compréhension de vos droits et des problématiques liées
                à votre situation.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4 italic text-lg sm:text-xl text-white font-playfair mt-8">
              &ldquo;Le Cabinet ELKHORASSANI fait UN avec son Client&rdquo;
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/demande-de-devis">
                <Button variant="default" size="lg">
                  Demande de Devis
                </Button>
              </Link>
              <Link href="/domaines-de-competences">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary">
                  Nos Domaines d&apos;Expertise
                </Button>
              </Link>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="text-white/50 hover:text-accent text-sm transition-colors"
              >
                En savoir plus sur le Cabinet →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-6"
          >
            <div className="aspect-[4/3] overflow-hidden rounded shadow-xl">
              <img
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=900x10000:format=jpg/path/sd1b0153e8d408d57/image/i4d99293713493bd0/version/1627457207/image.jpg"
                alt="Cabinet ELKHORASSANI - Avocat Casablanca"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-accent/20 backdrop-blur-sm p-6 rounded shadow-lg text-center">
              <p className="text-4xl font-bold text-accent">1979</p>
              <p className="text-white/80 text-sm font-semibold mt-1">Année de fondation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
