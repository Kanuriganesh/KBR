import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">More Than Just Number Crunchers</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            At KBR Accountants & Tax Consultants Ltd, we provide the strategic financial insights, 
            strict compliance, and personalized advice you need to grow your business with confidence.
          </p>
        </div>
      </section>

      {/* Firm Overview & Partners Profile */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Commitment & Founder */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Commitment to Your Success</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Managing a business is challenging enough without having to navigate complex tax legislation 
              and financial reporting. Located in the heart of Middlesbrough, KBR was built on a simple premise: 
              <strong className="text-blue-900"> Accurate Advice. Smarter Business.</strong>
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We leverage modern accounting technology alongside traditional, rigorous financial standards to 
              ensure your accounts are not just compliant, but actively working to maximize your profitability.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-4 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Led by Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Founded by <strong>Subba Reddy Koduri</strong>, an actively qualified <strong>ACMA</strong> (Associate of the Chartered Institute of Management Accountants) and <strong>CGMA</strong> (Chartered Global Management Accountant). 
                This means your business benefits from globally recognized standards of management accounting, strategic leadership, and financial discipline.
              </p>
            </div>
          </div>
          
          {/* Right Column: Software Partners block */}
          <div className="bg-blue-900 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-center h-full">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-800 rounded-full opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px bg-yellow-500 flex-grow"></div>
                <h3 className="text-sm font-bold tracking-widest text-yellow-500 uppercase">Technology Driven</h3>
                <div className="h-px bg-yellow-500 flex-grow"></div>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4 text-center">Proud Partners With</h2>
              
              <p className="text-blue-100 mb-10 text-center leading-relaxed">
                We utilize industry-leading cloud accounting software to provide you with real-time financial insights, highly secure data management, and seamless Making Tax Digital (MTD) compliance.
              </p>
              
              {/* Partner Badges container */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                
                {/* Xero Badge */}
                <div className="bg-white text-blue-900 py-4 px-6 rounded-xl flex items-center justify-center shadow-lg w-full sm:w-1/2 transform transition-transform hover:-translate-y-1">
                  <span className="text-cyan-500 text-4xl font-bold tracking-tighter">xero</span>
                </div>
                
                {/* Moneypex Badge */}
                <div className="bg-white text-blue-900 py-4 px-6 rounded-xl flex items-center justify-center shadow-lg w-full sm:w-1/2 transform transition-transform hover:-translate-y-1">
                  <span className="italic text-blue-500 text-3xl font-serif font-bold mr-1">Mp</span> 
                  <span className="text-xl font-bold tracking-tight">Moneypex</span>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The "Why Choose Us" Values Grid */}
      <section className="bg-gray-50 py-16 px-4 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Partner With KBR?</h2>
            <p className="text-gray-600">We hold ourselves to the highest industry standards.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border-t-4 border-blue-900 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold text-gray-800 mb-2">Expert Advice You Can Trust</h3>
              <p className="text-sm text-gray-600">Backed by ACMA & CGMA qualifications, providing strategic insights beyond basic bookkeeping.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border-t-4 border-yellow-500 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="font-bold text-gray-800 mb-2">Accurate & On Time</h3>
              <p className="text-sm text-gray-600">Never miss a deadline. We ensure all filings are precise and submitted well ahead of HMRC cut-offs.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center border-t-4 border-blue-900 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold text-gray-800 mb-2">Compliant & Secure</h3>
              <p className="text-sm text-gray-600">Your financial data is handled with strict confidentiality and fully adheres to MTD regulations.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center border-t-4 border-yellow-500 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold text-gray-800 mb-2">Focusing On Your Growth</h3>
              <p className="text-sm text-gray-600">We handle the numbers so you can focus entirely on scaling your operations and increasing revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-blue-900 rounded-2xl p-8 md:p-12 text-center shadow-2xl text-white">
          <h2 className="text-3xl md:text-4xl font-serif italic text-yellow-500 mb-4">Let's Grow Your Business Together!</h2>
          <p className="mb-8 text-blue-100 text-lg">Partner with an accounting firm that understands your ambitions.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/#contact" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded shadow transition-colors">
              Contact Us Today
            </Link>
            <Link to="/services" className="bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;