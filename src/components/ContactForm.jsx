import React, { useState } from 'react';

const ContactForm = () => {
  // State to hold form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Update state when user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle the WhatsApp redirect on submit
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    
    // Ensure the phone number includes country code but no + or spaces
    const phoneNumber = "447553439975"; 
    
    // Format the message with line breaks (%0A)
    const text = `Hello KBR Accountants, I have an inquiry from your website:%0A%0A Name: ${formData.name}%0A Email: ${formData.email}%0A Message: ${formData.message}`;
    setFormData({name: '',
    email: '',
    message: ''})
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 inline-block border-b-4 border-yellow-500 pb-2">
            CONTACT US
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600">Get in touch today for expert accounting advice.</p>
        </div>

        {/* Main Grid: Stacks on mobile, side-by-side on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
          
          {/* Left Side: Clickable Contact Details */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Get In Touch</h3>
              <p className="text-gray-600 mb-4 md:mb-6 border-b pb-4 md:pb-6">
                <strong>SUBBA REDDY KODURI</strong><br/>
                <span className="text-xs md:text-sm text-gray-500">ACMA AND CGMA</span>
              </p>
            </div>

            {/* Click-to-Call */}
            <a 
              href="tel:+447553439975" 
              className="flex items-start group hover:bg-blue-50 p-3 sm:p-4 rounded-lg transition-colors border border-transparent hover:border-blue-100 -ml-2 sm:-ml-4"
            >
              <div className="text-2xl sm:text-3xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform">📞</div>
              <div>
                <h4 className="font-bold text-blue-900 text-base md:text-lg">Call Us</h4>
                <p className="text-gray-600 text-sm md:text-lg group-hover:text-blue-900">+44 7553439975</p>
                <p className="text-xs text-yellow-600 font-semibold mt-1">Click to call directly</p>
              </div>
            </a>

            {/* Click-to-Email */}
            <a 
              href="mailto:kbrtax09@gmail.com?subject=New%20Website%20Inquiry" 
              className="flex items-start group hover:bg-blue-50 p-3 sm:p-4 rounded-lg transition-colors border border-transparent hover:border-blue-100 -ml-2 sm:-ml-4"
            >
              <div className="text-2xl sm:text-3xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform">📧</div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-blue-900 text-base md:text-lg">Email Us</h4>
                <p className="text-gray-600 text-sm md:text-lg group-hover:text-blue-900 truncate">kbrtax09@gmail.com</p>
                <p className="text-xs text-yellow-600 font-semibold mt-1">Click to send an email</p>
              </div>
            </a>

            {/* Office Address */}
            <div className="flex items-start p-3 sm:p-4 -ml-2 sm:-ml-4">
              <div className="text-2xl sm:text-3xl mr-3 sm:mr-4">📍</div>
              <div>
                <h4 className="font-bold text-blue-900 text-base md:text-lg">Office Address</h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  1st Floor<br/>
                  153 Linthorpe Road<br/>
                  Middlesbrough TS1 4AG
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: WhatsApp Form */}
          <div className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-lg border border-gray-200">
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4 md:mb-6 flex items-center gap-2">
              <span>Message via WhatsApp</span>
              <span className="text-green-500 text-2xl">📱</span>
            </h3>
            
            <form className="space-y-4 md:space-y-5" onSubmit={sendToWhatsApp}>
              <div>
           
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-shadow text-sm md:text-base" 
                  placeholder="Your Name" 
                />
              </div>
              
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-shadow text-sm md:text-base" 
                  placeholder="you@company.com" 
                />
              </div>
              
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-shadow resize-none text-sm md:text-base" 
                  placeholder="Tell us about your accounting needs..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded shadow-md hover:shadow-lg transition-all mt-2 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;