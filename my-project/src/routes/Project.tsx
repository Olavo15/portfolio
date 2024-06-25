import { useState } from 'react';
import { Moon, SunDim } from "@phosphor-icons/react";
import P1 from '../model/P1';
import P2 from '../model/P2';
import P3 from '../model/P3';
import P4 from '../model/P4';
import P5 from '../model/P5';
import P6 from '../model/P6';

export default function Project() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 bg-opacity-50 text-white' : 'bg-gray-900 bg-opacity-45 text-white'}`}>
      <aside className="py-10 px-5 sm:py-24 sm:px-14 flex justify-between items-center">
        <div className="font-Lavishly text-2xl sm:text-4xl">
          <a translate="no" href='/'>OR</a>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-5">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <SunDim size={32} /> : <Moon size={32} />}
          </button>
        </div>
      </aside>

      <div className="flex justify-center">
        <h1 className="text-2xl sm:text-4xl font-Inika">My projects</h1>
      </div>

      <div className="flex flex-col items-center mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 sm:px-14">
          <P1 />
          <P2 />
          <P3 />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 sm:px-14">
          <P4 />
          <P5 />
          <P6 />
        </div>
      </div>
    </div>
  );
}
