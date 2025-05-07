import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen   text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
          Mobilyasız Dekorasyonla<br />Mekanınıza Yeni Bir Ruh Katın
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-2 max-w-md md:max-w-3xl">
          Yaşam alanınızı mobilyaya ihtiyaç duymadan yeniden hayal edin. Minimal dokunuşlarla daha derin, daha anlamlı mekanlar yaratıyoruz.
        </p>
      </section>

      {/* CTA */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-10">
        <div className="max-w-md sm:max-w-xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-6">
            Sıradanlıktan uzaklaşın.<br />Alanınızı yeniden tasarlayalım.
          </h2>
          <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            Ücretsiz Keşif Talep Et
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 text-center bg-gray-900">
        <div className="max-w-xl mx-auto">
          <p className="text-base sm:text-lg font-medium">📞 0 (555) 123 45 67</p>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">© 2024 Mekan Ruhu | Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
