import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité du cabinet d\'avocats Me ELKHORASSANI à Casablanca.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground font-playfair">Collecte des données</h2>
            <p>
              Les données personnelles collectées via les formulaires de contact et de demande 
              de devis (nom, prénom, téléphone, email, message) sont utilisées uniquement 
              dans le cadre de la relation avec nos clients et prospects.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground font-playfair">Finalité du traitement</h2>
            <p>
              Vos données sont collectées pour :<br />
              - Vous répondre suite à une demande de contact<br />
              - Établir un devis personnalisé<br />
              - Assurer le suivi de votre dossier<br />
              - Améliorer nos services
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground font-playfair">Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant la durée nécessaire au traitement 
              de votre demande et conformément aux obligations légales applicables.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground font-playfair">Vos droits</h2>
            <p>
              Conformément à la loi marocaine 09-08 relative à la protection des personnes 
              physiques à l&apos;égard du traitement des données à caractère personnel, vous 
              disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
            </p>
            <p>
              Pour exercer ces droits, contactez-nous à :{' '}
              <a href="mailto:cabinet.avocat.casablanca@gmail.com" className="text-accent">
                cabinet.avocat.casablanca@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground font-playfair">Cookies</h2>
            <p>
              Ce site utilise des cookies techniques nécessaires à son fonctionnement. 
              Aucun cookie publicitaire ou de tracking n&apos;est utilisé sans consentement préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground font-playfair">Sécurité</h2>
            <p>
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
              nécessaires pour garantir la sécurité et la confidentialité de vos données personnelles.
            </p>
          </section>
        </div>
        <div className="mt-8 text-center">
          <Link href="/contact" className="text-accent font-semibold hover:underline">
            Nous contacter →
          </Link>
        </div>
      </div>
    </div>
  );
}
