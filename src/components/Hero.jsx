import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import cvFile from '../assets/Hv Jorge Serrato.pdf'; 

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">  
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hola, soy <span className="text-indigo-500">Jorge Serrato </span> <br />
            <span className="text-indigo-500">Desarollador web</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Apasionado por crear experiencias web únicas y funcionales. 
            Especializado en React, JavaScript y diseño responsivo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-indigo-500 text-white px-1  rounded-full hover:bg-indigo-600 transition-colors font-medium flex items-center gap-2">
            <a 
              href={cvFile}
              target='_blank'
              // download="Hv Jorge Serrato.pdf"
              className="bg-indigo-500 text-white px-8 py-3 rounded-full hover:bg-indigo-600 transition-colors font-medium flex items-center gap-2">
              <Download size={20} />
              Descargar CV
             </a>
            </button>
           
            <button 
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-indigo-500 text-indigo-500 px-8 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition-colors font-medium"
            >
              Contactar
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/joanseco/" target="_blank" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jorge-serrato-contreras/" target="_blank" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:joanseco5@gmail.com" target="_blank" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
