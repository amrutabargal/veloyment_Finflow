import { motion } from 'motion/react';
import { ArrowRight, Package, Warehouse, Truck, MapPin, Users, Shield, Clock, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const services = [
    {
      icon: <Truck size={40} />,
      title: 'Freight Solutions',
      description: 'End-to-end freight management for air, sea, and land transportation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Warehouse size={40} />,
      title: 'Warehousing',
      description: 'State-of-the-art storage facilities with advanced inventory management.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <Package size={40} />,
      title: 'Last-Mile Delivery',
      description: 'Fast and reliable delivery to your customers\' doorsteps.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const industries = [
    { name: 'E-Commerce', icon: '🛒' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Retail', icon: '🏬' },
    { name: 'Technology', icon: '💻' },
    { name: 'Food & Beverage', icon: '🍕' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Pickup',
      description: 'We collect your shipment from your location with real-time scheduling.',
      icon: <MapPin size={24} />
    },
    {
      step: '02',
      title: 'Transit',
      description: 'Your goods are transported via the most efficient route with live tracking.',
      icon: <Truck size={24} />
    },
    {
      step: '03',
      title: 'Delivery',
      description: 'Safe and timely delivery to the destination with proof of delivery.',
      icon: <Package size={24} />
    }
  ];

  const testimonials = [
    {
      company: 'TechCorp Industries',
      quote: 'LogiFlow has transformed our supply chain operations. Their technology platform gives us complete visibility and control.',
      author: 'Sarah Johnson',
      role: 'Supply Chain Director'
    },
    {
      company: 'Global Retail Co.',
      quote: 'Exceptional service and reliability. LogiFlow handles our complex logistics needs with ease and professionalism.',
      author: 'Michael Chen',
      role: 'Operations Manager'
    },
    {
      company: 'MediSupply Solutions',
      quote: 'The real-time tracking and temperature-controlled transport have been game-changers for our healthcare deliveries.',
      author: 'Dr. Emily Rodriguez',
      role: 'Logistics Director'
    }
  ];

  const clientLogos = [
    'Amazon', 'Walmart', 'Target', 'FedEx', 'DHL', 'UPS'
  ];

  const stats = [
    { value: '10K+', label: 'Daily Shipments' },
    { value: '99.8%', label: 'On-Time Delivery' },
    { value: '50+', label: 'Countries Served' },
    { value: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Global Logistics,
              <span className="block text-blue-600">Simplified</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Enterprise-grade supply chain solutions powered by cutting-edge technology. 
              Move your business forward with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-all flex items-center justify-center group">
                <span style={{ fontFamily: 'Inter, sans-serif' }}>Get a Quote</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 transition-all" style={{ fontFamily: 'Inter, sans-serif' }}>
                View Services
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-3xl text-blue-600 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672870152741-e526cfe5419b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBwb3J0fGVufDF8fHx8MTc3MTMzMDM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Logistics Operations"
                className="w-full h-auto"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    99.8%
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    On-Time Rate
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>
                <button className="text-blue-600 hover:text-blue-700 flex items-center group" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Learn more
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Tracking CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Track Your Shipment in Real-Time
              </h2>
              <p className="text-xl text-blue-100 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get complete visibility of your cargo from pickup to delivery with our advanced tracking technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter tracking number"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-colors whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Track Now
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-blue-100 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Tracking #TRK-89234
                  </div>
                  <div className="text-xl text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    In Transit
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Truck className="text-white" size={24} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Picked up - Los Angeles</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>In transit - Phoenix</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="flex-1 text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>Out for delivery - Dallas</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Specialized logistics solutions for every sector
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {industry.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Seamless logistics process from start to finish
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-teal-200 to-orange-200 -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl text-white mb-6 mx-auto">
                      {step.icon}
                    </div>
                    <div className="text-6xl text-gray-200 mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {step.step}
                    </div>
                    <h3 className="text-2xl text-gray-900 mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Trusted by industry leaders worldwide
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-2xl text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Real experiences from businesses we've helped grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-md"
              >
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-blue-600 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join thousands of businesses that trust LogiFlow for their logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-all flex items-center justify-center group">
                <span style={{ fontFamily: 'Inter, sans-serif' }}>Schedule a Consultation</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg border-2 border-white/30 transition-all backdrop-blur-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
