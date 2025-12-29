
import React from 'react';
import { BookOpen, Music, Users, Shield, Laptop, HeartPulse } from 'lucide-react';

const Activities: React.FC = () => {
  const activities = [
    { title: 'Ballet & Jazz', icon: <Music />, description: 'Dança clássica e moderna para todas as idades, ministrado por Amanda Visan.', color: 'bg-pink-100 text-pink-600' },
    { title: 'Kickboxing', icon: <Shield />, description: 'Esporte que salva vidas, focado em disciplina e defesa pessoal com Jorge Araújo.', color: 'bg-red-100 text-red-600' },
    { title: 'Biblioteca Comunitária', icon: <BookOpen />, description: 'Biblioteca Ana Botafogo, um espaço de leitura e aprendizado em parceria com a Favelivro.', color: 'bg-blue-100 text-blue-600' },
    { title: 'Teatro e Audiovisual', icon: <Users />, description: 'Transforme seus sonhos em artes através da atuação e produção visual.', color: 'bg-purple-100 text-purple-600' },
    { title: 'Cursos Profissionais', icon: <Laptop />, description: 'Informática e Cuidador de Idosos para preparar a comunidade para o mercado.', color: 'bg-green-100 text-green-600' },
    { title: 'Ginástica Rítmica', icon: <HeartPulse />, description: 'Desenvolvimento físico e artístico coordenado pela professora Ortencia.', color: 'bg-orange-100 text-orange-600' },
  ];

  return (
    <section id="atividades" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Nossos Programas</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">Atividades que Transformam</h2>
          <p className="text-gray-600">Oferecemos uma ampla gama de atividades culturais e esportivas gratuitas, visando o desenvolvimento integral do indivíduo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${act.color}`}>
                {React.cloneElement(act.icon as React.ReactElement, { size: 30 })}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{act.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {act.description}
              </p>
              <a href="#contato" className="inline-flex items-center mt-6 text-green-600 font-bold text-sm hover:underline">
                Saber Mais <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
