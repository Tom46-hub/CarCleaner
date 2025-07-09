import React from 'react';
import { usePage, useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import MainLayout from '@/Layouts/MainLayout';

export default function Profile() {
  const { auth } = usePage().props;
  const user = auth?.user || {};

  const { data, setData, post, processing, errors } = useForm({
    name: user.name || '',
    email: user.email || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/profile/update', {
      onSuccess: () => {
        alert('Profil mis à jour avec succès');
      },
      onError: () => {
        alert('Erreur lors de la mise à jour du profil');
      },
    });
  };

  const handleLogout = () => {
    Inertia.post('/logout');
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-semibold mb-6">Mon Profil</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Nom</label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={e => setData('name', e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={e => setData('email', e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <button
            type="submit"
            disabled={processing}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Enregistrer
          </button>
        </form>

        <hr className="my-6" />

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
        >
          Déconnexion
        </button>
      </div>
    </MainLayout>
  );
}
