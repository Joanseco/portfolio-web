import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Información personal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jorge Serrato</h3>
            <p className="text-gray-400 mb-4">
              Desarrollador Full-stack del stack MERN apasionado por crear experiencias web 
              excepcionales y funcionales.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Joanseco"
                target='_blank'
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jorge-serrato-contreras/"
                target='_blank'
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Acerca de mí', 'Proyectos', 'Contacto'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const sectionId = item.toLowerCase().replace(' de mí', '').replace(' ', '');
                      const mappedId = sectionId === 'acercademí' ? 'acerca' : sectionId;
                      document.getElementById(mappedId)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Desarrollo Frontend</li>
              <li>Desarrollo Responsive</li>
              <li>Optimización Web</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center gap-2">
            © {currentYear} Jorge Serrato. Hecho con <Heart size={16} className="text-red-500" /> y React
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-indigo-500 hover:bg-indigo-600 transition-colors p-2 rounded-full"
            title="Volver arriba"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
