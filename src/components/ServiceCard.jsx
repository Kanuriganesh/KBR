import React from 'react';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="group flex items-center gap-4 px-5 sm:px-6 py-4 hover:bg-[#0F2A47]/[0.03] transition-colors">
      <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-sm border border-[#0F2A47]/12 bg-[#F7F4EE] text-xl">
        {icon}
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-medium text-[#1B2430] tracking-tight truncate">
          {title}
        </p>
      </div>

      <span className="hidden sm:inline text-xs font-mono text-[#0F2A47]/35 shrink-0">
        SVC-{String(index).padStart(2, '0')}
      </span>
    </div>
  );
};

export default ServiceCard;
