
import React from 'react';
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-white/5 pb-20">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg rotate-3">IV</div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl leading-none">Instituto Verde</span>
                <span className="text-green-500 text-xs font-bold uppercase tracking-widest mt-1">Criando Vidas</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
              Fundado por André Reboredo em 2007 e hoje presidido por Amanda Visan. Um porto seguro de cultura e esporte no Engenho da Rainha.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/institutoverdecriandovidas" target="_blank" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-green-600 transition-all text-gray-400 hover:text-white group">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:institutovcvidas25@gmail.com" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-green-600 transition-all text-gray-400 hover:text-white group">
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-green-600 rounded-full group-hover:w-3 transition-all"></span>Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-green-600 rounded-full group-hover:w-3 transition-all"></span>Nossa História</a></li>
              <li><a href="#atividades" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-green-600 rounded-full group-hover:w-3 transition-all"></span>Cursos e Projetos</a></li>
              <li><a href="#acoes-sociais" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-green-600 rounded-full group-hover:w-3 transition-all"></span>Ações Sociais</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Atividades</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Ballet Clássico</li>
              <li className="text-gray-400">Kickboxing (Prof. Jorge)</li>
              <li className="text-gray-400">Teatro e Áudio Visual</li>
              <li className="text-gray-400">Cursos Profissionalizantes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Localização</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-gray-400 group">
                <MapPin className="text-green-600 flex-shrink-0" size={24} />
                <span className="text-sm">Rua Mário Ferreira, 227 - Engenho da Rainha, RJ</span>
              </li>
              <li className="flex gap-4 text-gray-400">
                <Phone className="text-green-600 flex-shrink-0" size={24} />
                <span className="text-sm">(21) 98383-6614</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Instituto Verde Criando Vidas.
          </p>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-6 py-3 rounded-full border border-white/5">
            Desenvolvido 
            <Heart size={18} className="text-red-500 fill-red-500 animate-heartbeat" /> 
            por 
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-green-500 transition-all underline underline-offset-4 decoration-green-600"
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
