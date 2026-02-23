import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FinTechNavigation } from './components/fintech/FinTechNavigation';
import { FinTechHomePage } from './components/fintech/FinTechHomePage';
import { FinTechProductPage } from './components/fintech/FinTechProductPage';
import { FinTechDashboardPage } from './components/fintech/FinTechDashboardPage';
import { FinTechPricingPage } from './components/fintech/FinTechPricingPage';
import { FinTechAboutPage } from './components/fintech/FinTechAboutPage';
import { FinTechFooter } from './components/fintech/FinTechFooter';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <FinTechHomePage />;
      case 'payments':
      case 'wallet':
      case 'cards':
      case 'analytics':
        return <FinTechProductPage productId={activePage} />;
      case 'dashboard':
        return <FinTechDashboardPage />;
      case 'pricing':
        return <FinTechPricingPage />;
      case 'about':
        return <FinTechAboutPage />;
      default:
        return <FinTechHomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <FinTechNavigation activePage={activePage} onNavigate={handleNavigate} />
      {renderPage()}
      <FinTechFooter />
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-emerald-500/50 transition-shadow"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
