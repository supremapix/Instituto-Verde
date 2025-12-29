
import React from 'react';
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">IV</div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">Instituto Verde</span>
                <span className="text-green-500 text-xs font-bold uppercase tracking-widest mt-1">Criando Vidas</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transformando a realidade do Engenho da Rainha desde 2007 através da cultura, esporte, educação e lazer.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/institutoverdecriandovidas" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-600 transition-all text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="mailto:institutovcvidas25@gmail.com" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-600 transition-all text-gray-300 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-gray-400 hover:text-green-500 transition-colors">Página Inicial</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-green-500 transition-colors">Nossa História</a></li>
              <li><a href="#atividades" className="text-gray-400 hover:text-green-500 transition-colors">Projetos Atuais</a></li>
              <li><a href="#acoes-sociais" className="text-gray-400 hover:text-green-500 transition-colors">Ações Sociais</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Atividades</h4>
            <ul className="space-y-4">
              <li><a href="#atividades" className="text-gray-400 hover:text-green-500 transition-colors">Ballet e Jazz</a></li>
              <li><a href="#atividades" className="text-gray-400 hover:text-green-500 transition-colors">Kickboxing</a></li>
              <li><a href="#atividades" className="text-gray-400 hover:text-green-500 transition-colors">Teatro Audiovisual</a></li>
              <li><a href="#atividades" className="text-gray-400 hover:text-green-500 transition-colors">Cursos Profissionais</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Onde Estamos</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <MapPin className="text-green-600 flex-shrink-0" size={20} />
                <span>Rua Mário Ferreira, 227 - Eng da Rainha - RJ</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone className="text-green-600 flex-shrink-0" size={20} />
                <span>(21) 98383-6614</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail className="text-green-600 flex-shrink-0" size={20} />
                <span>institutovcvidas25@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm mb-4">
            © {new Date().getFullYear()} Instituto Verde Criando Vidas. Todos os direitos reservados.
          </p>
          <div className="flex items-center justify-center gap-1.5 text-gray-500 text-sm">
            Desenvolvido 
            <Heart size={16} className="text-red-500 fill-red-500 animate-heartbeat mx-0.5" /> 
            por 
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-gray-300 hover:text-green-500 transition-all flex items-center gap-1"
            >
              Suprema Sites Express
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
