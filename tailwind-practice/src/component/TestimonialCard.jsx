import React from 'react';

const TestimonialCard = ({ name, role, img, message }) => {
  return (
    <div className="max-w-xl p-8 mx-5  bg-white rounded-2xl  heebo">
      <div className="my-3 text-6xl text-center text-gray-200">
        <i className="fa fa-quote-left" aria-hidden="true"></i>
      </div>
      <p className="text-center text-xl">{message}</p>
      <div className="flex flex-col  items-center justify-center w-full my-3">
        <img src={img} alt={name} className="w-16 h-16 my-2 rounded-full" />
        <p className="font-bold tracking-widest text-customBlue mt-3">{name}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
