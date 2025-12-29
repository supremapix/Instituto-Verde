
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const words = [
    "Onde o Ballet Realiza Sonhos",
    "Transformando Vidas através da Arte",
    "Esporte Salva Vidas!",
    "Transforme seus Sonhos em Artes",
    "Superação e Dedicação no Engenho da Rainha"
  ];

  const backgrounds = [
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506450983270-d729442ad754?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80"
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
        // Parou de digitar (pausa no texto completo)
        setIsTyping(false);
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        // Parou de apagar (troca de palavra)
        setIsTyping(false);
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setSpeed(200);
      } else {
        // Está ativamente digitando ou apagando
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
    }, 5000);
    return () => clearInterval(bgTimer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider com Blur Dinâmico */}
      {backgrounds.map((bg, index) => (
        <div 
          key={bg}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out ${
            index === currentBgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          } ${isTyping ? 'blur-md' : 'blur-none'}`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex justify-center mb-8">
           <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-4xl shadow-[0_0_40px_rgba(34,197,94,0.4)] border-4 border-white animate-pulse">
            IV
          </div>
        </div>
        
        <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
          <span className="text-white font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
            Instituto Verde Criando Vidas
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          <span className="font-signature text-5xl md:text-9xl block mb-6 text-green-400 drop-shadow-xl">Portfólio 2024</span>
          <div className="min-h-[5rem] flex items-center justify-center">
            <span className="text-white drop-shadow-2xl tracking-tight">{currentText}</span>
            <span className="w-1.5 h-10 md:h-16 bg-green-500 ml-3 animate-pulse"></span>
          </div>
        </h1>

        <p className="text-gray-100 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed px-4 drop-shadow-md italic">
          "A vida é como a dança... Aos poucos vamos acertando os passos."
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 px-6">
          <a href="#atividades" className="px-12 py-5 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-all transform hover:scale-110 shadow-2xl text-center">
            Ver Atividades
          </a>
          <a href="#contato" className="px-12 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-green-800 transition-all transform hover:scale-110 text-center">
            Fale no WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-green-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
