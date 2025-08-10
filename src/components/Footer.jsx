import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUp, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    produtos: [
      { name: 'Geotêxtil', path: '/geotextil' },
      { name: 'Geogrelha', path: '/geogrelha' },
      { name: 'Geocélula', path: '/geocelula' },
      { name: 'Todos os Produtos', path: '/produtos' }
    ],
    empresa: [
      { name: 'Sobre Nós', path: '/sobre' },
      { name: 'Nossa História', path: '/sobre' },
      { name: 'Qualidade', path: '/sobre' },
      { name: 'Sustentabilidade', path: '/sobre' }
    ],
    suporte: [
      { name: 'Contato', path: '/contato' },
      { name: 'Orçamentos', path: '/contato' },
      { name: 'Suporte Técnico', path: '/contato' },
      { name: 'FAQ', path: '/contato' }
    ]
  }

  const contactInfo = [
    {
      icon: Phone,
      text: '(11) 9999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: Mail,
      text: 'contato@testetestes.com.br',
      link: 'mailto:contato@testetestes.com.br'
    },
    {
      icon: MapPin,
      text: 'São Paulo, SP - Brasil',
      link: '#'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent-600 hover:bg-accent-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link to="/" className="inline-block mb-6">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754856463939_0.png"
                alt="TESTETESTES"
                className="h-16 w-auto"
              />
            </Link>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Especialistas em soluções inovadoras para construção civil, 
              oferecendo geossintéticos de alta qualidade para projetos 
              sustentáveis e duradouros.
            </p>

            <h3 className="text-lg font-semibold mb-4">Entre em Contato</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group"
                  >
                    <IconComponent className="w-5 h-5 text-accent-400" />
                    {info.link && info.link !== '#' ? (
                      <a 
                        href={info.link}
                        className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{info.text}</span>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-accent-400">Produtos</h3>
            <ul className="space-y-3">
              {footerLinks.produtos.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-accent-400">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-accent-400">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 p-4 bg-accent-600/20 rounded-xl border border-accent-600/30"
            >
              <h4 className="font-semibold text-accent-400 mb-2">Precisa de Ajuda?</h4>
              <p className="text-sm text-gray-300 mb-3">
                Entre em contato para orçamentos e consultoria técnica.
              </p>
              <Link 
                to="/contato"
                className="text-accent-400 hover:text-accent-300 text-sm font-medium transition-colors duration-200"
              >
                Falar Conosco →
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} TESTETESTES. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-1 text-sm text-gray-400">
                <span>Criado com</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>por</span>
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 transition-colors duration-200 font-medium"
                >
                  Papum
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Link 
                to="/contato" 
                className="text-gray-400 hover:text-accent-400 text-sm transition-colors duration-200"
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/contato" 
                className="text-gray-400 hover:text-accent-400 text-sm transition-colors duration-200"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}