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
    setFormData({ name: '', email: '', message: '' });
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const inputClasses =
    "w-full px-4 py-2.5 bg-white border border-[#0F2A47]/15 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C99A3B]/40 focus:border-[#0F2A47]/30 transition-shadow text-[15px] text-[#1B2430] placeholder:text-[#1B2430]/35";

  return (
    <section className="bg-[#F7F4EE] py-16 sm:py-20 px-6" id="contact">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="font-[Fraunces,serif] text-3xl md:text-4xl text-[#0F2A47]">
            Contact us
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C99A3B]" />
            <p className="text-sm md:text-base text-[#1B2430]/60">
              Get in touch today for expert accounting advice.
            </p>
            <span className="h-px w-8 bg-[#C99A3B]" />
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#0F2A47]/12 bg-white">

          {/* Left: Contact details */}
          <div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#0F2A47]/12">
            <h3 className="font-[Fraunces,serif] text-xl md:text-2xl text-[#0F2A47] mb-1">
              Get in touch
            </h3>
            <p className="text-[#1B2430]/60 mb-6 pb-6 border-b border-[#0F2A47]/10 text-[15px]">
              <span className="block font-medium text-[#1B2430]">Subba Reddy Koduri</span>
              <span className="text-sm">ACMA, CGMA</span>
            </p>

            <div className="space-y-1">
              {/* Click-to-Call */}
              <a
                href="tel:+447553439975"
                className="flex items-start gap-4 group hover:bg-[#0F2A47]/[0.03] p-3 -mx-3 rounded-sm transition-colors"
              >
                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-sm border border-[#0F2A47]/12 bg-[#F7F4EE] text-xl">
                  📞
                </div>
                <div>
                  <h4 className="font-medium text-[#0F2A47]">Call us</h4>
                  <p className="text-[#1B2430]/70 text-[15px]">+44 7553 439975</p>
                  <p className="text-xs text-[#C99A3B] font-medium mt-0.5">Click to call directly</p>
                </div>
              </a>

              {/* Click-to-Email */}
              <a
                href="mailto:kbrtax09@gmail.com?subject=New%20Website%20Inquiry"
                className="flex items-start gap-4 group hover:bg-[#0F2A47]/[0.03] p-3 -mx-3 rounded-sm transition-colors"
              >
                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-sm border border-[#0F2A47]/12 bg-[#F7F4EE] text-xl">
                  📧
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-[#0F2A47]">Email us</h4>
                  <p className="text-[#1B2430]/70 text-[15px] truncate">kbrtax09@gmail.com</p>
                  <p className="text-xs text-[#C99A3B] font-medium mt-0.5">Click to send an email</p>
                </div>
              </a>

              {/* Office Address */}
              <div className="flex items-start gap-4 p-3 -mx-3">
                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-sm border border-[#0F2A47]/12 bg-[#F7F4EE] text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-medium text-[#0F2A47]">Office address</h4>
                  <p className="text-[#1B2430]/70 text-[15px] leading-relaxed">
                    1st Floor
                    <br />
                    153 Linthorpe Road
                    <br />
                    Middlesbrough TS1 4AG
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: WhatsApp form */}
          <div className="p-6 sm:p-10 bg-[#F7F4EE]">
            <h3 className="font-[Fraunces,serif] text-xl md:text-2xl text-[#0F2A47] mb-6 flex items-center gap-2">
              Message via WhatsApp
              <span className="text-[#25D366] text-2xl">📱</span>
            </h3>

            <form className="space-y-4" onSubmit={sendToWhatsApp}>
              <div>
                <label className="block text-sm font-medium text-[#1B2430]/70 mb-1.5">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1B2430]/70 mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1B2430]/70 mb-1.5">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your accounting needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-3 px-4 rounded-sm transition-colors mt-2"
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
