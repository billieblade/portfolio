import React from 'react';
import { TowerControl as GameController2, BarChart3, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GameController2 className="h-8 w-8 text-blue-600" />,
      title: "Desenvolvimento de jogos imersivos",
      description: "Com foco em impacto educacional e narrativas envolventes"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Gestão de tráfego e campanhas",
      description: "Resultado.Global e campanhas políticas com base em dados"
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Estratégias data-driven",
      description: "Participação em eventos sobre gamificação e análise de dados"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-600" />,
      title: "Inovação e criatividade",
      description: "Tecnologia como ferramenta para resolver problemas reais"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Sobre Minha Trajetória
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Minha trajetória única combina desenvolvimento de jogos, análise de dados e marketing digital, 
              criando soluções que transformam informações em experiências memoráveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-2xl hover:shadow-lg transition-shadow border border-gray-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-xl shadow-sm">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white border border-gray-600">
            <h3 className="text-2xl font-bold mb-4">Minha Filosofia</h3>
            <p className="text-lg leading-relaxed">
              Acredito que tecnologia e criatividade são ferramentas poderosas para resolver problemas reais. 
              Seja elevando o padrão de jogos educativos ou otimizando resultados de marketing com dados, 
              meu foco está sempre em criar impacto positivo e duradouro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;