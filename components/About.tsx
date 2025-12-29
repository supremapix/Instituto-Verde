
import React from 'react';
import { Target, Eye, Heart, History, Star } from 'lucide-react';

const About: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://placehold.co/800x1200/059669/ffffff?text=Instituto+Verde';
  };

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-green-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-green-50 rounded-full opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative group">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-green-600 rounded-3xl -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80" 
              alt="Amanda Visan - Presidência" 
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px] lg:h-[650px] bg-gray-50"
              onError={handleImageError}
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-2xl shadow-xl border-l-8 border-green-600 transform hover:-translate-y-2 transition-transform">
              <p className="text-gray-700 italic font-medium leading-relaxed">
                "A vida é como a dança... Aos poucos vamos acertando os passos."
              </p>
              <p className="text-green-600 font-bold mt-2 text-sm uppercase tracking-widest">— Amanda Visan, Presidenta</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 mb-4">
              <History className="text-green-600" size={20} />
              <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Desde 2007 transformando o Engenho da Rainha</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">Um Legado de <span className="text-green-600">Cultura e Superação</span></h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-justify">
              <p>
                O <strong>Instituto Verde Criando Vidas</strong> nasceu em 2007 sob a visão de André Reboredo. Em 2014, consolidou-se como o Projeto Social Liberdance, focando no social e cultural da nossa região. Em 2020, o instituto renovou sua direção, assumindo o nome fantasia <strong>"Liberdance Cultural"</strong>.
              </p>
              <p>
                Nossa liderança é exercida por <strong>Amanda Visan</strong>, dançarina e atriz desde 1996. Com vasta experiência em palcos renomados como a Lona Cultural Gilberto Gil e Arena Fernando Torres, Amanda traz uma história de resiliência ímpar.
              </p>
              <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 font-medium">
                <div className="flex items-center gap-2 mb-2 text-green-700">
                  <Star size={18} fill="currentColor" />
                  <span className="font-bold uppercase text-sm tracking-widest">Exemplo de Superação</span>
                </div>
                Mesmo após um descolamento de retina que a deixou cega de um olho, Amanda nunca desistiu da arte. Pelo contrário, transformou seu desafio em motivação para fundar o projeto e levar o ballet, jazz e dança de salão gratuitamente a quem acreditava não ter acesso à cultura.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-green-200 transition-all group">
                <Target className="text-green-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Missão</h4>
                <p className="text-sm text-gray-500">Levar cultura e esporte a crianças, jovens e adultos carentes.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-green-200 transition-all group">
                <Eye className="text-green-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Visão</h4>
                <p className="text-sm text-gray-500">Ser a principal referência social em educação e lazer na comunidade.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-green-200 transition-all group">
                <Heart className="text-green-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Valores</h4>
                <p className="text-sm text-gray-500">Dedicação, inclusão, disciplina, empatia e integridade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
