import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#115e59] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold">HealthOFin</h2>
            <p className="text-[#f0fdfa]/80 text-sm leading-relaxed">
              Revolutionizing healthcare through innovative technology solutions and 
              secure blockchain integration.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-[#f0fdfa]/10 flex items-center justify-center
                    hover:bg-[#f0fdfa]/20 transition-colors duration-300"
                >
                  <span className="text-sm">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-[#f0fdfa]/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-3">
              {[
                'Smart Detect',
                'Secure Block',
                'Telecom Solutions',
                'Healthcare Innovation'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-[#f0fdfa]/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              {[
                { label: 'Email', value: 'info@healthofin.com' },
              ].map((contact) => (
                <li key={contact.label} className="text-sm">
                  <span className="text-[#f0fdfa]/60">{contact.label}: </span>
                  <span className="text-[#f0fdfa]/90">{contact.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#f0fdfa]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#f0fdfa]/60">
              © 2024 HealthOFin. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a 
                  key={item}
                  href="#"
                  className="text-sm text-[#f0fdfa]/60 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 