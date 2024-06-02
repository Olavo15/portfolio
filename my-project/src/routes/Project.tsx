import { useState } from 'react';
import { Moon, SunDim } from "@phosphor-icons/react";
import P1 from '../model/P1';
import P2 from '../model/P2';
import P3 from '../model/P3';
import P4 from '../model/P4';

export default function Project() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`h-auto ${isDarkMode ? 'bg-gray-800 bg-opacity-5 text-white' : 'bg-blue-500 bg-opacity-25 text-black'}`}>
      <aside className="py-24 px-14 flex justify-between">
        <div className="font-Lavishly text-4xl">
          <a translate="no" href='/'>OR</a>
        </div>
        <div className="flex items-center space-x-5">
          <h1 className="text-4xl font-Inika">EN</h1>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <SunDim size={32} /> : <Moon size={32} />}
          </button>
        </div>
      </aside>

      <div className="flex justify-center">
        <h1 className="text-4xl font-Inika">My projects</h1>
      </div>

      <div className="flex flex-col justify-stretch items-center mt-6">
        <div className="flex justify-between w-full">
          <P1 />
          <P2 />
          <P3 />
        </div>
        <div className="flex justify-between w-full mt-6">
          <P4 />
        </div>
      </div>
    </div>
  );
}
