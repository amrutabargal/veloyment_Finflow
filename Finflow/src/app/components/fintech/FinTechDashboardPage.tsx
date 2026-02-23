import { motion } from 'motion/react';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Download,
  Calendar,
  Send,
  Receipt,
  FileText,
  Wallet,
  Target,
  Zap,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

export function FinTechDashboardPage() {
  const incomeVsSpendingData = [
    { month: 'Jan', income: 5500, spending: 4200 },
    { month: 'Feb', income: 5500, spending: 3800 },
    { month: 'Mar', income: 6200, spending: 4500 },
    { month: 'Apr', income: 5800, spending: 3900 },
    { month: 'May', income: 6500, spending: 5200 },
    { month: 'Jun', income: 6200, spending: 4800 },
    { month: 'Jul', income: 7100, spending: 5100 },
    { month: 'Aug', income: 6800, spending: 4600 },
    { month: 'Sep', income: 7500, spending: 5400 },
    { month: 'Oct', income: 7200, spending: 4900 },
    { month: 'Nov', income: 8000, spending: 5600 },
    { month: 'Dec', income: 8450, spending: 5280 },
  ];

  const categoryPieData = [
    { name: 'Food & Dining', value: 1450, color: '#059669' },
    { name: 'Shopping', value: 1180, color: '#14b8a6' },
    { name: 'Transport', value: 620, color: '#d97706' },
    { name: 'Entertainment', value: 480, color: '#f43f5e' },
    { name: 'Bills', value: 950, color: '#f59e0b' },
    { name: 'Healthcare', value: 320, color: '#8b5cf6' },
    { name: 'Education', value: 180, color: '#ec4899' },
    { name: 'Subscriptions', value: 100, color: '#6366f1' },
  ];

  const weeklySpendingData = [
    { week: 'Week 1', amount: 1250 },
    { week: 'Week 2', amount: 1480 },
    { week: 'Week 3', amount: 1120 },
    { week: 'Week 4', amount: 1430 },
  ];

  const balanceCards = [
    {
      title: 'Total Balance',
      amount: '$24,580.50',
      change: '+12.5%',
      trend: 'up' as const,
      icon: <DollarSign size={24} />,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Monthly Income',
      amount: '$8,450.00',
      change: '+8.2%',
      trend: 'up' as const,
      icon: <TrendingUp size={24} />,
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'Monthly Spending',
      amount: '$5,280.00',
      change: '-3.1%',
      trend: 'down' as const,
      icon: <CreditCard size={24} />,
      gradient: 'from-amber-500 to-amber-600',
    },
    {
      title: 'Savings Rate',
      amount: '37.5%',
      change: '+5.4%',
      trend: 'up' as const,
      icon: <TrendingUp size={24} />,
      gradient: 'from-teal-500 to-emerald-600',
    },
  ];

  const savingsGoals = [
    { name: 'Emergency Fund', current: 8500, target: 10000, targetDate: 'Dec 2026' },
    { name: 'Vacation Trip', current: 2400, target: 5000, targetDate: 'Jun 2026' },
    { name: 'New Laptop', current: 800, target: 1500, targetDate: 'Apr 2026' },
  ];

  const quickActions = [
    { label: 'Send Money', icon: <Send size={22} /> },
    { label: 'Request Payment', icon: <Receipt size={22} /> },
    { label: 'Pay Bills', icon: <FileText size={22} /> },
    { label: 'Add Funds', icon: <Wallet size={22} /> },
  ];

  const upcomingBills = [
    { name: 'Netflix', amount: 15.99, due: 'Feb 22' },
    { name: 'Spotify', amount: 9.99, due: 'Feb 25' },
    { name: 'Electricity', amount: 85.0, due: 'Mar 1' },
    { name: 'Internet', amount: 49.99, due: 'Mar 5' },
    { name: 'Gym', amount: 45.0, due: 'Mar 8' },
  ];

  const transactions = [
    { id: 1, name: 'Amazon', category: 'Shopping', amount: -142.5, date: 'Feb 18, 2026', status: 'completed' as const, icon: '🛒' },
    { id: 2, name: 'Salary', category: 'Income', amount: 5500, date: 'Feb 15, 2026', status: 'completed' as const, icon: '💰' },
    { id: 3, name: 'Netflix', category: 'Entertainment', amount: -15.99, date: 'Feb 14, 2026', status: 'completed' as const, icon: '🎬' },
    { id: 4, name: 'Uber', category: 'Transport', amount: -28.5, date: 'Feb 13, 2026', status: 'completed' as const, icon: '🚗' },
    { id: 5, name: 'Grocery', category: 'Food', amount: -85.2, date: 'Feb 12, 2026', status: 'completed' as const, icon: '🛒' },
    { id: 6, name: 'Freelance', category: 'Income', amount: 1200, date: 'Feb 10, 2026', status: 'pending' as const, icon: '💼' },
    { id: 7, name: 'Coffee', category: 'Food', amount: -12.5, date: 'Feb 10, 2026', status: 'completed' as const, icon: '☕' },
    { id: 8, name: 'Gym', category: 'Health', amount: -45, date: 'Feb 8, 2026', status: 'completed' as const, icon: '💪' },
    { id: 9, name: 'Dividend', category: 'Investment', amount: 85.3, date: 'Feb 7, 2026', status: 'completed' as const, icon: '📈' },
    { id: 10, name: 'Restaurant', category: 'Food', amount: -67.8, date: 'Feb 6, 2026', status: 'completed' as const, icon: '🍽️' },
    { id: 11, name: 'Gas Station', category: 'Transport', amount: -42, date: 'Feb 5, 2026', status: 'completed' as const, icon: '⛽' },
    { id: 12, name: 'Refund', category: 'Other', amount: 25.99, date: 'Feb 4, 2026', status: 'completed' as const, icon: '↩️' },
  ];

  const holdings = [
    { symbol: 'AAPL', shares: 15, value: 2850 },
    { symbol: 'GOOGL', shares: 5, value: 3200 },
    { symbol: 'TSLA', shares: 10, value: 2400 },
    { symbol: 'ETFs', shares: null, value: 4000 },
  ];

  return (
    <div className="bg-gray-50 pt-16 min-h-screen">
      {/* 1. Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl text-gray-900 mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Dashboard
              </h1>
              <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                Welcome back, Alex!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex gap-3"
            >
              <button className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Calendar size={18} />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>Date filter</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                <Download size={18} />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>Export</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 2. Balance Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {balanceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center text-white`}>
                  {card.icon}
                </div>
                <div className={`flex items-center gap-1 text-sm ${card.trend === 'up' ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {card.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>{card.change}</span>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                {card.title}
              </div>
              <div className="text-3xl text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {card.amount}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Income vs Spending Area Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl text-gray-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Income vs Spending
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Jan – Dec 2025
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={20} />
            </button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={incomeVsSpendingData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" style={{ fontFamily: 'Inter, sans-serif' }} />
                <YAxis stroke="#9ca3af" style={{ fontFamily: 'Inter, sans-serif' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
                <Legend wrapperStyle={{ fontFamily: 'Inter, sans-serif' }} />
                <Area type="monotone" dataKey="income" name="Income" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
                <Area type="monotone" dataKey="spending" name="Spending" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorSpending)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* 4. Category Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Spending by Category
              </h2>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={20} />
              </button>
            </div>
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryPieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {categoryPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => [`$${value}`, '']}
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {categoryPieData.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                    <span className="text-sm text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {category.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    ${category.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-6">
            {/* 5. Weekly Spending Bar Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Weekly Spending
                </h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={20} />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklySpendingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="week" stroke="#9ca3af" style={{ fontFamily: 'Inter, sans-serif' }} />
                    <YAxis stroke="#9ca3af" style={{ fontFamily: 'Inter, sans-serif' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '12px',
                        fontFamily: 'Inter, sans-serif',
                      }}
                      formatter={(value: number) => [`$${value}`, 'Spent']}
                    />
                    <Bar dataKey="amount" fill="#059669" radius={[8, 8, 0, 0]} name="Spent" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* 6. Savings Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Savings Goals
                </h2>
                <Target className="text-emerald-600" size={24} />
              </div>
              <div className="space-y-5">
                {savingsGoals.map((goal, index) => {
                  const pct = Math.round((goal.current / goal.target) * 100);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>{goal.name}</span>
                        <span className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                          ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()} ({pct}%)
                        </span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Target: {goal.targetDate}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* 7. Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-8"
        >
          <h2 className="text-2xl text-gray-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">
                  {action.icon}
                </div>
                <span className="text-gray-800 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {action.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* 8. Upcoming Bills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Upcoming Bills
              </h2>
              <Zap className="text-amber-500" size={24} />
            </div>
            <div className="space-y-4">
              {upcomingBills.map((bill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + index * 0.05 }}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <span className="text-gray-900 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{bill.name}</span>
                    <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Due {bill.due}</p>
                  </div>
                  <span className="text-lg text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    ${bill.amount.toFixed(2)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 9. Recent Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl text-gray-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Recent Transactions
                </h2>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Your latest financial activity
                </p>
              </div>
              <button className="text-emerald-600 hover:text-emerald-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                View All
              </button>
            </div>
            <div className="space-y-1 max-h-96 overflow-y-auto">
              {transactions.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.03 }}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                      {transaction.icon}
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {transaction.name}
                      </div>
                      <div className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {transaction.category} • {transaction.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-lg ${transaction.amount > 0 ? 'text-emerald-600' : 'text-gray-900'}`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </div>
                    <div
                      className={`text-sm ${
                        transaction.status === 'completed'
                          ? 'text-emerald-600'
                          : transaction.status === 'pending'
                            ? 'text-amber-600'
                            : 'text-red-600'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {transaction.status === 'completed' ? '✓ Completed' : transaction.status === 'pending' ? '⏱ Pending' : '✕ Failed'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 10. Investment Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl text-gray-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Investment Portfolio
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Total invested: $12,450 • Returns: +$1,832 (+14.7%)
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl text-emerald-600 font-semibold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                +14.7%
              </span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {holdings.map((holding, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 + index * 0.05 }}
                className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {holding.symbol}
                  </span>
                  {holding.shares != null && (
                    <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {holding.shares} shares
                    </span>
                  )}
                </div>
                <span className="text-xl text-emerald-700" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  ${holding.value.toLocaleString()}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
