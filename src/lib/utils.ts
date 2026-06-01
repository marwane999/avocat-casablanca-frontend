import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\+\d{3})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
}

export const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const siteConfig = {
  name: 'Cabinet ELKHORASSANI',
  shortName: 'Avocat Casablanca',
  description: "Cabinet d'avocats à Casablanca depuis 1979. Expertise en droit des affaires, droit civil, droit immobilier et droit de la famille au Maroc.",
  url: 'https://www.avocat-casablanca.com',
  ogImage: '/images/og-image.jpg',
  phone: '+212 5 22 44 57 78',
  fax: '+212 5 22 44 58 50',
  gsm: '+212 6 75 08 09 99',
  email1: 'cabinet.avocat.casablanca@gmail.com',
  email2: 'contact@avocat-casablanca.com',
  address: '27, Rue Mohammed Diouri (Face lydec)',
  addressFull: 'Bureau Me Ahmed ELKHORASSANI\n27, Rue Mohammed Diouri (Face lydec)\nCasablanca - 20 110 / Maroc',
};
