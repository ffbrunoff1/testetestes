import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Layers, CheckCircle, Star, Award, Target, Zap, Settings } from 'lucide-react'

export default function Geocelula() {
  const features = [
    {
      icon: Layers,
      title: 'Sistema Celular 3D',
      description: 'Estrutura tridimensional que confina materiais granulares eficientemente'
    },
    {
      icon: Target,
      title: 'Capacidade de Carga',
      description: 'Aumenta significativamente a capacidade de carga do solo'
    },
    {
      icon: Zap,
      title: 'Instalação Rápida',
      description: 'Processo de instalação prático que economiza tempo e recursos'
    },
    {
      icon: Settings,
      title: 'Materiais Locais',
      description: 'Permite o uso de materiais disponíveis na região da obra'
    }
  ]

  const technicalData = [
    { label: 'Material', value: 'PEAD (Polietileno de Alta Densidade)' },
    { label: 'Altura das Células', value: '50 a 200 mm' },
    { label: 'Dimensão das Células', value: '330 x 290 mm' },
    { label: 'Espessura da Parede', value: '1,1 a 1,6 mm' },
    { label: 'Resistência à Tração', value: '≥ 16 MPa' },
    { label: 'Tipo de Soldas', value: 'Soldas ultrassônicas de alta resistência' }
  ]

  const applications = [
    'Proteção de encostas e taludes',
    'Pavimentação de estradas rurais',
    'Controle de erosão em canais',
    'Estacionamentos permeáveis',
    'Revestimento de canais',
    'Obras de contenção',
    'Infraestrutura urbana',
    'Projetos de drenagem'
  ]

  const benefits = [
    'Redução do uso de concreto',
    'Aproveitamento de materiais locais',
    'Facilidade de transporte',
    'Impacto ambiental mínimo',
    'Versatilidade de aplicações',
    'Custos reduzidos de implantação',
    'Durabilidade em condições adversas',
    'Contribuição para sustentabilidade'
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
            <span className="text-gray-700 font-medium">Geocélula</span>
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
                  <Layers className="w-10 h-10 text-white" />
                </motion.div>
                <div>
                  <h1 className="text-5xl font-bold text-gray-900">Geocélula</h1>
                  <p className="text-xl text-accent-600 font-medium">Sistema tridimensional para confinamento de materiais</p>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                A Geocelula é uma solução inovadora e eficiente em engenharia geotécnica e civil, 
                projetada para estabilização e reforço de solos. Esse sistema consiste em módulos 
                tridimensionais formando uma estrutura celular que confina o material granular, 
                como solo ou areia, aumentando significativamente sua capacidade de carga.
              </p>

              <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Award className="w-5 h-5 text-accent-600 mr-2" />
                  Vantagem Exclusiva
                </h3>
                <p className="text-gray-700">
                  ✨ A aplicação da Geocelula é prática e rápida, resultando em economia de 
                  tempo e recursos durante a execução das obras.
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="Geocélula"
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
                  <Layers className="w-6 h-6 text-accent-600" />
                  <span className="font-bold text-gray-900">Inovação 3D</span>
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
              Características da{' '}
              <span className="gradient-text">Geocélula</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia inovadora que oferece soluções sustentáveis para engenharia geotécnica
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
                Tecnologia Avançada
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sustentabilidade</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Contribui significativamente para a preservação do meio ambiente, 
                    uma vez que permite o uso de materiais locais e reduz a necessidade 
                    de transporte de grandes volumes de material.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Durabilidade</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Projetos que utilizam Geocelula ganham em durabilidade e resistência, 
                    suportando condições climáticas adversas e minimizando a manutenção 
                    ao longo do tempo.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Performance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A estrutura celular melhora a distribuição de cargas, reduzindo 
                    a ocorrência de recalques e instabilidades em terrenos desafiadores.
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
              Implemente Geocélula em Seu Projeto
            </h2>
            <p className="text-xl text-accent-100 mb-8 max-w-3xl mx-auto">
              Seja em obras urbanas ou rurais, a Geocelula se destaca como uma solução 
              confiável e sustentável, contribuindo para o desenvolvimento de infraestrutura 
              com segurança e responsabilidade ambiental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contato"
                className="bg-white text-accent-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300"
              >
                Solicitar Orçamento Completo
              </motion.a>
              <Link to="/contato">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-900 transition-colors duration-300"
                >
                  Assessoria Técnica
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}