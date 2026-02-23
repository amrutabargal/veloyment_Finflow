import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Smartphone } from 'lucide-react';

export function FinTechFooter() {
  const products = ['Payments', 'Digital Wallet', 'Virtual Cards', 'Analytics'];
  const company = ['About Us', 'Careers', 'Press', 'Blog', 'Partners'];
  const resources = ['Help Center', 'API Docs', 'Community', 'Status', 'Security'];
  const legal = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance'];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 via-teal-600 to-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>F</span>
              </div>
              <span className="ml-3 text-xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                FinFlow
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              The future of digital finance. Fast, secure, and intelligent financial management 
              for everyone.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Products</h3>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              {products.map((product, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Company</h3>
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
            <h3 className="text-lg mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Resources</h3>
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

          {/* Legal */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Legal</h3>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              {legal.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Download App */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Download our mobile app
              </h3>
              <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                Available on iOS and Android
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl transition-colors flex items-center gap-3">
                <Smartphone size={24} />
                <div className="text-left">
                  <div className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>Download on the</div>
                  <div className="text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>App Store</div>
                </div>
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl transition-colors flex items-center gap-3">
                <Smartphone size={24} />
                <div className="text-left">
                  <div className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>Get it on</div>
                  <div className="text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2026 FinFlow. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Mail size={16} />
              <span>support@finflow.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
