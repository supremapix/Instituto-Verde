
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const words = [
    "Onde o Ballet Realiza Sonhos",
    "A Magia da Dança em Cada Passo",
    "Sua Sapatilha, Seu Futuro",
    "Transformando Vidas no Engenho da Rainha",
    "A Arte que Inspira Comunidades"
  ];

  // Imagens de alta performance que emulam o palco real (similar às fotos enviadas)
  const backgrounds = [
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80", // Grupo no palco (similar à foto 1)
    "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80", // Solo dramático (similar à foto 2/3)
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80", // Performance em luz cênica
    "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&q=80", // Ensaio clássico
    "https://images.unsplash.com/photo-1506450983270-d729442ad754?auto=format&fit=crop&q=80"  // Foco na disciplina
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
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && currentText === "") {
        setIsTyping(false);
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setSpeed(200);
      } else {
        setIsTyping(true);
        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          setSpeed(60);
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          setSpeed(120);
        }
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, speed]);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(bgTimer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div 
          key={bg}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-[3000ms] ease-in-out ${
            index === currentBgIndex ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
          } ${isTyping ? 'blur-[10px]' : 'blur-none'}`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex justify-center mb-10">
           <div className="w-28 h-28 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-5xl shadow-[0_0_60px_#16a34a] border-4 border-white animate-pulse">
            IV
          </div>
        </div>
        
        <div className="inline-block px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10">
          <span className="text-green-300 font-bold tracking-[0.4em] uppercase text-xs md:text-sm">
            Instituto Verde Criando Vidas
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
          <span className="font-signature text-7xl md:text-[10rem] block mb-6 text-green-400 drop-shadow-xl">O Palco</span>
          <div className="min-h-[6rem] flex items-center justify-center">
            <span className="text-white drop-shadow-2xl tracking-tighter filter saturate-150">{currentText}</span>
            <span className="w-2 h-12 md:h-20 bg-green-500 ml-4 animate-pulse rounded-full shadow-[0_0_25px_#22c55e]"></span>
          </div>
        </h1>

        <p className="text-gray-200 text-xl md:text-3xl max-w-4xl mx-auto mb-16 font-light leading-relaxed px-6 drop-shadow-lg italic">
          "A sapatilha é o instrumento, mas a alma é quem dita o passo."
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-10 px-6">
          <a href="#atividades" className="px-16 py-6 bg-green-600 text-white rounded-full font-black hover:bg-green-700 transition-all transform hover:scale-110 shadow-[0_20px_50px_rgba(22,163,74,0.5)] text-center text-xl uppercase tracking-widest">
            Nossos Cursos
          </a>
          <a href="#contato" className="px-16 py-6 bg-transparent border-2 border-white text-white rounded-full font-black hover:bg-white hover:text-green-900 transition-all transform hover:scale-110 text-center text-xl uppercase tracking-widest shadow-2xl">
            Fale Conosco
          </a>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-80">
        <div className="w-9 h-14 border-2 border-white rounded-full flex justify-center pt-2 shadow-2xl">
          <div className="w-2 h-4 bg-green-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
