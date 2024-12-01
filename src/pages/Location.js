import React from 'react';
import { useNavigate } from 'react-router-dom';

function Location() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#f0fdfa] rounded-full border border-[#115e59]/10">
                <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                <span className="text-sm font-medium text-[#115e59]">Our Location</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[#115e59]">
              Global Presence - Digital Excellence
            </h1>
            <p className="text-lg text-[#115e59]/70 max-w-2xl mx-auto">
              While our physical office is in the works, our digital presence knows no boundaries.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="space-y-6">
              {/* Digital First Section */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f0fdfa] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-[#115e59] mb-2">
                    Digital First Approach
                  </h2>
                  <p className="text-[#115e59]/70">
                    Operating with a digital-first mindset, we deliver exceptional services to clients worldwide 
                    through our advanced technological infrastructure.
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mt-8">
                {[
                  {
                    icon: '🌍',
                    title: 'Global Operations',
                    desc: 'Serving clients across multiple time zones with 24/7 digital support'
                  },
                  {
                    icon: '💻',
                    title: 'Remote Collaboration',
                    desc: 'Leveraging cutting-edge tools for seamless virtual interactions'
                  },
                  {
                    icon: '🤝',
                    title: 'Local Partnerships',
                    desc: 'Building strong networks with regional technology partners'
                  }
                ].map((item) => (
                  <div key={item.title} 
                    className="flex items-start gap-4 pl-4 border-l-2 border-[#115e59]/10 hover:border-[#115e59]/30 transition-colors duration-300"
                  >
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-[#115e59]">{item.title}</h3>
                      <p className="text-[#115e59]/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Coming Soon */}
            <div className="relative mt-4">
              <div className="bg-[#f0fdfa] rounded-2xl p-8">
                <div className="absolute -top-4 left-8 px-4 py-1.5 bg-white rounded-full border border-[#115e59]/10">
                  <span className="text-sm font-medium text-[#115e59]">Coming Soon</span>
                </div>

                <div className="space-y-6 mt-4">
                  {/* Future Plans */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Physical Office Location',
                      'Innovation Hub',
                      'Client Meeting Spaces',
                      'Tech Development Center'
                    ].map((item) => (
                      <div key={item} 
                        className="bg-white p-4 rounded-xl border border-[#115e59]/10"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                          <span className="text-sm text-[#115e59]">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact CTA */}
                  <div className="mt-8">
                    <p className="text-[#115e59]/70 text-sm mb-4 text-center">
                      Want to connect with us? Reach out through our digital channels.
                    </p>
                    <button 
                      onClick={handleContactClick}
                      className="w-full py-2.5 bg-[#115e59] text-white rounded-lg font-medium 
                        hover:bg-[#115e59]/90 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Contact Us
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location; 