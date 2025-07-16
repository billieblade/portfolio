import React from 'react';
import { BarChart3, Monitor, Gamepad2, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Marketing Digital",
      skills: ["Meta Ads", "Google Analytics", "RD Station", "Human Data Strategy"],
      color: "blue"
    },
    {
      icon: <Monitor className="h-8 w-8 text-purple-600" />,
      title: "Análise de Dados",
      skills: ["Looker Studio", "Excel", "Python", "Data Visualization"],
      color: "purple"
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-green-600" />,
      title: "Desenvolvimento Criativo",
      skills: ["Storytelling", "Gamificação", "Python", "Ren'Py Engine"],
      color: "green"
    },
    {
      icon: <Palette className="h-8 w-8 text-orange-600" />,
      title: "Web Design",
      skills: ["WordPress", "Figma", "HTML/CSS", "UX Design"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 hover:border-blue-300",
      purple: "border-purple-200 hover:border-purple-300",
      green: "border-green-200 hover:border-green-300",
      orange: "border-orange-200 hover:border-orange-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getSkillBadgeColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800",
      purple: "bg-purple-100 text-purple-800",
      green: "bg-green-100 text-green-800",
      orange: "bg-orange-100 text-orange-800"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-gray-300">
              Expertise consolidada através de anos de prática e projetos reais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className={`bg-gray-700 border-2 ${getColorClasses(category.color)} rounded-2xl p-6 transition-all hover:shadow-lg`}>
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getSkillBadgeColor(category.color)} mr-2 mb-2`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Tecnologias e Ferramentas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Python", "React", "JavaScript", "TypeScript", "HTML/CSS", "Figma",
                "WordPress", "Google Analytics", "Meta Ads", "Looker Studio",
                "Ren'Py", "Game Design", "UX/UI", "Data Analysis", "SEO", "Marketing"
              ].map((tech, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-lg shadow-sm text-center font-medium text-gray-300 hover:shadow-md transition-shadow border border-gray-600">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;