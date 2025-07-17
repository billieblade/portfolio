import React, { useState, useEffect } from 'react';
import { Menu, X, TowerControl as GameController2, BarChart3, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/src/assets/232262865_110846054593629_874523380130011547_n.jpg" 
              alt="Felipe Augusto Carvalho Lopes" 
              className="h-8 w-8 rounded-full object-cover border-2 border-blue-600"
            />
            <span className="text-xl font-bold text-white">Felipe Augusto Carvalho Lopes</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Experiência
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors text-center"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;