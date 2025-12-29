
import React from 'react';
import { Target, Eye, Heart, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80" 
                alt="Bailarina profissional Instituto Verde" 
                className="rounded-[50px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] w-full object-cover h-[600px] lg:h-[800px] bg-gray-50 transform hover:scale-[1.03] transition-all duration-1000"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-[40px] shadow-2xl border-l-[10px] border-green-600 max-w-sm">
                <p className="text-gray-900 italic font-bold text-xl leading-relaxed">
                  "O ballet transforma o corpo em poesia e a disciplina em liberdade."
                </p>
                <p className="text-green-600 font-black mt-5 uppercase tracking-[0.3em] text-xs">Amanda Visan • Presidente</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-4 mb-8">
              <History className="text-green-600" size={28} />
              <span className="text-green-600 font-black uppercase tracking-[0.3em] text-sm">Legado de Arte Social</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 text-gray-900 leading-tight">17 Anos Educando <br/><span className="text-green-600">pela Dança</span></h2>
            
            <div className="space-y-10 text-gray-600 leading-relaxed text-xl text-justify font-light">
              <p>
                O <strong>Instituto Verde Criando Vidas</strong> acredita que o ballet clássico é uma poderosa ferramenta de ascensão social. Desde 2007, transformamos o Engenho da Rainha em um celeiro de talentos artísticos.
              </p>
              <p>
                Sob a direção da bailarina <strong>Amanda Visan</strong>, o projeto Liberdance oferece formação técnica de alto nível, garantindo que a sapatilha de ponta chegue a todos, independentemente da condição social.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8">
                <div className="group">
                  <div className="w-16 h-16 bg-green-50 rounded-3xl flex items-center justify-center mb-5 group-hover:bg-green-600 transition-all shadow-sm">
                    <Target className="text-green-600 group-hover:text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Excelência</h4>
                  <p className="text-sm text-gray-500">Formação técnica rigorosa e gratuita.</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-green-50 rounded-3xl flex items-center justify-center mb-5 group-hover:bg-green-600 transition-all shadow-sm">
                    <Eye className="text-green-600 group-hover:text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Futuro</h4>
                  <p className="text-sm text-gray-500">Vidas transformadas pela arte clássica.</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-green-50 rounded-3xl flex items-center justify-center mb-5 group-hover:bg-green-600 transition-all shadow-sm">
                    <Heart className="text-green-600 group-hover:text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Paixão</h4>
                  <p className="text-sm text-gray-500">Amor incondicional à comunidade e à dança.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
