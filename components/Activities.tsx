
import React from 'react';
import { 
  Music, Shield, Tv, GraduationCap, 
  HeartPulse, Sparkles, Laptop, Stethoscope
} from 'lucide-react';

const Activities: React.FC = () => {
  const activities = [
    { 
      title: 'Ballet Clássico', 
      instructor: 'Amanda Visan',
      icon: <Music />, 
      description: 'Do iniciante ao avançado, oferecemos a técnica russa Vaganova com foco em performance e postura.', 
      color: 'bg-pink-50 text-pink-600 border-pink-100' 
    },
    { 
      title: 'Jazz & Expressão', 
      instructor: 'Liberdance Team',
      icon: <Sparkles />, 
      description: 'Ritmo, energia e expressão corporal para desenvolver a versatilidade de nossas bailarinas.', 
      color: 'bg-purple-50 text-purple-600 border-purple-100' 
    },
    { 
      title: 'Dança Contemporânea', 
      instructor: 'Movimento Livre',
      icon: <HeartPulse />, 
      description: 'Exploração de novos movimentos e sentimentos, rompendo barreiras entre o clássico e o moderno.', 
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100' 
    },
    { 
      title: 'Teatro Musical', 
      instructor: 'Artes Cênicas',
      icon: <Tv />, 
      description: 'Formação completa unindo atuação e canto para espetáculos de grande porte.', 
      color: 'bg-orange-50 text-orange-600 border-orange-100' 
    },
    { 
      title: 'Kickboxing Social', 
      instructor: 'Jorge Araújo',
      icon: <Shield />, 
      description: 'Disciplina marcial como ferramenta de autodefesa e respeito para toda a comunidade.', 
      color: 'bg-red-50 text-red-600 border-red-100' 
    },
    { 
      title: 'Formação Técnica', 
      instructor: 'Novos Profissionais',
      icon: <GraduationCap />, 
      description: 'Capacitação teórica e prática para futuras instrutoras de dança e artes corporais.', 
      color: 'bg-blue-50 text-blue-600 border-blue-100' 
    },
  ];

  return (
    <section id="atividades" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">Nosso <span className="text-green-600">Repertório</span> de Atividades</h2>
          <p className="text-gray-500 text-xl font-light">
            Arte, Cultura e Esporte 100% gratuito para transformar o futuro de nossa comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((act, index) => (
            <div key={index} className={`bg-white p-10 rounded-[35px] border shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden ${act.color}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-current opacity-[0.03] -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform ${act.color.split(' ')[0]}`}>
                {React.cloneElement(act.icon as React.ReactElement, { size: 32 })}
              </div>
              
              <h3 className="text-2xl font-black mb-2 text-gray-900">{act.title}</h3>
              <p className="text-green-600 font-bold text-xs uppercase tracking-widest mb-6">
                Foco: {act.instructor}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">{act.description}</p>
              
              <a 
                href={`https://wa.me/5521983836614?text=Olá! Quero me matricular na modalidade: ${act.title}`} 
                target="_blank" 
                className="inline-flex items-center gap-2 font-bold text-gray-900 group-hover:text-green-600 transition-colors"
              >
                Garantir Matrícula <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
