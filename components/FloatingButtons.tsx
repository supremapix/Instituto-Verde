
import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

interface Props {
  showScrollTop: boolean;
}

const FloatingButtons: React.FC<Props> = ({ showScrollTop }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-6 md:right-10 flex flex-col gap-5 z-[100]">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`w-14 h-14 bg-gray-900 text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 hover:bg-green-600 group border border-white/10 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={28} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* WhatsApp Floating button */}
      <a
        href="https://wa.me/5521983836614"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-green-500 text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all hover:scale-110 hover:bg-green-600 group relative"
        aria-label="WhatsApp"
      >
        <div className="absolute -left-[140px] bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 hidden md:block">
          Fale Conosco agora!
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
        </div>
        
        <MessageCircle size={36} />
        
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-6 w-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-green-600 text-[10px] items-center justify-center font-bold text-white border-2 border-white">
            1
          </span>
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
