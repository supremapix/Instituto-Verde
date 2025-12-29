
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  const words = [
    "Onde o Ballet Realiza Sonhos",
    "A Magia da Dança em Cada Passo",
    "Sua Sapatilha, Seu Futuro",
    "Transformando Vidas no Engenho",
    "A Arte que Inspira Comunidades"
  ];

  const backgrounds = [
    "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80"
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = words[currentWordIndex];
      
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setSpeed(200);
      } else {
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
      {backgrounds.map((bg, index) => (
        <div 
          key={bg}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-[3000ms] ease-in-out ${
            index === currentBgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        {/* Badge do Instituto - Escala Reduzida */}
        <div className="flex justify-center mb-4 md:mb-6">
           <div className="w-12 h-12 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-3xl shadow-[0_0_30px_rgba(22,163,74,0.5)] border-2 md:border-3 border-white animate-pulse">
            IV
          </div>
        </div>
        
        {/* Sub-título superior */}
        <div className="inline-block px-3 py-1 md:px-5 md:py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4 md:mb-6">
          <span className="text-green-300 font-bold tracking-[0.1em] md:tracking-[0.3em] uppercase text-[7px] md:text-xs">
            Instituto Verde Criando Vidas
          </span>
        </div>
        
        {/* Título Principal - Refinado */}
        <h1 className="mb-4 md:mb-6 leading-none drop-shadow-2xl flex flex-col items-center">
          <span className="font-signature text-4xl md:text-6xl lg:text-7xl text-green-400 drop-shadow-xl saturate-150 mb-[-10px] md:mb-[-20px] z-10">O Espetáculo</span>
          <div className="min-h-[3rem] md:min-h-[5rem] lg:min-h-[6rem] flex items-center justify-center">
            <span className="text-white text-[1.8rem] sm:text-[2.2rem] md:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-2xl px-2 break-words max-w-[90vw]">
              {currentText}
            </span>
            <span className="w-0.5 md:w-1 h-6 md:h-12 bg-green-500 ml-1 md:ml-2 animate-pulse rounded-full shadow-[0_0_15px_#22c55e]"></span>
          </div>
        </h1>

        {/* Citação / Slogan */}
        <p className="text-gray-200 text-xs sm:text-sm md:text-xl lg:text-2xl max-w-lg md:max-w-3xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-6 drop-shadow-lg italic opacity-90">
          "A sapatilha é o instrumento, mas a alma é quem dita o passo."
        </p>

        {/* Botões - Tamanho Harmonizado */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-6 w-full px-6 sm:px-0">
          <a href="#atividades" className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-green-600 text-white rounded-full font-black hover:bg-green-700 transition-all transform hover:scale-105 shadow-[0_10px_20px_-5px_rgba(22,163,74,0.4)] text-center text-[10px] md:text-sm uppercase tracking-widest active:scale-95">
            Conheça os Cursos
          </a>
          <a href="#contato" className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-transparent border-2 border-white/80 text-white rounded-full font-black hover:bg-white hover:text-green-900 transition-all transform hover:scale-105 text-center text-[10px] md:text-sm uppercase tracking-widest shadow-xl active:scale-95 backdrop-blur-sm">
            Fale Conosco
          </a>
        </div>

        {/* Link para PDF - Otimizado */}
        <div className="mt-8 md:mt-12">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); alert('Portfólio baixado com sucesso!'); }}
            className="flex items-center gap-2 text-white/60 hover:text-green-400 transition-colors group text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em]"
          >
            <div className="w-7 h-7 md:w-8 md:h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-green-600/20 transition-all border border-white/10">
              <Download size={14} />
            </div>
            Baixar Portfólio PDF
          </a>
        </div>
      </div>

      {/* Indicador de Scroll - Pequeno e Elegante */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-40">
        <div className="w-5 h-8 border border-white rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-green-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
