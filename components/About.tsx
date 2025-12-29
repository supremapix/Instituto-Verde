
import React from 'react';
import { Target, Eye, Heart, History, Star, Award } from 'lucide-react';

const About: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://placehold.co/800x1200/059669/ffffff?text=Bailarina+Instituto+Verde';
  };

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative group">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-green-600 rounded-3xl -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1506450983270-d729442ad754?auto=format&fit=crop&q=80" 
              alt="Bailarina Instituto Verde" 
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px] lg:h-[700px] bg-gray-50 transform group-hover:scale-[1.02] transition-transform duration-700"
              onError={handleImageError}
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-l-8 border-green-600 transform hover:-translate-y-2 transition-transform duration-300">
              <p className="text-gray-800 italic font-medium text-lg leading-relaxed">
                "A vida é como a dança... Aos poucos vamos acertando os passos."
              </p>
              <p className="text-green-600 font-bold mt-3 uppercase tracking-widest text-sm">— Amanda Visan, Presidenta</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 mb-4">
              <History className="text-green-600" size={20} />
              <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Nossa Trajetória</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">Onde cada passo <br/><span className="text-green-600">Transforma Vidas</span></h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-justify">
              <p>
                Idealizado em 2007 por <strong>André Reboredo</strong>, o Instituto Verde Criando Vidas consolidou-se em 2014 com o Projeto Social Liberdance. Sob a liderança da renomada professora <strong>Amanda Visan</strong>, renovamos nossa missão de democratizar o ballet e a cultura.
              </p>
              <p>
                Amanda Visan, bailarina e atriz desde 1996, carrega uma história de resiliência sem igual. Superando um descolamento de retina, ela fez da dança seu refúgio e sua arma para combater a desigualdade, garantindo que o palco seja acessível a todos.
              </p>
              <div className="bg-green-50 p-8 rounded-3xl border-l-4 border-green-500 shadow-sm">
                <div className="flex items-center gap-3 mb-4 text-green-700">
                  <Award size={28} />
                  <span className="font-bold uppercase text-sm tracking-widest">Reconhecimento Nacional</span>
                </div>
                <p className="text-base font-medium text-gray-700">
                  Capa da revista <strong>Infock Dance</strong>, Amanda trouxe sua excelência de palcos como a Lona Cultural Gilberto Gil diretamente para o coração do Engenho da Rainha.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-8 rounded-3xl bg-white shadow-xl border border-gray-100 hover:border-green-200 transition-all hover:shadow-2xl">
                <Target className="text-green-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Missão</h4>
                <p className="text-sm text-gray-500">Transformar através da cultura e esporte gratuito.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white shadow-xl border border-gray-100 hover:border-green-200 transition-all hover:shadow-2xl">
                <Eye className="text-green-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Visão</h4>
                <p className="text-sm text-gray-500">Referência em inclusão social pela arte no Rio.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white shadow-xl border border-gray-100 hover:border-green-200 transition-all hover:shadow-2xl">
                <Heart className="text-green-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Valores</h4>
                <p className="text-sm text-gray-500">Dedicação, disciplina, empatia e integridade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
