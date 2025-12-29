
import React from 'react';

const SocialActions: React.FC = () => {
  return (
    <section id="acoes-sociais" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Mais que Dança</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">Ações Sociais e Apoio à Comunidade</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nosso compromisso vai além das salas de aula. Atuamos ativamente no combate à insegurança alimentar e no suporte às famílias do Engenho da Rainha.
            </p>
            <ul className="space-y-4">
              {[
                "Distribuição de cestas de frutas e legumes frescos.",
                "Entrega de quentinhas para moradores em situação de vulnerabilidade.",
                "Distribuição de itens de higiene e absorventes.",
                "Atendimento psicológico gratuito para famílias atendidas."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/id/12/400/400" className="rounded-2xl shadow-lg transform translate-y-8" alt="Ação social 1" />
            <img src="https://picsum.photos/id/42/400/400" className="rounded-2xl shadow-lg" alt="Ação social 2" />
            <img src="https://picsum.photos/id/111/400/400" className="rounded-2xl shadow-lg transform translate-y-8" alt="Ação social 3" />
            <img src="https://picsum.photos/id/102/400/400" className="rounded-2xl shadow-lg" alt="Ação social 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialActions;
