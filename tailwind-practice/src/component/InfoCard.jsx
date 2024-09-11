import React from 'react';

const InfoCard = ({ emoji, title, description }) => {
  return (
    <div className="flex flex-col px-4 items-center justify-center md:items-start gap-y-3 md:max-w-lg">
      <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
        <div className="text-3xl">{emoji}</div>
      </div>
      <div className="my-4 text-4xl max-w-md md:w-full font-semibold text-center md:text-start">
        {title}
      </div>
      <div className="text-center max-w-lg md:max-w-full md:text-lg text-gray-500 md:text-start">
        {description}
      </div>
    </div>
  );
};

export default InfoCard;
