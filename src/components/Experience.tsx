import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Soft Shell Games",
      role: "Team Lead - Desenvolvedor",
      period: "2023 - Presente",
      location: "Campo Grande, MS",
      achievements: [
        "Direção e Desenvolvimento de Bilhetes e Boatos (Top 3 em Popularidade na Gamescom Latam 2024)",
        "Desenvolvimento de Guardião do Futuro (selecionado para a Gamescom Latam 2025)",
        "Desenvolvimento na Engine Ren'Py com foco em Python",
        "Participação em painel sobre jogos nacionais"
      ],
      color: "blue"
    },
    {
      company: "Resultado.Global",
      role: "Gestor de Tráfego Online",
      period: "Agosto 2021 - Janeiro 2023",
      location: "Campo Grande, MS",
      achievements: [
        "Gestão de campanhas para grandes varejistas e e-commerce com foco em ROI",
        "Otimização de campanhas Google/Meta Ads para produtos digitais",
        "Apresentação estratégica de resultados para clientes de grande porte",
        "Aplicação de Human Data Strategy para insights acionáveis em campanhas"
      ],
      color: "purple"
    },
    {
      company: "Agência Ramal",
      role: "Estrategista Digital",
      period: "2019 - 2021",
      location: "Campo Grande, MS",
      achievements: [
        "Desenvolvimento de estratégias digitais para grandes varejistas",
        "Campanhas integradas para produtos digitais e e-commerce",
        "Análise de performance e otimização de funis de conversão",
        "Gestão de múltiplos canais digitais para maximizar resultados"
      ],
      color: "green"
    },
    {
      company: "Suporte Ogro",
      role: "Desenvolvedor Web",
      period: "2012 - Presente",
      location: "Campo Grande, MS",
      achievements: [
        "Criação de landing pages e sites institucionais com foco em UX",
        "Desenvolvimento de soluções web para campanhas de marketing digital",
        "Implementação de estratégias de gamificação"
      ],
      color: "orange"
    },
    {
      company: "Campanhas Políticas",
      role: "Estrategista Digital",
      period: "2020 - 2022",
      location: "Campo Grande, MS",
      achievements: [
        "Coordenação de campanhas digitais para candidatos de grande expressão",
        "Gestão de estratégias digitais para Junior Mochi, Waldemir Moka, Luli Sarraf",
        "Análise de performance e otimização de campanhas políticas",
        "Desenvolvimento de estratégias de engajamento e mobilização digital"
      ],
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500 border-blue-200",
      purple: "bg-purple-500 border-purple-200",
      green: "bg-green-500 border-green-200",
      orange: "bg-orange-500 border-orange-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experiência Profissional
            </h2>
            <p className="text-xl text-gray-300">
              Uma trajetória diversificada que combina desenvolvimento, análise de dados e estratégia digital
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                <div className="flex items-start gap-6">
                  <div className={`w-4 h-4 rounded-full ${getColorClasses(exp.color)} mt-2 flex-shrink-0`}></div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-xl text-gray-300 font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-gray-300">
                          <div className={`w-2 h-2 rounded-full ${getColorClasses(exp.color)} mt-2 flex-shrink-0`}></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;