import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "İç Dekorasyon",
  description: "Dekorasyon hizmetleri için modern çözüm.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white font-sans antialiased">
        {/* Ana konteyner */}
        <div className="min-h-screen flex">
   <div className="fixed row-span-3 ">
          <Sidebar />
          </div>
          {/* İçerik */}
          <main className="flex-1 p-4 sm:ml-64 transition-all duration-300 ease-in-out">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
