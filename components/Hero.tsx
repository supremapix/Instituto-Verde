
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const words = [
    "Transformando Vidas através da Arte",
    "Cultura e Esporte para Todos",
    "Formando Cidadãos do Futuro",
    "Referência Social na Nossa Comunidade"
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(100);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setSpeed(200);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, speed]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/id/453/1920/1080)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-green-400 font-bold tracking-widest uppercase mb-4 text-sm sm:text-base">
          Bem-vindo ao Instituto Verde
        </h2>
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="font-signature text-5xl md:text-8xl block mb-2">Criando Vidas</span>
          <div className="min-h-[4rem] flex items-center justify-center">
            <span className="text-green-500">{currentText}</span>
            <span className="w-1 h-10 md:h-14 bg-green-500 ml-2 animate-pulse"></span>
          </div>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Desde 2007 transformando a realidade do Engenho da Rainha através da cultura, esporte, educação e lazer.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#atividades" className="px-8 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg">
            Conheça Nossas Atividades
          </a>
          <a href="#contato" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-green-700 transition-all transform hover:scale-105">
            Seja um Voluntário
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
