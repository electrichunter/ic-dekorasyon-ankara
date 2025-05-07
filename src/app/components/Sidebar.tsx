"use client";

import { useState } from "react";
import { Menu, X, Home, User, Settings, HousePlus, CircleUserRound } from "lucide-react";
import Link from "next/link";

// Menü öğeleri
const navItems = [
  { href: "/", label: "Anasayfa", icon: <Home size={20} /> },
/*   { href: "/profile", label: "Profil", icon: <User size={20} /> }, */
  { href: "/services", label: "Hizmetler", icon: <HousePlus size={20} /> },
  { href: "/about", label: "Hakkımızda", icon: <User size={20} /> },
  { href: "/login", label: "Login", icon: <CircleUserRound  size={20} /> },
  
 
  /* { href: "/settings", label: "Ayarlar", icon: <Settings size={20} /> } */
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobil Menü Butonu */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 p-2 rounded-md text-white"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-gray-900 text-white p-6 shadow-xl z-40 transition-transform transform overflow-y-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        <div className="text-2xl font-bold mb-10">İç Dekorasyon</div>
        <nav className="flex flex-col gap-4">
          {navItems.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Arkaplan Kapatıcı (mobil menü açıkken ekranı kapatsın diye) */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
