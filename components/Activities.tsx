
import React from 'react';
import { 
  Music, Shield, BookOpen, Tv, GraduationCap, 
  HeartPulse, Sparkles, BookText, Laptop, Stethoscope
} from 'lucide-react';

const Activities: React.FC = () => {
  const activities = [
    { 
      title: 'Ballet & Jazz', 
      instructor: 'Amanda Visan',
      icon: <Music />, 
      description: 'Aulas de ballet clássico, jazz e contemporâneo focadas em técnica e expressão artística.', 
      color: 'bg-pink-50 text-pink-600' 
    },
    { 
      title: 'Kickboxing', 
      instructor: 'Jorge Araújo',
      icon: <Shield />, 
      description: 'Onde o esporte salva vidas! Foco em disciplina, autodefesa e condicionamento físico.', 
      color: 'bg-red-50 text-red-600' 
    },
    { 
      title: 'Biblioteca Ana Botafogo', 
      instructor: 'Apoio Favelivro',
      icon: <BookOpen />, 
      description: 'Espaço comunitário de leitura inaugurado em 2022 para fomentar o saber e a educação.', 
      color: 'bg-blue-50 text-blue-600' 
    },
    { 
      title: 'Teatro e Áudio Visual', 
      instructor: 'Michele Santos & Thiago Pedroso',
      icon: <Tv />, 
      description: 'Transforme seus sonhos em artes através da atuação e técnicas de audiovisual.', 
      color: 'bg-purple-50 text-purple-600' 
    },
    { 
      title: 'Informática', 
      instructor: 'Polo Educacional',
      icon: <Laptop />, 
      description: 'Capacitação digital essencial para o mercado de trabalho moderno.', 
      color: 'bg-green-50 text-green-600' 
    },
    { 
      title: 'Cuidador de Idosos', 
      instructor: 'Curso Profissionalizante',
      icon: <Stethoscope />, 
      description: 'Formação técnica humana para uma das profissões que mais crescem no país.', 
      color: 'bg-emerald-50 text-emerald-600' 
    },
    { 
      title: 'Ginástica Rítmica', 
      instructor: 'Ortencia',
      icon: <HeartPulse />, 
      description: 'Desenvolvimento de coordenação, flexibilidade e elegância esportiva.', 
      color: 'bg-orange-50 text-orange-600' 
    },
    { 
      title: 'Contemporâneo', 
      instructor: 'Amanda Visan',
      icon: <Sparkles />, 
      description: 'Dança moderna que permite a exploração livre de movimentos e sentimentos.', 
      color: 'bg-indigo-50 text-indigo-600' 
    },
    { 
      title: 'Psicologia Social', 
      instructor: 'Atendimento Gratuito',
      icon: <BookText />, 
      description: 'Suporte emocional essencial para alunos e familiares da nossa comunidade.', 
      color: 'bg-teal-50 text-teal-600' 
    },
  ];

  return (
    <section id="atividades" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block p-2 px-4 bg-green-100 rounded-full mb-4 text-green-700 font-bold text-xs uppercase tracking-widest">
            Portfolio de Atividades
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Educação, Arte e <span className="text-green-600">Oportunidades</span></h2>
          <p className="text-gray-600 text-lg">
            Oferecemos projetos gratuitos de alta qualidade que abrangem desde as artes cênicas até a qualificação técnica profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-green-100 group flex flex-col h-full">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform ${act.color}`}>
                {React.cloneElement(act.icon as React.ReactElement, { size: 32 })}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-green-600 transition-colors">{act.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-0.5 bg-green-500"></span>
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">
                    {act.instructor}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {act.description}
                </p>
              </div>
              <a 
                href={`https://wa.me/5521983836614?text=Olá! Desejo mais informações sobre a atividade: ${act.title}`} 
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
