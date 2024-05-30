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
      <div className="flex justify-center">
        <h1 className="text-8xl font-Inika text-center">
          HELLO, MY NAME IS <br />
          <span className="block mt-2">OLAVO REGIS</span>
        </h1>
      </div>
      <br />
      <div className="flex justify-center">
        <h1 className="text-4xl font-Inika fade-in">
          {contents[currentIndex]}
        </h1>
      </div>
      <div className="p-5 flex justify-center space-x-24">
        <a href='/projeto' className='hover:text-green-500'>see my projects</a>
        <a href='/Find' className='hover:text-yellow-500'>Find out more</a>
      </div>
    </div>
  );
}
