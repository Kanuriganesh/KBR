import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: "🛡️",
      title: "Expert advice you can trust",
      desc: "Backed by ACMA and CGMA qualifications, providing strategic insight beyond basic bookkeeping."
    },
    {
      icon: "⏱️",
      title: "Accurate and on time",
      desc: "Never miss a deadline — filings are prepared precisely and submitted well ahead of HMRC cut-offs."
    },
    {
      icon: "🔒",
      title: "Compliant and secure",
      desc: "Your financial data is handled with strict confidentiality and fully adheres to MTD regulations."
    },
    {
      icon: "📈",
      title: "Focused on your growth",
      desc: "We handle the numbers so you can focus entirely on scaling operations and increasing revenue."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] font-[Inter,sans-serif] text-[#1B2430]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Hero */}
      <section className="relative bg-[#0F2A47] text-white py-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, transparent, transparent 27px, #ffffff 28px)'
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="font-[Fraunces,serif] text-4xl md:text-5xl leading-tight">
            More than just number crunchers
          </h1>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C99A3B]" />
            <span className="text-sm font-mono text-white/50">about kbr</span>
            <span className="h-px w-8 bg-[#C99A3B]" />
          </div>
          <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
            We provide the strategic financial insight, strict compliance, and personalised
            advice you need to grow your business with confidence.
          </p>
        </div>
      </section>

      {/* Commitment & Partners */}
      <section className="py-16 sm:py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* Left: Commitment & Founder */}
          <div className="flex flex-col justify-center">
            <h2 className="font-[Fraunces,serif] text-2xl sm:text-3xl text-[#0F2A47] mb-5">
              Our commitment to your success
            </h2>
            <p className="text-[#1B2430]/70 mb-4 leading-relaxed">
              Managing a business is challenging enough without navigating complex tax
              legislation and financial reporting. Located in the heart of Middlesbrough, KBR
              was built on a simple premise:{" "}
              <span className="text-[#0F2A47] font-medium">
                accurate advice, smarter business.
              </span>
            </p>
            <p className="text-[#1B2430]/70 mb-6 leading-relaxed">
              We pair modern accounting technology with traditional, rigorous financial
              standards, so your accounts aren't just compliant — they actively work to
              maximise your profitability.
            </p>

            <div className="border-l-2 border-[#C99A3B] bg-white p-6">
              <h3 className="font-medium text-[#0F2A47] mb-2">Led by expertise</h3>
              <p className="text-[#1B2430]/70 leading-relaxed text-[15px]">
                Founded by <strong className="text-[#1B2430]">Subba Reddy Koduri</strong>, an
                actively qualified <strong className="text-[#1B2430]">ACMA</strong> (Associate
                of the Chartered Institute of Management Accountants) and{" "}
                <strong className="text-[#1B2430]">CGMA</strong> (Chartered Global Management
                Accountant) — bringing globally recognised standards of management accounting,
                strategic leadership, and financial discipline to your business.
              </p>
            </div>
          </div>

          {/* Right: Software Partners */}
          <div className="bg-[#0F2A47] p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px bg-[#C99A3B] flex-grow" />
              <h3 className="text-sm font-medium text-[#C99A3B] whitespace-nowrap">
                Technology driven
              </h3>
              <span className="h-px bg-[#C99A3B] flex-grow" />
            </div>

            <h2 className="font-[Fraunces,serif] text-2xl sm:text-3xl text-white mb-4 text-center">
              Proud partners with
            </h2>

            <p className="text-white/60 mb-8 text-center leading-relaxed text-[15px]">
              We use industry-leading cloud accounting software to give you real-time
              financial insight, secure data management, and seamless Making Tax Digital
              compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-[#F7F4EE] py-4 px-6 flex items-center justify-center">
                <span className="text-[#13B5EA] text-3xl font-bold tracking-tighter">xero</span>
              </div>
              <div className="flex-1 bg-[#F7F4EE] py-4 px-6 flex items-center justify-center gap-1">
                <span className="italic text-[#0F2A47] text-2xl font-[Fraunces,serif] font-medium">
                  Mp
                </span>
                <span className="text-lg font-medium text-[#1B2430] tracking-tight">
                  Moneypex
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-16 sm:py-20 px-6 border-y border-[#0F2A47]/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="font-[Fraunces,serif] text-2xl sm:text-3xl text-[#0F2A47] mb-2">
              Why partner with KBR?
            </h2>
            <p className="text-[#1B2430]/60">We hold ourselves to the highest industry standards.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 border border-[#0F2A47]/12 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-[#0F2A47]/12">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`flex items-start gap-4 p-6 sm:p-7 ${
                  i < values.length - 2 ? 'sm:border-b border-[#0F2A47]/12' : ''
                } ${i % 2 === 0 ? '' : ''}`}
              >
                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-sm border border-[#0F2A47]/12 bg-[#F7F4EE] text-xl">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-medium text-[#1B2430] mb-1.5">{value.title}</h3>
                  <p className="text-sm text-[#1B2430]/60 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-3xl mx-auto bg-[#0F2A47] p-10 md:p-14 text-center text-white">
          <h2 className="font-[Fraunces,serif] italic text-3xl md:text-4xl text-[#C99A3B] mb-4 leading-tight">
            Let's grow your business together
          </h2>
          <p className="mb-8 text-white/70 text-base md:text-lg">
            Partner with an accounting firm that understands your ambitions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/#contact"
              className="bg-[#C99A3B] hover:bg-[#C99A3B]/90 text-[#0F2A47] font-medium py-3 px-8 rounded-sm transition-colors"
            >
              Contact us today
            </Link>
            <Link
              to="/services"
              className="border border-white/30 hover:bg-white/10 text-white font-medium py-3 px-8 rounded-sm transition-colors"
            >
              View our services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
