import React from 'react';
import { TowerControl as GameController2, Mail, Phone, Linkedin, Heart, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:felopes@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+5567992627655",
      label: "Telefone"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      href: "https://wa.me/5567992627655",
      label: "WhatsApp"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/felipe-augusto-lopes",
      label: "LinkedIn"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/src/assets/232262865_110846054593629_874523380130011547_n.jpg" 
                  alt="Felipe Augusto Carvalho Lopes" 
                  className="h-8 w-8 rounded-full object-cover border-2 border-blue-400"
                />
                <span className="text-xl font-bold">Felipe Augusto Carvalho Lopes</span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Desenvolvedor de jogos educativos, analista de dados e especialista em marketing digital. 
                Transformando dados em narrativas que engajam há mais de 20 anos.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors border border-gray-700"
                    aria-label={link.label}
                    {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Experiência
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Projetos</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://softg4mes.itch.io/bilhetes-e-boatos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Bilhetes e Boatos
                  </a>
                </li>
                <li>
                  <a 
                    href="https://softg4mes.itch.io/guardiao-do-futuro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Guardião do Futuro
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Colaborar
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Felipe Augusto Carvalho Lopes. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>em Campo Grande, MS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;