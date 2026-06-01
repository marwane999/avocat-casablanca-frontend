'use client';

import { useState } from 'react';
import { apiUrl } from '@/lib/utils';

const domaines = [
  { value: 'droit-des-affaires', label: 'Droit des Affaires' },
  { value: 'droit-des-societes', label: 'Droit des Sociétés' },
  { value: 'droit-des-assurances', label: 'Droit des Assurances' },
  { value: 'droit-bancaire', label: 'Droit Bancaire' },
  { value: 'droit-de-la-concurrence', label: 'Droit de la Concurrence' },
  { value: 'droit-de-la-distribution', label: 'Droit de la Distribution' },
  { value: 'procedures-collectives', label: 'Procédures Collectives' },
  { value: 'droit-civil', label: 'Droit Civil' },
  { value: 'droit-social', label: 'Droit Social' },
  { value: 'droit-immobilier', label: 'Droit Immobilier' },
  { value: 'droit-de-la-famille', label: 'Droit de la Famille' },
  { value: 'droit-penal', label: 'Droit Pénal' },
  { value: 'droit-penal-des-affaires', label: 'Droit Pénal des Affaires' },
  { value: 'droit-penal-fiscal', label: 'Droit Pénal Fiscal' },
  { value: 'droit-de-la-presse', label: 'Droit de la Presse' },
  { value: 'propriete-industrielle', label: 'Propriété Industrielle' },
  { value: 'recouvrement-des-creances', label: 'Recouvrement des Créances' },
];

export default function DemandeDevisPage() {
  const [formData, setFormData] = useState({
    civilite: '', nom: '', prenom: '', email: '', telephone: '', domaine: '', description: '', privacy: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      const res = await fetch(`${apiUrl}/api/devis`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          civilite: formData.civilite || undefined,
          nom: formData.nom,
          prenom: formData.prenom || undefined,
          email: formData.email,
          telephone: formData.telephone,
          domaine: formData.domaine,
          description: formData.description,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail?.[0]?.msg || err.detail || 'Erreur lors de l\'envoi');
      }
      setStatus('success');
      setFormData({ civilite: '', nom: '', prenom: '', email: '', telephone: '', domaine: '', description: '', privacy: false });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erreur réseau');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 p-12 rounded-lg text-center">
            <p className="text-5xl mb-4">✅</p>
            <h1 className="text-2xl font-bold text-green-800 mb-2">Demande envoyée avec succès !</h1>
            <p className="text-green-600">Nous vous répondrons sous 24h maximum.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Demande de Devis
          </h1>
          <p className="text-muted text-lg">
            Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé.
            Nous vous répondons sous 24h maximum.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg border border-border shadow-sm" noValidate>
          <div className="flex gap-4">
            {['M.', 'Mme'].map((civ) => (
              <label key={civ} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="civilite" value={civ} checked={formData.civilite === civ} onChange={handleChange} />
                <span className="text-sm">{civ}</span>
              </label>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nom" className="block text-sm font-semibold mb-1">
                Nom <span className="text-accent">*</span>
              </label>
              <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required
                className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white" />
            </div>
            <div>
              <label htmlFor="prenom" className="block text-sm font-semibold mb-1">
                Prénom
              </label>
              <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Email <span className="text-accent">*</span>
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white" />
            </div>
            <div>
              <label htmlFor="telephone" className="block text-sm font-semibold mb-1">
                Téléphone <span className="text-accent">*</span>
              </label>
              <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required
                className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white" />
            </div>
          </div>

          <div>
            <label htmlFor="domaine" className="block text-sm font-semibold mb-1">
              Domaine concerné <span className="text-accent">*</span>
            </label>
            <select id="domaine" name="domaine" value={formData.domaine} onChange={handleChange} required
              className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white">
              <option value="">Sélectionnez un domaine</option>
              {domaines.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-semibold mb-1">
              Description de votre situation <span className="text-accent">*</span>
            </label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows={8}
              className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white resize-y"
              placeholder="Décrivez votre situation juridique en quelques lignes..." />
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
            {status === 'loading' ? 'Envoi en cours...' : 'Soumettre ma demande de devis'}
          </button>

          <p className="text-center text-muted text-xs">
            🔒 Vos informations sont confidentielles et ne seront jamais partagées
          </p>
        </form>
      </div>
    </div>
  );
}
