
import React from 'react';
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-white/5 pb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-green-600 rounded-[20px] flex items-center justify-center text-white font-bold text-3xl shadow-lg -rotate-6">IV</div>
              <div className="flex flex-col">
                <span className="font-black text-2xl leading-none tracking-tighter">Instituto Verde</span>
                <span className="text-green-500 text-xs font-black uppercase tracking-[0.3em] mt-1">Criando Vidas</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-10 text-base italic">
              "Transformando a disciplina do ballet em força de vida no Engenho da Rainha."
            </p>
            <div className="flex gap-5">
              <a href="https://instagram.com/institutoverdecriandovidas" target="_blank" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-600 transition-all text-gray-400 hover:text-white group border border-white/5 shadow-inner">
                <Instagram size={28} className="group-hover:scale-125 transition-transform" />
              </a>
              <a href="mailto:institutovcvidas25@gmail.com" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-600 transition-all text-gray-400 hover:text-white group border border-white/5 shadow-inner">
                <Mail size={28} className="group-hover:scale-125 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-xs">Navegação</h4>
            <ul className="space-y-5">
              <li><a href="#inicio" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-3 font-bold uppercase text-xs tracking-widest"><span className="w-2 h-2 bg-green-600 rounded-full"></span>Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-3 font-bold uppercase text-xs tracking-widest"><span className="w-2 h-2 bg-green-600 rounded-full"></span>Sobre</a></li>
              <li><a href="#atividades" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-3 font-bold uppercase text-xs tracking-widest"><span className="w-2 h-2 bg-green-600 rounded-full"></span>Cursos</a></li>
              <li><a href="#acoes-sociais" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-3 font-bold uppercase text-xs tracking-widest"><span className="w-2 h-2 bg-green-600 rounded-full"></span>Social</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-xs">Artes & Ballet</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 font-medium hover:text-white transition-colors">Ballet Baby & Kids</li>
              <li className="text-gray-400 font-medium hover:text-white transition-colors">Jazz Dance Juvenil</li>
              <li className="text-gray-400 font-medium hover:text-white transition-colors">Performance de Palco</li>
              <li className="text-gray-400 font-medium hover:text-white transition-colors">Kickboxing Inclusivo</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-xs">Endereço</h4>
            <ul className="space-y-8">
              <li className="flex gap-5 text-gray-400 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:text-green-500 transition-colors border border-white/5">
                  <MapPin size={24} />
                </div>
                <span className="text-sm leading-relaxed font-medium">Rua Mário Ferreira, 227<br/>Engenho da Rainha - RJ</span>
              </li>
              <li className="flex gap-5 text-gray-400 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:text-green-500 transition-colors border border-white/5">
                  <Phone size={24} />
                </div>
                <span className="text-lg font-black tracking-tighter">(21) 98383-6614</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-gray-600 text-xs font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Instituto Verde • Liberdance. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4 text-gray-400 text-base bg-white/5 px-10 py-5 rounded-full border border-white/10 shadow-3xl">
            <span className="font-bold">Desenvolvido</span> 
            <Heart size={22} className="text-red-600 fill-red-600 animate-heartbeat" /> 
            <span className="font-bold">por</span> 
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-black text-white hover:text-green-500 transition-all underline underline-offset-8 decoration-green-600 hover:decoration-white decoration-2"
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
