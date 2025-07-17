import React from 'react';
import { ExternalLink, Trophy, Calendar, Users } from 'lucide-react';

const Portfolio = () => {
  const games = [
    {
      title: "Bilhetes e Boatos",
      description: "Jogo educativo que conquistou o Top 3 em popularidade na Gamescom Latam 2024, indicado também para Big Impact. Uma narrativa envolvente sobre comunicação e desinformação.",
      image: "/src/assets/Nzko4S.png",
      link: "https://softg4mes.itch.io/bilhetes-e-boatos",
      awards: ["Top 3 Gamescom Latam 2024", "Indicado Big Impact"],
      year: "2024",
      tech: ["Ren'Py", "Python", "Storytelling"]
    },
    {
      title: "Guardião do Futuro",
      description: "Jogo convidado para painel sobre jogos nacionais na Gamescom Latam 2025. Explora temas ambientais e sustentabilidade através de uma narrativa interativa.",
      image: "/src/assets/Jqf+Yt.png",
      link: "https://softg4mes.itch.io/guardiao-do-futuro",
      awards: ["Painel Jogos Nacionais - Gamescom Latam 2025"],
      year: "2025",
      tech: ["Ren'Py", "Python", "Game Design"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Meus Jogos Premiados
            </h2>
            <p className="text-xl text-gray-300">
              Desenvolvimentos que combinam narrativa, educação e impacto social
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <div key={index} className="bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-600">
                <div className="relative">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-300 border border-gray-600">
                    {game.year}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {game.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {game.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {game.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      Conquistas
                    </h4>
                    <ul className="space-y-1">
                      {game.awards.map((award, awardIndex) => (
                        <li key={awardIndex} className="text-sm text-gray-300 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors"
                  >
                    Jogar agora
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Interessado em colaborar?</h3>
            <p className="text-lg mb-6">
              Estou sempre aberto a novos projetos e parcerias que combinem tecnologia, narrativa e impacto social.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-800 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors border border-gray-600"
            >
              Vamos conversar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;