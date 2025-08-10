import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Star, Shield, Zap, Target, Award } from 'lucide-react'

export default function ProductDetail() {
  const { id } = useParams()
  
  const productData = {
    geotextil: {
      name: 'Geotêxtil',
      icon: Shield,
      shortDescription: 'Materiais têxteis permeáveis para engenharia civil',
      fullDescription: 'Os geotêxteis são materiais têxteis permeáveis de extrema importância em diversas aplicações de engenharia civil. Eles são usados principalmente em projetos de infraestrutura e construção, fornecendo soluções eficazes para problemas de drenagem, proteção e estabilização do solo. Com sua estrutura única, os geotêxteis são capazes de reforçar o solo, melhorar a drenagem e separar diferentes camadas de materiais, prevenindo a mistura e garantindo a sua integridade ao longo do tempo.',
      technicalSpecs: [
        'Material: Polipropileno (PP) ou Poliéster (PET)',
        'Gramatura: 100 a 600 g/m²',
        'Resistência à tração: 8 a 40 kN/m',
        'Abertura de filtração: 60 a 300 μm',
        'Permeabilidade: 10⁻¹ a 10⁻³ m/s',
        'Resistência UV: Estabilizado contra radiação ultravioleta'
      ],
      features: [
        'Separação eficiente entre diferentes materiais',
        'Excelente capacidade de drenagem',
        'Reforço estrutural para solos fracos',
        'Proteção contra erosão',
        'Filtração de partículas finas',
        'Durabilidade em condições adversas'
      ],
      applications: [
        'Construção de estradas e rodovias',
        'Sistemas ferroviários',
        'Aterros sanitários e industriais',
        'Obras portuárias e costeiras',
        'Drenagem subsuperficial',
        'Muros de contenção'
      ],
      benefits: [
        'Redução significativa dos custos de obra',
        'Aumento da vida útil da estrutura',
        'Facilidade de instalação',
        'Sustentabilidade ambiental',
        'Resistência química e biológica',
        'Manutenção mínima'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop'
    },
    geogrelha: {
      name: 'Geogrelha',
      icon: Target,
      shortDescription: 'Solução inovadora para estabilização de solos',
      fullDescription: 'Geogrelha é uma solução inovadora projetada para atender às necessidades de estabilização de solos em diferentes aplicações de engenharia civil. Este produto altamente versátil é essencial para projetos que buscam aumentar a resistência estrutural e durabilidade de pavimentos e taludes. A geogrelha é fabricada com polímeros de alta resistência e é ideal para controle de erosão, reforço de solo e estabilização de subleitos.',
      technicalSpecs: [
        'Material: Polipropileno (PP) ou PEAD',
        'Resistência à tração: 20 a 200 kN/m',
        'Abertura da malha: 25 x 25 mm a 65 x 65 mm',
        'Deformação na ruptura: 10 a 15%',
        'Temperatura de serviço: -40°C a +70°C',
        'Resistência química: Excelente'
      ],
      features: [
        'Estrutura de malha otimizada',
        'Alta resistência à tração',
        'Excelente aderência com o solo',
        'Resistência aos raios UV',
        'Flexibilidade para conformação ao terreno',
        'Conexões mecânicas eficientes'
      ],
      applications: [
        'Reforço de pavimentos flexíveis',
        'Estabilização de taludes',
        'Muros de terra armada',
        'Aterros sobre solos moles',
        'Obras de contenção',
        'Reforço de fundações'
      ],
      benefits: [
        'Aumento da capacidade de carga',
        'Distribuição uniforme de tensões',
        'Redução de espessuras de camadas',
        'Economia em materiais granulares',
        'Instalação rápida e eficiente',
        'Longa vida útil'
      ],
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop'
    },
    geocelula: {
      name: 'Geocélula',
      icon: Zap,
      shortDescription: 'Sistema tridimensional para confinamento de materiais',
      fullDescription: 'A Geocelula é uma solução inovadora e eficiente em engenharia geotécnica e civil, projetada para estabilização e reforço de solos. Esse sistema consiste em módulos tridimensionais formando uma estrutura celular que confina o material granular, como solo ou areia, aumentando significativamente sua capacidade de carga. Utilizada em obras de contenção de encostas, pavimentação, proteção de taludes e controle de erosão.',
      technicalSpecs: [
        'Material: PEAD (Polietileno de Alta Densidade)',
        'Altura das células: 50 a 200 mm',
        'Dimensão das células: 330 x 290 mm',
        'Espessura da parede: 1,1 a 1,6 mm',
        'Resistência à tração: ≥ 16 MPa',
        'Soldas ultrassônicas de alta resistência'
      ],
      features: [
        'Sistema celular tridimensional',
        'Confinamento lateral eficiente',
        'Fácil instalação e expansão',
        'Resistência a intempéries',
        'Permeabilidade adequada',
        'Compatibilidade com materiais locais'
      ],
      applications: [
        'Proteção de encostas e taludes',
        'Pavimentação de estradas rurais',
        'Controle de erosão em canais',
        'Estacionamentos permeáveis',
        'Revestimento de canais',
        'Obras de contenção'
      ],
      benefits: [
        'Redução do uso de concreto',
        'Aproveitamento de materiais locais',
        'Facilidade de transporte',
        'Impacto ambiental mínimo',
        'Versatilidade de aplicações',
        'Custos reduzidos de implantação'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    }
  }

  const product = productData[id]

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
          <Link to="/produtos" className="text-accent-600 hover:text-accent-700">
            Voltar aos produtos
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = product.icon

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            <Link 
              to="/produtos"
              className="flex items-center space-x-2 text-accent-600 hover:text-accent-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar aos Produtos</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">{product.name}</span>
          </motion.div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-20 h-20 bg-accent-600 rounded-3xl flex items-center justify-center shadow-2xl"
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </motion.div>
                <div>
                  <h1 className="text-5xl font-bold text-gray-900">{product.name}</h1>
                  <p className="text-xl text-accent-600 font-medium">{product.shortDescription}</p>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contato"
                  className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-xl font-semibold text-center transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Solicitar Orçamento
                </motion.a>
                <Link to="/contato">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full border-2 border-accent-600 text-accent-600 hover:bg-accent-50 px-8 py-4 rounded-xl font-semibold transition-colors duration-300"
                  >
                    Falar com Especialista
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              
              {/* Quality Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-accent-600" />
                  <span className="font-bold text-gray-900">Qualidade Premium</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technical Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-6 h-6 text-accent-600 mr-3" />
                Especificações Técnicas
              </h2>
              <ul className="space-y-4">
                {product.technicalSpecs.map((spec, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <Star className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{spec}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-accent-600 mr-3" />
                Características
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl p-8 border border-accent-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="w-6 h-6 text-accent-600 mr-3" />
                Principais Benefícios
              </h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <Award className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Aplicações do{' '}
              <span className="gradient-text">{product.name}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatilidade comprovada em diversos tipos de projetos de engenharia civil
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{application}</h3>
                <p className="text-gray-600 text-sm">
                  Solução eficiente e comprovada para este tipo de aplicação
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-accent-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Interessado em {product.name}?
            </h2>
            <p className="text-xl text-accent-100 mb-8 max-w-3xl mx-auto">
              Nossa equipe técnica está pronta para ajudar você a implementar 
              a melhor solução para seu projeto.
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
              <Link to="/produtos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-900 transition-colors duration-300"
                >
                  Ver Outros Produtos
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}