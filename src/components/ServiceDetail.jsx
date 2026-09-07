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
    <div className="min-h-screen bg-[#F7F4EE] pb-20 font-[Inter,sans-serif] text-[#1B2430]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Page Header */}
      <div className="relative bg-[#0F2A47] py-20 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, transparent, transparent 27px, #ffffff 28px)'
          }}
        />
        <div className="relative">
          <h1 className="font-[Fraunces,serif] text-4xl md:text-5xl text-white">
            Our services
          </h1>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C99A3B]" />
            <span className="text-sm font-mono text-white/50">{services.length} lines</span>
            <span className="h-px w-8 bg-[#C99A3B]" />
          </div>
          <p className="text-white/70 mt-6 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Everything your business needs to stay compliant and grow securely.
          </p>
        </div>
      </div>

      {/* Services ledger */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="border border-[#0F2A47]/12 divide-y divide-[#0F2A47]/12 bg-white rounded-sm">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 px-6 py-6 hover:bg-[#0F2A47]/[0.03] transition-colors"
            >
              <div className="flex items-center gap-4 sm:contents">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-sm border border-[#0F2A47]/12 bg-[#F7F4EE] text-2xl">
                  {service.icon}
                </div>
                <span className="sm:hidden text-xs font-mono text-[#0F2A47]/35">
                  SVC-{String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-lg text-[#1B2430] tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[#1B2430]/60 text-[15px] leading-relaxed mt-1">
                  {service.desc}
                </p>
              </div>

              <span className="hidden sm:inline text-xs font-mono text-[#0F2A47]/35 shrink-0 self-start">
                SVC-{String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
