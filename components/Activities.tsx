
import React from 'react';
import { 
  Music, Shield, BookOpen, Users, Laptop, HeartPulse, 
  Tv, GraduationCap, Users2 
} from 'lucide-react';

const Activities: React.FC = () => {
  const activities = [
    { 
      title: 'Ballet, Jazz e Contemporâneo', 
      instructor: 'Amanda Visan',
      icon: <Music />, 
      description: 'Dança clássica e moderna com foco em expressão corporal e técnica apurada.', 
      color: 'bg-pink-100 text-pink-600' 
    },
    { 
      title: 'Kickboxing', 
      instructor: 'Jorge Araújo',
      icon: <Shield />, 
      description: '"Esporte Salva Vidas!" Disciplina e superação física para todas as idades.', 
      color: 'bg-red-100 text-red-600' 
    },
    { 
      title: 'Biblioteca Ana Botafogo', 
      instructor: 'Parceria Favelivro',
      icon: <BookOpen />, 
      description: 'Inaugurada em 2022, um espaço rico em literatura e conhecimento para a comunidade.', 
      color: 'bg-blue-100 text-blue-600' 
    },
    { 
      title: 'Teatro e Áudio Visual', 
      instructor: 'Michele Santos & Thiago Pedroso',
      icon: <Tv />, 
      description: 'Transforme seus sonhos em artes através da atuação e produção cinematográfica.', 
      color: 'bg-purple-100 text-purple-600' 
    },
    { 
      title: 'Cursos Profissionalizantes', 
      instructor: 'Equipe Especializada',
      icon: <GraduationCap />, 
      description: 'Formação para Cuidador de Idosos e Informática, preparando para o mercado de trabalho.', 
      color: 'bg-green-100 text-green-600' 
    },
    { 
      title: 'Ginástica Rítmica', 
      instructor: 'Ortencia',
      icon: <HeartPulse />, 
      description: 'Desenvolvimento de agilidade, flexibilidade e coordenação artística.', 
      color: 'bg-orange-100 text-orange-600' 
    },
  ];

  return (
    <section id="atividades" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block p-3 bg-white rounded-2xl shadow-sm mb-6">
            <Users2 className="text-green-600" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transforme seus <span className="text-green-600">Sonhos em Artes</span></h2>
          <p className="text-gray-600 text-lg">
            Oferecemos projetos gratuitos de alta qualidade, ministrados por profissionais apaixonados pela transformação social.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-green-100 group flex flex-col h-full">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${act.color}`}>
                {React.cloneElement(act.icon as React.ReactElement, { size: 32 })}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{act.title}</h3>
                <p className="text-green-600 font-bold text-sm uppercase tracking-wider mb-4">
                  Instrutor(a): {act.instructor}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {act.description}
                </p>
              </div>
              <a 
                href={`https://wa.me/5521983836614?text=Olá! Gostaria de mais informações sobre ${act.title}`} 
                target="_blank" 
                className="inline-flex items-center text-green-600 font-bold hover:gap-3 transition-all"
              >
                Matricule-se Agora <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
