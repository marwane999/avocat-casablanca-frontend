export interface PracticeArea {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  content: string;
}

export interface ContactFormData {
  nom: string;
  prenom?: string;
  telephone: string;
  ville?: string;
  pays?: string;
  email: string;
  message: string;
}

export interface DevisFormData {
  civilite?: string;
  nom: string;
  prenom?: string;
  email: string;
  telephone: string;
  domaine: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  phone: string;
  fax: string;
  gsm: string;
  email1: string;
  email2: string;
  address: string;
  addressFull: string;
}
