import React from 'react';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Code, items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
    { name: 'Diseño', icon: Palette, items: ['Tailwind CSS', 'Figma', 'Canva'] },
    { name: 'Mobile', icon: Smartphone, items: ['React Native', 'Responsive Design', 'PWA'] },
    { name: 'Herramientas', icon: Globe, items: ['Git', 'Node.js', 'Vite', 'Webpack'] }
  ];

  return (
    <section id="acerca" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Acerca de mí
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Mi historia
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Soy un desarrollador frontend apasionado con más de 2 años de experiencia 
                creando aplicaciones web modernas y funcionales. Mi enfoque se centra en 
                combinar código limpio con diseños atractivos.
              </p>
              <p>
                Me especializo en React y el ecosistema de JavaScript, pero siempre estoy 
                aprendiendo nuevas tecnologías. Creo firmemente que el mejor código es aquel 
                que es simple, mantenible y amigable con en el usuario.
              </p>
              <p>
                Cuando no estoy programando, me gusta explorar nuevas tendencias de diseño, 
                aprender mejor usos de las IA's y compartir conocimientos con la comunidad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-indigo-500 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
