import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Background decorative shape mimicking the flyer's curves */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900 rounded-bl-[100px] hidden md:block -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 flex flex-col md:flex-row items-center">
        
        {/* Left Side: Text and Partners */}
        <div className="md:w-1/2 pr-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            ACCURATE ADVICE. 
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            SMARTER BUSINESS.
          </h2>
          
          <div className="my-8 flex items-center justify-center md:justify-start gap-4">
            <div className="h-px bg-yellow-500 w-12"></div>
            <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">Proud Partners With</p>
            <div className="h-px bg-yellow-500 w-12"></div>
          </div>

          {/* Partner Logos (Placeholders for Xero & MoneyPex) */}
          <div className="flex justify-center md:justify-start gap-6 mb-8">
            <div className="bg-blue-900 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-blue-300 mr-1 text-xl">xero</span>
            </div>
            <div className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center shadow-lg">
              <span className="italic mr-1 text-xl">Mp</span> Moneypex
            </div>
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative z-10">
          <div className="bg-white p-2 rounded-lg shadow-xl border-4 border-yellow-500 transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
            {/* You can replace this src with the actual office image or bridge image from your assets folder */}
            <div className="bg-gray-200 h-64 md:h-80 w-full rounded flex items-center justify-center text-gray-500">
              [ Office / Bridge Image Placeholder ]
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;