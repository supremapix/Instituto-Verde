
import React from 'react';

const Watermark: React.FC = () => {
  // Geramos uma grade de elementos para cobrir a tela
  const rows = Array.from({ length: 15 });
  const cols = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden select-none opacity-[0.04] md:opacity-[0.06]">
      <div className="flex flex-col h-[150vh] w-[150vw] -rotate-[25deg] -translate-x-[10%] -translate-y-[10%] items-center justify-center">
        {rows.map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-20 mb-32 whitespace-nowrap">
            {cols.map((_, colIndex) => (
              <a
                key={colIndex}
                href="https://supremasite.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-black text-sm md:text-lg uppercase tracking-[0.2em] pointer-events-auto hover:text-green-600 transition-colors"
              >
                Desenvolvido <span className="text-red-500">❤️</span> por Suprema Sites Express
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watermark;
