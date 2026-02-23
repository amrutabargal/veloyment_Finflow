import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Globe, Users, Award, Target, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutContactPage() {
  const stats = [
    { icon: <Globe size={32} />, value: '50+', label: 'Countries Served' },
    { icon: <Users size={32} />, value: '5,000+', label: 'Team Members' },
    { icon: <TrendingUp size={32} />, value: '10M+', label: 'Shipments/Year' },
    { icon: <Award size={32} />, value: '25+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: 'Customer First',
      description: 'We prioritize our clients\' needs and build long-term partnerships based on trust and reliability.'
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of our operations and service delivery.'
    },
    {
      icon: <Users size={32} />,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to continuously improve our logistics solutions.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Sustainability',
      description: 'We are committed to reducing our environmental impact through eco-friendly practices.'
    }
  ];

  const offices = [
    {
      city: 'Los Angeles',
      country: 'USA',
      address: '123 Logistics Blvd, Los Angeles, CA 90001',
      phone: '+1 (323) 555-0100',
      email: 'la@logiflow.com'
    },
    {
      city: 'New York',
      country: 'USA',
      address: '456 Supply Chain Ave, New York, NY 10001',
      phone: '+1 (212) 555-0200',
      email: 'ny@logiflow.com'
    },
    {
      city: 'London',
      country: 'UK',
      address: '789 Freight Street, London, E1 6AN',
      phone: '+44 20 7123 4567',
      email: 'london@logiflow.com'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '321 Harbor Road, Singapore 018956',
      phone: '+65 6123 4567',
      email: 'sg@logiflow.com'
    }
  ];

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-500 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              About LogiFlow
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Powering global commerce through innovative logistics solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="text-lg">
                  Founded in 2001, LogiFlow began with a simple mission: to make global logistics accessible, 
                  efficient, and transparent for businesses of all sizes. What started as a small freight 
                  forwarding company has grown into a comprehensive supply chain solutions provider serving 
                  thousands of clients worldwide.
                </p>
                <p className="text-lg">
                  Over the past 25 years, we've invested heavily in technology and infrastructure to build 
                  one of the most advanced logistics networks in the industry. Our commitment to innovation 
                  has enabled us to offer real-time tracking, automated routing, and predictive analytics 
                  that give our clients a competitive edge.
                </p>
                <p className="text-lg">
                  Today, LogiFlow operates in over 50 countries with a team of 5,000+ dedicated professionals 
                  who share our passion for excellence. We handle millions of shipments annually, from small 
                  parcels to full container loads, always with the same attention to detail and commitment 
                  to customer satisfaction.
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
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzcxMzg4MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="LogiFlow Team"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-xl text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Map */}
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
              Our Global Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Connecting businesses across continents
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMG5ldHdvcmslMjBjb25uZWN0aW9ufGVufDF8fHx8MTc3MTMxMzIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Global Network"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-3xl mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>500+</div>
                    <div className="text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>Warehouses</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>200+</div>
                    <div className="text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>Airports</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>500+</div>
                    <div className="text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>Ports</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>2,000+</div>
                    <div className="text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>Cities</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              We're here to help with all your logistics needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-colors flex items-center justify-center group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Offices
              </h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                  >
                    <h4 className="text-xl text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {office.city}, {office.country}
                    </h4>
                    <div className="space-y-2 text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <div className="flex items-start gap-2">
                        <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="text-blue-600 flex-shrink-0" size={18} />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="text-blue-600 flex-shrink-0" size={18} />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl p-6 mt-6 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={24} />
                  <h4 className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Business Hours
                  </h4>
                </div>
                <div className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="pt-4 border-t border-white/30">
                    <div className="text-sm text-blue-100">
                      24/7 Emergency Support Available
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Let's discuss how LogiFlow can optimize your supply chain operations.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
