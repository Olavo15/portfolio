import { useState } from 'react';
import { Moon, SunDim, GithubLogo, InstagramLogo, LinkedinLogo} from "@phosphor-icons/react";

export default function Find() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 bg-opacity-50 text-white' : 'bg-gray-900 bg-opacity-45 text-white'}`}>
      <aside className="py-6 px-4 md:py-24 md:px-14 flex flex-col md:flex-row justify-between items-center">
        <div className="font-Lavishly text-4xl mb-4 md:mb-0">
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

      <div className='flex justify-center mt-4 px-4'>
        <div className='w-full md:w-3/4 flex flex-col'>
          <div className="flex-grow">
            <h1 className="text-xl md:text-2xl font-Inika">Hello! I am Olavo Pereira Regis, a technology enthusiast and student of Systems Analysis and Development. My passion is cybersecurity, especially in the field of pentesting.</h1>
            <p className="text-lg md:text-xl font-Inika mt-2">I like to say that security is a journey, not a destination. As Kevin David Mitnick said: "There's a popular saying that a secure computer is one that's turned off. That's clever, but it's false: the hacker will convince someone to come into the office and turn on that computer. It's all a matter of timing, patience, personality, and persistence."</p>
            <p className="text-lg md:text-xl font-Inika">These words perfectly capture the essence of what I do. In my view, every challenge in programming and pentesting is an opportunity to apply these principles:</p>
            <ul className="list-disc ml-8 font-Inika mt-2">
              <li className="text-lg md:text-xl">Time: I dedicate the time necessary to ensure that each task is carried out with excellence.</li>
              <li className="text-lg md:text-xl">Patience: I remain calm, even in the most complex situations, knowing that the right solution will appear.</li>
              <li className="text-lg md:text-xl">Persistence: I never give up easily; every obstacle is a chance to learn and grow.</li>
            </ul>
            <p className="text-lg md:text-xl font-Inika mt-2">Studying new programming languages or carrying out detailed social engineering requires patience and perseverance. Recognizing and understanding the target requires thorough analysis and a significant investment of time. And that's exactly what motivates me: the constant search for knowledge and overcoming challenges.</p>
          </div>
        </div>
      </div>
        <h1 className="font-Inika px-64 mt-4 text-lg">counted:</h1>
      <div className='flex px-72 mt-4 space-x-4'>
      <a href='https://github.com/Olavo15' target='_blank' rel='noopener noreferrer' className='hover:text-indigo-700'>
        <GithubLogo size={32} />
      </a>
      <a href='https://www.instagram.com/olavo_r15/' target='_blank' rel='noopener noreferrer' className='hover:text-pink-600'>
        <InstagramLogo size={32} />
      </a>
      <a href='https://www.linkedin.com/in/olavo-regis-22b57b297/' target='_blank' rel='noopener noreferrer' className='hover:text-blue-600'>
        <LinkedinLogo size={32} />
      </a>
    </div>
      <div className="flex justify-center md:justify-end px-4 md:px-96 mt-4">
        <a href='https://curriculo-two-khaki.vercel.app/' className='text-lg md:text-xl text-blue-600 font-Inika mt-2 hover:text-green-600'>My CV</a>
      </div>    
      
      <div className="flex justify-center mt-4">
        <h1 className="text-4xl font-Inika">Technology and tools</h1>
      </div>
      <div className='flex flex-wrap justify-center mt-2'>
        <img
          src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
          alt="Python Badge"
          className="m-2"
        />
        <img
          src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
          alt="HTML5"
          className="m-2"
        />
        <img
          src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
          alt="CSS3"
          className="m-2"
        />
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
          alt="JavaScript"
          className="m-2"
        />
        <img
          src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          alt="React"
          className="m-2"
        />
        <img
          src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          alt="TypeScript"
          className="m-2"
        />
        <img
          src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
          alt="Tailwind"
          className="m-2"
        />
        <img
          src="https://img.shields.io/badge/Linux-000?style=for-the-badge&logo=linux&logoColor=FCC624"
          alt="Linux"
          className="m-2"
        />
        <img
          src="https://img.shields.io/badge/Kali-268BEE?style=for-the-badge&logo=kalilinux&logoColor=white"
          alt="Kali"
          className="m-2"
        />
        <img
          src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
          alt="Git"
          className="m-2"
        />
        <img
          src="https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"
          alt="Vscode"
          className="m-2"
        />
      </div>
    </div>
  )
}
