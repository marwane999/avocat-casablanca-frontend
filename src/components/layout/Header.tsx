'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/domaines-de-competences', label: 'Domaines de compétences' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Avocat Casablanca"
              className="h-10 sm:h-12 w-auto"
            />
            <div>
              <p className="text-white font-playfair text-sm sm:text-lg font-semibold leading-tight">
                Me ELKHORASSANI AHMED
              </p>
              <p className="text-accent text-[10px] sm:text-xs">
                Avocat au Barreau de Casablanca (1979)
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${siteConfig.phone}`} className="text-accent hover:text-accent-light text-sm font-semibold flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Link href="/demande-de-devis">
              <Button variant="default" size="sm">
                Demande de Devis
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-accent py-2 text-sm font-medium uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10">
              <a href={`tel:${siteConfig.phone}`} className="block text-accent py-2 font-semibold">
                {siteConfig.phone}
              </a>
              <Link href="/demande-de-devis" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="w-full mt-2">
                  Demande de Devis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
