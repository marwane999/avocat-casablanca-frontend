'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/utils';

export default function ContactQuick() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Contactez-nous
          </h2>
          <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
            Prenez rendez-vous ou posez-nous vos questions. Nous sommes à votre écoute.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
              <h3 className="font-playfair text-xl font-semibold mb-6">
                Nos Coordonnées
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-lg mt-1">📍</span>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-muted text-sm whitespace-pre-line">
                      {siteConfig.addressFull}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-lg mt-1">📞</span>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-muted text-sm hover:text-accent">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-lg mt-1">📠</span>
                  <div>
                    <p className="font-semibold">Fax</p>
                    <p className="text-muted text-sm">{siteConfig.fax}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-lg mt-1">📱</span>
                  <div>
                    <p className="font-semibold">GSM</p>
                    <a href={`tel:${siteConfig.gsm}`} className="text-muted text-sm hover:text-accent">
                      {siteConfig.gsm}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-lg mt-1">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${siteConfig.email1}`} className="text-muted text-sm hover:text-accent break-all">
                      {siteConfig.email1}
                    </a>
                    <br />
                    <a href={`mailto:${siteConfig.email2}`} className="text-muted text-sm hover:text-accent break-all">
                      {siteConfig.email2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg border border-border shadow-sm"
          >
            <h3 className="font-playfair text-xl font-semibold mb-6">
              Plan d&apos;accès
            </h3>
            <div className="aspect-[4/3] bg-gray-200 rounded flex items-center justify-center text-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.5!2d-7.6!3d33.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMwJzAwLjAiTiA3wrAzNicwMC4wIlc!5e0!3m2!1sfr!2sma!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cabinet ELKHORASSANI - Plan d'accès"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
