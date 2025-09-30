import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado! Te responderé pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Joanseco5@gmail.com',
      link: 'mailto:Joanseco5@gmail.com'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+57 3004855297',
      link: 'tel:+573004855297'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Colombia',
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com/Joanseco' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/jorge-serrato-contreras/' },
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. 
            Contáctame y trabajemos juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Información de contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <IconComponent className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <a
                        target='_blank'
                        href={info.link}
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Sígueme en redes sociales</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      target='_blank'
                      key={index}
                      href={social.url}
                      className="bg-gray-100 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
                      title={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíame un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email o Whatsapp
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-colors"
                  placeholder="Tu email o Whatsapp"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
