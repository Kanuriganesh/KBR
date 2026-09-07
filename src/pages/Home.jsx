import React from 'react';
import ServiceCard from '../components/ServiceCard';
// import Hero from '../components/Hero';
// import ContactForm from '../components/ContactForm';

const Home = () => {
  // All services extracted from the KBR flyer
  const services = [
    { id: 1, title: "Confirmation Statement", icon: "📄" },
    { id: 2, title: "VAT Quarterly", icon: "📊" },
    { id: 3, title: "MTD Self Assessment", icon: "💻" },
    { id: 4, title: "Annual Accounts", icon: "📈" },
    { id: 5, title: "Self Assessment", icon: "👤" },
    { id: 6, title: "PAYE (Monthly)", icon: "🗓️" },
    { id: 7, title: "PAYE (Weekly)", icon: "📅" },
    { id: 8, title: "PAYE (Fort-Nightly)", icon: "📆" },
    { id: 9, title: "Partnership Return", icon: "🤝" },
    { id: 10, title: "Corporation Tax", icon: "🏢" },
    { id: 11, title: "Staging Date Auto Enroll", icon: "👥" },
    { id: 12, title: "Business Setup", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] font-[Inter,sans-serif] text-[#1B2430]">
      {/* Font import — move this <link> into your index.html <head> for production */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Hero */}
      <section className="relative bg-[#0F2A47] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, transparent, transparent 27px, #ffffff 28px)'
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-28 text-center">
          <h1 className="font-[Fraunces,serif] text-6xl sm:text-7xl font-medium tracking-tight">
            KBR
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-white/70 font-light">
            Accountants &amp; Tax Consultants Ltd
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#C99A3B]" />
            <p className="text-[#C99A3B] font-medium text-sm sm:text-base">
              Accurate advice. Smarter business.
            </p>
            <span className="h-px w-8 bg-[#C99A3B]" />
          </div>
        </div>
      </section>

      {/* Services — ledger-style list */}
      <section className="py-16 sm:py-20 px-6 max-w-3xl mx-auto">
        <div className="flex items-baseline justify-between mb-8 border-b border-[#0F2A47]/15 pb-4">
          <h2 className="font-[Fraunces,serif] text-3xl sm:text-4xl text-[#0F2A47]">
            Our services
          </h2>
          <span className="hidden sm:block text-sm text-[#0F2A47]/40 font-mono">
            {services.length} lines
          </span>
        </div>

        <div className="border border-[#0F2A47]/12 divide-y divide-[#0F2A47]/12 bg-white rounded-sm">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              index={i + 1}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
      </section>

      {/* Contact / Footer */}
      <section className="bg-[#0F2A47] text-white py-16 px-6 mt-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-[Fraunces,serif] text-4xl sm:text-5xl leading-tight">
              <span className="italic text-[#C99A3B]">Let's grow</span>
              <br />
              your business together
            </h3>

            <div className="mt-8 space-y-3 text-white/80 text-[15px] leading-relaxed">
              <p>
                <span className="block font-medium text-white">Subba Reddy Koduri</span>
                <span className="text-white/50 text-sm">ACMA, CGMA</span>
              </p>
              <p>kbrtax09@gmail.com</p>
              <p>+44 7553 439975</p>
            </div>
          </div>

          <div className="bg-white text-[#1B2430] p-7 rounded-sm shadow-[0_1px_0_0_#C99A3B]">
            <h4 className="font-medium text-[#0F2A47] mb-3 pb-3 border-b border-[#0F2A47]/10">
              Office address
            </h4>
            <p className="text-[15px] leading-relaxed text-[#1B2430]/80">
              1st Floor
              <br />
              153 Linthorpe Road
              <br />
              Middlesbrough TS1 4AG
            </p>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-[#F0EBDF] py-6 border-t border-[#0F2A47]/10">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-3 text-center px-6">
          {[
            "Expert advice you can trust",
            "Accurate & on time",
            "Compliant & secure",
            "Focused on your growth"
          ].map((item) => (
            <span key={item} className="text-sm font-medium text-[#0F2A47]/70">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
