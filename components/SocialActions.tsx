
import React from 'react';
import { HeartHandshake, Salad, Utensils } from 'lucide-react';

const SocialActions: React.FC = () => {
  return (
    <section id="acoes-sociais" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block px-6 py-2 bg-green-50 text-green-700 rounded-full font-black uppercase tracking-widest text-xs mb-10">
              Cuidado que Alimenta o Talento
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 leading-tight italic">Mais que Ballet, <span className="text-green-600">Humanidade.</span></h2>
            <p className="text-gray-600 text-2xl mb-12 leading-relaxed text-justify font-light">
              Nossa missão social se estende para fora dos palcos. Garantimos segurança alimentar e bem-estar para que nossas bailarinas foquem apenas em brilhar sob os refletores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-950 rounded-[25px] flex items-center justify-center text-green-500 shadow-2xl">
                  <Utensils size={40} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl mb-2 italic">Apoio Social</h4>
                  <p className="text-base text-gray-500">Refeições e amparo psicológico para as famílias do projeto.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-950 rounded-[25px] flex items-center justify-center text-green-500 shadow-2xl">
                  <Salad size={40} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl mb-2 italic">Nutrição Consciente</h4>
                  <p className="text-base text-gray-500">Alimentos frescos da nossa horta comunitária.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-12 bg-green-600 rounded-[50px] text-white shadow-[0_30px_60px_rgba(22,163,74,0.4)] relative overflow-hidden group">
               <div className="relative z-10">
                 <HeartHandshake className="mb-8 animate-pulse text-white" size={60} />
                 <p className="text-3xl font-black mb-4 uppercase tracking-tighter">Sua doação cria futuros</p>
                 <p className="text-green-50 text-xl italic opacity-95 leading-relaxed">"Cada sapatilha é um sonho, cada doação é o palco que sustenta esse sonho."</p>
               </div>
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-10">
                <img 
                  src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80" 
                  className="rounded-[50px] shadow-2xl w-full h-[450px] object-cover border-[12px] border-gray-50 transform hover:rotate-3 transition-transform duration-700" 
                  alt="Bailarina clássica em performance" 
                />
                <div className="p-12 bg-gray-950 rounded-[40px] text-white text-center shadow-3xl border border-white/10">
                  <p className="text-6xl font-black mb-3 text-green-500">100%</p>
                  <p className="text-sm opacity-60 uppercase tracking-[0.3em] font-black">Impacto Social</p>
                </div>
              </div>
              <div className="space-y-10 pt-24">
                {/* Imagem que substitui o neon/tênis pela foto do espetáculo em grupo (emulando o anexo) */}
                <img 
                  src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80" 
                  className="rounded-[50px] shadow-2xl w-full h-[550px] object-cover border-[12px] border-gray-50 transform hover:-rotate-3 transition-transform duration-700" 
                  alt="Espetáculo de Ballet Instituto Verde" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialActions;
