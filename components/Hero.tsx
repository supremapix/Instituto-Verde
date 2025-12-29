
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const words = [
    "Transformando Vidas através da Arte",
    "Esporte Salva Vidas!",
    "Cultura e Lazer para a Comunidade",
    "Superação e Dedicação desde 2007",
    "Formando Cidadãos no Engenho da Rainha"
  ];

  const backgrounds = [
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80", // Dança/Palco
    "https://images.unsplash.com/photo-1552072805-2a9039d00e57?auto=format&fit=crop&q=80", // Kickboxing/Luta
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80", // Social/Crianças
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80", // Educação/Livros
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"  // Comunidade/Evento
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  // Typewriter effect
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
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setSpeed(200);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, speed, words]);

  // Background slider effect
  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(bgTimer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      {backgrounds.map((bg, index) => (
        <div 
          key={bg}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentBgIndex ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
          }`}
          style={{ 
            backgroundImage: `url(${bg})`,
            transitionProperty: 'opacity, transform',
            transitionDuration: '2000ms'
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block px-4 py-1 bg-green-600 bg-opacity-20 border border-green-500 rounded-full mb-6 animate-fadeIn">
          <span className="text-green-400 font-bold tracking-widest uppercase text-xs sm:text-sm">
            Instituto Verde Criando Vidas
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="font-signature text-5xl md:text-8xl block mb-4 text-green-500">Criando Vidas</span>
          <div className="min-h-[5rem] md:min-h-[7rem] flex items-center justify-center">
            <span className="text-white drop-shadow-lg">{currentText}</span>
            <span className="w-1 h-10 md:h-16 bg-green-500 ml-2 animate-pulse"></span>
          </div>
        </h1>

        <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed px-4">
          Idealizado em 2007, somos um polo de cultura, esporte, educação e lazer no Engenho da Rainha, transformando realidades através da dedicação e superação.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
          <a href="#atividades" className="px-10 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-all transform hover:scale-105 shadow-xl text-center">
            Nossos Projetos
          </a>
          <a href="#contato" className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-green-700 transition-all transform hover:scale-105 text-center">
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-xs uppercase tracking-widest mb-2 opacity-50">Role para explorar</span>
        <div className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-green-50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
