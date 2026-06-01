import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Avocat Droit de la Distribution Maroc',
  description: "Cabinet d'avocat spécialisé en droit de la distribution à Casablanca. Plus de 45 ans d'expérience. Conseil et contentieux des réseaux de distribution.",
};

export default function DroitDeLaDistributionPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-sm text-muted">
          <Link href="/" className="hover:text-accent">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href="/domaines-de-competences" className="hover:text-accent">Domaines de compétences</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">Droit de la Distribution</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Avocat Droit de la Distribution Maroc
            </h1>

            <div className="aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=900x10000:format=jpg/path/sd1b0153e8d408d57/image/ibd22812bd4db706b/version/1629700919/avocat-droit-de-la-distribution-maroc.jpg"
                alt="Avocat droit de la distribution Maroc"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                De même que la création des biens et la prestation de services constituent la Production, la Consommation naît de l&rsquo;utilisation du bien ou du service ainsi produits.
              </p>
              <p>
                Entre la production et la consommation, il y a tout un processus de Distribution. Le droit de la distribution régit l&rsquo;ensemble des relations entre les différents acteurs de la chaîne de distribution : producteurs, grossistes, détaillants, agents commerciaux, courtiers, etc.
              </p>
              <p>
                Il encadre les contrats de distribution tels que la concession commerciale, la franchise, l&rsquo;agence commerciale, le courtage, la distribution sélective et exclusive, etc.
              </p>
              <p>
                Notre cabinet conseille et accompagne les entreprises dans la rédaction et la négociation de leurs contrats de distribution, ainsi que dans la résolution des litiges pouvant survenir dans le cadre de leurs relations contractuelles.
              </p>

              <h2 className="text-2xl font-playfair font-semibold text-foreground mt-10">
                Pourquoi faire appel à notre Avocat en droit de la Distribution au Maroc ?
              </h2>

              <p>
                Les conseils d&rsquo;un avocat peuvent s&rsquo;avérer très utiles car ce professionnel, habitué à cette procédure, saura vous aider à mieux analyser la situation et à prendre les décisions répondant à vos priorités.
              </p>
              <p>
                Par son expérience et ses connaissances spécifiques, Maître Ahmed EL KHORASSANI sera en mesure de soulever les arguments les plus pertinents au soutien de vos intérêts et constituer avec vous un dossier pertinent.
              </p>
              <p>
                Ainsi, notre cabinet a su développer son expertise en droit de la distribution et des problèmes qui peuvent se poser par la suite.
              </p>
              <p>
                Le Cabinet d&rsquo;Avocat à Casablanca de Maître ELKHORASSANI, très attentif aux attentes des Entreprises et des Privés, accompagne ses clients à tous les stades de leurs affaires et dans toutes les démarches qu&rsquo;elles nécessitent, que ce soit par l&rsquo;arbitrage ou devant les instances judiciaires et/ou administratives.
              </p>

              <div className="border-l-4 border-accent pl-4 italic text-lg text-primary font-playfair mt-8">
                &ldquo;Le Cabinet ELKHORASSANI fait UN avec son Client&rdquo;
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/demande-de-devis"
                className="inline-block bg-accent hover:bg-accent-light text-primary font-semibold py-4 px-10 rounded transition-colors text-lg"
              >
                &gt;&gt; Demande de Devis en droit de la Distribution
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm sticky top-28 space-y-6">
              <h3 className="font-playfair text-lg font-semibold">Nous contacter</h3>
              <div className="space-y-3 text-sm">
                <p><strong>Téléphone :</strong><br />
                  <a href={`tel:${siteConfig.phone}`} className="text-accent">{siteConfig.phone}</a></p>
                <p><strong>Fax :</strong><br />
                  {siteConfig.fax}</p>
                <p><strong>GSM :</strong><br />
                  <a href={`tel:${siteConfig.gsm}`} className="text-accent">{siteConfig.gsm}</a></p>
                <p><strong>Email :</strong><br />
                  <a href={`mailto:${siteConfig.email1}`} className="text-accent break-all">{siteConfig.email1}</a></p>
              </div>

              <hr className="border-border" />

              <h3 className="font-playfair text-lg font-semibold">Visiter nos Locaux</h3>
              <p className="text-sm text-muted">{siteConfig.addressFull}</p>

              <hr className="border-border" />

              <Link href="/demande-de-devis">
                <div className="aspect-[16/9] bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd1b0153e8d408d57/image/i9c91fd25ba14c810/version/1432828827/image.jpg"
                    alt="Demande de devis"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              <Link
                href="/demande-de-devis"
                className="block text-center bg-primary text-white font-semibold py-3 px-6 rounded hover:bg-primary-light transition-colors text-sm"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
