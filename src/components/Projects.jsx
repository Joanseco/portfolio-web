import React from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import cacao_serrato from "../assets/cacao-serrato.png";
import psyco_games from "../assets/psyco-games.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cacao de Serrato",
      description:
        "Pagina web diseñada con tecnologias modernas, responsive, amigable con el usurio, con accesibilidad y mejoras en el SEO",
      image: cacao_serrato,
      technologies: ["React", "Tailwindcss"],
      liveUrl: "https://cacao-serrato.vercel.app/",
      githubUrl: "https://github.com/Joanseco/cacaoSerrato",
    },
    {
      id: 2,
      title: "Psyco Games",
      description: "Plataforma de Gamificación para la Psicología Cognitiva. El objetivo fue transformar conceptos teóricos complejos (ej. sesgos cognitivos, condicionamiento) en juegos digitales atractivos y funcionales",
      image:psyco_games,
      technologies: ["HTML","CSS","Boostrap","jQuery"],
      liveUrl: "https://psyco-games.vercel.app/",
      githubUrl: "https://github.com/Joanseco/psyco-games",
    },
    {
      id: 3,
      title: "Próximamente más proyectos!",
      description: "Próximamente estare subiendo más proyectos a mi portafolio",
      image:
        "https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/F59E0B/FFFFFF?text=Próximamente",
      technologies: [],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mis Proyectos
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una selección de mis trabajos que demuestran mis
            habilidades en desarrollo frontend y diseño de interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title="Ver proyecto"
                  >
                    <Eye size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title="Ver código"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-indigo-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-500 hover:text-indigo-700 font-medium text-sm"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Ver proyecto
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-800 font-medium text-sm"
                  >
                    <Github size={16} className="mr-1" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
