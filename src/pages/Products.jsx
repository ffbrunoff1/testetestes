import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Grid3X3, Layers, CheckCircle, Star, Award } from 'lucide-react'

export default function Products() {
  const products = [
    {
      id: 'geotextil',
      name: 'Geotêxtil',
      icon: Shield,
      shortDescription: 'Materiais têxteis permeáveis para engenharia civil',
      fullDescription: 'Os geotêxteis são materiais têxteis permeáveis de extrema importância em diversas aplicações de engenharia civil. Eles são usados principalmente em projetos de infraestrutura e construção, fornecendo soluções eficazes para problemas de drenagem, proteção e estabilização do solo.',
      features: [
        'Reforço e estabilização do solo',
        'Melhor sistema de drenagem',
        'Separação de diferentes camadas de materiais',
        'Prevenção da erosão e crescimento sustentável',
        'Alta resistência química e mecânica',
        'Econômico e ecologicamente correto'
      ],
      applications: [
        'Projetos de estradas e ferrovias',
        'Aterros sanitários',
        'Recuperação de áreas degradadas',
        'Obras costeiras e portuárias',
        'Sistemas de drenagem urbana',
        'Muros de contenção'
      ],
      benefits: [
        'Durabilidade em condições adversas',
        'Minimização do uso de recursos naturais',
        'Redução da necessidade de manutenção',
        'Contribuição para sustentabilidade'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      link: '/geotextil'
    },
    {
      id: 'geogrelha',
      name: 'Geogrelha',
      icon: Grid3X3,
      shortDescription: 'Solução inovadora para estabilização de solos',
      fullDescription: 'Geogrelha é uma solução inovadora projetada para atender às necessidades de estabilização de solos em diferentes aplicações de engenharia civil. Este produto altamente versátil é essencial para projetos que buscam aumentar a resistência estrutural e durabilidade de pavimentos e taludes.',
      features: [
        'Aumento da resistência estrutural',
        'Distribuição uniforme das cargas',
        'Controle de erosão e reforço de solo',
        'Estabilização de subleitos',
        'Resistência aos raios ultravioleta',
        'Resistência a agentes químicos e intempéries'
      ],
      applications: [
        'Pavimentação de estradas',
        'Construção de ferrovias',
        'Aterros e taludes',
        'Muros de contenção',
        'Reforço de fundações',
        'Obras geotécnicas'
      ],
      benefits: [
        'Prevenção de deformações indesejadas',
        'Instalação simples e eficiente',
        'Redução de tempo e custo de execução',
        'Longa vida útil e desempenho consistente'
      ],
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop',
      link: '/geogrelha'
    },
    {
      id: 'geocelula',
      name: 'Geocélula',
      icon: Layers,
      shortDescription: 'Sistema tridimensional para confinamento de materiais',
      fullDescription: 'A Geocelula é uma solução inovadora e eficiente em engenharia geotécnica e civil, projetada para estabilização e reforço de solos. Esse sistema consiste em módulos tridimensionais formando uma estrutura celular que confina o material granular, como solo ou areia, aumentando significativamente sua capacidade de carga.',
      features: [
        'Estrutura celular tridimensional',
        'Confinamento eficiente de materiais',
        'Aumento significativo da capacidade de carga',
        'Melhoria na distribuição de cargas',
        'Uso de materiais locais',
        'Aplicação prática e rápida'
      ],
      applications: [
        'Contenção de encostas',
        'Pavimentação sustentável',
        'Proteção de taludes',
        'Controle de erosão',
        'Obras urbanas e rurais',
        'Estabilização de terrenos'
      ],
      benefits: [
        'Economia de tempo e recursos',
        'Preservação do meio ambiente',
        'Redução de recalques e instabilidades',
        'Solução confiável e sustentável'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      link: '/geocelula'
    }
  ]

  const advantages = [
    {
      icon: Award,
      title: 'Qualidade Certificada',
      description: 'Todos os produtos seguem rigorosos padrões internacionais de qualidade'
    },
    {
      icon: Shield,
      title: 'Durabilidade Comprovada',
      description: 'Materiais testados para resistir às condições mais extremas'
    },
    {
      icon: Star,
      title: 'Inovação Constante',
      description: 'Tecnologia de ponta aplicada em cada solução desenvolvida'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wide">
              Linha Completa
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mt-4 mb-6">
              Nossos{' '}
              <span className="gradient-text bg-gradient-to-r from-accent-300 to-accent-100 bg-clip-text text-transparent">
                Produtos
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore nossa linha completa de geossintéticos desenvolvidos para 
              atender às mais diversas necessidades de engenharia civil e construção.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => {
              const IconComponent = product.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={`space-y-8 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center shadow-lg"
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h2 className="text-4xl font-bold text-gray-900">{product.name}</h2>
                        <p className="text-lg text-accent-600 font-medium">{product.shortDescription}</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {product.fullDescription}
                    </p>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Características Principais:</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Aplicações:</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium border border-accent-200"
                          >
                            {app}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Principais Benefícios:</h3>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-2"
                          >
                            <Star className="w-4 h-4 text-accent-600" />
                            <span className="text-gray-700">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link to={product.link}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <span>Saiba Mais sobre {product.name}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`relative ${!isEven ? 'lg:order-1' : ''}`}
                  >
                    <motion.img
                      whileHover={{ scale: 1.02 }}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute -top-6 ${isEven ? '-right-6' : '-left-6'} w-20 h-20 bg-accent-600 rounded-2xl shadow-2xl flex items-center justify-center`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por Que Escolher Nossos{' '}
              <span className="gradient-text">Produtos</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos mais do que produtos. Fornecemos soluções completas 
              que garantem o sucesso do seu projeto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-3xl p-8 lg:p-16 text-white text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Pronto para Escolher o Produto Ideal?
            </h2>
            <p className="text-xl text-accent-100 mb-8 max-w-3xl mx-auto">
              Nossa equipe técnica está pronta para ajudar você a selecionar 
              a melhor solução em geossintéticos para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contato"
                className="bg-white text-accent-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300"
              >
                Solicitar Orçamento
              </motion.a>
              <Link to="/contato">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-900 transition-colors duration-300"
                >
                  Falar com Especialista
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}