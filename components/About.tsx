
import React from 'react';
import { Target, Eye, Heart, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2 relative group w-full px-4 md:px-0">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80" 
                alt="Bailarina profissional Instituto Verde" 
                className="rounded-[30px] md:rounded-[50px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] w-full object-cover h-[450px] md:h-[600px] lg:h-[800px] bg-gray-50 transform hover:scale-[1.02] transition-all duration-1000"
              />
              <div className="absolute -bottom-6 -right-2 md:-right-8 bg-white p-6 md:p-10 rounded-[25px] md:rounded-[40px] shadow-2xl border-l-[6px] md:border-l-[10px] border-green-600 max-w-[280px] md:max-w-sm">
                <p className="text-gray-900 italic font-bold text-base md:text-xl leading-relaxed">
                  "O ballet transforma o corpo em poesia e a disciplina em liberdade."
                </p>
                <p className="text-green-600 font-black mt-3 md:mt-5 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs">Amanda Visan • Presidente</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="inline-flex items-center gap-4 mb-6 md:mb-8">
              <History className="text-green-600" size={24} />
              <span className="text-green-600 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm">Legado de Arte Social</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-8 md:mb-10 text-gray-900 leading-tight">17 Anos Educando <br/><span className="text-green-600 text-3xl md:text-7xl">pela Dança</span></h2>
            
            <div className="space-y-6 md:space-y-10 text-gray-600 leading-relaxed text-base md:text-xl text-justify font-light">
              <p>
                O <strong>Instituto Verde Criando Vidas</strong> acredita que o ballet clássico é uma poderosa ferramenta de ascensão social. Desde 2007, transformamos o Engenho da Rainha em um celeiro de talentos artísticos.
              </p>
              <p>
                Sob a direção da bailarina <strong>Amanda Visan</strong>, o projeto Liberdance oferece formação técnica de alto nível, garantindo que a sapatilha de ponta chegue a todos, independentemente da condição social.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 pt-6 md:pt-8">
                <div className="group text-center sm:text-left">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-green-50 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-5 mx-auto sm:mx-0 group-hover:bg-green-600 transition-all shadow-sm">
                    <Target className="text-green-600 group-hover:text-white" size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Excelência</h4>
                  <p className="text-xs md:text-sm text-gray-500">Formação técnica rigorosa e gratuita.</p>
                </div>
                <div className="group text-center sm:text-left">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-green-50 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-5 mx-auto sm:mx-0 group-hover:bg-green-600 transition-all shadow-sm">
                    <Eye className="text-green-600 group-hover:text-white" size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Futuro</h4>
                  <p className="text-xs md:text-sm text-gray-500">Vidas transformadas pela arte clássica.</p>
                </div>
                <div className="group text-center sm:text-left">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-green-50 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-5 mx-auto sm:mx-0 group-hover:bg-green-600 transition-all shadow-sm">
                    <Heart className="text-green-600 group-hover:text-white" size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Paixão</h4>
                  <p className="text-xs md:text-sm text-gray-500">Amor incondicional à comunidade.</p>
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
