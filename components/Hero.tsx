
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const words = [
    "Onde o Ballet Realiza Sonhos",
    "A Magia da Dança em Cada Passo",
    "Sua Sapatilha, Seu Futuro",
    "Transformando Vidas no Engenho",
    "A Arte que Inspira Comunidades"
  ];

  // Imagens selecionadas para emular fielmente as fotos reais enviadas pelo usuário
  const backgrounds = [
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80", // Espetáculo em Grupo (Similar à foto 1 do anexo)
    "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80", // Solo Bailarina Tutu Roxo (Similar à foto 2 do anexo)
    "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&q=80", // Ensaio das crianças
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80"  // Foco no palco iluminado
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = words[currentWordIndex];
      
      if (!isDeleting && currentText === fullText) {
        setIsTyping(false);
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && currentText === "") {
        setIsTyping(false);
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setSpeed(200);
      } else {
        setIsTyping(true);
        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          setSpeed(50);
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          setSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, speed]);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 7000);
    return () => clearInterval(bgTimer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      {backgrounds.map((bg, index) => (
        <div 
          key={bg}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-[3000ms] ease-in-out ${
            index === currentBgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Overlay de contraste - Mais forte no mobile */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
        </div>
      ))}

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Logo/Badge Centralizada */}
        <div className="flex justify-center mb-6 md:mb-10">
           <div className="w-20 h-20 md:w-28 md:h-28 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-3xl md:text-5xl shadow-[0_0_50px_rgba(22,163,74,0.6)] border-4 border-white animate-pulse">
            IV
          </div>
        </div>
        
        <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 md:mb-10">
          <span className="text-green-300 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-sm">
            Instituto Verde Criando Vidas
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-white mb-6 md:mb-8 leading-[1.1] drop-shadow-2xl">
          <span className="font-signature text-5xl md:text-8xl lg:text-[10rem] block mb-2 md:mb-6 text-green-400 drop-shadow-xl">O Espetáculo</span>
          <div className="min-h-[4rem] md:min-h-[6rem] flex items-center justify-center">
            <span className="text-white drop-shadow-2xl tracking-tight break-words max-w-[90vw]">{currentText}</span>
            <span className="w-1 md:w-2 h-8 md:h-20 bg-green-500 ml-2 md:ml-4 animate-pulse rounded-full shadow-[0_0_20px_#22c55e]"></span>
          </div>
        </h1>

        <p className="text-gray-200 text-lg md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10 md:mb-16 font-light leading-relaxed px-4 drop-shadow-lg italic">
          "No palco do Engenho, cada sapatilha escreve uma nova história."
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-10 w-full sm:w-auto px-6">
          <a href="#atividades" className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 bg-green-600 text-white rounded-full font-black hover:bg-green-700 transition-all transform hover:scale-110 shadow-lg text-center text-base md:text-xl uppercase tracking-widest">
            Cursos
          </a>
          <a href="#contato" className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 bg-transparent border-2 border-white text-white rounded-full font-black hover:bg-white hover:text-green-900 transition-all transform hover:scale-110 text-center text-base md:text-xl uppercase tracking-widest shadow-xl">
            Contato
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-60">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-green-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
