import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Domaines de Compétence',
  description: "Cabinet d'avocat spécialisé dans 17 domaines du droit marocain : affaires, sociétés, assurances, banque, concurrence, distribution, procédures collectives, civil, social, immobilier, famille, pénal et plus.",
};

const practiceAreas = [
  {
    slug: '/droit-des-affaires',
    title: 'Droit des Affaires',
    excerpt: "Régi principalement par le Code de Commerce, le Droit des Affaires couvre l'ensemble du Droit relatif aux affaires des Entreprises et est soumis aux dispositions du Code des Obligations et des Contrats.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i1d594e0c7bbba358/version/1629805056/avocat-droit-des-affaires-maroc.jpg',
  },
  {
    slug: '/droit-des-societes',
    title: 'Droit des Sociétés',
    excerpt: "Aux termes de l'article 982 du dahir formant code des obligations et des contrats : la société est un contrat par lequel deux ou plusieurs personnes mettent en commun leurs biens ou leur travail.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i2f049562bd292c7c/version/1627556697/avocat-droit-des-soci%C3%A9t%C3%A9s-maroc.jpg',
  },
  {
    slug: '/droit-des-assurances',
    title: 'Droit des Assurances',
    excerpt: "Secteur très important de l'économie, l'assurance est régie par une pléthore de textes législatifs et règlementaires que les Entreprises ne peuvent appréhender facilement.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i7e06247215c3166a/version/1630690915/avocat-droit-des-assurances-maroc.jpg',
  },
  {
    slug: '/droit-bancaire',
    title: 'Droit Bancaire',
    excerpt: "Les litiges nés des relations nécessaires et permanentes avec les banques sont très nombreux et obligent les parties à s'adresser à des experts en la matière.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i6aee6f7ef0f975e6/version/1630690979/avocat-droit-bancaire-maroc.jpg',
  },
  {
    slug: '/droit-de-la-concurrence',
    title: 'Droit de la Concurrence',
    excerpt: 'La loi sur la Liberté des Prix et de la Concurrence régit la liberté des prix et aménage la libre concurrence. Elle pose les règles afin de protéger les consommateurs.',
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i46559aa256706ed2/version/1630690916/avocat-droit-de-la-concurrence-maroc.jpg',
  },
  {
    slug: '/droit-de-la-distribution',
    title: 'Droit de la Distribution',
    excerpt: "De même que la création des biens et la prestation de services constituent la Production, la Consommation naît de l'utilisation du bien ou du service ainsi produits.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/ifb2933548d0f2985/version/1630690979/avocat-droit-de-la-distribution-maroc.jpg',
  },
  {
    slug: '/procedures-collectives',
    title: 'Procédures Collectives',
    excerpt: "Lorsqu'une entreprise fait face à des évènements qui menacent la continuité de son exploitation, certaines mesures légales sont à prendre.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i5e7aee1a97c60c04/version/1630691018/avocat-proc%C3%A9dures-collectives-maroc.jpg',
  },
  {
    slug: '/droit-civil',
    title: 'Droit Civil',
    excerpt: "Réunissant Le Code des Obligations et des Contrats et le Code de la Famille, le Code Civil est au sein de la vie de tous ceux qui vivent au Maroc.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i516235485a7df053/version/1630690935/avocat-droit-civil-maroc.jpg',
  },
  {
    slug: '/droit-social',
    title: 'Droit Social',
    excerpt: "Il s'agit principalement du droit du travail à travers les relations entre les Employés et leurs employeurs.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i3a2ec98b5b762e20/version/1630691002/avocat-droit-social-maroc.jpg',
  },
  {
    slug: '/droit-immobilier',
    title: 'Droit Immobilier',
    excerpt: "Le Droit Immobilier au Maroc évolue rapidement, accompagnant ainsi l'évolution de la construction.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i50dc638d47ef7584/version/1630690952/avocat-droit-immobilier-maroc.jpg',
  },
  {
    slug: '/droit-de-la-famille',
    title: 'Droit de la Famille',
    excerpt: "Le Mariage, le Divorce et l'Héritage restent à l'origine des plus grands dossiers judiciaires du Maroc actuel.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i79416f697a04cfaa/version/1630690951/avocat-droit-de-la-famille-maroc.jpg',
  },
  {
    slug: '/droit-penal',
    title: 'Droit Pénal',
    excerpt: "Chacun est concerné de près ou de loin par le Droit Pénal: que ce soit en tant que victime d'infractions ou de crimes, ou en tant qu'auteur de tels actes.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i02a12bdac7061976/version/1630690935/avocat-droit-p%C3%A9nal-maroc.jpg',
  },
  {
    slug: '/droit-penal-des-affaires',
    title: 'Droit Pénal des Affaires',
    excerpt: "Branche très importante du Droit Pénal, le Droit pénal des affaires est né des infractions et des crimes que le monde des affaires connaît de plus en plus.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/icf343b7683ab0ce1/version/1630691002/droit-p%C3%A9nal-des-affaires-maroc.jpg',
  },
  {
    slug: '/droit-penal-fiscal',
    title: 'Droit Pénal Fiscal',
    excerpt: "Contentieux fiscal et infractions pénales liées à la fiscalité des entreprises et des particuliers.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i5e7aee1a97c60c04/version/1630691018/avocat-proc%C3%A9dures-collectives-maroc.jpg',
  },
  {
    slug: '/droit-de-la-presse',
    title: 'Droit de la Presse',
    excerpt: "Droit régissant les médias, la liberté d'expression et les litiges liés à la presse au Maroc.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i5e7aee1a97c60c04/version/1630691018/avocat-proc%C3%A9dures-collectives-maroc.jpg',
  },
  {
    slug: '/propriete-industrielle',
    title: 'Propriété Industrielle',
    excerpt: "La Propriété industrielle couvre principalement des créations techniques, artistiques et distinctives : brevets, marques, noms commerciaux.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/ib512bd72a4e8969d/version/1630691037/avocat-propri%C3%A9t%C3%A9-industrielle-maroc.jpg',
  },
  {
    slug: '/recouvrement-des-creances',
    title: 'Recouvrement des Créances',
    excerpt: "Beaucoup d'entreprises doivent faire face à des impayés, c'est pourquoi la procédure de recouvrement des créances est essentielle.",
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/sd1b0153e8d408d57/image/i7f52611277e771a2/version/1630691017/acocat-recouvrement-des-cr%C3%A9ances-maroc.jpg',
  },
];

export default function DomainesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Nos Domaines de Compétence
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Découvrez l&apos;étendue de notre expertise juridique. 
            17 domaines couverts pour vous accompagner dans tous vos besoins au Maroc.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={area.slug}
              className="group bg-white border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="font-playfair text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {area.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {area.excerpt}
                </p>
                <span className="text-accent font-semibold text-sm group-hover:underline">
                  En savoir plus →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
