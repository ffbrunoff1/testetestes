import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, CheckCircle, Star, Award, Target, Zap, Settings } from 'lucide-react'

export default function Geotextil() {
  const features = [
    {
      icon: Shield,
      title: 'Separação de Materiais',
      description: 'Impede a mistura entre diferentes camadas de solo, mantendo a integridade estrutural'
    },
    {
      icon: Target,
      title: 'Excelente Drenagem',
      description: 'Permite a passagem de água enquanto retém partículas sólidas'
    },
    {
      icon: Zap,
      title: 'Reforço Estrutural',
      description: 'Aumenta a capacidade de carga e estabilidade do solo'
    },
    {
      icon: Settings,
      title: 'Proteção contra Erosão',
      description: 'Previne a erosão do solo em taludes e encostas'
    }
  ]

  const technicalData = [
    { label: 'Material', value: 'Polipropileno (PP) ou Poliéster (PET)' },
    { label: 'Gramatura', value: '100 a 600 g/m²' },
    { label: 'Resistência à Tração', value: '8 a 40 kN/m' },
    { label: 'Abertura de Filtração', value: '60 a 300 μm' },
    { label: 'Permeabilidade', value: '10⁻¹ a 10⁻³ m/s' },
    { label: 'Resistência UV', value: 'Estabilizado contra radiação ultravioleta' }
  ]

  const applications = [
    'Construção de estradas e rodovias',
    'Sistemas ferroviários',
    'Aterros sanitários e industriais',
    'Obras portuárias e costeiras',
    'Drenagem subsuperficial',
    'Muros de contenção',
    'Recuperação de áreas degradadas',
    'Sistemas de filtração'
  ]

  const benefits = [
    'Redução significativa dos custos de obra',
    'Aumento da vida útil da estrutura',
    'Facilidade de instalação',
    'Sustentabilidade ambiental',
    'Resistência química e biológica',
    'Manutenção mínima',
    'Versatilidade de aplicações',
    'Impacto ambiental reduzido'
  ]

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
            <span className="text-gray-700 font-medium">Geotêxtil</span>
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
                  <Shield className="w-10 h-10 text-white" />
                </motion.div>
                <div>
                  <h1 className="text-5xl font-bold text-gray-900">Geotêxtil</h1>
                  <p className="text-xl text-accent-600 font-medium">Materiais têxteis permeáveis para engenharia civil</p>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Os geotêxteis são materiais têxteis permeáveis de extrema importância em diversas 
                aplicações de engenharia civil. Eles são usados principalmente em projetos de 
                infraestrutura e construção, fornecendo soluções eficazes para problemas de 
                drenagem, proteção e estabilização do solo.
              </p>

              <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Award className="w-5 h-5 text-accent-600 mr-2" />
                  Principais Vantagens
                </h3>
                <p className="text-gray-700">
                  ✨ Econômico e ecologicamente correto, contribuindo para a sustentabilidade 
                  ao minimizar o uso de recursos naturais e reduzir a necessidade de manutenção constante.
                </p>
              </div>

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
                    Consultoria Técnica
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
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop"
                alt="Geotêxtil"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-accent-600" />
                  <span className="font-bold text-gray-900">Qualidade Premium</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Características do{' '}
              <span className="gradient-text">Geotêxtil</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Funcionalidades essenciais que fazem do geotêxtil a escolha ideal para seus projetos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Data */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Especificações Técnicas
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  {technicalData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-start border-b border-gray-100 pb-4 last:border-b-0"
                    >
                      <span className="font-semibold text-gray-900 flex-shrink-0 w-1/3">
                        {item.label}:
                      </span>
                      <span className="text-gray-600 text-right">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Detailed Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Funcionalidades Avançadas
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Estrutura Única</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Com sua estrutura única, os geotêxteis são capazes de reforçar o solo, 
                    melhorar a drenagem e separar diferentes camadas de materiais, prevenindo 
                    a mistura e garantindo a sua integridade ao longo do tempo.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Versatilidade</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Essa versatilidade os torna essenciais em projetos de estradas, ferrovias, 
                    aterros sanitários, recuperação de áreas degradadas e obras costeiras. 
                    Eles também desempenham um papel crucial na prevenção da erosão e na 
                    promoção do crescimento sustentável.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sustentabilidade</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fabricados a partir de polímeros como o polipropileno e o poliéster, 
                    os geotêxteis oferecem alta resistência química e mecânica, garantindo 
                    durabilidade mesmo em condições adversas.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications and Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Aplicações Principais
              </h2>
              <div className="grid gap-4">
                {applications.map((application, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{application}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Principais Benefícios
              </h2>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl border border-accent-200"
                  >
                    <Star className="w-6 h-6 text-accent-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              Pronto para Implementar Geotêxtil em Seu Projeto?
            </h2>
            <p className="text-xl text-accent-100 mb-8 max-w-3xl mx-auto">
              Escolher o geotêxtil mais adequado para cada projeto é fundamental para 
              garantir o sucesso da aplicação e a longevidade da obra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contato"
                className="bg-white text-accent-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300"
              >
                Solicitar Orçamento Personalizado
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