import React, { useState } from "react";

const ServiceCard = ({ img, title, description }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-2 hover:shadow-lg transition-shadow flex flex-col">
      <div className="relative mb-2 h-[250px] w-full">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center rounded-lg">
            <span className="text-gray-500">Loading...</span>
          </div>
        )}
        <img
          className={`h-[250px] w-full object-cover rounded-lg transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={img}
          alt={`${title} img`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)} // Keeps skeleton if the image fails to load
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
