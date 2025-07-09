import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import '../css/app.css'; // ← AJOUT IMPORTANT : ceci importe Tailwind CSS

const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });

createInertiaApp({
  resolve: (name) => {
    const path = `./Pages/${name.replace(/\./g, '/')}.jsx`;
    console.log('Résolution de la page:', name, '->', path);

    const page = pages[path];
    if (!page) {
      throw new Error(`Page "${name}" introuvable. Clé recherchée: ${path}`);
    }
    return page.default;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
