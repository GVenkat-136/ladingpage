import React from 'react';

function About() {
  // Company milestones/features
  const features = [
    {
      icon: '🚀',
      title: 'Innovation Hub',
      desc: 'Based in Hyderabad, the heart of India\'s technology ecosystem'
    },
    {
      icon: '🌍',
      title: 'Global Vision',
      desc: 'Positioned to expand globally with innovative solutions'
    },
    {
      icon: '💡',
      title: 'Expert Leadership',
      desc: 'Backed by experienced software industry leaders'
    },
    {
      icon: '🔗',
      title: 'Advanced Tech',
      desc: 'Leveraging AI and Blockchain technologies'
    }
  ];

  // Core focus areas
  const focusAreas = [
    {
      title: 'Healthcare Innovation',
      desc: 'Revolutionizing healthcare delivery through AI-powered solutions and seamless integration',
      icon: '⚕️'
    },
    {
      title: 'FinTech Solutions',
      desc: 'Transforming financial services with secure blockchain technology and smart contracts',
      icon: '💹'
    },
    {
      title: 'Technology Integration',
      desc: 'Combining cutting-edge AI and Blockchain for innovative solutions',
      icon: '🔄'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#f0fdfa] rounded-full border border-[#115e59]/10">
                <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                <span className="text-sm font-medium text-[#115e59]">About Us</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[#115e59]">
              Innovating for Tomorrow
            </h1>
            <p className="text-lg text-[#115e59]/70 max-w-2xl mx-auto">
              Pioneering the future of healthcare and fintech through innovative technology solutions
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-20">
            {/* Company Overview */}
            <div className="bg-[#f0fdfa] rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#115e59]/5 rounded-full blur-2xl"/>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#115e59]/5 rounded-full blur-2xl"/>
              
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-[#115e59]">
                    Our Story
                  </h2>
                  <div className="w-20 h-1 bg-[#115e59]/10 mx-auto rounded-full"/>
                </div>

                <div className="relative">
                  {/* Quote marks */}
                  <div className="absolute -top-6 -left-6 text-6xl text-[#115e59]/10 font-serif">❝</div>
                  <div className="absolute -bottom-6 -right-6 text-6xl text-[#115e59]/10 font-serif">❞</div>
                  
                  {/* Story Text */}
                  <p className="text-[#115e59]/70 leading-relaxed text-justify px-8">
                    HealthOFin Innovations is an exciting and ambitious Software Product Development 
                    company being bootstrapped in Hyderabad and determined to go global very soon. 
                    Our innovative startup is backed by highly experienced and passionate Software Industry 
                    leaders with a strong vision of disrupting HealthCare and FinTech domains by leveraging 
                    Artificial Intelligence (AI) and Blockchain Technologies.
                  </p>
                </div>

                {/* Key Points */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  {[
                    { label: 'Location', value: 'Hyderabad' },
                    { label: 'Focus', value: 'Healthcare & FinTech' },
                    { label: 'Technology', value: 'AI & Blockchain' }
                  ].map((item) => (
                    <div key={item.label} 
                      className="text-center p-4 bg-white rounded-xl border border-[#115e59]/10"
                    >
                      <div className="text-sm text-[#115e59]/60">{item.label}</div>
                      <div className="font-semibold text-[#115e59]">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
              {features.map((feature) => (
                <div key={feature.title} className="group">
                  <div className="relative p-6 bg-white border border-[#115e59]/10 rounded-xl
                    hover:border-[#115e59]/20 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#f0fdfa] rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#115e59]">{feature.title}</h3>
                    </div>
                    <p className="text-[#115e59]/70 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Focus Areas */}
            <div className="space-y-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#115e59] text-center">
                Our Focus Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {focusAreas.map((area) => (
                  <div key={area.title} 
                    className="relative bg-white p-6 rounded-xl border border-[#115e59]/10
                      hover:border-[#115e59]/20 transition-all duration-300"
                  >
                    <div className="absolute -top-4 left-4 w-8 h-8 bg-[#f0fdfa] rounded-full
                      flex items-center justify-center border border-[#115e59]/10">
                      <span className="text-xl">{area.icon}</span>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-[#115e59] mb-2">{area.title}</h3>
                      <p className="text-[#115e59]/70 text-sm">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Statement */}
            <div className="text-center space-y-6 max-w-3xl mx-auto pb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#115e59]">
                Our Vision
              </h2>
              <p className="text-lg text-[#115e59]/70">
                To become a global leader in innovative healthcare and fintech solutions, 
                creating meaningful impact through cutting-edge technology and passionate dedication 
                to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 