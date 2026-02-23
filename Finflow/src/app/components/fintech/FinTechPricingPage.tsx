'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Check,
  X,
  Shield,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out and light personal use',
    features: [
      { text: '5 transactions per day', included: true },
      { text: 'Basic analytics', included: true },
      { text: '1 virtual card', included: true },
      { text: 'Mobile app', included: true },
      { text: 'Email support', included: true },
      { text: 'Community access', included: true },
      { text: 'Unlimited transactions', included: false },
      { text: 'Advanced analytics', included: false },
      { text: 'API access', included: false },
    ],
    gradient: 'from-gray-500 to-gray-600',
    popular: false,
  },
  {
    name: 'Personal',
    price: '$9',
    period: 'per month',
    description: 'For individuals who need more power and flexibility',
    features: [
      { text: 'Everything in Starter', included: true },
      { text: 'Unlimited transactions', included: true },
      { text: '5 virtual cards', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Export CSV', included: true },
      { text: 'Multi-currency (10)', included: true },
      { text: 'Team members', included: false },
      { text: 'API access', included: false },
    ],
    gradient: 'from-teal-500 to-teal-600',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$24',
    period: 'per month',
    description: 'For freelancers and growing teams',
    features: [
      { text: 'Everything in Personal', included: true },
      { text: 'Unlimited virtual cards', included: true },
      { text: 'AI insights', included: true },
      { text: 'Priority chat support', included: true },
      { text: 'Export CSV & PDF', included: true },
      { text: 'Multi-currency (50+)', included: true },
      { text: 'Team (up to 3)', included: true },
      { text: 'API access', included: true },
      { text: 'Custom budgets', included: true },
    ],
    gradient: 'from-emerald-500 to-emerald-600',
    popular: true,
  },
  {
    name: 'Business',
    price: '$79',
    period: 'per month',
    description: 'For organizations that need scale and control',
    features: [
      { text: 'Everything in Professional', included: true },
      { text: 'Unlimited team members', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Role permissions', included: true },
      { text: '24/7 phone support', included: true },
      { text: 'SLA guarantee', included: true },
      { text: 'White-label option', included: true },
      { text: 'Audit logs', included: true },
    ],
    gradient: 'from-rose-500 to-pink-500',
    popular: false,
  },
];

const COMPARISON_FEATURES = [
  { name: 'Transactions', starter: '5/day', personal: 'Unlimited', professional: 'Unlimited', business: 'Unlimited' },
  { name: 'Virtual Cards', starter: '1', personal: '5', professional: 'Unlimited', business: 'Unlimited' },
  { name: 'Analytics', starter: 'Basic', personal: 'Advanced', professional: 'Advanced + AI', business: 'Advanced + AI' },
  { name: 'Support', starter: 'Email', personal: 'Priority email', professional: 'Priority chat', business: '24/7 phone' },
  { name: 'Export', starter: '—', personal: 'CSV', professional: 'CSV, PDF', business: 'CSV, PDF' },
  { name: 'Multi-currency', starter: '—', personal: '10', professional: '50+', business: '50+' },
  { name: 'Team Members', starter: '—', personal: '—', professional: 'Up to 3', business: 'Unlimited' },
  { name: 'API Access', starter: false, personal: false, professional: true, business: true },
  { name: 'Custom Integrations', starter: false, personal: false, professional: false, business: true },
  { name: 'White-label', starter: false, personal: false, professional: false, business: true },
  { name: 'SLA Guarantee', starter: false, personal: false, professional: false, business: true },
  { name: 'Audit Logs', starter: false, personal: false, professional: false, business: true },
];

const TRUSTED_BY = ['Shopify', 'Airbnb', 'Slack', 'Notion', 'Linear', 'Vercel'];

const TESTIMONIALS = [
  {
    quote:
      'The Professional plan pays for itself within a week. The AI insights alone saved us hours of manual reporting.',
    author: 'David Park',
    role: 'CFO at StartupXYZ',
  },
  {
    quote:
      'We switched from a competitor and saved 60% on our finance stack. Same features, transparent pricing, better support.',
    author: 'Lisa Thompson',
    role: 'Finance Director at GrowthCo',
  },
  {
    quote:
      'The free plan is more powerful than most paid alternatives. I run my entire freelance business on Starter.',
    author: 'Raj Patel',
    role: 'Freelance Developer',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Can I change plans anytime?',
    a: 'Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Starter is free forever. Personal, Professional, and Business plans include a 14-day free trial. No card required for Starter.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, and SEPA direct debit in supported regions.',
  },
  {
    q: 'Can I cancel my subscription?',
    a: 'Yes. You can cancel anytime from your account settings. You keep access until the end of your billing period. No cancellation fees.',
  },
  {
    q: 'Do you offer discounts for nonprofits?',
    a: 'Yes. Registered nonprofits and educational institutions can get up to 50% off paid plans. Contact sales with your details.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. We use bank-level encryption (AES-256), SOC 2 Type II compliance, and never sell your data. Your data is stored in secure, geographically redundant data centers.',
  },
  {
    q: 'Can I get a custom enterprise plan?',
    a: 'Yes. For large teams or custom requirements, we offer tailored enterprise plans with dedicated support, custom SLAs, and volume pricing. Contact our sales team.',
  },
  {
    q: 'What happens when I exceed plan limits?',
    a: 'We’ll notify you before you hit limits. You can upgrade anytime, or we can suggest optimizations. Overage options are available for Business plans.',
  },
];

export function FinTechPricingPage() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const displayPrice = (base: string, monthlyAmount?: number) => {
    if (base === '$0') return { price: '$0', period: 'forever' };
    if (!yearly || !monthlyAmount) return { price: base, period: 'per month' };
    const yearlyTotal = monthlyAmount * 12 * 0.8;
    const monthly = Math.round(yearlyTotal / 12);
    return { price: `$${monthly}`, period: 'per month (billed yearly)' };
  };

  return (
    <div className="bg-white pt-16" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* 1. Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Simple, transparent pricing
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Choose the plan that fits your needs. All plans include our core features—scale as you grow.
            </p>
            <div className="inline-flex items-center gap-1 bg-white rounded-full p-2 shadow-lg ring-1 ring-emerald-600/20">
              <button
                onClick={() => setYearly(false)}
                className={`px-6 py-2.5 rounded-full transition-colors font-medium ${yearly ? 'text-gray-600 hover:text-gray-900' : 'bg-emerald-600 text-white'}`}
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-6 py-2.5 rounded-full transition-colors font-medium flex items-center gap-1.5 ${yearly ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Yearly
                <span className="text-amber-500 text-sm font-semibold">(Save 20%)</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Pricing Cards (4 plans) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {PLANS.map((plan, index) => {
              const amounts: Record<string, number> = { '$9': 9, '$24': 24, '$79': 79 };
              const { price, period } = displayPrice(plan.price, amounts[plan.price]);
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br ${plan.gradient} bg-opacity-5 border border-gray-100 ${plan.popular ? 'ring-2 ring-emerald-600 scale-105 z-10 bg-white shadow-emerald-500/20' : 'bg-white'}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                        POPULAR
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3
                      className="text-2xl text-gray-900 mb-2"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-4xl lg:text-5xl text-gray-900"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {price}
                      </span>
                      <span className="text-gray-600 text-sm">{period}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl mb-8 font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30 hover:from-emerald-700 hover:to-teal-700'
                        : plan.gradient.includes('gray')
                          ? 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                          : `bg-gradient-to-r ${plan.gradient} text-white hover:opacity-95`
                    }`}
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Get Started
                  </motion.button>

                  <div className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="text-emerald-600 flex-shrink-0 mt-0.5" size={18} />
                        ) : (
                          <X className="text-gray-300 flex-shrink-0 mt-0.5" size={18} />
                        )}
                        <span
                          className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Feature Comparison Table */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Compare plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how features stack up across Starter, Personal, Professional, and Business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-lg"
          >
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/80">
                  <th
                    className="py-4 pl-6 pr-4 text-sm font-semibold text-gray-900"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Feature
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-gray-700">Starter</th>
                  <th className="py-4 px-4 text-sm font-semibold text-teal-600">Personal</th>
                  <th className="py-4 px-4 text-sm font-semibold text-emerald-600">Professional</th>
                  <th className="py-4 px-4 text-sm font-semibold text-rose-600">Business</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-emerald-50/30 transition-colors"
                  >
                    <td className="py-3 pl-6 pr-4 text-sm font-medium text-gray-800">
                      {row.name}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="text-emerald-600 inline" size={18} />
                        ) : (
                          <X className="text-gray-300 inline" size={18} />
                        )
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {typeof row.personal === 'boolean' ? (
                        row.personal ? (
                          <Check className="text-emerald-600 inline" size={18} />
                        ) : (
                          <X className="text-gray-300 inline" size={18} />
                        )
                      ) : (
                        row.personal
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {typeof row.professional === 'boolean' ? (
                        row.professional ? (
                          <Check className="text-emerald-600 inline" size={18} />
                        ) : (
                          <X className="text-gray-300 inline" size={18} />
                        )
                      ) : (
                        row.professional
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {typeof row.business === 'boolean' ? (
                        row.business ? (
                          <Check className="text-emerald-600 inline" size={18} />
                        ) : (
                          <X className="text-gray-300 inline" size={18} />
                        )
                      ) : (
                        row.business
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* 4. Money-Back Guarantee */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mb-6"
          >
            <Shield size={32} />
          </motion.div>
          <h2
            className="text-3xl md:text-4xl text-gray-900 mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            30-Day Money-Back Guarantee
          </h2>
          <p className="text-lg text-gray-600">
            Try any paid plan risk-free. If you're not satisfied within 30 days, we'll refund you in
            full. No questions asked.
          </p>
        </div>
      </section>

      {/* 5. Trusted By */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-10"
          >
            Trusted by 750K+ users worldwide
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {TRUSTED_BY.map((company, i) => (
              <span
                key={i}
                className="text-xl md:text-2xl font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {company}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Loved for value
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our customers say about pricing and ROI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-amber-50/30 rounded-2xl p-8 border border-emerald-100/50 shadow-sm"
              >
                <p className="text-gray-700 mb-6 italic">"{t.quote}"</p>
                <div>
                  <p
                    className="font-semibold text-gray-900"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {t.author}
                  </p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 px-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span
                    className="font-semibold text-gray-900 pr-4"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-4"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Enterprise */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl text-white mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Need a custom solution?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Enterprise plans include custom contracts, dedicated success managers, on-premise
              options, and volume pricing. Tell us your requirements and we'll tailor a plan.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-colors mb-8"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <MessageCircle size={20} />
              Contact Sales
            </motion.button>
            <div className="flex flex-wrap justify-center gap-8 text-teal-100">
              <a href="tel:+18005551234" className="inline-flex items-center gap-2 hover:text-white">
                <Phone size={18} />
                +1 (800) 555-1234
              </a>
              <a href="mailto:enterprise@finflow.com" className="inline-flex items-center gap-2 hover:text-white">
                <Mail size={18} />
                enterprise@finflow.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-20 bg-gradient-to-b from-teal-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl text-white mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Still have questions?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Our team is here to help you choose the right plan and get started.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-amber-500 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition-colors ring-2 ring-emerald-600"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
