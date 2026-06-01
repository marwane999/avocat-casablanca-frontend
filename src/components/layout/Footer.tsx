import Link from 'next/link';
import { siteConfig } from '@/lib/utils';

const domaines = [
  { href: '/droit-des-affaires', label: 'Droit des Affaires' },
  { href: '/droit-des-societes', label: 'Droit des Sociétés' },
  { href: '/droit-des-assurances', label: 'Droit des Assurances' },
  { href: '/droit-bancaire', label: 'Droit Bancaire' },
  { href: '/droit-immobilier', label: 'Droit Immobilier' },
  { href: '/droit-de-la-famille', label: 'Droit de la Famille' },
  { href: '/droit-penal', label: 'Droit Pénal' },
  { href: '/procedures-collectives', label: 'Procédures Collectives' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src="/images/logo.jpg"
              alt="Avocat Casablanca"
              className="h-14 w-auto mb-4"
            />
            <h3 className="text-lg font-playfair font-semibold mb-2">
              Me ELKHORASSANI AHMED
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Cabinet fondé en 1979 à Casablanca. Expertise juridique au service
              de vos droits et de vos affaires au Maroc.
            </p>
          </div>

          <div>
            <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Domaines
            </h4>
            <ul className="space-y-2">
              {domaines.map((d) => (
                <li key={d.href}>
                  <Link
                    href={d.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors"
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/domaines-de-competences"
                  className="text-accent text-sm font-semibold hover:underline"
                >
                  Voir tout →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📍</span>
                <span>
                  {siteConfig.address}<br />
                  Casablanca - 20 110, Maroc
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">📞</span>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-accent">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">📱</span>
                <a href={`tel:${siteConfig.gsm}`} className="hover:text-accent">
                  {siteConfig.gsm}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✉️</span>
                <a href={`mailto:${siteConfig.email1}`} className="hover:text-accent break-all">
                  {siteConfig.email1}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Horaires
            </h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Lun-Ven: 9h00 - 18h00</li>
              <li>Sam: 9h00 - 13h00</li>
              <li className="pt-2">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded font-semibold hover:bg-accent-light transition-colors"
                >
                  📞 Appeler maintenant
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/demande-de-devis">
                <span className="inline-block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  ✉️ Demande de Devis
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Avocat-Casablanca.com — Tous droits réservés
          </p>
          <div className="flex gap-4 text-xs text-white/40">
            <Link href="/mentions-legales" className="hover:text-accent">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-accent">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
