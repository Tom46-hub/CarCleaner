import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { auth = {} } = usePage().props;
  const user = auth.user || null;

  return (
    <header className="bg-white text-black py-4 border-b shadow-sm relative z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="font-bold text-xl">Auto Cleaner</a>

        <div className="flex items-center space-x-6 font-semibold text-base">
          <nav className="hidden md:flex space-x-8">
            <a href="/services" className="hover:underline">Services</a>
            <a href="/tarifs" className="hover:underline">Tarifs</a>
            <a href="/contact" className="hover:underline">Contact</a>

            {!user && (
              <>
                <a href="/connexion" className="hover:underline">Connexion</a>
                <a href="/inscription" className="hover:underline">Inscription</a>
              </>
            )}
          </nav>

          {user && (
            <a href="/profile" className="text-black hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Menu mobile"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 space-y-4 font-medium">
          <a href="/services" className="block">Services</a>
          <a href="/tarifs" className="block">Tarifs</a>
          <a href="/contact" className="block">Contact</a>

          {!user && (
            <>
              <a href="/connexion" className="block">Connexion</a>
              <a href="/inscription" className="block">Inscription</a>
            </>
          )}

          {user && (
            <a href="/profile" className="block">Profil</a>
          )}
        </div>
      )}
    </header>
  );
}
