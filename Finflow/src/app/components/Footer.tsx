import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const services = ['Freight Transportation', 'Air Freight', 'Ocean Freight', 'Warehousing', 'Last-Mile Delivery', 'Supply Chain'];
  const company = ['About Us', 'Careers', 'News & Media', 'Sustainability', 'Partners', 'Investors'];
  const resources = ['Tracking', 'Documentation', 'API', 'Support Center', 'Case Studies', 'Blog'];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>L</span>
              </div>
              <span className="ml-3 text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>LogiFlow</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Leading the future of logistics with innovative technology and reliable service. 
              Connecting businesses worldwide with efficient supply chain solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Services</h3>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Company</h3>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Resources</h3>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              {resources.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-500" size={20} />
              <span>info@logiflow.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-500" size={20} />
              <span>+1 (800) 555-0100</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500" size={20} />
              <span>Los Angeles, CA 90001</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2026 LogiFlow. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
