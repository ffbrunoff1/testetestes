import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Target, ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('sobre')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-accent-900/20 via-transparent to-accent-600/20"
      ></motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute top-20 right-20 w-32 h-32 bg-accent-400 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, delay: 1.5 }}
        className="absolute bottom-40 left-20 w-48 h-48 bg-white rounded-full blur-3xl"
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-accent-600/20 text-accent-200 rounded-full text-sm font-medium backdrop-blur-sm border border-accent-400/30">
                ✨ Liderando a Inovação em Geossintéticos
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Construindo o{' '}
              <span className="gradient-text bg-gradient-to-r from-accent-300 to-accent-100 bg-clip-text text-transparent">
                Futuro
              </span>{' '}
              com Inovação
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              Soluções em Geossintéticos para um Mundo em Desenvolvimento. 
              Especialistas em Geotêxtil, Geogrelha e Geocélula para projetos 
              sustentáveis e duradouros.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/produtos">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 shadow-2xl transition-all duration-300 group"
                >
                  <span>Explorar Produtos</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contato"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                Solicitar Orçamento
              </motion.a>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <Shield className="w-8 h-8 text-accent-300 mx-auto mb-2" />
                <p className="text-white/90 text-sm font-medium">Qualidade Garantida</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-accent-300 mx-auto mb-2" />
                <p className="text-white/90 text-sm font-medium">Entrega Rápida</p>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-accent-300 mx-auto mb-2" />
                <p className="text-white/90 text-sm font-medium">Projetos Precisos</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="grid grid-cols-3 gap-4 mb-6"
                >
                  <div className="bg-accent-600/20 rounded-xl p-4 text-center backdrop-blur-sm">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white text-sm font-medium">Geotêxtil</p>
                  </div>
                  <div className="bg-accent-600/20 rounded-xl p-4 text-center backdrop-blur-sm">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white text-sm font-medium">Geogrelha</p>
                  </div>
                  <div className="bg-accent-600/20 rounded-xl p-4 text-center backdrop-blur-sm">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white text-sm font-medium">Geocélula</p>
                  </div>
                </motion.div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">3 Produtos Principais</h3>
                  <p className="text-white/80 text-sm">Soluções completas para sua obra</p>
                </div>
              </div>
            </motion.div>

            {/* Background decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 border border-white/20 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-24 h-24 border border-accent-400/30 rounded-full"
            ></motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}