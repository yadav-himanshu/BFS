import React from 'react';

const AboutCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl text-blue-500 mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutCard;
