
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Instagram } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    activity: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "5521983836614";
    const text = `Olá! Meu nome é ${formData.name}.
Email: ${formData.email}
Interesse em: ${formData.activity}
Mensagem: ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="md:w-2/5 bg-green-600 p-12 text-white">
            <h3 className="text-3xl font-bold mb-8">Entre em Contato</h3>
            <p className="mb-12 text-green-50 opacity-90 leading-relaxed">
              Fale conosco para matrículas, parcerias ou para conhecer nosso espaço. Estamos prontos para te receber!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase text-green-200">Endereço</p>
                  <p className="text-sm font-medium">Rua Mário Ferreira, 227 - Eng da Rainha - RJ</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase text-green-200">WhatsApp</p>
                  <p className="text-sm font-medium">(21) 98383-6614</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase text-green-200">Email</p>
                  <p className="text-sm font-medium">institutovcvidas25@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-green-500 flex gap-4">
              <a href="https://instagram.com/institutoverdecriandovidas" className="hover:text-green-200 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-3/5 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Seu Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" 
                    placeholder="Como podemos te chamar?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Seu E-mail</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" 
                    placeholder="exemplo@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Assunto/Atividade</label>
                <select 
                  name="activity"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Ballet / Jazz">Ballet / Jazz</option>
                  <option value="Kickboxing">Kickboxing</option>
                  <option value="Biblioteca">Biblioteca</option>
                  <option value="Cursos Profissionais">Cursos Profissionais</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Sua Mensagem</label>
                <textarea 
                  name="message"
                  required
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" 
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2 group"
              >
                Enviar para o WhatsApp
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
