import React from 'react';
import { Trophy, Award, Star, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: "Gamescom Latam 2024",
      subtitle: "Top 4/100 Voto Popular",
      description: "Bilhetes e Boatos - Melhor jogo do Big Festival",
      color: "yellow"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: "SBGames 2024",
      subtitle: "Festival de Jogos",
      description: "Bilhetes e Boatos selecionado para o festival",
      color: "blue"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Gamescom Latam 2025",
      subtitle: "Palestrante Painel Jogos Nacionais",
      description: "Guardião do Futuro e desenvolvimento nacional",
      color: "purple"
    },
    {
      icon: <Star className="h-8 w-8 text-orange-500" />,
      title: "RD Summit 2022",
      subtitle: "Florianópolis",
      description: "Empreendedorismo, marketing, inovação e customer experience",
      color: "orange"
    }
  ];

  const moreAchievements = [
    {
      icon: <Star className="h-8 w-8 text-green-500" />,
      title: "Miami Ad School",
      subtitle: "Human Data Strategy",
      description: "Certificação em análise de dados e estratégias digitais",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: "from-yellow-400 to-orange-500",
      blue: "from-blue-400 to-blue-600",
      purple: "from-purple-400 to-purple-600",
      green: "from-green-400 to-green-600",
      orange: "from-orange-400 to-red-500"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Reconhecimentos
            </h2>
            <p className="text-xl text-gray-300">
              Conquistas que refletem o impacto do meu trabalho na indústria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-700">
                <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(achievement.color)} rounded-2xl flex items-center justify-center mb-4`}>
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-blue-400 font-semibold mb-2">
                  {achievement.subtitle}
                </p>
                <p className="text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreAchievements.map((achievement, index) => (
              <div key={index} className="bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-gray-600">
                <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(achievement.color)} rounded-xl flex items-center justify-center mb-3`}>
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {achievement.title}
                </h4>
                <p className="text-blue-400 font-medium mb-1 text-sm">
                  {achievement.subtitle}
                </p>
                <p className="text-gray-300 text-xs">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Formação Acadêmica
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Tecnólogo em Análise e Desenvolvimento de Sistemas
                </h4>
                <p className="text-gray-300 text-sm">Universidade de Franca</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Pós-Graduação em Game Design
                </h4>
                <p className="text-gray-300 text-sm">Unialphaville (Cursando)</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Certificação Human Data Strategy
                </h4>
                <p className="text-gray-300 text-sm">Miami Ad School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;