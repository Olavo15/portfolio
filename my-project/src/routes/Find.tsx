import { useState, useEffect } from 'react';
import { Moon, SunDim } from "@phosphor-icons/react";

export default function Find() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
 
  return (
    <div
      className={`h-screen ${isDarkMode ? 'bg-gray-800 bg-opacity-75 text-white' : 'bg-blue-500 bg-opacity-25 text-black'}`}
    >
      <aside className="py-24 px-14 flex justify-between">
        <div className="font-Lavishly text-4xl">
          <h1 translate="no">OR</h1>
        </div>
        <div className="flex items-center space-x-5">
          <h1 className="text-4xl font-Inika">EN</h1>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <SunDim size={32} /> : <Moon size={32} />}
          </button>
        </div>
      </aside>
    </div>
  )
}