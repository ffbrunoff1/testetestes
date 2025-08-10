import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Layers, Grid3X3, CheckCircle, Star, Zap } from 'lucide-react'

export default function Services() {
  const products = [
    {
      id: 'geotextil',
      name: 'Geotêxtil',
      icon: Shield,
      description: 'Materiais têxteis permeáveis de extrema importância em diversas aplicações de engenharia civil.',
      features: [
        'Reforço e estabilização do solo',
        'Melhor sistema de drenagem',
        'Separação de diferentes camadas',
        'Prevenção da erosão'
      ],
      applications: ['Estradas', 'Ferrovias', 'Aterros sanitários', 'Obras costeiras'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      benefits: 'Econômico e ecologicamente correto',
      link: '/geotextil'
    },
    {
      id: 'geogrelha',
      name: 'Geogrelha',
      icon: Grid3X3,
      description: 'Solução inovadora projetada para atender às necessidades de estabilização de solos.',
      features: [
        'Aumento da resistência estrutural',
        'Distribuição uniforme de cargas',
        'Controle de erosão eficiente',
        'Resistência a intempéries'
      ],
      applications: ['Pavimentos', 'Taludes', 'Muros de contenção', 'Aterros'],
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop',
      benefits: 'Instalação simples e eficiente',
      link: '/geogrelha'
    },
    {
      id: 'geocelula',
      name: 'Geocélula',
      icon: Layers,
      description: 'Sistema tridimensional que confina material granular, aumentando significativamente a capacidade de carga.',
      features: [
        'Estrutura celular inovadora',
        'Aumento da capacidade de carga',
        'Distribuição otimizada de cargas',
        'Uso de materiais locais'
      ],
      applications: ['Contenção de encostas', 'Pavimentação', 'Proteção de taludes', 'Controle de erosão'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      benefits: 'Solução sustentável e econômica',
      link: '/geocelula'
    }
  ]

  const advantages = [
    {
      icon: Star,
      title: 'Qualidade Superior',
      description: 'Produtos fabricados com os mais altos padrões de qualidade internacional'
    },
    {
      icon: Zap,
      title: 'Resultados Rápidos',
      description: 'Instalação eficiente que acelera o cronograma de sua obra'
    },
    {
      icon: Shield,
      title: 'Durabilidade Comprovada',
      description: 'Materiais testados para resistir às condições mais adversas'
    },
    {
      icon: CheckCircle,
      title: 'Sustentabilidade',
      description: 'Soluções que respeitam o meio ambiente e promovem desenvolvimento sustentável'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-wide">
            Nossos Produtos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Soluções Completas em{' '}
            <span className="gradient-text">Geossintéticos</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore nossa linha completa de produtos desenvolvidos para 
            atender às mais diversas necessidades de engenharia civil
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-accent-200 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg"
                    >
                      <IconComponent className="w-6 h-6 text-accent-600" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {product.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Applications */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Aplicações:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-xs font-medium"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-lg p-4">
                          <p className="text-accent-800 font-medium text-sm">
                            ✨ {product.benefits}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <Link to={product.link}>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 group-hover:shadow-lg"
                        >
                          <span>Saiba Mais</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Advantages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-accent-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Escolher a TESTETESTES?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nosso compromisso vai além de fornecer produtos. Oferecemos soluções 
              completas que garantem o sucesso do seu projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Começar Seu Projeto?
            </h3>
            <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossos geossintéticos 
              podem transformar sua obra em um projeto de sucesso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/produtos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-accent-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300"
                >
                  Ver Todos os Produtos
                </motion.button>
              </Link>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contato"
                className="bg-accent-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-900 transition-colors duration-300"
              >
                Solicitar Orçamento
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}