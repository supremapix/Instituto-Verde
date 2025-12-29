
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs italic">IV</div>
            <span className="font-bold text-gray-800 tracking-tight">Instituto Verde Criando Vidas</span>
          </div>
          <p className="text-sm text-gray-500 max-w-xs mx-auto">
            Rua Mário Ferreira, 227 - Eng da Rainha - RJ.
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
          
          <div className="mt-8 pt-8 border-t border-gray-50 w-full">
            <div className="flex items-center justify-center gap-1 text-gray-400 text-sm">
              Desenvolvido 
              <Heart size={16} className="text-red-500 fill-red-500 animate-heartbeat mx-0.5" /> 
              por 
              <a 
                href="https://supremasite.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-gray-600 hover:text-green-600 transition-colors"
              >
                Suprema Sites Express
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
