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
        <div className="flex">
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-screen w-64">
            <Sidebar />
          </div>

          {/* İçerik */}
          <main className="ml-64 flex-1 min-h-screen flex items-center justify-center p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
