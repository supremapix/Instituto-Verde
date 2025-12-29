
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
      description: 'Do clássico ao jazz, transformando passos em sonhos e disciplina em arte.', 
      color: 'bg-pink-50 text-pink-600' 
    },
    { 
      title: 'Kickboxing', 
      instructor: 'Jorge Araújo',
      icon: <Shield />, 
      description: 'Esporte que salva vidas! Foco em disciplina e condicionamento físico.', 
      color: 'bg-red-50 text-red-600' 
    },
    { 
      title: 'Biblioteca Ana Botafogo', 
      instructor: 'Apoio Favelivro',
      icon: <BookOpen />, 
      description: 'Inaugurada em 2022, um polo de saber e leitura para a comunidade.', 
      color: 'bg-blue-50 text-blue-600' 
    },
    { 
      title: 'Teatro e Áudio Visual', 
      instructor: 'Michele Santos & Thiago Pedroso',
      icon: <Tv />, 
      description: 'Expressão dramática e técnicas de vídeo para jovens talentos.', 
      color: 'bg-purple-50 text-purple-600' 
    },
    { 
      title: 'Cuidador de Idosos', 
      instructor: 'Curso Profissionalizante',
      icon: <Stethoscope />, 
      description: 'Capacitação técnica para o mercado de trabalho na área da saúde.', 
      color: 'bg-emerald-50 text-emerald-600' 
    },
    { 
      title: 'Informática', 
      instructor: 'Curso Profissionalizante',
      icon: <Laptop />, 
      description: 'Inclusão digital e ferramentas essenciais para a carreira profissional.', 
      color: 'bg-gray-50 text-gray-600' 
    },
    { 
      title: 'Ginástica Rítmica', 
      instructor: 'Ortencia',
      icon: <HeartPulse />, 
      description: 'Flexibilidade, coordenação e elegância nos movimentos esportivos.', 
      color: 'bg-orange-50 text-orange-600' 
    },
    { 
      title: 'Contemporâneo', 
      instructor: 'Amanda Visan',
      icon: <Sparkles />, 
      description: 'Exploração de movimentos modernos e expressão corporal livre.', 
      color: 'bg-indigo-50 text-indigo-600' 
    },
    { 
      title: 'Psicologia Social', 
      instructor: 'Atendimento Gratuito',
      icon: <BookText />, 
      description: 'Suporte emocional para alunos e familiares da comunidade.', 
      color: 'bg-teal-50 text-teal-600' 
    },
  ];

  return (
    <section id="atividades" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Educação e <span className="text-green-600">Cultura</span></h2>
          <p className="text-gray-600 text-lg">
            Nossos cursos são totalmente gratuitos, pensados para o desenvolvimento integral do cidadão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${act.color}`}>
                {React.cloneElement(act.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{act.title}</h3>
              <p className="text-green-600 font-bold text-xs uppercase tracking-widest mb-4">
                Prof(a): {act.instructor}
              </p>
              <p className="text-gray-600 mb-6">{act.description}</p>
              <a 
                href={`https://wa.me/5521983836614?text=Olá! Quero informações sobre: ${act.title}`} 
                target="_blank" 
                className="text-green-600 font-bold hover:underline"
              >
                Saiba Mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
