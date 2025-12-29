
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const words = [
    "Onde o Ballet Realiza Sonhos",
    "A Magia da Dança em Cada Passo",
    "Sua Sapatilha, Seu Futuro",
    "Transformando Vidas no Engenho",
    "A Arte que Inspira Comunidades"
  ];

  // Imagens ultra-profissionais e artísticas focadas exclusivamente em bailarinas dançando
  const backgrounds = [
    "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&q=80", // Performance en pointe dramática
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80", // Espetáculo em grupo (vibe de palco real)
    "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80", // Solo em spotlight cênico
    "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80"  // Salto clássico e técnico
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
          setSpeed(40);
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          setSpeed(90);
        }
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, speed]);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(bgTimer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider com transições suaves de 3s */}
      {backgrounds.map((bg, index) => (
        <div 
          key={bg}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-[3000ms] ease-in-out ${
            index === currentBgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Overlay gradiente para profundidade visual */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
        {/* Badge do Instituto - Otimizada para Mobile */}
        <div className="flex justify-center mb-6 md:mb-8">
           <div className="w-16 h-16 md:w-28 md:h-28 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl md:text-5xl shadow-[0_0_40px_rgba(22,163,74,0.5)] border-2 md:border-4 border-white animate-pulse">
            IV
          </div>
        </div>
        
        <div className="inline-block px-4 py-1.5 md:px-6 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 md:mb-8">
          <span className="text-green-300 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-sm">
            Instituto Verde Criando Vidas
          </span>
        </div>
        
        <h1 className="text-[2.6rem] md:text-7xl lg:text-9xl font-bold text-white mb-6 leading-[1.1] drop-shadow-2xl">
          <span className="font-signature text-5xl md:text-8xl lg:text-[10rem] block mb-1 md:mb-4 text-green-400 drop-shadow-xl saturate-150">O Espetáculo</span>
          <div className="min-h-[4.5rem] md:min-h-[7rem] flex items-center justify-center">
            <span className="text-white drop-shadow-2xl tracking-tight leading-tight px-2">{currentText}</span>
            <span className="w-1 md:w-2 h-8 md:h-20 bg-green-500 ml-1 md:ml-4 animate-pulse rounded-full shadow-[0_0_20px_#22c55e]"></span>
          </div>
        </h1>

        <p className="text-gray-200 text-base md:text-2xl lg:text-3xl max-w-2xl md:max-w-4xl mx-auto mb-10 md:mb-14 font-light leading-relaxed px-6 drop-shadow-lg italic opacity-90">
          "A sapatilha é o instrumento, mas a alma é quem dita o passo."
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 w-full sm:w-auto px-8 sm:px-0">
          <a href="#atividades" className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-green-600 text-white rounded-full font-black hover:bg-green-700 transition-all transform hover:scale-105 shadow-[0_15px_30px_-5px_rgba(22,163,74,0.4)] text-center text-sm md:text-lg uppercase tracking-widest active:scale-95">
            Conheça os Cursos
          </a>
          <a href="#contato" className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-transparent border-2 border-white/80 text-white rounded-full font-black hover:bg-white hover:text-green-900 transition-all transform hover:scale-105 text-center text-sm md:text-lg uppercase tracking-widest shadow-xl active:scale-95 backdrop-blur-sm">
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Apenas Desktop */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-50">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-green-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
