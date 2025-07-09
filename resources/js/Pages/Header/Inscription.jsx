import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { useForm } from '@inertiajs/react';

export default function Inscription() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post('/inscription');
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-6">Créer un compte</h1>
        <form onSubmit={submit} className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            value={data.name}
            onChange={e => setData('name', e.target.value)}
            className="w-full border p-2 rounded"
          />
          {errors.name && <div className="text-red-500">{errors.name}</div>}

          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={e => setData('email', e.target.value)}
            className="w-full border p-2 rounded"
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}

          <input
            type="password"
            placeholder="Mot de passe"
            value={data.password}
            onChange={e => setData('password', e.target.value)}
            className="w-full border p-2 rounded"
          />
          {errors.password && <div className="text-red-500">{errors.password}</div>}

          <input
            type="password"
            placeholder="Confirmez le mot de passe"
            value={data.password_confirmation}
            onChange={e => setData('password_confirmation', e.target.value)}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Créer un compte
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
