import React from 'react';

function Products() {
  // Add these style constants at the top of the component
  const imageWrapperStyles = "relative aspect-[4/3] w-full max-w-md mx-auto";
  const imageStyles = "w-full h-[300px] object-cover rounded-3xl";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-[#f0fdfa]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, #115e59 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}/>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Label */}
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#115e59]/10">
                <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                <span className="text-sm font-medium text-[#115e59]">Our Products</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl font-display font-bold text-[#115e59] mb-6">
              Our Products Summary
            </h1>

            {/* Description */}
            <div className="space-y-4 text-base text-[#115e59]/70 leading-relaxed">
              <p>
                Introducing our cutting-edge product lineup designed to revolutionize your experience 
                across various sectors. <span className="text-[#115e59] font-medium">"Secure Block"</span> offers 
                a transformative approach to the banking ecosystem, leveraging blockchain technology 
                to ensure a highly secure and efficient financial framework.
              </p>
              
              <p>
                In healthcare, <span className="text-[#115e59] font-medium">"Smart Detect"</span> utilizes 
                advanced artificial intelligence to provide painless and hassle-free blood sugar level 
                detection, enhancing patient comfort and diagnostic accuracy.
              </p>
              
              <p>
                Our <span className="text-[#115e59] font-medium">"Telecom Business"</span> Applications aim 
                to modernize operations for leading broadband providers, streamlining processes and 
                improving service delivery. Together, these products reflect our commitment to innovation 
                and excellence in technology-driven solutions.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#115e59]/5 rounded-full blur-2xl -z-10"/>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#115e59]/5 rounded-full blur-2xl -z-10"/>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Smart Detect Section */}
          <section className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#115e59]/5 rounded-full">
                  <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                  <span className="text-sm font-medium text-[#115e59]">Healthcare Innovation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#115e59]">
                  Smart Detect
                </h2>
                <p className="text-lg text-[#115e59]/70 leading-relaxed">
                  Advanced AI-powered solution for non-invasive blood sugar monitoring, 
                  revolutionizing the way diabetes management is approached.
                </p>
                <div className="space-y-4">
                  {[
                    'Non-invasive monitoring technology',
                    'Real-time blood sugar tracking',
                    'AI-powered accuracy',
                    'User-friendly interface',
                    'Instant results delivery'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                      <span className="text-[#115e59]/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={imageWrapperStyles}>
                <img 
                  src="/assets/detect.png"
                  alt="Smart Detect"
                  className={imageStyles}
                />
              </div>
            </div>
          </section>

          {/* Secure Block Section */}
          <section className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={imageWrapperStyles}>
                <img 
                  src="/assets/blockChain.png"
                  alt="Secure Block"
                  className={imageStyles}
                />
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#115e59]/5 rounded-full">
                  <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                  <span className="text-sm font-medium text-[#115e59]">Banking Security</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#115e59]">
                  Secure Block
                </h2>
                <p className="text-lg text-[#115e59]/70 leading-relaxed">
                  Blockchain-powered security solution ensuring unparalleled protection 
                  for financial transactions and data management.
                </p>
                <div className="space-y-4">
                  {[
                    'Advanced blockchain technology',
                    'End-to-end encryption',
                    'Decentralized security',
                    'Real-time transaction monitoring',
                    'Automated compliance checks'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                      <span className="text-[#115e59]/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Telecom Business Section */}
          <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#115e59]/5 rounded-full">
                  <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                  <span className="text-sm font-medium text-[#115e59]">Telecom Solutions</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#115e59]">
                  Telecom Business
                </h2>
                <p className="text-lg text-[#115e59]/70 leading-relaxed">
                  Comprehensive suite of applications designed to streamline operations 
                  and enhance service delivery for broadband providers.
                </p>
                <div className="space-y-4">
                  {[
                    'Automated workflow management',
                    'Customer experience optimization',
                    'Real-time analytics dashboard',
                    'Service quality monitoring',
                    'Integrated communication tools'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                      <span className="text-[#115e59]/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={imageWrapperStyles}>
                <img 
                  src="/assets/telecome.png"
                  alt="Telecom Business"
                  className={imageStyles}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Products; 