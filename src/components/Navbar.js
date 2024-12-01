import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Location', path: '/location' },
    { name: 'About', path: '/about' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' 
        : 'bg-[#f0fdfa] py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2.5 group">
            {/* Logo Icon */}
            <div className="relative flex items-center">
              {/* Main Container */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center relative
                bg-gradient-to-br from-[#115e59]/5 via-[#115e59]/10 to-[#115e59]/5
                group-hover:from-[#115e59]/10 group-hover:to-[#115e59]/10 
                transition-all duration-500 overflow-hidden">
                
                {/* Animated Circles */}
                <div className="absolute w-14 h-14 bg-[#115e59]/10 rounded-full 
                  group-hover:scale-150 transition-transform duration-700 opacity-50"/>
                <div className="absolute w-10 h-10 bg-[#115e59]/10 rounded-full 
                  group-hover:scale-150 transition-transform duration-500 delay-100 opacity-50"/>
                
                {/* Center Logo - Updated positioning and rotation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-6 h-6">
                    {/* Base square - Starts at 45deg, rotates to 135deg on hover */}
                    <div className="absolute inset-0 bg-white rounded-lg rotate-45 
                      group-hover:rotate-[135deg] transition-transform duration-500"/>
                    
                    {/* Overlay square - Starts at 90deg, rotates to 180deg on hover */}
                    <div className="absolute inset-0 bg-[#115e59]/10 rounded-lg rotate-[90deg] 
                      group-hover:rotate-180 transition-transform duration-700 delay-100"/>
                    
                    {/* Letter container - Counter-rotates to keep H upright */}
                    <div className="absolute inset-0 flex items-center justify-center rotate-[90deg]">
                      <span className="text-lg font-bold text-[#115e59] transform -rotate-[90deg]
                        group-hover:rotate-0 transition-transform duration-500">H</span>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-1 h-1 bg-[#115e59]/30 rounded-full
                  group-hover:scale-150 group-hover:translate-x-1 group-hover:-translate-y-1 
                  transition-all duration-500"/>
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-[#115e59]/30 rounded-full
                  group-hover:scale-150 group-hover:-translate-x-1 group-hover:translate-y-1 
                  transition-all duration-500"/>
              </div>
            </div>

            {/* Logo Text - Updated alignment */}
            <div className="flex flex-col h-11">
              <div className="flex flex-col justify-center h-full -mt-0.5">
                <h1 className="text-xl font-display font-bold tracking-tight flex items-center">
                  <span className="text-[#115e59] relative inline-flex items-center">
                    Health
                    <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[#115e59]/10 
                      transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"/>
                  </span>
                  <span className="relative inline-flex items-center">
                    <span className="text-[#115e59] font-black">O</span>
                    <span className="text-[#115e59]/80 font-black">F</span>
                    <span className="text-[#115e59]/70">in</span>
                    {/* Animated Underline */}
                    <div className="absolute -bottom-0.5 left-0 w-full h-0.5 
                      bg-gradient-to-r from-[#115e59]/10 via-[#115e59]/30 to-[#115e59]/10
                      transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"/>
                  </span>
                </h1>
                <span className="text-[9px] text-[#115e59]/60 font-medium tracking-widest -mt-0.5
                  group-hover:text-[#115e59]/80 transition-colors duration-300">
                  HEALTHCARE INNOVATION
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className={`flex items-center rounded-full p-1.5 transition-all duration-300
              ${scrolled ? 'bg-[#115e59]/5' : 'bg-white/10'}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                    ${isActivePath(link.path) 
                      ? 'bg-[#115e59] text-white' 
                      : `text-[#115e59]/70 hover:text-[#115e59] ${scrolled ? 'hover:bg-[#115e59]/10' : 'hover:bg-white/20'}`
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors duration-300
                ${scrolled 
                  ? 'bg-[#115e59]/5 hover:bg-[#115e59]/10' 
                  : 'bg-white/10 hover:bg-white/20'}`}
            >
              <svg
                className="w-6 h-6 text-[#115e59]"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white/90 backdrop-blur-md border-b border-[#115e59]/10
        transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300
                ${isActivePath(link.path)
                  ? 'bg-[#115e59]/10 text-[#115e59]'
                  : 'text-[#115e59]/70 hover:text-[#115e59] hover:bg-[#115e59]/5'
                }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 