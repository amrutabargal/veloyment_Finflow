import { motion } from 'motion/react';
import { Truck, Plane, Ship, Warehouse, Package, MapPin, Clock, Shield, DollarSign, Globe, Zap, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesPage() {
  const services = [
    {
      icon: <Truck size={48} />,
      title: 'Freight Transportation',
      description: 'Comprehensive freight solutions across multiple modes of transport',
      image: 'https://images.unsplash.com/photo-1766608422198-5be9ac0aac9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVpZ2h0JTIwdHJ1Y2slMjBoaWdod2F5fGVufDF8fHx8MTc3MTM5OTQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Full Truckload (FTL) and Less Than Truckload (LTL)',
        'Temperature-controlled transport',
        'Hazardous materials handling',
        'Cross-border shipping',
        'Real-time GPS tracking',
        'Dedicated fleet options'
      ],
      benefits: [
        { icon: <Clock size={20} />, text: 'On-time delivery guarantee' },
        { icon: <Shield size={20} />, text: 'Comprehensive cargo insurance' },
        { icon: <Globe size={20} />, text: 'Global coverage network' }
      ]
    },
    {
      icon: <Plane size={48} />,
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services for time-sensitive shipments',
      image: 'https://images.unsplash.com/photo-1696385041146-d2827a77b992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGFpcnBsYW5lJTIwbG9hZGluZ3xlbnwxfHx8fDE3NzEzOTk0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Express and standard air freight',
        'Charter services for large shipments',
        'Door-to-door delivery',
        'Customs clearance support',
        'Priority handling options',
        'Pharmaceutical & perishables expertise'
      ],
      benefits: [
        { icon: <Zap size={20} />, text: 'Fastest delivery times' },
        { icon: <Shield size={20} />, text: 'Secure handling protocols' },
        { icon: <Globe size={20} />, text: '200+ airport connections' }
      ]
    },
    {
      icon: <Ship size={48} />,
      title: 'Ocean Freight',
      description: 'Cost-effective sea freight solutions for large volume shipments',
      image: 'https://images.unsplash.com/photo-1672870152741-e526cfe5419b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBwb3J0fGVufDF8fHx8MTc3MTMzMDM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Full Container Load (FCL) and LCL',
        'Specialized container options',
        'Port-to-port and door-to-door',
        'Container tracking system',
        'Vessel scheduling & booking',
        'Import/export documentation'
      ],
      benefits: [
        { icon: <DollarSign size={20} />, text: 'Most economical for bulk' },
        { icon: <Shield size={20} />, text: 'Reliable global routes' },
        { icon: <Globe size={20} />, text: '500+ port connections' }
      ]
    },
    {
      icon: <Warehouse size={48} />,
      title: 'Warehousing & Storage',
      description: 'State-of-the-art facilities with advanced inventory management',
      image: 'https://images.unsplash.com/photo-1770910195585-825a1181a704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbnZlbnRvcnklMjBzeXN0ZW18ZW58MXx8fHwxNzcxMzk5NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Climate-controlled storage',
        'Real-time inventory tracking',
        'Pick and pack services',
        'Order fulfillment',
        'Kitting and assembly',
        'Returns management'
      ],
      benefits: [
        { icon: <Shield size={20} />, text: '24/7 security monitoring' },
        { icon: <Zap size={20} />, text: 'Automated systems' },
        { icon: <MapPin size={20} />, text: 'Strategic locations' }
      ]
    },
    {
      icon: <Package size={48} />,
      title: 'Last-Mile Delivery',
      description: 'Fast and reliable delivery to end customers',
      image: 'https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHBhY2thZ2UlMjBjb3VyaWVyfGVufDF8fHx8MTc3MTM5OTQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Same-day and next-day delivery',
        'White glove service',
        'Proof of delivery with signature',
        'Real-time delivery updates',
        'Flexible delivery windows',
        'Returns pickup service'
      ],
      benefits: [
        { icon: <Clock size={20} />, text: '2-hour delivery windows' },
        { icon: <Shield size={20} />, text: 'Contactless options' },
        { icon: <Zap size={20} />, text: 'Route optimization' }
      ]
    },
    {
      icon: <Globe size={48} />,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization and consulting',
      image: 'https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMG5ldHdvcmslMjBjb25uZWN0aW9ufGVufDF8fHx8MTc3MTMxMzIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Supply chain consulting',
        'Network design & optimization',
        'Vendor management',
        'Demand planning',
        'Risk management',
        'Performance analytics'
      ],
      benefits: [
        { icon: <DollarSign size={20} />, text: 'Cost reduction strategies' },
        { icon: <Zap size={20} />, text: 'Efficiency improvements' },
        { icon: <CheckCircle size={20} />, text: 'Better visibility' }
      ]
    }
  ];

  const coverageAreas = [
    { region: 'North America', countries: '3 countries', cities: '500+ cities' },
    { region: 'Europe', countries: '27 countries', cities: '800+ cities' },
    { region: 'Asia Pacific', countries: '15 countries', cities: '1000+ cities' },
    { region: 'Latin America', countries: '8 countries', cities: '300+ cities' },
    { region: 'Middle East', countries: '6 countries', cities: '150+ cities' },
    { region: 'Africa', countries: '10 countries', cities: '200+ cities' }
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive logistics solutions designed to scale with your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <h2 className="text-4xl text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={18} />
                          <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Benefits
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {service.benefits.map((benefit, bIndex) => (
                        <div
                          key={bIndex}
                          className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg"
                        >
                          <div className="text-blue-600">{benefit.icon}</div>
                          <span className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {benefit.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Learn More
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
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
              Global Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              We operate in major markets worldwide with strategic partnerships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {area.region}
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Coverage:</span>
                    <span className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>{area.countries}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Served:</span>
                    <span className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>{area.cities}</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our team can design a logistics solution tailored to your specific business needs.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Request a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
