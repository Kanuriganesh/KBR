import React from 'react';

const ServiceCard = ({ title, icon }) => {
  return (
    <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 mr-4 text-3xl text-blue-900">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;