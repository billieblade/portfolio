import React from 'react';
import { ArrowRight, Play, MapPin, Mail, Phone, Linkedin, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transformo dados em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                narrativas que engajam
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Como desenvolvedor de jogos e especialista em marketing digital, combino minha expertise em análise de dados 
              com 20+ anos de experiência em storytelling para criar jogos educativos premiados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Vamos conversar
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={scrollToPortfolio}
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Ver meus jogos
              <Play className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Campo Grande, MS</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:felopes@gmail.com" className="hover:text-blue-400 transition-colors">
                felopes@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <a href="tel:+5567992627655" className="hover:text-blue-400 transition-colors">
                +55 67 99262-7655
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <a 
                href="https://wa.me/5567992627655" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-400 transition-colors"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-5 w-5" />
              <a 
                href="https://linkedin.com/in/felipe-augusto-lopes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-gray-300">Anos de experiência</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">Top 3</div>
              <div className="text-gray-300">Gamescom Latam 2024</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">2+</div>
              <div className="text-gray-300">Jogos premiados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;