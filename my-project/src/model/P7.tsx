import { useState } from 'react';

function ImageWithModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-5 flex flex-col items-center justify-center">
      <img
        className="w-44 h-auto cursor-pointer rounded-lg shadow-lg hover:opacity-80 transition duration-300"
        alt="Ilustração do código funcionando"
        src="Jokenpo.gif"
        onClick={openModal}
      />

      <h1 className="mt-4 text-lg font-Inika text-center">
        This is a simple game based on the classic Jo-ken-pô (rock, paper, scissors),
        but with Yu-Gi-Oh cards. The player competes against the computer using cards
        with attributes "Rock", "Paper", and "Scissors", where each card can win or
        lose against another, according to the traditional rules of the game.
      </h1>

      <p className='mt-4 text-lg font-Inika'>language used</p>
      <div className="flex gap-3"> 
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
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt="JavaScript"
              className="mt-2"
            />
      </div>
      <a
        href="https://github.com/Olavo15/Jokenpo.git"
        className="mt-2 text-cyan-500 hover:text-cyan-300 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code Github
      </a>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img
              className="max-w-full max-h-full rounded-lg shadow-lg"
              alt="Ilustração do código funcionando"
              src="Jokenpo.gif"
            />
            <button
              className="absolute top-0 right-0 m-4 text-white bg-red-600 hover:bg-red-800 transition duration-300 rounded-full px-4 py-2"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageWithModal;
