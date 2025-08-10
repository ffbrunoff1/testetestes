import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showProducts, setShowProducts] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    { name: 'Geotêxtil', path: '/geotextil' },
    { name: 'Geogrelha', path: '/geogrelha' },
    { name: 'Geocélula', path: '/geocelula' }
  ]

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Produtos', path: '/produtos', hasDropdown: true },
    { name: 'Contato', path: '/contato' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754856463939_0.png"
              alt="TESTETESTES"
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? 'filter-none' : 'filter invert'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowProducts(true)}
                    onMouseLeave={() => setShowProducts(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isScrolled
                          ? 'text-gray-700 hover:text-accent-600'
                          : 'text-white hover:text-accent-300'
                      }`}
                    >
                      <span>Produtos</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {showProducts && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                        >
                          {products.map((product) => (
                            <Link
                              key={product.name}
                              to={product.path}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-accent-50 hover:text-accent-600 transition-colors duration-200"
                            >
                              {product.name}
                            </Link>
                          ))}
                          <Link
                            to="/produtos"
                            className="block px-4 py-3 text-sm font-medium text-accent-600 hover:bg-accent-50 border-t border-gray-100 transition-colors duration-200"
                          >
                            Ver Todos os Produtos
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? isScrolled
                          ? 'text-accent-600'
                          : 'text-accent-300'
                        : isScrolled
                        ? 'text-gray-700 hover:text-accent-600'
                        : 'text-white hover:text-accent-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contato"
              className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Orçamento
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:text-accent-600'
                  : 'text-white hover:text-accent-300'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setShowProducts(!showProducts)}
                          className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-accent-600 hover:bg-accent-50 rounded-md transition-colors duration-200"
                        >
                          <span>Produtos</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showProducts ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {showProducts && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 space-y-1"
                            >
                              {products.map((product) => (
                                <Link
                                  key={product.name}
                                  to={product.path}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-accent-600 hover:bg-accent-50 rounded-md transition-colors duration-200"
                                >
                                  {product.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-accent-600 hover:bg-accent-50 rounded-md transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <a
                  href="#contato"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-accent-600 hover:bg-accent-700 text-white px-3 py-2 rounded-md font-medium transition-colors duration-200 mt-4"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}