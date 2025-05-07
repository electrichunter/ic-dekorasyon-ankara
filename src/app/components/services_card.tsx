"use client";

import { useState } from "react";
 

 

export default function Sidebar() {
 

  return (
    <>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <img
      src=" "
      alt="Card Image"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-center text-xl font-semibold text-white">Başlık 1</h3>
    </div>
  </div>
  
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <img
      src=" "
      alt="Card Image"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-center text-xl font-semibold text-white">Başlık 2</h3>
    </div>
  </div>

  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <img
      src=" "
      alt="Card Image"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-center text-xl font-semibold text-white">Başlık 3</h3>
    </div>
  </div>
</div>

    </>
  );
}
