// resources/js/Components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-center md:text-left">
        
        {/* Colonne 1 */}
        <div>
          <h4 className="font-bold mb-4 uppercase tracking-wide">Entreprise</h4>
          <ul className="space-y-2">
            <li><a href="/propos" className="hover:underline">À propos</a></li>
            <li><a href="/carriere" className="hover:underline">Carrières</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Colonne 2 */}
        <div>
          <h4 className="font-bold mb-4 uppercase tracking-wide">Support</h4>
          <ul className="space-y-2">
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/aide" className="hover:underline">Centre d’aide</a></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div>
          <h4 className="font-bold mb-4 uppercase tracking-wide">Légal</h4>
          <ul className="space-y-2">
            <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
            <li><a href="/cgu" className="hover:underline">Conditions générales</a></li>
            <li><a href="/confidentialite" className="hover:underline">Politique de confidentialité</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-400">
        &copy; {new Date().getFullYear()} Auto Cleaner. Tous droits réservés.
      </div>
    </footer>
  );
}
