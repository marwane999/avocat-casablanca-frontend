'use client';

import { useState } from 'react';
import { siteConfig, apiUrl } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '', prenom: '', telephone: '', ville: '', pays: '', email: '', message: '', privacy: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      setErrorMsg('Veuillez accepter la politique de confidentialité');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: formData.nom,
          prenom: formData.prenom || undefined,
          telephone: formData.telephone,
          ville: formData.ville || undefined,
          pays: formData.pays || undefined,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail?.[0]?.msg || err.detail || 'Erreur lors de l\'envoi');
      }
      setStatus('success');
      setFormData({ nom: '', prenom: '', telephone: '', ville: '', pays: '', email: '', message: '', privacy: false });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erreur réseau');
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Prenez Contact
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Remplissez le formulaire ci-dessous pour nous contacter.
            Nous vous répondrons sous 24h maximum.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 p-8 rounded-lg text-center">
                <p className="text-4xl mb-4">✅</p>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Message envoyé avec succès !</h3>
                <p className="text-green-600">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg border border-border shadow-sm" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold text-foreground mb-1">
                      Nom <span className="text-accent">*</span>
                    </label>
                    <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white" />
                  </div>
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-semibold text-foreground mb-1">
                      Prénom
                    </label>
                    <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white" />
                  </div>
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-semibold text-foreground mb-1">
                    Téléphone <span className="text-accent">*</span>
                  </label>
                  <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ville" className="block text-sm font-semibold text-foreground mb-1">
                      Ville
                    </label>
                    <input type="text" id="ville" name="ville" value={formData.ville} onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white" />
                  </div>
                  <div>
                    <label htmlFor="pays" className="block text-sm font-semibold text-foreground mb-1">
                      Pays
                    </label>
                    <input type="text" id="pays" name="pays" value={formData.pays} onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white resize-y" />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="privacy" name="privacy" checked={formData.privacy} onChange={handleChange} required className="mt-1" />
                  <label htmlFor="privacy" className="text-sm text-muted">
                    J&apos;accepte la{' '}
                    <a href="/politique-confidentialite" className="text-accent hover:underline">
                      politique de confidentialité
                    </a>{' '}
                    <span className="text-accent">*</span>
                  </label>
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded text-sm">{errorMsg}</div>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="w-full bg-accent hover:bg-accent-light disabled:opacity-50 text-primary font-semibold py-4 px-8 rounded transition-colors text-lg">
                  {status === 'loading' ? 'Envoi en cours...' : 'Envoyer mon message'}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg border border-border shadow-sm space-y-6 sticky top-28">
              <h2 className="font-playfair text-xl font-semibold">Nos Coordonnées</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-accent" aria-hidden="true">📍</span>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-muted">27, Rue Mohammed Diouri (Face lydec)</p>
                    <p className="text-muted">Casablanca - 20 110 / Maroc</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent" aria-hidden="true">📞</span>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-muted hover:text-accent">{siteConfig.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent" aria-hidden="true">📠</span>
                  <div>
                    <p className="font-semibold">Fax</p>
                    <p className="text-muted">{siteConfig.fax}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent" aria-hidden="true">📱</span>
                  <div>
                    <p className="font-semibold">GSM</p>
                    <a href={`tel:${siteConfig.gsm}`} className="text-muted hover:text-accent">{siteConfig.gsm}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent" aria-hidden="true">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${siteConfig.email1}`} className="text-muted hover:text-accent break-all">{siteConfig.email1}</a>
                    <br />
                    <a href={`mailto:${siteConfig.email2}`} className="text-muted hover:text-accent break-all">{siteConfig.email2}</a>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.5!2d-7.6!3d33.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMwJzAwLjAiTiA3wrAzNicwMC4wIlc!5e0!3m2!1sfr!2sma!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Cabinet ELKHORASSANI - Plan d'accès"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
