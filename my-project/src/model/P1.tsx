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
    <div className="p-5 flex flex-col items-center">
      <img
        className="w-44 h-auto cursor-pointer rounded-lg shadow-lg hover:opacity-80 transition duration-300"
        alt="Illustration of working code"
        src="/calculator.png"
        onClick={openModal}
      />
      
      <h1 className="mt-4 text-lg font-Inika text-center">
        The code is a simple calculator application made with Kivy,<br />
        a Python library for developing GUI applications.<br />
      </h1>

      <p className='mt-4 text-lg font-Inika'>language used</p>
      <img
        src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
        alt="Python Badge"
        className="mt-2"
      />

      <a
        href="https://github.com/Olavo15/Calculadora"
        className="mt-2 text-cyan-500 hover:text-cyan-300 transition duration-300"
      >
        Code Github
      </a>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img
              className="max-w-full max-h-full rounded-lg shadow-lg"
              alt="Ilustração do código funcionando"
              src="/calculator.png"
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
