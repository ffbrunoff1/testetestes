import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, Zap, Target, Shield, TrendingUp, Heart } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Excelência Comprovada',
      description: 'Mais de uma década de experiência no mercado de geossintéticos'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados em engenharia e construção civil'
    },
    {
      icon: Zap,
      title: 'Inovação Constante',
      description: 'Sempre buscando as melhores soluções tecnológicas do mercado'
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Produtos testados e certificados para máxima durabilidade'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projetos Concluídos' },
    { number: '15+', label: 'Anos de Experiência' },
    { number: '3', label: 'Produtos Principais' },
    { number: '100%', label: 'Satisfação dos Clientes' }
  ]

  const benefits = [
    'Consultoria técnica especializada para cada projeto',
    'Materiais de alta qualidade com certificação internacional',
    'Suporte completo desde o planejamento até a execução',
    'Soluções sustentáveis e ecologicamente responsáveis',
    'Entrega rápida e logística otimizada',
    'Acompanhamento pós-venda e garantia estendida'
  ]

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            Sobre a TESTETESTES
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Liderando a{' '}
            <span className="gradient-text">Revolução</span>{' '}
            dos Geossintéticos
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Somos especialistas em soluções inovadoras para a construção civil, 
            oferecendo produtos de alta qualidade que garantem a durabilidade 
            e sustentabilidade dos seus projetos.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-accent-600 mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão é Transformar Projetos em Realidade
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Na TESTETESTES, acreditamos que cada projeto de construção merece 
                as melhores soluções em geossintéticos. Nossa expertise em Geotêxtil, 
                Geogrelha e Geocélula nos permite oferecer produtos que não apenas 
                atendem, mas superam as expectativas de nossos clientes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Combinamos inovação tecnológica com sustentabilidade ambiental, 
                garantindo que cada solução contribua para um futuro mais verde 
                e duradouro na construção civil.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-accent-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl p-8 shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <Target className="w-12 h-12 text-accent-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Precisão</h4>
                    <p className="text-sm text-gray-600">Soluções exatas para cada necessidade</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-accent-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Crescimento</h4>
                    <p className="text-sm text-gray-600">Expandindo horizontes constantemente</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Heart className="w-16 h-16 text-accent-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Comprometimento Total
                  </h4>
                  <p className="text-gray-600">
                    Cada projeto é tratado com dedicação e excelência técnica
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 border-2 border-accent-300 rounded-full opacity-30"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-accent-400 rounded-full opacity-40"
            ></motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}