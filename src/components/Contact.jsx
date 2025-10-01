import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, XCircle, Loader } from 'lucide-react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  // Nuevo estado para manejar el proceso de envío ('null', 'loading', 'success', 'error')
  const [status, setStatus] = useState(null); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpia el estado del mensaje si el usuario comienza a escribir de nuevo
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formspreeUrl = import.meta.env.VITE_APP_FORMSPREE_URL; 

    try {
      // Intentamos el envío al servicio de Formspree
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Pide la respuesta en formato JSON
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        // Limpia el formulario solo si el envío fue exitoso
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Maneja errores de Formspree (ej. email inválido, campos faltantes)
        const data = await response.json();
        console.error('Error de Formspree:', data.errors || response.statusText);
        setStatus('error');
      }
    } catch (error) {
      // Maneja errores de red
      console.error('Fallo en el envío:', error);
      setStatus('error');
    }
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

  // Componente de Notificación simple (reemplaza el alert)
  const Notification = ({ status }) => {
    if (!status || status === 'loading') return null;

    const isSuccess = status === 'success';
    const message = isSuccess ? '¡Mensaje enviado con éxito! Pronto te responderé.' : 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctame directamente.';
    const Icon = isSuccess ? CheckCircle : XCircle;
    const color = isSuccess ? 'bg-green-500' : 'bg-red-500';

    return (
      <div className={`mt-4 p-4 rounded-lg flex items-center shadow-lg ${color} text-white transition-opacity duration-300`}>
        <Icon size={24} className="mr-3" />
        <p className="font-medium">{message}</p>
      </div>
    );
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-inter">
            Contáctame
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. 
            Contáctame y trabajemos juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          {/* Información de contacto */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Información de contacto
            </h3>
            
            <div className="space-y-8 mb-10">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="bg-indigo-50 p-3 rounded-full mr-4 flex-shrink-0 shadow-md">
                      <IconComponent className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">{info.title}</h4>
                      {info.link ? (
                        <a
                          target='_blank'
                          href={info.link}
                          className="text-gray-600 hover:text-indigo-600 transition-colors text-base"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-base">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">Sígueme en redes sociales</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      target='_blank'
                      key={index}
                      href={social.url}
                      className="bg-gray-100 p-4 rounded-full text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                      title={social.name}
                      aria-label={`Link a ${social.name}`}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="order-1 lg:order-2">
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
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all shadow-sm disabled:bg-gray-100"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all shadow-sm disabled:bg-gray-100"
                  placeholder="Tu email"
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
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all resize-none shadow-sm disabled:bg-gray-100"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:bg-indigo-400 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar mensaje
                  </>
                )}
              </button>
              
              {/* Muestra la notificación de estado */}
              <Notification status={status} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;