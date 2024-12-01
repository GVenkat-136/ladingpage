import React from 'react';

function Services() {
  // Services data
  const services = [
    {
      title: "BLOCKCHAIN ARCHITECTURE DEVELOPMENT",
      description: "HealthOFin specializes in custom Blockchain Architecture, Design and Implementation by enabling businesses to leverage the Security, Transparency, and Scalability benefits of Distributed Ledger technology.",
      tags: ["Finance", "HealthCare", "Supplychain", "ECommerce", "Education"],
      icon: "🏗️"
    },
    {
      title: "BLOCKCHAIN BASED PRODUCT DEVELOPMENT",
      description: "From ideation to implementation, HealthOFin partners with your businesses through end-to-end Blockchain product development services.",
      tags: ["End-to-End", "Custom Solutions", "Real-world Impact"],
      icon: "⚡"
    },
    {
      title: "SMART CONTRACTS",
      description: "HealthOFin implements secure and efficient Smart Contracts that automate business processes, reduce intermediaries, and enhance transaction transparency.",
      tags: ["Automated", "Secure", "Transparent"],
      icon: "📝"
    },
    {
      title: "WEB3 & DECENTRALIZED APPLICATIONS",
      description: "HealthOFin enables and empowers you with the transition to Web3 by implementing Decentralized Applications (DApps).",
      tags: ["Web3", "DApps", "Decentralized Identity"],
      icon: "🌐"
    },
    {
      title: "DECENTRALIZED FINANCE SOLUTIONS",
      description: "HealthOFin's DeFi solutions empower businesses with financial products built on Decentralized systems.",
      tags: ["DeFi", "Exchanges", "Lending"],
      icon: "💰"
    },
    {
      title: "WALLET IMPLEMENTATION",
      description: "We design secure and user-friendly wallets to support seamless Pay-In and Pay-Out functionality.",
      tags: ["Secure", "User-friendly", "Transactions"],
      icon: "👝"
    },
    {
      title: "REAL-TIME INTERNATIONAL PAYMENTS",
      description: "HealthOFin's Blockchain-based Payment solutions enable real-time, cross-border payments.",
      tags: ["Real-time", "Global", "Cross-border"],
      icon: "🌍"
    },
    {
      title: "BLOCKCHAIN PLATFORM AS A SERVICE",
      description: "HealthOFin offers a comprehensive Blockchain Platform as a Service (BPaaS), allowing businesses to deploy, manage, and scale their blockchain applications.",
      tags: ["BPaaS", "Scalable", "Enterprise"],
      icon: "☁️"
    },
    {
      title: "PLATFORMS AS A SERVICE",
      description: "HealthOFin provides a robust Platform as a Service (PaaS) that facilitates the development, testing, and deployment of Decentralized Applications.",
      tags: ["PaaS", "Cloud", "Development"],
      icon: "🚀"
    },
    {
      title: "SECURE BLOCK - MVP",
      description: "Our flagship product, Secure Block, is a Blockchain-powered MVP that highlights our capabilities in building secure, efficient, and scalable Blockchain solutions.",
      tags: ["Flagship", "Secure", "Scalable"],
      icon: "🛡️"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-[#f0fdfa]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, #115e59 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}/>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Section Label */}
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#115e59]/10">
                <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                <span className="text-sm font-medium text-[#115e59]">Our Services</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[#115e59] mb-6">
              Innovative Technology 
              <span className="block">Solutions for Your Business</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-[#115e59]/70 max-w-2xl mx-auto">
              From blockchain architecture to healthcare innovations, we provide comprehensive 
              technology solutions designed to transform and elevate your business operations.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              {['Blockchain', 'Healthcare', 'FinTech', 'AI Solutions', 'Security'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg text-[#115e59] text-sm 
                    border border-[#115e59]/10 hover:-translate-y-1 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group relative bg-white border border-[#115e59]/10 rounded-2xl p-6
                  hover:border-[#115e59]/20 transition-all duration-300"
              >
                {/* Service Icon */}
                <div className="w-12 h-12 bg-[#115e59]/5 rounded-xl flex items-center justify-center
                  mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* Service Number */}
                <div className="absolute top-6 right-6 text-sm font-medium text-[#115e59]/40">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-[#115e59] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#115e59]/70 text-sm mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-[#115e59]/5 rounded-full text-xs font-medium text-[#115e59]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#115e59]/20 
                  group-hover:w-full transition-all duration-500"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services; 