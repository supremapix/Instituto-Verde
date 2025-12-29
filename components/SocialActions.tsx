
import React from 'react';
import { HeartHandshake, Salad, Package, UserCheck, Utensils } from 'lucide-react';

const SocialActions: React.FC = () => {
  const actions = [
    { title: "Quentinhas Solidárias", desc: "Distribuição regular de refeições para moradores em vulnerabilidade.", icon: <Utensils className="text-green-600" /> },
    { title: "Higiene e Dignidade", desc: "Distribuição de absorventes e itens de higiene básica.", icon: <Package className="text-green-600" /> },
    { title: "Cesta Verde", desc: "Distribuição de frutas, legumes, verduras e ovos frescos.", icon: <Salad className="text-green-600" /> },
    { title: "Apoio Psicológico", desc: "Suporte mental gratuito para toda a comunidade do entorno.", icon: <UserCheck className="text-green-600" /> },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Emula uma imagem profissional caso a original quebre
    e.currentTarget.src = 'https://placehold.co/800x600/059669/ffffff?text=Instituto+Verde+Acao+Social';
  };

  return (
    <section id="acoes-sociais" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full font-bold uppercase tracking-widest text-xs mb-6">
              Impacto Social Real
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">Onde a Arte se encontra com o <span className="text-green-600">Cuidado.</span></h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed text-justify">
              O Instituto atua muito além das sapatilhas. Garantimos a segurança alimentar e a dignidade básica das famílias do Engenho da Rainha. Frutas, legumes, ovos e itens de higiene são distribuídos com amor e respeito.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {actions.map((action, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-600 transition-all duration-300">
                    {React.cloneElement(action.icon as React.ReactElement, { className: 'group-hover:text-white transition-colors duration-300' })}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">{action.title}</h4>
                    <p className="text-sm text-gray-500 leading-snug">{action.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80" 
                  className="rounded-[40px] shadow-2xl w-full h-80 object-cover border-8 border-white" 
                  alt="Ação Social 1" 
                  onError={handleImageError}
                />
                <div className="p-8 bg-green-600 rounded-[40px] text-white shadow-xl">
                  <p className="text-3xl font-bold mb-2">+100</p>
                  <p className="text-sm opacity-80 uppercase tracking-widest">Famílias Atendidas Mensalmente</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="p-8 bg-gray-900 rounded-[40px] text-white shadow-xl">
                  <HeartHandshake className="text-green-500 mb-4" size={40} />
                  <p className="text-lg font-bold leading-tight">Sua doação transforma vidas.</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80" 
                  className="rounded-[40px] shadow-2xl w-full h-80 object-cover border-8 border-white" 
                  alt="Ação Social 2" 
                  onError={handleImageError}
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
