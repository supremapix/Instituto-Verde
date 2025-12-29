
import React from 'react';
import { Target, Eye, Heart, History } from 'lucide-react';

const About: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://placehold.co/800x1200/059669/ffffff?text=Instituto+Verde';
  };

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-green-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-green-50 rounded-full opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative group">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-green-600 rounded-3xl -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80" 
              alt="Dança e Expressão" 
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px] lg:h-[600px] bg-gray-50"
              onError={handleImageError}
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-2xl shadow-xl border-l-8 border-green-600">
              <p className="text-gray-700 italic font-medium">
                "A vida é como a dança... Aos poucos vamos acertando os passos."
              </p>
              <p className="text-green-600 font-bold mt-2">— Amanda Visan</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 mb-4">
              <History className="text-green-600" size={20} />
              <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Nossa Trajetória</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">Uma história de amor à <span className="text-green-600">Arte e Superação</span></h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                O <strong>Instituto Verde Criando Vidas</strong> foi idealizado em 2007 por André Reboredo. Em 2014, floresceu o Projeto Social Liberdance, no Engenho da Rainha, focando na democratização do acesso à cultura e ao esporte.
              </p>
              <p>
                Hoje, sob a presidência de <strong>Amanda Visan</strong> — dançarina e atriz desde 1996 — o instituto é um farol de esperança. Amanda, que já foi capa da revista Infock Dance e lecionou em palcos prestigiados como a Lona Cultural Gilberto Gil, trouxe sua força vital para a instituição.
              </p>
              <p className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 font-medium">
                Mesmo enfrentando um descolamento de retina que a deixou cega de um olho, Amanda transformou seu desafio em superação, garantindo que crianças e adolescentes da nossa comunidade tivessem acesso gratuito ao que antes parecia inalcançável.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-green-200 transition-all">
                <Target className="text-green-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Missão</h4>
                <p className="text-sm text-gray-500">Levar cultura e esporte a crianças, jovens e adultos carentes.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-green-200 transition-all">
                <Eye className="text-green-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Visão</h4>
                <p className="text-sm text-gray-500">Ser a principal referência social em educação e lazer na região.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-green-200 transition-all">
                <Heart className="text-green-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Valores</h4>
                <p className="text-sm text-gray-500">Dedicação, inclusão, disciplina, empatia, excelência e integridade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
