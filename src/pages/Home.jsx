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
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Hero Section Placeholder (You can move this to Hero.jsx later) */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">KBR</h1>
          <h2 className="text-2xl font-light mb-2">ACCOUNTANTS & TAX CONSULTANTS LTD</h2>
          <p className="text-yellow-500 font-semibold tracking-widest mt-4">ACCURATE ADVICE. SMARTER BUSINESS.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 inline-block border-b-4 border-yellow-500 pb-2">
            OUR SERVICES
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              title={service.title} 
              icon={service.icon} 
            />
          ))}
        </div>
      </section>

      {/* Contact / Footer Section */}
      <section className="bg-blue-900 text-white py-12 px-4 mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div>
            <h3 className="text-4xl font-serif italic text-yellow-500 mb-2">Let's Grow</h3>
            <h3 className="text-4xl font-serif italic text-white mb-6">Your Business Together!</h3>
            
            <div className="space-y-4 text-gray-200">
              <p><strong>SUBBA REDDY KODURI</strong><br/><span className="text-sm">ACMA AND CGMA</span></p>
              <p>📧 Mail: kbrtax09@gmail.com</p>
              <p>📞 Phone: +44 7553439975</p>
            </div>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="font-bold text-blue-900 mb-4 border-b pb-2">OFFICE ADDRESS</h4>
            <p>1st Floor<br/>153 Linthorpe Road<br/>Middlesbrough TS1 4AG</p>
          </div>

        </div>
      </section>

      {/* Bottom Trust Badges */}
      <div className="bg-gray-100 py-6 border-t border-gray-300">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between text-sm font-bold text-gray-600 px-4 text-center gap-4">
          <span>🛡️ EXPERT ADVICE YOU CAN TRUST</span>
          <span>⏱️ ACCURATE & ON TIME</span>
          <span>🔒 COMPLIANT & SECURE</span>
          <span>📈 FOCUSING ON YOUR GROWTH</span>
        </div>
      </div>

    </div>
  );
};

export default Home;