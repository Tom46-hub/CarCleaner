import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { useForm } from '@inertiajs/react';

export default function Connexion() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();
    post('/connexion');
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-6">Se connecter</h1>
        <form onSubmit={submit} className="space-y-4">
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

          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              checked={data.remember}
              onChange={e => setData('remember', e.target.checked)}
              className="rounded"
            />
            <span>Se souvenir de moi</span>
          </label>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Se connecter
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
