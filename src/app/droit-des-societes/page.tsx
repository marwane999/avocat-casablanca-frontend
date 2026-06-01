import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Avocat Droit des Sociétés Maroc',
  description: "Cabinet d'avocat spécialisé en droit des sociétés à Casablanca. Création, liquidation, contentieux des sociétés. Plus de 45 ans d'expérience.",
};

export default function DroitDesSocietesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-sm text-muted">
          <Link href="/" className="hover:text-accent">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href="/domaines-de-competences" className="hover:text-accent">Domaines de compétences</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">Droit des Sociétés</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Avocat Droit des Sociétés Maroc
            </h1>

            <div className="aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=900x10000:format=jpg/path/sd1b0153e8d408d57/image/idc5d03519a9ad620/version/1629886314/avocat-en-droit-des-soci%C3%A9t%C3%A9s-maroc.jpg"
                alt="Avocat en droit des sociétés Maroc"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Aux termes de l&rsquo;article 982 du dahir formant code des obligations et des contrats : &ldquo;la société est un contrat par lequel deux ou plusieurs personnes mettent en commun leurs biens ou leur travail ou tous les deux à la fois en vue de partager les bénéfices qui pourront en résulter&rdquo;.
              </p>
              <p>
                Le contrat de société donne naissance à une personne juridique, c&rsquo;est-à-dire qui a l&rsquo;aptitude à être sujet de droits et d&rsquo;obligations.
              </p>
              <p>
                Le Cabinet d&rsquo;Avocat à Casablanca de Maître ELKHORASSANI conseille et accompagne ses Clients dans toutes les démarches administratives et/ou judiciaires pour la création des Sociétés, dans toutes les étapes de leur existence, jusqu&rsquo;à leur fermeture ou leur liquidation. Les augmentations de capital ou les fusions restent bien entendu des éléments importants de la vie des sociétés dont il faut tenir compte et traiter avec prudence par nos experts.
              </p>
              <p>
                Les litiges entre associés ou avec les tiers bénéficient largement de notre expertise.
              </p>

              <h2 className="text-2xl font-playfair font-semibold text-foreground mt-10">
                Pourquoi faire appel à notre Avocat en droit des Sociétés au Maroc ?
              </h2>

              <p>
                Les conseils d&rsquo;un avocat peuvent s&rsquo;avérer très utiles car ce professionnel, habitué à cette procédure, saura vous aider à mieux analyser la situation et à prendre les décisions répondant à vos priorités.
              </p>
              <p>
                Par son expérience et ses connaissances spécifiques, Maître Ahmed EL KHORASSANI sera en mesure de soulever les arguments les plus pertinents au soutien de vos intérêts et constituer avec vous un dossier pertinent.
              </p>
              <p>
                Le Cabinet d&rsquo;Avocat à Casablanca de Maître ELKHORASSANI fait UN avec son Client !
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
                &gt;&gt; Demande de Devis en droit des Sociétés
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm sticky top-28 space-y-6">
              <h3 className="font-playfair text-lg font-semibold">Nous contacter</h3>
              <div className="space-y-3 text-sm">
                <p><strong>Téléphone :</strong><br /><a href={`tel:${siteConfig.phone}`} className="text-accent">{siteConfig.phone}</a></p>
                <p><strong>Fax :</strong><br />{siteConfig.fax}</p>
                <p><strong>GSM :</strong><br /><a href={`tel:${siteConfig.gsm}`} className="text-accent">{siteConfig.gsm}</a></p>
                <p><strong>Email :</strong><br /><a href={`mailto:${siteConfig.email1}`} className="text-accent break-all">{siteConfig.email1}</a></p>
              </div>
              <hr className="border-border" />
              <h3 className="font-playfair text-lg font-semibold">Visiter nos Locaux</h3>
              <p className="text-sm text-muted">{siteConfig.addressFull}</p>
              <hr className="border-border" />
              <Link href="/demande-de-devis">
                <div className="aspect-[16/9] bg-gray-100 rounded overflow-hidden">
                  <img src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd1b0153e8d408d57/image/iea94d2a45359b7c5/version/1629727674/image.jpg" alt="Demande de devis" className="w-full h-full object-cover" />
                </div>
              </Link>
              <Link href="/demande-de-devis" className="block text-center bg-primary text-white font-semibold py-3 px-6 rounded hover:bg-primary-light transition-colors text-sm">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
