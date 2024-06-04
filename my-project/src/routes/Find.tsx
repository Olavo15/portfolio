import { useState } from 'react';
import { Moon, SunDim, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Find() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    const nextLanguage = language === 'EN' ? 'PT' : language === 'PT' ? 'ES' : 'EN';
    setLanguage(nextLanguage);
  };

  const content = {
    EN: {
      aboutMe: "About me",
      introduction: "Hello! I am Olavo Pereira Regis, a technology enthusiast and student of Systems Analysis and Development. My passion is cybersecurity, especially in the field of pentesting.",
      quote: "I like to say that security is a journey, not a destination. As Kevin David Mitnick said: \"There's a popular saying that a secure computer is one that's turned off. That's clever, but it's false: the hacker will convince someone to come into the office and turn on that computer. It's all a matter of timing, patience, personality, and persistence.\"",
      essence: "These words perfectly capture the essence of what I do. In my view, every challenge in programming and pentesting is an opportunity to apply these principles:",
      time: "Time: I dedicate the time necessary to ensure that each task is carried out with excellence.",
      patience: "Patience: I remain calm, even in the most complex situations, knowing that the right solution will appear.",
      persistence: "Persistence: I never give up easily; every obstacle is a chance to learn and grow.",
      motivation: "Studying new programming languages or carrying out detailed social engineering requires patience and perseverance. Recognizing and understanding the target requires thorough analysis and a significant investment of time. And that's exactly what motivates me: the constant search for knowledge and overcoming challenges.",
      connect: "Connect with me:",
      myCV: "My CV",
      techTools: "Technology and tools"
    },
    PT: {
      aboutMe: "Sobre mim",
      introduction: "Olá! Eu sou Olavo Pereira Regis, um entusiasta de tecnologia e estudante de Análise e Desenvolvimento de Sistemas. Minha paixão é cibersegurança, especialmente na área de pentesting.",
      quote: "Gosto de dizer que a segurança é uma jornada, não um destino. Como disse Kevin David Mitnick: \"Há um ditado popular que diz que um computador seguro é aquele que está desligado. Isso é inteligente, mas é falso: o hacker convencerá alguém a entrar no escritório e ligar esse computador. Tudo é uma questão de tempo, paciência, personalidade e persistência.\"",
      essence: "Essas palavras capturam perfeitamente a essência do que eu faço. Na minha visão, cada desafio em programação e pentesting é uma oportunidade de aplicar esses princípios:",
      time: "Tempo: Dedico o tempo necessário para garantir que cada tarefa seja realizada com excelência.",
      patience: "Paciência: Mantenho a calma, mesmo nas situações mais complexas, sabendo que a solução certa aparecerá.",
      persistence: "Persistência: Nunca desisto facilmente; cada obstáculo é uma chance de aprender e crescer.",
      motivation: "Estudar novas linguagens de programação ou realizar engenharia social detalhada exige paciência e perseverança. Reconhecer e entender o alvo requer uma análise minuciosa e um investimento significativo de tempo. E é exatamente isso que me motiva: a busca constante por conhecimento e a superação de desafios.",
      connect: "Conecte-se comigo:",
      myCV: "Meu CV",
      techTools: "Tecnologia e ferramentas"
    },
    ES: {
      aboutMe: "Sobre mí",
      introduction: "¡Hola! Soy Olavo Pereira Regis, un entusiasta de la tecnología y estudiante de Análisis y Desarrollo de Sistemas. Mi pasión es la ciberseguridad, especialmente en el campo del pentesting.",
      quote: "Me gusta decir que la seguridad es un viaje, no un destino. Como dijo Kevin David Mitnick: \"Hay un dicho popular que dice que una computadora segura es una que está apagada. Eso es inteligente, pero es falso: el hacker convencerá a alguien de que entre en la oficina y encienda esa computadora. Todo es una cuestión de tiempo, paciencia, personalidad y persistencia.\"",
      essence: "Estas palabras capturan perfectamente la esencia de lo que hago. En mi opinión, cada desafío en programación y pentesting es una oportunidad para aplicar estos principios:",
      time: "Tiempo: Dedico el tiempo necesario para asegurarme de que cada tarea se realice con excelencia.",
      patience: "Paciencia: Me mantengo tranquilo, incluso en las situaciones más complejas, sabiendo que la solución correcta aparecerá.",
      persistence: "Persistencia: Nunca me doy por vencido fácilmente; cada obstáculo es una oportunidad para aprender y crecer.",
      motivation: "Estudiar nuevos lenguajes de programación o llevar a cabo ingeniería social detallada requiere paciencia y perseverancia. Reconocer y entender el objetivo requiere un análisis minucioso y una inversión significativa de tiempo. Y eso es exactamente lo que me motiva: la búsqueda constante de conocimiento y la superación de desafíos.",
      connect: "Conéctate conmigo:",
      myCV: "Mi CV",
      techTools: "Tecnología y herramientas"
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 bg-opacity-50 text-white' : 'bg-gray-900 bg-opacity-45 text-white'}`}>
      <aside className="py-6 px-4 md:py-12 md:px-14 flex flex-col md:flex-row justify-between items-center">
        <div className="font-Lavishly text-4xl mb-4 md:mb-0">
          <a translate="no" href='/'>OR</a>
        </div>
        <div className="flex items-center space-x-5">
          <h1 className="text-2xl md:text-4xl font-Inika cursor-pointer" onClick={toggleLanguage}>{language}</h1>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <SunDim size={32} /> : <Moon size={32} />}
          </button>
        </div>
      </aside>
      
      <div className="flex justify-center">
        <h1 className="text-3xl md:text-4xl font-Inika">{content[language].aboutMe}</h1>
      </div>

      <div className='flex justify-center mt-4 px-4'>
        <div className='w-full md:w-3/4 flex flex-col'>
          <div className="flex-grow">
            <h1 className="text-lg md:text-2xl font-Inika">{content[language].introduction}</h1>
            <p className="text-md md:text-lg font-Inika mt-2">{content[language].quote}</p>
            <p className="text-md md:text-lg font-Inika mt-2">{content[language].essence}</p>
            <ul className="list-disc ml-8 font-Inika mt-2">
              <li className="text-md md:text-lg">{content[language].time}</li>
              <li className="text-md md:text-lg">{content[language].patience}</li>
              <li className="text-md md:text-lg">{content[language].persistence}</li>
            </ul>
            <p className="text-md md:text-lg font-Inika mt-2">{content[language].motivation}</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center mt-4">
        <h1 className="text-lg md:text-xl font-Inika">{content[language].connect}</h1>
        <div className='flex space-x-4 mt-4'>
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
      </div>

      <div className="flex justify-center md:justify-end px-4 md:px-96 mt-4">
        <a href='https://curriculo-two-khaki.vercel.app/' className='text-lg md:text-xl text-blue-600 font-Inika mt-2 hover:text-green-600'>{content[language].myCV}</a>
      </div>    
      
      <div className="flex justify-center mt-4">
        <h1 className="text-3xl md:text-4xl font-Inika">{content[language].techTools}</h1>
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
  );
}
