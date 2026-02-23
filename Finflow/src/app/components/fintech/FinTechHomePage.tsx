import { motion } from 'motion/react';
import {
  ArrowRight,
  Smartphone,
  CreditCard,
  PieChart,
  Wallet,
  Shield,
  Zap,
  Globe,
  Lock,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Star,
  Download,
  UserPlus,
  Link2,
  Sparkles,
  Headphones,
  FileCheck,
  Smartphone as MobileIcon,
  Newspaper,
  Mail,
  PiggyBank,
  Building2,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FinTechHomePage() {
  const products = [
    {
      icon: <CreditCard size={32} />,
      title: 'Instant Payments',
      description: 'Send and receive money instantly with zero fees. Lightning-fast transactions worldwide with real-time settlement and instant notifications.',
      gradient: 'from-emerald-500 to-teal-500',
      detail: 'Settlement in under 3 seconds',
    },
    {
      icon: <Wallet size={32} />,
      title: 'Digital Wallet',
      description: 'Secure digital wallet for all your currencies. Manage crypto and fiat in one place with multi-currency support and one-tap conversions.',
      gradient: 'from-teal-500 to-amber-500',
      detail: '50+ currencies supported',
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Virtual Cards',
      description: 'Create unlimited virtual cards for secure online shopping and subscriptions. Set spending limits and lock cards instantly from the app.',
      gradient: 'from-amber-500 to-emerald-500',
      detail: 'Unlimited cards, zero fees',
    },
    {
      icon: <PieChart size={32} />,
      title: 'Smart Analytics',
      description: 'AI-powered insights to track spending, manage budgets, and grow your wealth. Custom dashboards and actionable recommendations.',
      gradient: 'from-emerald-600 to-teal-600',
      detail: 'Real-time categorization',
    },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      icon: <Download size={28} />,
      title: 'Download App',
      description: 'Get FinFlow from the App Store or Google Play. One tap to install—no desktop required.',
    },
    {
      number: 2,
      icon: <UserPlus size={28} />,
      title: 'Create Account',
      description: 'Sign up in under 2 minutes with email or phone. No paperwork, no waiting.',
    },
    {
      number: 3,
      icon: <Link2 size={28} />,
      title: 'Link Bank',
      description: 'Securely connect your bank account with open banking. We never store your credentials.',
    },
    {
      number: 4,
      icon: <Sparkles size={28} />,
      title: 'Start Transacting',
      description: 'Send money, pay bills, and manage your finances—all from one beautiful app.',
    },
  ];

  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Bank-Grade Security',
      description: '256-bit encryption and multi-factor authentication',
    },
    {
      icon: <Zap size={24} />,
      title: 'Lightning Fast',
      description: 'Transactions complete in under 3 seconds',
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Access',
      description: 'Send money to 195+ countries instantly',
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Zero Hidden Fees',
      description: 'No hidden charges or monthly fees',
    },
    {
      icon: <Sparkles size={24} />,
      title: 'AI-Powered Insights',
      description: 'Smart spending tips and budget recommendations',
    },
    {
      icon: <Headphones size={24} />,
      title: '24/7 Support',
      description: 'Live chat and phone support when you need it',
    },
    {
      icon: <FileCheck size={24} />,
      title: 'Full Compliance',
      description: 'PCI DSS, SOC 2, and GDPR certified',
    },
    {
      icon: <MobileIcon size={24} />,
      title: 'Mobile-First',
      description: 'Native iOS and Android apps, always in sync',
    },
  ];

  const stats = [
    { value: '$4.2B+', label: 'Transaction Volume' },
    { value: '750K+', label: 'Active Users' },
    { value: '195+', label: 'Countries' },
    { value: '99.99%', label: 'Uptime' },
  ];

  const testimonials = [
    {
      quote: 'FinFlow has completely transformed how we handle our business payments. The speed and reliability are unmatched—we closed our first international deal in under an hour.',
      author: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart',
      rating: 5,
      initials: 'SJ',
    },
    {
      quote: 'The virtual cards feature is a game-changer for managing subscriptions. Love the analytics dashboard and the peace of mind from instant card locking.',
      author: 'Michael Chen',
      role: 'Freelance Designer',
      company: 'Chen Studio',
      rating: 5,
      initials: 'MC',
    },
    {
      quote: 'Best financial app I\'ve used. The interface is beautiful and everything just works seamlessly. Support actually responds within minutes.',
      author: 'Emily Rodriguez',
      role: 'Small Business Owner',
      company: 'Rodriguez & Co',
      rating: 5,
      initials: 'ER',
    },
    {
      quote: 'We switched from three different tools to just FinFlow. One dashboard, one login, and our finance team saves 10+ hours every week.',
      author: 'David Okonkwo',
      role: 'CFO',
      company: 'Nexus Logistics',
      rating: 5,
      initials: 'DO',
    },
    {
      quote: 'As a freelancer working with clients globally, FinFlow makes getting paid and paying contractors a breeze. No more wire transfer headaches.',
      author: 'Priya Sharma',
      role: 'Independent Consultant',
      company: 'Sharma Advisory',
      rating: 4,
      initials: 'PS',
    },
    {
      quote: 'The AI insights actually helped me spot duplicate subscriptions and save over $200/month. Worth every penny—and the core app is free!',
      author: 'James Wilson',
      role: 'Product Manager',
      company: 'ScaleUp Inc',
      rating: 5,
      initials: 'JW',
    },
  ];

  const inTheNews = [
    {
      publication: 'TechCrunch',
      quote: 'FinFlow is redefining what users expect from a modern finance app—speed, clarity, and zero friction.',
      date: 'Jan 2025',
    },
    {
      publication: 'Forbes',
      quote: 'One of the most promising fintech startups to watch. Their approach to cross-border payments is genuinely innovative.',
      date: 'Dec 2024',
    },
    {
      publication: 'Bloomberg',
      quote: 'With $4.2B in volume and growing, FinFlow is proving that user experience wins in financial services.',
      date: 'Nov 2024',
    },
    {
      publication: 'Wired',
      quote: 'Clean design meets serious security. FinFlow shows that fintech can be both beautiful and bulletproof.',
      date: 'Oct 2024',
    },
    {
      publication: 'The Verge',
      quote: 'The best mobile banking experience we\'ve tested this year. Instant transfers actually feel instant.',
      date: 'Sep 2024',
    },
  ];

  const partners = ['Visa', 'Mastercard', 'Stripe', 'PayPal', 'Apple Pay', 'Google Pay', 'Plaid', 'Open Banking'];

  const trustBadges = [
    { icon: <Lock size={20} />, text: 'SSL Secured' },
    { icon: <Shield size={20} />, text: 'PCI Compliant' },
    { icon: <CheckCircle size={20} />, text: 'SOC 2 Certified' },
    { icon: <Globe size={20} />, text: 'GDPR Ready' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-amber-400/20 to-teal-400/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Zap size={16} />
                <span className="text-sm">Now available on iOS & Android</span>
              </motion.div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Fast. Secure.
                <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 bg-clip-text text-transparent">
                  Smart Finance.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Experience the future of digital payments. Send money globally, manage your finances,
                and grow your wealth—all in one beautiful app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-xl shadow-emerald-500/30"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Get Started Free
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl border-2 border-gray-200 transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Watch Demo
                </motion.button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl text-emerald-600 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1671459923834-47a0b8ed93f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwcGhvbmV8ZW58MXx8fHwxNzcxNDAwMjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="FinFlow App"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>

              {/* Floating Card: Portfolio Value */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl shadow-emerald-500/20 p-6 max-w-xs border border-emerald-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Portfolio Value</div>
                    <div className="text-2xl text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>$124,850</div>
                  </div>
                </div>
                <div className="text-xs text-emerald-600" style={{ fontFamily: 'Inter, sans-serif' }}>+12.4% this month</div>
              </motion.div>

              {/* Floating Card: Monthly Growth */}
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [2, -2, 2] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 -right-4 bg-white rounded-2xl shadow-xl shadow-emerald-500/20 p-5 max-w-[200px] border border-emerald-100"
              >
                <div className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Monthly Growth</div>
                <div className="text-2xl text-emerald-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>+32.5%</div>
              </motion.div>

              {/* Floating Card: Quick Transfer */}
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-emerald-500/20 p-6 max-w-xs border border-emerald-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Quick Transfer</div>
                  <CheckCircle className="text-emerald-500" size={20} />
                </div>
                <div className="text-3xl text-gray-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>$2,450</div>
                <div className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Completed in 2.3s</div>
              </motion.div>

              {/* Floating Card: Savings Streak */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-1/4 -left-2 bg-white rounded-2xl shadow-xl shadow-amber-500/20 p-5 max-w-[200px] border border-amber-100"
              >
                <div className="flex items-center gap-2 mb-1">
                  <PiggyBank className="text-amber-500" size={20} />
                  <span className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Savings Streak</span>
                </div>
                <div className="text-2xl text-amber-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>47 days</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <div className="text-emerald-600">{badge.icon}</div>
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-gray-900 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Everything you need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Powerful tools designed for modern finance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 transition-all cursor-pointer group border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {product.icon}
                </div>
                <h3 className="text-2xl text-gray-900 mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {product.description}
                </p>
                <p className="text-sm text-emerald-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {product.detail}
                </p>
                <button className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2 group/btn" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Learn more
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-gray-900 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get started in four simple steps. No paperwork, no waiting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-emerald-200 to-teal-200 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="relative inline-block mb-6">
                    <span className="absolute -top-1 -right-1 z-10 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold shadow" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {step.number}
                    </span>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white mx-auto shadow-lg shadow-emerald-500/30">
                      <div className="[&>svg]:w-7 [&>svg]:h-7">{step.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-gray-900 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Built for trust and speed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Enterprise-grade security and reliability, made simple for everyone
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:shadow-emerald-500/10 transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl text-gray-900 mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Your finances, beautifully organized
              </h2>
              <p className="text-xl text-emerald-100 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Track expenses, set budgets, and achieve your financial goals with our intuitive mobile app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 shadow-xl">
                  <Smartphone size={24} />
                  <div className="text-left">
                    <div className="text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Download on the</div>
                    <div className="text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>App Store</div>
                  </div>
                </button>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 shadow-xl">
                  <Smartphone size={24} />
                  <div className="text-left">
                    <div className="text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Get it on</div>
                    <div className="text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Google Play</div>
                  </div>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1663153203126-08bbadc178ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZmludGVjaCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzE0MDAyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="App Interface"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-gray-900 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Loved by thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join our community of satisfied users
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:shadow-emerald-500/10 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
                      size={18}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-semibold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {testimonial.role}
                      <span className="text-gray-400">·</span>
                      <Building2 size={14} className="inline text-emerald-600" />
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* In The News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-gray-900 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              In the news
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              What top publications are saying about FinFlow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inTheNews.slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Newspaper className="text-emerald-600" size={20} />
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.publication}</span>
                  <span className="text-sm text-gray-400 ml-auto" style={{ fontFamily: 'Inter, sans-serif' }}>{item.date}</span>
                </div>
                <p className="text-gray-600 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {inTheNews.slice(3, 5).map((item, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Newspaper className="text-emerald-600" size={20} />
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.publication}</span>
                  <span className="text-sm text-gray-400 ml-auto" style={{ fontFamily: 'Inter, sans-serif' }}>{item.date}</span>
                </div>
                <p className="text-gray-600 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Trusted partners and integrations
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="text-xl text-gray-400 hover:text-emerald-600 transition-colors cursor-pointer px-4"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-6">
              <Mail size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Get financial tips weekly
            </h2>
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join 200,000+ subscribers. Tips on saving, investing, and managing money—delivered every Tuesday. No spam, unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg shadow-emerald-500/30 whitespace-nowrap"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join 750,000+ users who trust FinFlow for their financial needs. No credit card required.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-10 py-5 rounded-xl transition-all text-lg shadow-2xl shadow-emerald-500/20 hover:shadow-white/20"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Create Free Account
            </motion.button>
            <p className="text-sm text-gray-400 mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Free forever. No credit card required.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
