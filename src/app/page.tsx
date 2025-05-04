import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Mobilyasız Dekorasyonla<br />Mekanınıza Yeni Bir Ruh Katın
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mt-4 max-w-3xl mx-auto">
          Yaşam alanınızı mobilyaya ihtiyaç duymadan yeniden hayal edin. Minimal dokunuşlarla daha derin, daha anlamlı mekanlar yaratıyoruz.
        </p>
      </section>
 
      
      {/* CTA */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Sıradanlıktan uzaklaşın.<br />Alanınızı yeniden tasarlayalım.
          </h2>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition">
            Ücretsiz Keşif Talep Et
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-white font-medium">📞 0 (555) 123 45 67</p>
          <p className="mt-4 text-gray-300">© 2024 Mekan Ruhu | Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
