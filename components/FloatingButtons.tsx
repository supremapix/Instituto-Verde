
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
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-900 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        title="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>

      {/* WhatsApp Floating button */}
      <a
        href="https://wa.me/5521983836614"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 hover:bg-green-600 group relative"
        title="Fale no WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Precisa de ajuda?
        </span>
        <MessageCircle size={32} />
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-green-600 text-[10px] items-center justify-center font-bold">1</span>
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
