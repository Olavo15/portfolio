import { useState, useEffect } from 'react';
import { Moon, SunDim, GithubLogo } from "@phosphor-icons/react";

export default function Find() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
 
  return (
    <div className={`h-auto ${isDarkMode ? 'bg-gray-800 bg-opacity-75 text-white' : 'bg-blue-500 bg-opacity-25 text-black'}`}>
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
        <h1 className="text-4xl font-Inika">About me</h1>
      </div>

      <div className='flex justify-center mt-4'>
        <div className='w-3/4 flex'>
          <div className="flex-grow">
            <h1 className="text-3xl font-Inika">Hello! I am Olavo Pereira Regis, a technology enthusiast and student of Systems Analysis and Development. My passion is cybersecurity, especially in the field of pentesting.</h1>
            <p className="text-2xl font-Inika mt-2">I like to say that security is a journey, not a destination. As Kevin David Mitnick said: "There's a popular saying that a secure computer is one that's turned off. That's clever, but it's false: the hacker will convince someone to come into the office and turn on that computer. It's all a matter of timing, patience, personality, and persistence."</p>
            <p className="text-2xl font-Inika">These words perfectly capture the essence of what I do. In my view, every challenge in programming and pentesting is an opportunity to apply these principles:</p>
            <ul className="list-disc ml-8 font-Inika mt-2">
              <li className="text-2xl">Time: I dedicate the time necessary to ensure that each task is carried out with excellence.</li>
              <li className="text-2xl">Patience: I remain calm, even in the most complex situations, knowing that the right solution will appear.</li>
              <li className="text-2xl">Persistence: I never give up easily; every obstacle is a chance to learn and grow.</li>
            </ul>
            <p className="text-2xl font-Inika mt-2">Studying new programming languages or carrying out detailed social engineering requires patience and perseverance. Recognizing and understanding the target requires thorough analysis and a significant investment of time. And that's exactly what motivates me: the constant search for knowledge and overcoming challenges.</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
      <GithubLogo size={32}/>
      </div>
      <div className="flex text-center justify-end px-96 mt-4">
        <a href='https://curriculo-two-khaki.vercel.app/' className='text-xl text-blue-600 font-Inika mt-2 hover:text-green-600'>My CV</a>
      </div>    
      
      <div className="flex justify-center mt-2">
        <h1 className="text-4xl font-Inika">Technology and tools</h1>
      </div>
      <div className='flex space-x-6 justify-center mt-2'>
      <img
        src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
        alt="Python Badge"
        className="mt-2"
      />
      <img
        src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
        alt="HTML5"
        className="mt-2"
      />
      <img
        src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
        alt="CSS3"
        className="mt-2"
      />
      <img
        src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
        alt="React"
        className="mt-2"
      />
      <img
        src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
        alt="TypeScript"
        className="mt-2"
      />
      <img
        src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
        alt="Tailwind"
        className="mt-2"
      />
      <img
        src="https://img.shields.io/badge/Linux-000?style=for-the-badge&logo=linux&logoColor=FCC624"
        alt="Linux"
        className="mt-2"
      />
      </div>
      <div className='flex space-x-6 justify-center mt-2'>
        <img
          src="https://img.shields.io/badge/Kali-268BEE?style=for-the-badge&logo=kalilinux&logoColor=white"
          alt="Kali"
          className="mt-2"
        />
        <img
          src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
          alt="Git"
          className="mt-2"
        />
        <img
          src="https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"
          alt="Vscode"
          className="mt-2"
        />
      </div>
    </div>
  )
}
