import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Shield,
  Users,
  TrendingUp,
  Globe,
  Zap,
  Heart,
  Lightbulb,
  Eye,
  Award,
  Briefcase,
  MessageCircle,
  Calendar,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const MISSION_IMAGE =
  'https://images.unsplash.com/photo-1670851050245-d861fd433d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NzE0MDAyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080';

const timeline = [
  {
    year: '2020',
    title: 'Founded in San Francisco',
    description: 'Three fintech veterans came together to build the future of digital finance.',
  },
  {
    year: '2021',
    title: 'Beta launch & seed round',
    description: 'Launched beta to 10K users in the first month and raised $5M in seed funding.',
  },
  {
    year: '2022',
    title: 'Series A & global expansion',
    description: 'Raised $25M Series A, expanded to 50 countries, and launched virtual cards.',
  },
  {
    year: '2023',
    title: 'Scale & trust',
    description: 'Reached 250K users, launched AI-powered analytics, and achieved SOC 2 certification.',
  },
  {
    year: '2024',
    title: 'Series B & growth',
    description: 'Raised $80M Series B, expanded to 150 countries, and crossed 500K users.',
  },
  {
    year: '2025',
    title: 'Market leadership',
    description: 'Processed $4.2B in transaction volume and launched dedicated business plans.',
  },
];

const stats = [
  { icon: Users, value: '750K+', label: 'Users' },
  { icon: Globe, value: '195+', label: 'Countries' },
  { icon: TrendingUp, value: '$4.2B+', label: 'Processed' },
  { icon: Zap, value: '99.99%', label: 'Uptime' },
  { icon: Award, value: '4.9★', label: 'Rating' },
  { icon: Briefcase, value: '50+', label: 'Currencies' },
];

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description:
      'We use bank-grade encryption, multi-factor authentication, and continuous monitoring. Your assets and data are protected with the same standards trusted by leading financial institutions worldwide.',
  },
  {
    icon: Heart,
    title: 'Customer Obsessed',
    description:
      'Every feature we ship starts with user research. We listen, iterate, and put your experience at the center of every decision—from support response times to product design.',
  },
  {
    icon: Lightbulb,
    title: 'Relentless Innovation',
    description:
      'We invest heavily in R&D and stay ahead of regulatory and technological shifts. Our roadmap is driven by real-world problems, not trends.',
  },
  {
    icon: Eye,
    title: 'Radical Transparency',
    description:
      'No hidden fees, no fine print. We publish clear pricing, explain our decisions, and communicate openly with users and regulators alike.',
  },
  {
    icon: Globe,
    title: 'Global Mindset',
    description:
      'We build for 195+ countries from day one. Local payment methods, currencies, and compliance are core to our product, not an afterthought.',
  },
  {
    icon: Award,
    title: 'Team Excellence',
    description:
      'We hire the best and give them ownership. Our culture rewards collaboration, learning, and high standards in everything we do.',
  },
];

const leadership = [
  {
    initials: 'AM',
    name: 'Arjun Mehta',
    role: 'Co-Founder & CEO',
    bio: 'Former VP at Goldman Sachs with 15+ years in fintech.',
  },
  {
    initials: 'SC',
    name: 'Sarah Chen',
    role: 'Co-Founder & CTO',
    bio: 'Ex-Google engineer, built payment systems at scale.',
  },
  {
    initials: 'MW',
    name: 'Marcus Williams',
    role: 'Co-Founder & CPO',
    bio: 'Design leader from Stripe, passionate about UX.',
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'VP of Engineering',
    bio: 'Previously led engineering at Revolut.',
  },
  {
    initials: 'JO',
    name: 'James O\'Brien',
    role: 'VP of Marketing',
    bio: 'Growth expert from PayPal and Square.',
  },
  {
    initials: 'ER',
    name: 'Elena Rodriguez',
    role: 'Head of Compliance',
    bio: 'Regulatory expert, former SEC advisor.',
  },
];

const awards = [
  { title: 'Best Fintech Startup 2024', source: 'TechCrunch' },
  { title: 'Top 50 Innovators', source: 'Forbes' },
  { title: 'Excellence in Security', source: 'FinTech Awards' },
  { title: 'Best Mobile Banking App', source: 'App Store' },
  { title: 'PCI DSS Level 1 Certified', source: 'Certification' },
  { title: 'SOC 2 Type II Compliant', source: 'Certification' },
];

const offices = [
  { city: 'San Francisco (HQ)', address: '123 Financial District, CA 94111' },
  { city: 'London', address: '45 Canary Wharf, E14 5AB' },
  { city: 'Singapore', address: '78 Marina Bay, 018956' },
  { city: 'Mumbai', address: '90 BKC, Mumbai 400051' },
];

const careers = [
  { role: 'Senior Backend Engineer', location: 'San Francisco', type: 'Full-time' },
  { role: 'Product Designer', location: 'London', type: 'Full-time' },
  { role: 'Data Scientist', location: 'Remote', type: 'Full-time' },
  { role: 'Marketing Manager', location: 'Singapore', type: 'Full-time' },
  { role: 'Customer Success Lead', location: 'Mumbai', type: 'Full-time' },
];

export function FinTechAboutPage() {
  return (
    <div className="bg-white pt-16 overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-emerald-400 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-amber-400 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-teal-400 blur-3xl"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              About FinFlow
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Reimagining digital finance for the modern world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl text-gray-900 mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Our Mission
              </h2>
              <div
                className="space-y-4 text-gray-600 leading-relaxed text-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <p>
                  FinFlow was founded in San Francisco in 2020 by three fintech veterans who shared a
                  simple belief: managing money should be transparent, secure, and empowering. We started
                  with a small team and a big vision—to put best-in-class financial tools in everyone’s
                  hands, regardless of where they live or how much they earn.
                </p>
                <p>
                  Our mission is to make digital finance accessible and trustworthy. We combine
                  cutting-edge technology with a relentless focus on user experience, so you can send
                  money, track spending, and plan for the future without friction or fear. Every product
                  decision is guided by our commitment to clarity, security, and fairness.
                </p>
                <p>
                  Today we serve over 750,000 users across 195 countries and have processed more than
                  $4.2 billion in transactions. We’re just getting started—and we’re building the
                  infrastructure for the next decade of global finance.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-2 ring-emerald-100">
                <ImageWithFallback src={MISSION_IMAGE} alt="FinFlow team at work" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Our Journey
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Key milestones from day one to today
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-amber-500 -translate-x-1/2 hidden md:block" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 mb-12 last:mb-0 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100/80 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white">
                        <Calendar size={20} />
                      </div>
                      <span
                        className="text-2xl font-bold text-emerald-700"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <h3
                      className="text-xl text-gray-900 mb-2"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-white shadow hidden md:block z-10" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="text-center text-white"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <stat.icon size={28} />
                  </div>
                </div>
                <div
                  className="text-3xl lg:text-4xl font-bold mb-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-teal-100" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Core Values
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mb-6">
                  <value.icon size={32} />
                </div>
                <h3
                  className="text-xl text-gray-900 mb-3"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Leadership Team
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              The people building the future of FinFlow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-amber-500 flex items-center justify-center text-white text-xl font-bold mb-4 shadow-md">
                  {member.initials}
                </div>
                <h3
                  className="text-lg text-gray-900 mb-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {member.name}
                </h3>
                <p className="text-emerald-700 font-medium text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Awards & Recognition
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Trusted by industry and users alike
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-lg hover:border-emerald-100 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <div
                    className="text-gray-900 font-semibold"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {award.title}
                  </div>
                  <div className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {award.source}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Office Locations
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We’re building a global team, one hub at a time
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div
                    className="text-gray-900 font-semibold mb-1"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {office.city}
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {office.address}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Join Our Team
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We’re a team of builders, thinkers, and doers. If you care about great product, clear
              communication, and making finance work for everyone, we’d love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((job, index) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all flex flex-col"
              >
                <h3
                  className="text-lg text-gray-900 mb-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {job.role}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>{job.type}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-medium hover:from-emerald-700 hover:to-teal-700 transition-all"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Apply
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Get In Touch
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Have questions? We’re here to help
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100"
            >
              <h3
                className="text-2xl text-gray-900 mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Send us a message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm text-gray-700 mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm text-gray-700 mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm text-gray-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm text-gray-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors resize-none bg-white"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-xl"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Send Message
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3
                  className="text-2xl text-gray-900 mb-6"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div
                        className="text-gray-900 mb-1"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        Email
                      </div>
                      <div className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        support@finflow.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div
                        className="text-gray-900 mb-1"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        Phone
                      </div>
                      <div className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        +1 (800) 555-0199
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div
                        className="text-gray-900 mb-1"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        Headquarters
                      </div>
                      <div className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        123 Financial District
                        <br />
                        San Francisco, CA 94111
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={28} />
                  <h3 className="text-2xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    24/7 Support
                  </h3>
                </div>
                <p className="text-teal-100 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our support team is available around the clock to help you with any questions or
                  issues.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-emerald-800 px-6 py-3 rounded-xl font-medium hover:bg-amber-50 transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Start Live Chat
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-800">
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
              Join us on our journey
            </h2>
            <p
              className="text-xl text-emerald-100 mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Be part of the future of digital finance
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-amber-500 text-gray-900 px-10 py-5 rounded-xl hover:bg-amber-400 transition-all text-lg font-semibold shadow-2xl"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
