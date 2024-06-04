import { useState, useEffect } from 'react';
import { Moon, SunDim } from "@phosphor-icons/react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const contents = [
    "🌟 WELCOME TO MY PORTFOLIO! 🌟",
    "🔒 I HAVE A STRONG PASSION FOR CYBERSECURITY AND PENETRATION TESTING",
    "🚀 I AM A FRONT-END DEVELOPER"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [contents.length]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 bg-opacity-50 text-white' : 'bg-gray-900 bg-opacity-45 text-white'}`}>
      <aside className="py-10 px-5 sm:py-24 sm:px-14 flex justify-between items-center">
        <div className="font-Lavishly text-2xl sm:text-4xl">
          <h1 translate="no">OR</h1>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-5">
          <button
            onClick={toggleDarkMode}
            className="focus:outline-none p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {isDarkMode ? <SunDim size={32} /> : <Moon size={32} />}
          </button>
        </div>
      </aside>
      <div className="flex justify-center">
        <h1 className="text-4xl sm:text-8xl font-Inika text-center">
          HELLO, MY NAME IS <br />
          <span className="block mt-2">OLAVO REGIS</span>
        </h1>
      </div>
      <br />
      <div className="flex justify-center">
        <h1 className="text-2xl sm:text-4xl font-Inika fade-in text-center">
          {contents[currentIndex]}
        </h1>
      </div>
      <div className="p-5 flex justify-center flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-24">
        <a href='/projeto' className='text-xl sm:text-2xl hover:text-green-500 transition-colors duration-300 text-center'>see my projects</a>
        <a href='/Find' className='text-xl sm:text-2xl hover:text-yellow-500 transition-colors duration-300 text-center'>Find out more</a>
      </div>
    </div>
  );
}
