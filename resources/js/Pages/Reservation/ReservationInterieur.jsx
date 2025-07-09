import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import MainLayout from '@/Layouts/MainLayout';

export default function ReservationInterieur() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    marque: '',
    modele: '',
    annee: '',
    immatriculation: '',
    carburant: '',
    transmission: '',
  });

  const [errors, setErrors] = useState({});

  const marques = ['Peugeot', 'Renault', 'Citroën', 'Tesla', 'Volkswagen', 'BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda'];
  const carburants = ['Essence', 'Diesel', 'Électrique', 'Hybride'];
  const transmissions = ['Manuelle', 'Automatique'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null })); // clear error on change
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Inertia.post('/reservations/interieur', form, {
      onSuccess: () => {
        alert('Réservation envoyée avec succès !');
        setForm({
          prenom: '',
          nom: '',
          email: '',
          telephone: '',
          marque: '',
          modele: '',
          annee: '',
          immatriculation: '',
          carburant: '',
          transmission: '',
        });
        setErrors({});
      },
      onError: (err) => {
        setErrors(err || {});
      },
    });
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8 text-center">Réservation - Nettoyage Intérieur</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        {[
          { label: 'Prénom', name: 'prenom', type: 'text', placeholder: 'Ex: Jean' },
          { label: 'Nom', name: 'nom', type: 'text', placeholder: 'Ex: Dupont' },
          { label: 'Email', name: 'email', type: 'email', placeholder: 'Ex: jean.dupont@email.com' },
          { label: 'Téléphone', name: 'telephone', type: 'tel', placeholder: 'Ex: 0601020304' },
          { label: 'Modèle', name: 'modele', type: 'text', placeholder: 'Ex: Clio 4, Model 3...' },
          { label: 'Année', name: 'annee', type: 'number', placeholder: 'Ex: 2020', min: 1990, max: new Date().getFullYear() },
          { label: 'Immatriculation', name: 'immatriculation', type: 'text', placeholder: 'Ex: AB-123-CD' },
        ].map(({ label, name, type, placeholder, min, max }) => (
          <div key={name}>
            <label className="block text-gray-700 font-semibold mb-1">{label}</label>
            <input
              className={`w-full border rounded-lg px-4 py-2 ${errors[name] ? 'border-red-500' : ''}`}
              type={type}
              name={name}
              value={form[name]}
              placeholder={placeholder}
              min={min}
              max={max}
              onChange={handleChange}
              required
            />
            {errors[name] && <p className="text-red-600 text-sm mt-1">{errors[name]}</p>}
          </div>
        ))}

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Marque</label>
          <select
            name="marque"
            value={form.marque}
            onChange={handleChange}
            required
            className={`w-full border rounded-lg px-4 py-2 ${errors.marque ? 'border-red-500' : ''}`}
          >
            <option value="">-- Choisissez une marque --</option>
            {marques.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          {errors.marque && <p className="text-red-600 text-sm mt-1">{errors.marque}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Carburant</label>
          <select
            name="carburant"
            value={form.carburant}
            onChange={handleChange}
            required
            className={`w-full border rounded-lg px-4 py-2 ${errors.carburant ? 'border-red-500' : ''}`}
          >
            <option value="">-- Choisissez le carburant --</option>
            {carburants.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.carburant && <p className="text-red-600 text-sm mt-1">{errors.carburant}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Transmission</label>
          <select
            name="transmission"
            value={form.transmission}
            onChange={handleChange}
            required
            className={`w-full border rounded-lg px-4 py-2 ${errors.transmission ? 'border-red-500' : ''}`}
          >
            <option value="">-- Choisissez la transmission --</option>
            {transmissions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.transmission && <p className="text-red-600 text-sm mt-1">{errors.transmission}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 font-bold rounded-xl hover:shadow-lg hover:scale-[1.01] transition"
        >
          Réserver
        </button>
      </form>
    </MainLayout>
  );
}
