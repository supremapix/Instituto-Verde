
import React from 'react';
import { HeartHandshake, Salad, Package, UserCheck } from 'lucide-react';

const SocialActions: React.FC = () => {
  const actions = [
    { title: "Quentinhas Solidárias", desc: "Distribuição regular de refeições para moradores em vulnerabilidade.", icon: <Package className="text-green-600" /> },
    { title: "Higiene e Saúde", desc: "Entrega de absorventes e itens de higiene pessoal para mulheres da comunidade.", icon: <HeartHandshake className="text-green-600" /> },
    { title: "Cesta Verde", desc: "Distribuição de frutas, legumes, verduras e ovos frescos.", icon: <Salad className="text-green-600" /> },
    { title: "Apoio Psicológico", desc: "Atendimento especializado para famílias e alunos do instituto.", icon: <UserCheck className="text-green-600" /> },
  ];

  // Função para tratar erro de imagem
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://placehold.co/600x400/059669/ffffff?text=Instituto+Verde';
  };

  return (
    <section id="acoes-sociais" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500 bg-gray-100" 
                  alt="Doação de Alimentos" 
                  onError={handleImageError}
                />
                <img 
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80" 
                  className="rounded-3xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-500 bg-gray-100" 
                  alt="Ação Solidária" 
                  onError={handleImageError}
                />
              </div>
              <div className="space-y-6 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80" 
                  className="rounded-3xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-500 bg-gray-100" 
                  alt="Impacto Social" 
                  onError={handleImageError}
                />
                <img 
                  src="https://images.unsplash.com/photo-1591336139169-e3d67ca3f297?auto=format&fit=crop&q=80" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500 bg-gray-100" 
                  alt="Distribuição de Cestas" 
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">E muito mais...</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Impacto Social que vai além da <span className="text-green-600">Sala de Aula</span></h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Nosso compromisso com o Engenho da Rainha é integral. Através de parcerias e doações, mantemos projetos de suporte alimentar e de higiene que garantem a dignidade das nossas famílias.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {actions.map((action, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                    {action.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{action.title}</h4>
                    <p className="text-sm text-gray-500">{action.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-green-600 rounded-3xl text-white shadow-xl flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div>
                <p className="text-xl font-bold">Quer contribuir com nossas ações?</p>
                <p className="text-green-100 text-sm">Sua doação transforma vidas!</p>
              </div>
              <a href="#contato" className="px-8 py-3 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-colors whitespace-nowrap">
                Quero Doar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialActions;
