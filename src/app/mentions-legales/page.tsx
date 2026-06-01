import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du cabinet d\'avocats Me ELKHORASSANI à Casablanca.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Mentions Légales</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground font-playfair">Éditeur du site</h2>
            <p>
              <strong>Cabinet Me Ahmed ELKHORASSANI</strong><br />
              Avocat au Barreau de Casablanca (1979)<br />
              27, Rue Mohammed Diouri (Face lydec)<br />
              Casablanca - 20 110, Maroc
            </p>
            <p>
              Téléphone : +212 5 22 44 57 78<br />
              Email : cabinet.avocat.casablanca@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground font-playfair">Directeur de la publication</h2>
            <p>Maître Ahmed ELKHORASSANI, Avocat au Barreau de Casablanca.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground font-playfair">Hébergement</h2>
            <p>Le site est hébergé sur un serveur dédié via Easypanel.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground font-playfair">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu du site avocat-casablanca.com (textes, images, logos, etc.) 
              est la propriété exclusive du Cabinet ELKHORASSANI. Toute reproduction ou 
              utilisation sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground font-playfair">Responsabilité</h2>
            <p>
              Les informations fournies sur ce site le sont à titre indicatif et ne sauraient 
              constituer un conseil juridique. Pour un conseil adapté à votre situation, 
              veuillez nous contacter directement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
