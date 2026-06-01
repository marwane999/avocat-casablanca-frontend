'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Un Cabinet d&apos;Exception au Cœur de Casablanca
          </h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-16">
            L&apos;excellence juridique au service de vos droits depuis 1979
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Le cabinet ELKHORASSANI est l&apos;un des principaux cabinets d&apos;avocats 
              d&apos;affaires à Casablanca au Maroc. Le cabinet vise l&apos;excellence et 
              s&apos;applique à résoudre chacune des affaires qui lui sont confiées 
              avec la plus grande attention.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Le cabinet a bâti sa réputation sur les engagements forts et solides 
              qu&apos;il assure à ses clients. Nous accordons une grande importance 
              à l&apos;établissement d&apos;une relation de confiance basée sur l&apos;intégrité, 
              la fidélité et l&apos;engagement.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Depuis 1979, nous fournissons des conseils personnalisés aux 
              particuliers et professionnels. Notre objectif est de vous assister 
              dans la compréhension de vos droits et des problématiques liées 
              à votre situation.
            </p>
            <div className="border-l-4 border-accent pl-4 italic text-lg text-primary font-playfair mt-8">
              &ldquo;Le Cabinet ELKHORASSANI fait UN avec son Client&rdquo;
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded shadow-xl">
              <img
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=900x10000:format=jpg/path/sd1b0153e8d408d57/image/i4d99293713493bd0/version/1627457207/image.jpg"
                alt="Cabinet ELKHORASSANI - Avocat Casablanca"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-primary p-6 rounded shadow-lg hidden lg:block">
              <p className="text-3xl font-bold">1979</p>
              <p className="text-sm font-semibold">Année de fondation</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-lg"
          >
            En savoir plus sur le Cabinet →
          </Link>
        </div>
      </div>
    </section>
  );
}
