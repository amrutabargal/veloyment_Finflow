import { motion } from 'motion/react';
import {
  CreditCard,
  Wallet,
  Smartphone,
  PieChart,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  DollarSign,
  TrendingUp,
  Lock,
  Users,
  BarChart3,
  Send,
  Receipt,
  Copy,
  Sparkles,
  Target,
  FileText,
  Star,
  Quote,
  Plug,
  Layers,
  Bell,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
interface ProductPageProps {
  productId: string;
}

type ProductId = 'payments' | 'wallet' | 'cards' | 'analytics';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ReviewItem {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface StepItem {
  title: string;
  description: string;
}

interface ProductData {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  image: string;
  features: FeatureItem[];
  benefits: string[];
  stats: { value: string; label: string }[];
  reviews: ReviewItem[];
  integrations: string[];
  steps: StepItem[];
}

export function FinTechProductPage({ productId }: ProductPageProps) {
  const products: Record<ProductId, ProductData> = {
    payments: {
      title: 'Instant Payments',
      subtitle: 'Send money globally in seconds',
      description:
        'Lightning-fast payment processing with zero fees. Send money to anyone, anywhere, instantly. Built for businesses and individuals who demand speed, transparency, and reliability.',
      icon: <CreditCard size={48} />,
      gradient: 'from-emerald-500 to-teal-500',
      image:
        'https://images.unsplash.com/photo-1739989934265-b46240484890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGF5bWVudCUyMGNvbnRhY3RsZXNzfGVufDF8fHx8MTc3MTQwMDI0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        {
          icon: <Zap size={24} />,
          title: 'Instant Transfer',
          description: 'Money arrives in under 3 seconds with real-time settlement and instant notifications.',
        },
        {
          icon: <DollarSign size={24} />,
          title: 'Zero Fees',
          description: 'No hidden charges, no monthly fees, no per-transaction costs. What you send is what they get.',
        },
        {
          icon: <Globe size={24} />,
          title: 'Global Reach',
          description: 'Send to 180+ countries in 50+ currencies with competitive exchange rates.',
        },
        {
          icon: <Shield size={24} />,
          title: 'Bank-Grade Security',
          description: 'End-to-end encryption and PCI DSS compliance keep every transaction secure.',
        },
        {
          icon: <Receipt size={24} />,
          title: 'Smart Invoicing',
          description: 'Create and send professional invoices with one-click payment links and auto-reminders.',
        },
        {
          icon: <Send size={24} />,
          title: 'Batch Payments',
          description: 'Pay hundreds of vendors or employees in one go with bulk upload and approval workflows.',
        },
      ],
      benefits: [
        'Real-time payment notifications and status tracking',
        'Schedule recurring payments and subscriptions',
        'Split bills with friends and request money easily',
        'Full payment history with downloadable receipts',
        'Multi-currency wallets with auto-conversion',
        'API for developers to integrate payments into apps',
        'Dispute resolution and chargeback protection',
        'Dedicated account manager for high-volume users',
      ],
      stats: [
        { value: '2M+', label: 'Daily transactions' },
        { value: '$0', label: 'Fees' },
        { value: '3s', label: 'Avg. transfer speed' },
        { value: '180+', label: 'Countries' },
      ],
      reviews: [
        {
          quote:
            'We switched from our old provider and cut our payment processing time from days to seconds. Game-changer for our global team.',
          author: 'Maria Chen',
          role: 'CFO, TechFlow Inc.',
          rating: 5,
        },
        {
          quote:
            'Zero fees actually means zero. We save thousands every month. The API integration took an afternoon.',
          author: 'James Okonkwo',
          role: 'Founder, PayBridge',
          rating: 5,
        },
        {
          quote:
            'Finally, a payments product that works the way we do—fast, transparent, and reliable. Support is excellent.',
          author: 'Sarah Mitchell',
          role: 'Operations Director',
          rating: 4,
        },
      ],
      integrations: ['Stripe', 'QuickBooks', 'Xero', 'Shopify', 'Slack', 'Zapier'],
      steps: [
        {
          title: 'Connect your account',
          description:
            'Link your bank account or business profile in minutes. We verify securely and you can start sending the same day.',
        },
        {
          title: 'Add recipients and amount',
          description:
            'Enter the recipient’s details and amount. Use saved contacts, bulk upload, or our invoice tool for requests.',
        },
        {
          title: 'Send and track',
          description:
            'Hit send. Money is delivered in seconds. Track status in real time and get instant receipts and notifications.',
        },
      ],
    },
    wallet: {
      title: 'Digital Wallet',
      subtitle: 'Your money, digitally secure',
      description:
        'Store, manage, and spend your money with our secure digital wallet. Support for fiat and crypto, instant top-ups, and rewards. Your finances in one place.',
      icon: <Wallet size={48} />,
      gradient: 'from-teal-500 to-amber-500',
      image:
        'https://images.unsplash.com/photo-1671459923834-47a0b8ed93f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwcGhvbmV8ZW58MXx8fHwxNzcxNDAwMjM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        {
          icon: <Lock size={24} />,
          title: 'Multi-Layer Security',
          description: 'Biometric login, 2FA, and device fingerprinting keep your wallet safe from unauthorized access.',
        },
        {
          icon: <Globe size={24} />,
          title: 'Multi-Currency',
          description: 'Hold and exchange 50+ fiat currencies with live rates and low conversion fees.',
        },
        {
          icon: <TrendingUp size={24} />,
          title: 'Crypto Support',
          description: 'Buy, hold, and send Bitcoin, Ethereum, and top altcoins with built-in portfolio tracking.',
        },
        {
          icon: <Smartphone size={24} />,
          title: 'Mobile First',
          description: 'Full-featured app for iOS and Android. Access balances, pay, and invest on the go.',
        },
        {
          icon: <Target size={24} />,
          title: 'Savings Goals',
          description: 'Set goals and auto-save with round-ups and scheduled transfers from your balance.',
        },
        {
          icon: <Sparkles size={24} />,
          title: 'Cashback & Rewards',
          description: 'Earn up to 5% back on spending and unlock tiered rewards as you grow your balance.',
        },
      ],
      benefits: [
        'Instant top-ups from bank accounts or cards',
        'Automatic savings with round-up and rules',
        'Cashback rewards program with no caps',
        'Virtual and physical debit cards',
        'P2P transfers to any Finflow user instantly',
        'Crypto buy, sell, and hold in one app',
        'Budget insights and spending categories',
        'Premium support and higher limits for verified users',
      ],
      stats: [
        { value: '50+', label: 'Currencies' },
        { value: '5%', label: 'Max cashback' },
        { value: '24/7', label: 'Access' },
        { value: '2FA', label: 'Security' },
      ],
      reviews: [
        {
          quote:
            'I use it for everything—spending, saving, and a bit of crypto. One app instead of five. The cashback is real.',
          author: 'Alex Rivera',
          role: 'Freelance Designer',
          rating: 5,
        },
        {
          quote:
            'Multi-currency without the hassle. Travel and business payments are seamless. Support fixed an issue in an hour.',
          author: 'Priya Sharma',
          role: 'Travel Blogger',
          rating: 5,
        },
        {
          quote:
            'Security was my main concern. Biometric + 2FA and clear transaction history gave me peace of mind.',
          author: 'David Park',
          role: 'Small Business Owner',
          rating: 4,
        },
      ],
      integrations: ['Plaid', 'Coinbase', 'Revolut', 'Wise', 'Google Pay', 'Apple Pay'],
      steps: [
        {
          title: 'Sign up and verify',
          description:
            'Create your account with email or phone. Complete identity verification to unlock full limits and features.',
        },
        {
          title: 'Add funds',
          description:
            'Link a bank account or card and top up instantly. You can also receive money from other users or convert crypto.',
        },
        {
          title: 'Spend, save, and grow',
          description:
            'Use your virtual or physical card, send to friends, set savings goals, or explore crypto—all from one wallet.',
        },
      ],
    },
    cards: {
      title: 'Virtual Cards',
      subtitle: 'Unlimited cards, ultimate control',
      description:
        'Create unlimited virtual and physical cards for online shopping, subscriptions, and secure payments. Set limits, freeze anytime, and eliminate subscription surprises.',
      icon: <CreditCard size={48} />,
      gradient: 'from-amber-500 to-green-500',
      image:
        'https://images.unsplash.com/photo-1750263160611-46a82aea9621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwbW9kZXJuJTIwZGVzaWdufGVufDF8fHx8MTc3MTMxMjkyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        {
          icon: <Zap size={24} />,
          title: 'Instant Creation',
          description: 'Generate new virtual cards in seconds. No waiting—create one per merchant or subscription.',
        },
        {
          icon: <Lock size={24} />,
          title: 'Enhanced Security',
          description: 'Use a unique card per site. If one is compromised, your main account stays protected.',
        },
        {
          icon: <DollarSign size={24} />,
          title: 'Budget Control',
          description: 'Set spending limits per card, per month, or per transaction. Never overspend again.',
        },
        {
          icon: <Users size={24} />,
          title: 'Team Cards',
          description: 'Issue cards to employees with custom limits and categories. Full visibility and controls.',
        },
        {
          icon: <Copy size={24} />,
          title: 'Single-Use Cards',
          description: 'Create disposable cards that work once and then close. Ideal for free trials and one-off purchases.',
        },
        {
          icon: <Layers size={24} />,
          title: 'Merchant Lock',
          description: 'Lock cards to specific merchants so they only work where you choose—no unauthorized charges.',
        },
      ],
      benefits: [
        'Create unlimited virtual cards at no extra cost',
        'Freeze and unfreeze cards instantly from the app',
        'Set merchant and category restrictions per card',
        'Subscription management with renewal alerts',
        'Auto-expire or single-use options',
        'Detailed transaction history and export',
        'Physical cards with same controls, shipped fast',
        'Spend alerts and real-time balance updates',
      ],
      stats: [
        { value: 'Unlimited', label: 'Virtual cards' },
        { value: 'Instant', label: 'Freeze/unfreeze' },
        { value: '100%', label: 'Fraud protection' },
        { value: '50+', label: 'Merchant categories' },
      ],
      reviews: [
        {
          quote:
            'We give every team member a card with their own limit. No more expense reports for small purchases. Huge time saver.',
          author: 'Rachel Green',
          role: 'Head of Ops, ScaleUp',
          rating: 5,
        },
        {
          quote:
            'I use a different virtual card for every subscription. When I cancel, I just kill the card. No more surprise charges.',
          author: 'Tom Bradley',
          role: 'Software Engineer',
          rating: 5,
        },
        {
          quote:
            'Merchant lock saved us when a card number was leaked. Only that one vendor was affected. Brilliant feature.',
          author: 'Nina Patel',
          role: 'Finance Manager',
          rating: 4,
        },
      ],
      integrations: ['Expensify', 'NetSuite', 'Notion', 'Asana', 'Adobe', 'AWS'],
      steps: [
        {
          title: 'Create a card',
          description:
            'In the app or dashboard, tap Create Card. Choose virtual or physical, set a name and optional spending limit.',
        },
        {
          title: 'Set rules (optional)',
          description:
            'Add merchant or category restrictions, single-use or expiry date. Lock the card to one vendor for max security.',
        },
        {
          title: 'Use and manage',
          description:
            'Use the card details for payments. Freeze, adjust limits, or close the card anytime. View all activity in one place.',
        },
      ],
    },
    analytics: {
      title: 'Smart Analytics',
      subtitle: 'AI-powered financial insights',
      description:
        'Get intelligent insights into your spending, track budgets in real time, and make smarter decisions with AI-driven forecasts and beautiful reports. One dashboard for all your money.',
      icon: <PieChart size={48} />,
      gradient: 'from-rose-500 to-emerald-500',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzcxMzYzMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        {
          icon: <BarChart3 size={24} />,
          title: 'Visual Reports',
          description: 'Custom dashboards with charts, trends, and comparisons. Filter by date, category, or account.',
        },
        {
          icon: <TrendingUp size={24} />,
          title: 'Spending Trends',
          description: 'AI-powered predictions and seasonality. See where you’ll be in 3, 6, or 12 months.',
        },
        {
          icon: <PieChart size={24} />,
          title: 'Category Insights',
          description: 'Automatic categorization with smart rules. Drill down by merchant, tag, or custom category.',
        },
        {
          icon: <Target size={24} />,
          title: 'Budget Tracking',
          description: 'Set budgets per category and get real-time alerts when you approach or exceed limits.',
        },
        {
          icon: <FileText size={24} />,
          title: 'Tax Ready',
          description: 'Export by category, run tax estimates, and generate reports for your accountant or software.',
        },
        {
          icon: <Bell size={24} />,
          title: 'Smart Alerts',
          description: 'Unusual spending, large transactions, and goal milestones. Configure alerts your way.',
        },
      ],
      benefits: [
        'Real-time spending and income insights across all linked accounts',
        'Monthly and custom-period financial reports',
        'AI budget recommendations based on your behavior',
        'Savings and goal tracking with progress visualization',
        'Tax estimation and category exports for filing',
        'Export to CSV, PDF, or direct sync with accounting tools',
        'Multi-account and multi-entity views for businesses',
        'Custom categories, tags, and rules for accurate tracking',
      ],
      stats: [
        { value: 'Real-time', label: 'Sync' },
        { value: '50+', label: 'Categories' },
        { value: 'AI', label: 'Forecasts' },
        { value: '1-click', label: 'Export' },
      ],
      reviews: [
        {
          quote:
            'We replaced three different tools with Finflow Analytics. One dashboard, all our accounts, and the AI forecasts are surprisingly accurate.',
          author: 'Chris Wong',
          role: 'CFO, DataDrive',
          rating: 5,
        },
        {
          quote:
            'Finally, analytics that don’t require a finance degree. The reports are beautiful and our investors love them.',
          author: 'Elena Vasquez',
          role: 'Startup Founder',
          rating: 5,
        },
        {
          quote:
            'Budget alerts have changed how I spend. I know exactly when I’m close to a limit. No more overspending.',
          author: 'Michael Torres',
          role: 'Freelancer',
          rating: 4,
        },
      ],
      integrations: ['QuickBooks', 'Xero', 'Plaid', 'Stripe', 'Excel', 'Google Sheets'],
      steps: [
        {
          title: 'Connect your accounts',
          description:
            'Link bank accounts, cards, and payment platforms via secure connections. Data syncs automatically and stays encrypted.',
        },
        {
          title: 'Review and categorize',
          description:
            'Transactions are categorized automatically. Adjust categories, add tags, and set rules for recurring items.',
        },
        {
          title: 'Explore insights and act',
          description:
            'Use dashboards and reports to spot trends, set budgets, and track goals. Export when you need to share or file taxes.',
        },
      ],
    },
  };

  const product = products[productId as ProductId] ?? products.payments;

  return (
    <div className="bg-white pt-16" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* 1. Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`inline-flex w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-3xl items-center justify-center text-white mb-6 shadow-lg`}
              >
                {product.icon}
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-4 font-bold tracking-tight"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {product.title}
              </h1>
              <p
                className="text-2xl text-teal-700 mb-6 font-medium"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {product.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`bg-gradient-to-r ${product.gradient} text-white px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-xl hover:shadow-2xl`}
                >
                  Get Started
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl border-2 border-emerald-600/30 transition-all hover:border-emerald-600/50"
                >
                  Watch Demo
                </motion.button>
              </div>
              {/* Hero stat badges */}
              <div className="flex flex-wrap gap-3">
                {product.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-white/80 backdrop-blur rounded-xl px-4 py-2 shadow-md border border-emerald-100"
                  >
                    <span className="text-emerald-700 font-bold text-lg">{stat.value}</span>
                    <span className="text-gray-600 text-sm ml-1">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/50">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="py-8 bg-white border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {product.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Features Grid (3x2) */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to get the most out of {product.title}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-50 hover:border-emerald-200 hover:shadow-xl transition-all"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center text-white mb-5`}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-xl text-gray-900 mb-2 font-semibold"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Step-by-Step Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              How to use {product.title}
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </motion.div>

          <div className="space-y-10">
            {product.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="flex gap-6 items-start"
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${product.gradient} text-white flex items-center justify-center text-xl font-bold shadow-lg`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {index + 1}
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold text-gray-900 mb-2"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              What you get
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All the benefits of {product.title} in one place
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-md border border-emerald-50 hover:border-emerald-200 transition-colors"
              >
                <CheckCircle className="text-emerald-600 flex-shrink-0" size={28} />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              What our customers say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from teams and individuals using {product.title}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {product.reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-emerald-50"
              >
                <Quote className="text-amber-500/60 w-10 h-10 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {review.author}
                  </div>
                  <div className="text-sm text-teal-600">{review.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Integrations */}
      <section className="py-20 bg-gray-50 border-y border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 mb-4">
              <Plug size={28} />
            </div>
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Works with your favorite tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect {product.title} to the apps you already use
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {product.integrations.map((name, i) => (
              <div
                key={i}
                className="bg-white rounded-xl px-8 py-4 shadow-md border border-emerald-100 font-semibold text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl text-white mb-6 font-bold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Ready to get started?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join thousands of users already using {product.title}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-amber-500 text-gray-900 px-10 py-5 rounded-xl font-semibold text-lg shadow-2xl hover:bg-amber-400 transition-colors"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Start free trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
