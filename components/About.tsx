
import React from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full -z-10"></div>
            <img 
              src="https://picsum.photos/id/1/800/600" 
              alt="Presidente Amanda Visan" 
              className="rounded-2xl shadow-2xl relative z-10 w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 p-8 rounded-2xl text-white shadow-xl z-20 hidden md:block">
              <p className="text-3xl font-bold">17+</p>
              <p className="text-sm">Anos de Impacto Social</p>
            </div>
          </div>

          <div>
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Nossa História</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">Transformação Através da Arte e Superação</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Idealizado em 2007 por André Reboredo e hoje sob a presidência de <strong>Amanda Visan</strong>, o Instituto Verde (Liberdance Cultural) nasceu para levar cultura e esporte a quem mais precisa.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 italic border-l-4 border-green-500 pl-4">
              "A vida é como a dança... Aos poucos vamos acertando os passos." - Amanda Visan, que mesmo diante de desafios pessoais de saúde, nunca desistiu da missão de levar a arte gratuitamente para a comunidade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-gray-50 border-t-4 border-green-500">
                <Target className="text-green-600 mb-3" size={24} />
                <h4 className="font-bold mb-1">Missão</h4>
                <p className="text-xs text-gray-500">Levar cultura e esporte para crianças e jovens carentes.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border-t-4 border-green-500">
                <Eye className="text-green-600 mb-3" size={24} />
                <h4 className="font-bold mb-1">Visão</h4>
                <p className="text-xs text-gray-500">Ser referência social em cultura e lazer no Engenho da Rainha.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border-t-4 border-green-500">
                <Heart className="text-green-600 mb-3" size={24} />
                <h4 className="font-bold mb-1">Valores</h4>
                <p className="text-xs text-gray-500">Inclusão, Dedicação, Excelência e Empatia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
