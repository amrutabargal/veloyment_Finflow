import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FinTechNavigationProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export function FinTechNavigation({ activePage, onNavigate }: FinTechNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' }
  ];

  const productItems = [
    { id: 'payments', label: 'Payments', icon: '💳' },
    { id: 'wallet', label: 'Digital Wallet', icon: '👛' },
    { id: 'cards', label: 'Virtual Cards', icon: '💎' },
    { id: 'analytics', label: 'Analytics', icon: '📊' }
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavigate('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 via-teal-600 to-amber-500 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white text-xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>F</span>
            </div>
            <span className="ml-3 text-xl text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              FinFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 transition-colors ${
                        activePage === item.id || activePage.startsWith('product')
                          ? 'text-emerald-600'
                          : 'text-gray-700 hover:text-emerald-600'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.label}
                      <ChevronDown size={16} />
                    </button>
                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2"
                        >
                          {productItems.map((product) => (
                            <button
                              key={product.id}
                              onClick={() => handleNavigate(product.id)}
                              className="w-full px-4 py-3 text-left hover:bg-emerald-50 transition-colors flex items-center gap-3"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              <span className="text-2xl">{product.icon}</span>
                              <span className="text-gray-700">{product.label}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className={`transition-colors ${
                      activePage === item.id
                        ? 'text-emerald-600'
                        : 'text-gray-700 hover:text-emerald-600'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-gray-200 overflow-hidden"
            >
              {navItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => !item.hasDropdown && handleNavigate(item.id)}
                    className={`block w-full text-left px-4 py-2 ${
                      activePage === item.id
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.label}
                  </button>
                  {item.hasDropdown && (
                    <div className="pl-8">
                      {productItems.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleNavigate(product.id)}
                          className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {product.icon} {product.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 mt-4">
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg transition-all shadow-lg">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
