import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Avocat Droit Pénal des Affaires Maroc',
  description: "Cabinet d'avocat spécialisé en droit pénal des affaires à Casablanca. Plus de 45 ans d'expérience. Défense en matière d'infractions financières et économiques.",
};

export default function DroitPenalDesAffairesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-sm text-muted">
          <Link href="/" className="hover:text-accent">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href="/domaines-de-competences" className="hover:text-accent">Domaines de compétences</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">Droit Pénal des Affaires</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Avocat Droit Pénal des Affaires Maroc
            </h1>

            <div className="aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=900x10000:format=jpg/path/sd1b0153e8d408d57/image/icf343b7683ab0ce1/version/1630691002/droit-p%C3%A9nal-des-affaires-maroc.jpg"
                alt="Avocat droit pénal des affaires Maroc"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Branche très importante du Droit Pénal, le Droit pénal des affaires, comme son nom l&rsquo;indique, est né des infractions et des crimes que le monde des affaires connaît de plus en plus de nos jours.
              </p>
              <p>
                Il recouvre l&rsquo;ensemble des infractions liées à la vie des affaires : abus de biens sociaux, escroquerie, abus de confiance, faux et usage de faux, corruption, blanchiment d&rsquo;argent, infractions boursières, fraudes fiscales et douanières, etc.
              </p>
              <p>
                La complexité de ces dossiers exige une connaissance approfondie à la fois du droit pénal et du droit des affaires, ainsi qu&rsquo;une parfaite maîtrise des procédures pénales spécifiques.
              </p>
              <p>
                Notre cabinet assiste les dirigeants d&rsquo;entreprises, les sociétés et les cadres confrontés à des poursuites pénales dans le cadre de leurs activités professionnelles, et les conseille en matière de prévention des risques pénaux.
              </p>

              <h2 className="text-2xl font-playfair font-semibold text-foreground mt-10">
                Pourquoi faire appel à notre Avocat en droit Pénal des Affaires au Maroc ?
              </h2>

              <p>
                Les conseils d&rsquo;un avocat peuvent s&rsquo;avérer très utiles car ce professionnel, habitué à cette procédure, saura vous aider à mieux analyser la situation et à prendre les décisions répondant à vos priorités.
              </p>
              <p>
                Par son expérience et ses connaissances spécifiques, Maître Ahmed EL KHORASSANI sera en mesure de soulever les arguments les plus pertinents au soutien de vos intérêts et constituer avec vous un dossier pertinent.
              </p>
              <p>
                Ainsi, notre cabinet a su développer son expertise en droit pénal des affaires et des problèmes qui peuvent se poser par la suite.
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
                &gt;&gt; Demande de Devis en droit Pénal des Affaires
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
