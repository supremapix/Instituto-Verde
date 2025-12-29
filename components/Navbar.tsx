
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#atividades' },
    { label: 'Social', href: '#acoes-sociais' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[60] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:rotate-12 transition-transform">
              IV
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Instituto Verde
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-green-600' : 'text-green-400'}`}>
                Criando Vidas
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-10">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-green-500 relative group ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a 
              href="#contato" 
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                isScrolled 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-white text-green-700 hover:bg-green-50'
              }`}
            >
              Matricule-se
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/10 text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[70] transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Drawer Menu */}
      <div className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white z-[80] shadow-2xl transition-transform duration-500 transform lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <span className="font-bold text-green-600">MENU</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-400"><X size={32}/></button>
          </div>
          
          <div className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-auto">
            <a 
              href="#contato" 
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center shadow-lg hover:bg-green-700 transition-all"
            >
              Seja Voluntário
            </a>
            <p className="text-center text-gray-400 text-xs mt-6">
              © {new Date().getFullYear()} Instituto Verde
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
