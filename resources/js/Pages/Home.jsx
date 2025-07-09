import MainLayout from '@/Layouts/MainLayout';

export default function Home() {
  const services = [
    {
      title: "Nettoyage Intérieur",
      description: "Aspiration en profondeur, désinfection complète et tissus impeccables.",
      color: "bg-red-100",
      shadowColor: "shadow-red-300",
      emoji: "🧽",
      link: "/reservation/ReservationInterieur",
    },
    {
      title: "Nettoyage Extérieur",
      description: "Lavage soigneux, polish professionnel et protection durable de la carrosserie.",
      color: "bg-yellow-100",
      shadowColor: "shadow-yellow-300",
      emoji: "🚿",
      link: "/reservation/ReservationExterieur",
    },
    {
      title: "Formule Complète",
      description: "Nettoyage intérieur et extérieur avec finition professionnelle pour un résultat impeccable.",
      color: "bg-green-100",
      shadowColor: "shadow-green-300",
      emoji: "✨",
      link: "/reservation/ReservationComplete",
    },
  ];

  const missions = [
    {
      mission: "Aspiration complète",
      description: "Aspiration de tous les sièges, tapis, moquettes et coffre",
      prixBerline: "150€",
      prixSUV: "200€",
    },
    {
      mission: "Désinfection intérieure",
      description: "Nettoyage avec produits désinfectants des surfaces et tissus",
      prixBerline: "200€",
      prixSUV: "300€",
    },
    {
      mission: "Lavage extérieur",
      description: "Lavage complet à la main avec produits professionnels",
      prixBerline: "350€",
      prixSUV: "502€",
    },
    {
      mission: "Polish et cire",
      description: "Polissage de la carrosserie suivi d’une cire protectrice",
      prixBerline: "500€",
      prixSUV: "750€",
    },
    {
      mission: "Nettoyage complet",
      description: "Formule combinée intérieur + extérieur",
      prixBerline: "850€",
      prixSUV: "850€",
    },
  ];

  return (
    <MainLayout>
      <main className="max-w-7xl mx-auto p-6">
        {/* Section haute - Hero */}
        <section className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row items-center gap-16 px-6 md:px-0">
          {/* Texte */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Le nettoyage auto qui vous simplifie la vie
            </h1>
            <p className="mt-8 text-xl text-gray-800 leading-relaxed font-serif italic">
              Simple, rapide et efficace.<br />
              Redonnez vie à votre voiture avec notre touche experte.
            </p>
            <a
              href="#nos-services"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("nos-services");
                if (section) {
                  window.scrollTo({ top: section.offsetTop - 100, behavior: "smooth" });
                }
              }}
              className="mt-10 inline-block px-14 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              aria-label="Réservez un nettoyage de voiture"
            >
              Réservez dès maintenant
            </a>
          </div>

          {/* Image voiture */}
          <div className="flex-1 max-w-lg">
            <img
              src="images/voiture.png"
              alt="Voiture propre et brillante"
              className="w-full rounded-tl-[80px] shadow-xl object-cover"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 60%)' }}
            />
          </div>
        </section>

        {/* Nos Services */}
        <section id="nos-services" className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold mb-14 text-center text-gray-900 tracking-wide select-none">
            Nos Services
          </h2>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-8 space-y-8">
            {services.map(({ title, description, color, shadowColor, emoji, link }) => (
              <a
                key={title}
                href={link}
                className={`relative block break-inside-avoid rounded-[48px_12px_48px_12px] ${color} ${shadowColor} shadow-lg p-8 cursor-pointer
                  hover:scale-[1.05] hover:shadow-2xl transition-transform duration-500 ease-in-out`}
                style={{ boxShadow: `6px 6px 20px rgba(0,0,0,0.15), inset 4px 4px 8px rgba(255,255,255,0.7)` }}
                aria-label={`Réserver le service ${title}`}
              >
                <div className="flex items-center space-x-6">
                  <div className="text-6xl select-none">{emoji}</div>
                  <h3 className="text-3xl font-extrabold text-gray-900">{title}</h3>
                </div>
                <p className="mt-6 text-gray-700 font-serif text-lg leading-relaxed">{description}</p>
                <div className="mt-8">
                  <span className="inline-block border-2 border-gray-900 rounded-full px-6 py-2 font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition">
                    Réserver →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Tableau des Tarifs */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-14 text-center text-gray-900 tracking-wide select-none">
            Nos Tarifs & Services
          </h2>

          <div className="overflow-x-auto rounded-3xl shadow-lg border border-gray-300">
            <table className="min-w-full border-collapse border border-gray-300 rounded-3xl">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-6 py-4 text-left text-gray-900 font-semibold">Services</th>
                  <th className="border border-gray-300 px-6 py-4 text-left text-gray-900 font-semibold">Description</th>
                  <th className="border border-gray-300 px-6 py-4 text-center text-gray-900 font-semibold">Berline & Citadine</th>
                  <th className="border border-gray-300 px-6 py-4 text-center text-gray-900 font-semibold">SUV, 4x4 & Familiales</th>
                </tr>
              </thead>
              <tbody>
                {missions.map(({ mission, description, prixBerline, prixSUV }, idx) => (
                  <tr
                    key={mission}
                    className={`transition-transform duration-300
                      ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      hover:bg-gray-200 hover:shadow-lg cursor-pointer`}
                  >
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">{mission}</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">{description}</td>
                    <td className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">{prixBerline}</td>
                    <td className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">{prixSUV}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
