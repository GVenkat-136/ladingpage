import React, { useState } from 'react';
import toast from 'react-hot-toast';

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // First Name validation
    if (!formData.firstName.trim()) {
      tempErrors.firstName = 'First name is required';
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      tempErrors.lastName = 'Last name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Subject validation
    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Show loading toast
      const loadingToast = toast.loading('Sending message...');
      
      // Simulate API call
      setTimeout(() => {
        toast.dismiss(loadingToast);
        toast.success('Message sent successfully!', {
          duration: 4000,
          position: 'top-center',
          icon: '✅',
        });
        
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
  };

  // Input style with error state
  const getInputStyle = (fieldName) => `
    w-full px-3 py-2 bg-[#115e59]/5 rounded-lg border-0
    placeholder-[#115e59]/40 text-[#115e59] 
    focus:outline-none focus:ring-2 
    ${errors[fieldName] ? 'ring-2 ring-red-400/50' : 'focus:ring-[#115e59]/20'}
    transition-all duration-300
  `;

  return (
    <div className="min-h-screen bg-white pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Content */}
            <div className="space-y-8 sticky top-32">
              {/* Section Label */}
              <div className="inline-flex items-center space-x-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#f0fdfa] rounded-full border border-[#115e59]/10">
                  <div className="w-1.5 h-1.5 bg-[#115e59] rounded-full"/>
                  <span className="text-sm font-medium text-[#115e59]">Get in Touch</span>
                </div>
              </div>

              {/* Title and Description */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-[#115e59]">
                  Let's Start a 
                  <span className="block">Conversation</span>
                </h1>
                <p className="text-lg text-[#115e59]/70 max-w-xl">
                  Have a question or want to learn more about our services? We're here to help 
                  and would love to hear from you.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  {[
                    { icon: '📧', title: 'Email', value: 'info@healthofin.com' },
                    { icon: '🌐', title: 'Website', value: 'www.healthofin.com' },
                    { icon: '📍', title: 'Location', value: 'Global Service Provider' }
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#f0fdfa] rounded-xl flex items-center justify-center
                        shadow-sm border border-[#115e59]/10">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-[#115e59]">{item.title}</h3>
                        <p className="text-[#115e59]/70">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="relative mt-4">
              {/* Background Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#115e59]/5 rounded-full blur-2xl"/>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#115e59]/5 rounded-full blur-2xl"/>

              {/* Form */}
              <form 
                className="relative bg-white border border-[#115e59]/10 rounded-2xl p-6 md:p-8
                  hover:border-[#115e59]/20 transition-all duration-300 shadow-sm"
                onSubmit={handleSubmit}
              >
                {/* Form Header - With theme color background */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="px-6 py-1.5 bg-[#f0fdfa] border border-[#115e59]/10 rounded-full shadow-sm">
                      <span className="text-sm font-medium text-[#115e59]">Contact Form</span>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="mt-4 space-y-4">
                  {/* Name Fields Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                      <label className="inline-flex items-center gap-2 text-sm font-medium text-[#115e59] mb-1.5">
                        <div className="w-1 h-1 bg-[#115e59] rounded-full"/>
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={getInputStyle('firstName')}
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="inline-flex items-center gap-2 text-sm font-medium text-[#115e59] mb-1.5">
                        <div className="w-1 h-1 bg-[#115e59] rounded-full"/>
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={getInputStyle('lastName')}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="inline-flex items-center gap-2 text-sm font-medium text-[#115e59] mb-1.5">
                      <div className="w-1 h-1 bg-[#115e59] rounded-full"/>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={getInputStyle('email')}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="inline-flex items-center gap-2 text-sm font-medium text-[#115e59] mb-1.5">
                      <div className="w-1 h-1 bg-[#115e59] rounded-full"/>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={getInputStyle('subject')}
                      placeholder="How can we help?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="inline-flex items-center gap-2 text-sm font-medium text-[#115e59] mb-1.5">
                      <div className="w-1 h-1 bg-[#115e59] rounded-full"/>
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={getInputStyle('message')}
                      placeholder="Write your message here..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#115e59] text-white rounded-lg font-medium 
                      hover:bg-[#115e59]/90 transition-all duration-300 group flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
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
                  </button>

                  {/* Privacy Note */}
                  <p className="text-center text-xs text-[#115e59]/60 mt-3">
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 