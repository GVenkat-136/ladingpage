import React from 'react';
import { useEffect, useState } from 'react';
import { SmartDetectIcon, SecureBlockIcon, TelecomIcon } from '../components/icons';
import toast from 'react-hot-toast';

function Home() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmailError('');

    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading('Subscribing...');

    // Simulate API call
    setTimeout(() => {
      toast.dismiss(loadingToast);
      toast.success('Successfully subscribed to newsletter!', {
        duration: 4000,
        position: 'top-center',
        icon: '✉️',
      });
      
      // Clear form
      setEmail('');
    }, 1500);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in', 'opacity-100');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animation').forEach((elem) => {
      elem.classList.add('opacity-0');
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  // Common section styles
  const sectionClasses = "relative py-12"; // Reduced from py-16
  const containerClasses = "container relative mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl";
  const gridClasses = "grid grid-cols-1 md:grid-cols-2 gap-16 items-center"; // Increased gap from 8 to 16

  // Common image container styles
  const imageContainerClasses = `
    relative rounded-3xl overflow-hidden
    before:absolute before:inset-0 before:bg-[#115e59]/0
    after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#115e59]/5 after:to-transparent
  `;

  // Common tag styles
  const tagClasses = `
    absolute px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm
    border border-[#115e59]/10 flex items-center gap-2 text-sm font-medium
  `;

  // Add this common image container class
  const imageStyles = "w-full h-[400px] object-cover rounded-3xl"; // Fixed height of 400px

  // Common image wrapper styles
  const imageWrapperStyles = "relative aspect-[4/3] w-full max-w-lg mx-auto"; // Changed max-w-xl to max-w-lg

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] pt-20 md:pt-28 flex items-center justify-center overflow-x-hidden bg-[#f0fdfa]">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0">
          {/* Dot Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, #115e59 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}/>

          {/* Animated Shapes */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#115e59]/5 rounded-full blur-3xl"/>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#115e59]/5 rounded-full blur-3xl"/>
          
          {/* Decorative Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[20%] left-0 w-full h-[1px] bg-[#115e59]/5 -rotate-6"/>
            <div className="absolute top-[40%] left-0 w-full h-[1px] bg-[#115e59]/5 rotate-3"/>
            <div className="absolute top-[60%] left-0 w-full h-[1px] bg-[#115e59]/5 -rotate-2"/>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 py-12">
            {/* Left Side - Main Content */}
            <div className="flex-1 space-y-6 text-center md:text-left pt-4 md:pt-0">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/50 backdrop-blur-sm p-1 pr-4 rounded-full border border-[#115e59]/10">
                <span className="bg-[#115e59] text-white px-3 py-1 rounded-full text-xs">New</span>
                <span className="text-[#115e59] text-sm font-medium ml-2">Innovation Platform</span>
              </div>

              {/* Title - Adjusted for mobile */}
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight">
                  <span className="relative inline-block text-[#115e59]">
                    HealthOFin
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#115e59]/10"/>
                  </span>
                </h1>
              </div>

              {/* Description - Adjusted for mobile */}
              <p className="text-base sm:text-lg md:text-xl text-[#115e59]/70 max-w-xl mx-auto md:mx-0">
                Where Health Meets Wealth: Nurturing Your Care Through Innovations
              </p>

              {/* Feature Pills - Adjusted for mobile */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {['AI-Powered', 'Blockchain', 'Digital Health'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/50 backdrop-blur-sm rounded-lg text-[#115e59] text-sm border border-[#115e59]/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="flex-1 relative mt-8 md:mt-0">
              <div className="relative w-full max-w-md mx-auto">
                {/* Glowing Background Effects */}
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#115e59]/10 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#115e59]/10 rounded-full blur-[100px]"></div>

                {/* Cards Container */}
                <div className="relative grid grid-cols-2 gap-x-10 gap-y-16">
                  {[
                    {
                      title: 'Smart Detect',
                      icon: <SmartDetectIcon />,
                      desc: 'AI-Powered Health',
                      position: 'translate-y-0',
                      glowColor: 'from-[#115e59]/20'
                    },
                    {
                      title: 'Secure Block',
                      icon: <SecureBlockIcon />,
                      desc: 'Blockchain Security',
                      position: 'translate-y-0',
                      glowColor: 'from-[#115e59]/30'
                    },
                    {
                      title: 'Telecom',
                      icon: <TelecomIcon />,
                      desc: 'Business Solutions',
                      position: 'translate-y-0',
                      glowColor: 'from-[#115e59]/20'
                    },
                    {
                      title: 'Innovation',
                      icon: (
                        <div className="w-10 h-10 rounded-xl bg-[#115e59] flex items-center justify-center">
                          <span className="text-white text-xl">+</span>
                        </div>
                      ),
                      desc: 'Future Tech',
                      position: 'translate-y-0',
                      glowColor: 'from-[#115e59]/30'
                    }
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className={`group relative ${item.position} hover:-translate-y-2 transition-all duration-500`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Card */}
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-all duration-500">
                        {/* Glow Effect */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.glowColor} to-transparent opacity-0 
                          group-hover:opacity-100 rounded-2xl blur-lg transition-all duration-500 group-hover:duration-200`}
                        />
                        
                        {/* Card Content */}
                        <div className="relative">
                          {/* Icon with Glow */}
                          <div className="relative mb-4">
                            <div className="absolute -inset-2 bg-[#115e59]/5 rounded-xl blur-lg opacity-0 
                              group-hover:opacity-100 transition-all duration-500"/>
                            <div className="relative w-14 h-14 bg-white rounded-xl flex items-center justify-center 
                              transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                              {item.icon}
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className="space-y-2">
                            <h3 className="text-lg font-display font-semibold text-[#115e59] 
                              group-hover:translate-x-1 transition-transform duration-300">
                              {item.title}
                            </h3>
                            <p className="text-sm text-[#115e59]/70 
                              group-hover:translate-x-1 transition-transform duration-500">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Center Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24">
                  <div className="relative w-full h-full animate-pulse">
                    <div className="absolute inset-0 bg-[#115e59]/10 rounded-full blur-xl"></div>
                    <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center 
                      border border-[#115e59]/10 shadow-lg">
                      <span className="text-2xl font-bold text-[#115e59]">H</span>
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#115e59]/20 
                      animate-spin-slow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-12 bg-white">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - More Compact */}
          <div className="flex items-center justify-between mb-10">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="w-8 h-[2px] bg-[#115e59]"></span>
                <span className="text-sm font-medium text-[#115e59] tracking-wide">Our Solutions</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#115e59]">
                What We Do
              </h2>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#115e59]/10"></div>
          </div>

          {/* Features Grid - More Compact */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Smart Detect",
                  desc: "AI-powered health monitoring system for seamless and non-invasive detection",
                  icon: <SmartDetectIcon />,
                  features: ["AI-Powered", "Real-time", "Non-invasive"]
                },
                {
                  title: "Secure Block",
                  desc: "Advanced blockchain technology ensuring unparalleled security and trust",
                  icon: <SecureBlockIcon />,
                  features: ["Blockchain", "Secure", "Efficient"]
                },
                {
                  title: "Telecom Solutions",
                  desc: "Modern infrastructure for streamlined communication processes",
                  icon: <TelecomIcon />,
                  features: ["Modern", "Scalable", "Connected"]
                }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="group relative"
                >
                  <div className="relative p-5 bg-white border border-[#115e59]/10 rounded-xl 
                    hover:border-[#115e59]/20 transition-all duration-300">
                    {/* Number - Smaller and More Elegant */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-white rounded-full border border-[#115e59]/10 
                      flex items-center justify-center text-xs font-medium text-[#115e59]">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>

                    {/* Icon - More Compact */}
                    <div className="mb-4">
                      <div className="w-10 h-10 bg-[#115e59]/5 rounded-lg flex items-center justify-center
                        group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content - More Compact */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-display font-semibold text-[#115e59]">
                        {item.title}
                      </h3>
                      <p className="text-[#115e59]/70 text-sm leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Features - More Compact */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.features.map((feature) => (
                        <span 
                          key={feature}
                          className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#115e59]/5 
                            text-xs font-medium text-[#115e59] group-hover:bg-[#115e59]/10 transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#115e59]/20 
                      group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Text - More Compact */}
            <div className="mt-10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-[#115e59]/70 text-xs">
                <span className="w-6 h-[1px] bg-[#115e59]/20"></span>
                <p className="text-center">
                  Together, these innovations represent a forward-thinking approach to addressing 
                  the needs of today's digital landscape.
                </p>
                <span className="w-6 h-[1px] bg-[#115e59]/20"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Detect Section */}
      <section className="relative py-20 bg-[#f0fdfa]">
        <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Left Side - Image */}
              <div className="order-2 md:order-1">
                <div className={imageWrapperStyles}>
                  <img 
                    src="/assets/detect.png"
                    alt="Smart Detect Technology"
                    className={imageStyles}
                  />
                  
                  {/* Image Tags */}
                  <div className="absolute -top-3 left-6 px-4 py-2 bg-white rounded-full shadow-sm border border-[#115e59]/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#115e59] rounded-full"></span>
                      <span className="text-sm font-medium text-[#115e59]">AI Technology</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/4 -right-3 px-4 py-2 bg-white rounded-full shadow-sm border border-[#115e59]/10">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-[#115e59]">Real-time</span>
                      <span className="w-2 h-2 bg-[#115e59] rounded-full"></span>
                    </div>
                  </div>

                  <div className="absolute bottom-10 -left-3 px-4 py-2 bg-white rounded-full shadow-sm border border-[#115e59]/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#115e59] rounded-full"></span>
                      <span className="text-sm font-medium text-[#115e59]">Non-Invasive</span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#115e59]/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#115e59]/10 rounded-full blur-3xl"></div>
                </div>
              </div>

              {/* Right Side Content */}
              <div className="space-y-8 order-1 md:order-2">
                {/* Section Label */}
                <div className="inline-flex items-center space-x-2">
                  <span className="w-12 h-[2px] bg-[#115e59]"/>
                  <span className="text-sm font-medium text-[#115e59]">Innovation</span>
                </div>

                {/* Title */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-[#115e59]">
                    Smart Detect
                  </h2>
                  <p className="text-xl text-[#115e59]/70 font-medium max-w-xl">
                    AI-Powered, Painless Blood Sugar Monitoring
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-6">
                  {[
                    {
                      title: "Non-Invasive Technology",
                      desc: "Advanced sensor technology eliminates the need for finger pricks, providing a pain-free experience."
                    },
                    {
                      title: "Real-Time Monitoring",
                      desc: "Continuous analysis and monitoring of glucose levels with immediate results and insights."
                    },
                    {
                      title: "AI-Powered Accuracy",
                      desc: "Intelligent algorithms ensure precise and reliable blood sugar measurements."
                    }
                  ].map((item, index) => (
                    <div 
                      key={item.title}
                      className="group relative pl-8 hover:pl-10 transition-all duration-300"
                    >
                      <div className="absolute left-0 top-1.5 w-2 h-2 bg-[#115e59] rounded-full 
                        group-hover:scale-150 transition-transform duration-300"/>
                      <div>
                        <h3 className="text-lg font-semibold text-[#115e59] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[#115e59]/70 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-3">
                  {['AI-Powered', 'Non-Invasive', 'Real-time', 'Accurate'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-[#115e59] 
                        border border-[#115e59]/10 hover:border-[#115e59]/30
                        hover:-translate-y-1 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Block Section */}
      <section className={`${sectionClasses} bg-white`}>
        <div className={containerClasses}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              {/* Section Label */}
              <div className="inline-flex items-center space-x-2 bg-[#115e59]/5 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                <span className="text-sm font-medium text-[#115e59]">Blockchain Technology</span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#115e59]">
                  Secure Block
                </h2>
                <p className="text-lg text-[#115e59]/70 font-medium">
                  Revolutionizing Banking with Blockchain Technology
                </p>
              </div>

              {/* Features List - More Compact */}
              <div className="space-y-4">
                {[
                  {
                    title: "Enhanced Security",
                    desc: "Blockchain technology ensures unparalleled protection for all financial transactions."
                  },
                  {
                    title: "Data Privacy",
                    desc: "Advanced encryption and decentralized approach guarantees data privacy and integrity."
                  },
                  {
                    title: "Efficient Processing",
                    desc: "Streamlined operations with reduced costs and improved transaction speed."
                  }
                ].map((item) => (
                  <div 
                    key={item.title}
                    className="group relative pl-8 hover:pl-10 transition-all duration-300"
                  >
                    <div className="absolute left-0 top-1.5 w-2 h-2 bg-[#115e59] rounded-full 
                      group-hover:scale-150 transition-transform duration-300"/>
                    <div>
                      <h3 className="text-lg font-semibold text-[#115e59] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#115e59]/70 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Tags - More Compact */}
              <div className="flex flex-wrap gap-2">
                {['Blockchain', 'Security', 'Privacy', 'Efficiency'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1.5 bg-[#115e59]/5 rounded-full text-sm font-medium text-[#115e59]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className={imageWrapperStyles}>
                <img 
                  src="/assets/blockChain.png"
                  alt="Blockchain Technology"
                  className={imageStyles}
                />
                
                {/* Image Tags with improved visibility */}
                <div className={`absolute -top-2 right-4 px-4 py-2 bg-white shadow-sm rounded-full 
                  border border-[#115e59]/10 flex items-center gap-2 text-sm font-medium`}>
                  <span className="text-[#115e59]">Blockchain</span>
                  <span className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                </div>

                {/* Similar updates for other tags */}
              </div>

              {/* Subtle decorative elements */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#115e59]/5 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#115e59]/5 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Telecom Section */}
      <section className={`${sectionClasses} bg-[#f0fdfa]`}>
        <div className={containerClasses}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image (Moved from right) */}
            <div className="relative">
              <div className={imageWrapperStyles}>
                <img 
                  src="/assets/telecome.png"
                  alt="Telecom Solutions"
                  className={imageStyles}
                />
                
                {/* Image Tags */}
                <div className="absolute -top-2 right-4 px-4 py-2 bg-white shadow-sm rounded-full 
                  border border-[#115e59]/10 flex items-center gap-2 text-sm font-medium">
                  <span className="text-[#115e59]">Digital</span>
                  <span className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                </div>

                <div className="absolute top-1/3 -left-2 px-4 py-2 bg-white shadow-sm rounded-full 
                  border border-[#115e59]/10 flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                  <span className="text-[#115e59]">Connected</span>
                </div>

                <div className="absolute bottom-8 -right-2 px-4 py-2 bg-white shadow-sm rounded-full 
                  border border-[#115e59]/10 flex items-center gap-2 text-sm font-medium">
                  <span className="text-[#115e59]">Modern</span>
                  <span className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#115e59]/5 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#115e59]/5 rounded-full blur-xl -z-10"></div>
            </div>

            {/* Right Side - Content (Moved from left) */}
            <div className="space-y-6">
              {/* Section Label */}
              <div className="inline-flex items-center space-x-2 bg-[#115e59]/5 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                <span className="text-sm font-medium text-[#115e59]">Digital Solutions</span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#115e59]">
                  Telecom Business Applications
                </h2>
                <p className="text-lg text-[#115e59]/70 font-medium">
                  Enhancing Broadband Provider Solutions
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  {
                    title: "Modern Infrastructure",
                    desc: "Advanced tools that streamline operational processes for prominent broadband providers."
                  },
                  {
                    title: "Customer Experience",
                    desc: "Enhanced communication systems for better customer engagement and satisfaction."
                  },
                  {
                    title: "Data Management",
                    desc: "Efficient handling of complex telecom data with advanced security measures."
                  }
                ].map((item) => (
                  <div 
                    key={item.title}
                    className="group relative pl-8 hover:pl-10 transition-all duration-300"
                  >
                    <div className="absolute left-0 top-1.5 w-2 h-2 bg-[#115e59] rounded-full 
                      group-hover:scale-150 transition-transform duration-300"/>
                    <div>
                      <h3 className="text-lg font-semibold text-[#115e59] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#115e59]/70 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2">
                {['Modern', 'Scalable', 'Connected', 'Efficient'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1.5 bg-[#115e59]/5 rounded-full text-sm font-medium text-[#115e59]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Subscribe Section */}
      <section className="relative py-16 bg-white">
        <div className="relative w-full">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, #115e59 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}/>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
              {/* Left Side - Content */}
              <div className="flex-1 space-y-6 text-left">
                {/* Section Label */}
                <div className="inline-flex items-center space-x-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#115e59]/5 rounded-full">
                    <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                    <span className="text-sm font-medium text-[#115e59]">Newsletter</span>
                  </div>
                </div>

                {/* Title and Description */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-[#115e59]">
                    Stay Connected with 
                    <span className="block">Latest Updates</span>
                  </h2>
                  <p className="text-lg text-[#115e59]/70 max-w-xl">
                    Join our newsletter for exclusive insights into healthcare innovations 
                    and technological breakthroughs.
                  </p>
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-3">
                  {[
                    'Weekly Insights',
                    'Tech Updates',
                    'Industry News',
                    'Innovation Alerts'
                  ].map((item) => (
                    <div key={item} 
                      className="px-4 py-2 bg-white border border-[#115e59]/10 rounded-xl
                        hover:border-[#115e59]/30 transition-all duration-300"
                    >
                      <span className="text-sm text-[#115e59]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex-1 w-full max-w-md">
                <div className="relative">
                  {/* Form Container */}
                  <form 
                    className="relative bg-white border border-[#115e59]/10 rounded-3xl p-8
                      hover:border-[#115e59]/20 transition-all duration-300"
                    onSubmit={handleSubscribe}
                  >
                    {/* Form Header - Updated */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="relative">
                        <div className="px-6 py-2 bg-[#f0fdfa] border border-[#115e59]/10 rounded-full shadow-sm">
                          <span className="text-sm font-medium text-[#115e59]">Join Newsletter</span>
                        </div>
                      </div>
                    </div>

                    {/* Email Input Group */}
                    <div className="mt-4 space-y-6">
                      {/* Label */}
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                        <label className="text-sm font-medium text-[#115e59]">
                          Email Address
                        </label>
                      </div>

                      {/* Input Container */}
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailError) setEmailError('');
                          }}
                          placeholder="name@company.com"
                          className={`w-full px-6 py-4 bg-[#115e59]/5 rounded-2xl border-0
                            placeholder-[#115e59]/40 text-[#115e59] focus:outline-none 
                            focus:ring-2 ${emailError ? 'ring-2 ring-red-400/50' : 'focus:ring-[#115e59]/20'}
                            transition-all duration-300`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#115e59]/40 rounded-full"></span>
                          <span className="w-1 h-1 bg-[#115e59]/40 rounded-full"></span>
                        </div>
                      </div>

                      {/* Error Message */}
                      {emailError && (
                        <p className="text-xs text-red-500 mt-1">{emailError}</p>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-4 bg-[#115e59] text-white rounded-2xl font-medium 
                          hover:bg-[#115e59]/90 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <span>Subscribe Now</span>
                          <svg 
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </button>

                      {/* Privacy Note */}
                      <div className="text-center space-y-2">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-8 h-[1px] bg-[#115e59]/10"></div>
                          <span className="text-xs text-[#115e59]/40">Protected by reCAPTCHA</span>
                          <div className="w-8 h-[1px] bg-[#115e59]/10"></div>
                        </div>
                        <p className="text-xs text-[#115e59]/60">
                          By subscribing, you agree to our Privacy Policy
                        </p>
                      </div>
                    </div>
                  </form>

                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#115e59]/5 rounded-full blur-2xl -z-10"/>
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#115e59]/5 rounded-full blur-2xl -z-10"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 