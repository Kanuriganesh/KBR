import React from 'react';

const Services = () => {
  const services = [
    { id: 1, title: "Confirmation Statement", icon: "📄", desc: "Accurate and timely filing with Companies House." },
    { id: 2, title: "VAT Quarterly", icon: "📊", desc: "Quarterly VAT return preparation and submission." },
    { id: 3, title: "MTD Self Assessment", icon: "💻", desc: "Making Tax Digital compliant self-assessment services." },
    { id: 4, title: "Annual Accounts", icon: "📈", desc: "Preparation and filing of statutory annual accounts." },
    { id: 5, title: "Self Assessment", icon: "👤", desc: "Personal tax return services and calculations." },
    { id: 6, title: "PAYE (Monthly)", icon: "🗓️", desc: "Monthly payroll management and RTI submissions." },
    { id: 7, title: "PAYE (Weekly)", icon: "📅", desc: "Fast and accurate weekly payroll processing." },
    { id: 8, title: "PAYE (Fort-Nightly)", icon: "📆", desc: "Fort-nightly payroll services for your staff." },
    { id: 9, title: "Partnership Return", icon: "🤝", desc: "Expert handling of partnership tax returns." },
    { id: 10, title: "Corporation Tax", icon: "🏢", desc: "Strategic corporation tax planning and filing." },
    { id: 11, title: "Staging Date Auto Enroll", icon: "👥", desc: "Workplace pension auto-enrolment management." },
    { id: 12, title: "Business Setup", icon: "🚀", desc: "Expert advice and registration for new businesses." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <div className="bg-blue-900 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        <p className="text-blue-100 mt-6 max-w-2xl mx-auto text-lg">
          Everything your business needs to stay compliant and grow securely.
        </p>
      </div>

      {/* Detailed Services Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:border-blue-900 transition-all">
              <div className="text-4xl text-blue-900 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;