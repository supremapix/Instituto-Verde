
import React from 'react';
import { HeartHandshake, Salad, Utensils, Package, UserCheck, Accessibility } from 'lucide-react';

const SocialActions: React.FC = () => {
  const actions = [
    { title: "Quentinhas Diárias", desc: "Distribuição de refeições preparadas com carinho para quem mais precisa.", icon: <Utensils className="text-green-600" /> },
    { title: "Frutas e Legumes", desc: "Entrega regular de verduras, legumes, frutas e ovos frescos para as famílias.", icon: <Salad className="text-green-600" /> },
    { title: "Higiene Feminina", desc: "Distribuição de absorventes e kits de higiene para mulheres da comunidade.", icon: <Package className="text-green-600" /> },
    { title: "Apoio às Famílias", desc: "Atendimento multidisciplinar e social para os núcleos familiares atendidos.", icon: <UserCheck className="text-green-600" /> },
    { title: "Cesta de Nutrição", desc: "Doações de ovos e itens de primeira necessidade para a segurança alimentar.", icon: <HeartHandshake className="text-green-600" /> },
    { title: "Inclusão Social", desc: "Projetos voltados para pessoas com deficiência e idosos da região.", icon: <Accessibility className="text-green-600" /> },
  ];

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
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500 bg-gray-100" 
                  alt="Ação de Distribuição" 
                  onError={handleImageError}
                />
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80" 
                  className="rounded-3xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-500 bg-gray-100" 
                  alt="Crianças do Instituto" 
                  onError={handleImageError}
                />
              </div>
              <div className="space-y-6 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1531206715517-5ca58b15ed46?auto=format&fit=crop&q=80" 
                  className="rounded-3xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-500 bg-gray-100" 
                  alt="Ação Solidária" 
                  onError={handleImageError}
                />
                <img 
                  src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500 bg-gray-100" 
                  alt="Suporte Comunitário" 
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-block p-1 px-3 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Solidariedade e Nutrição
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Mais que Dança: <span className="text-green-600">Cuidado Integral</span></h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed text-justify">
              O Instituto Verde atua incansavelmente para combater a insegurança alimentar no Engenho da Rainha. Através das nossas ações sociais, garantimos que as necessidades básicas da nossa comunidade sejam atendidas com dignidade e respeito.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {actions.map((action, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    {React.cloneElement(action.icon as React.ReactElement, { className: 'group-hover:text-white transition-colors' })}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">{action.title}</h4>
                    <p className="text-sm text-gray-500 leading-snug">{action.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-green-600 rounded-3xl text-white shadow-xl flex flex-col sm:flex-row items-center gap-6 justify-between group hover:shadow-2xl transition-all duration-300">
              <div className="text-center sm:text-left">
                <p className="text-xl font-bold mb-1">Quer ser um parceiro social?</p>
                <p className="text-green-100 text-sm opacity-80">Doe alimentos, absorventes ou seu tempo.</p>
              </div>
              <a href="#contato" className="px-8 py-3 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-all transform hover:scale-105 shadow-md">
                Quero Contribuir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialActions;
