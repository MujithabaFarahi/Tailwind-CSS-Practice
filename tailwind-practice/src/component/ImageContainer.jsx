import React from 'react';
import img from '../assets/images/img12.webp';

export default function ImageContainer() {
  return (
    <div className="bg-customBlue flex justify-center">
      <div className="max-w-screen-xl flex flex-col pt-10 px-5 gap-y-16 items-center justify-between lg:flex-row lg:justify-around ">
        <div className="text-white text-center lg:text-left max-w-2xl">
          <div className="font-barlow text-4xl">
            Are you looking to hire talented, passionate developers?
          </div>
          <div className="heebo my-8 ">
            Our Hiring Platform helps you connect with our diverse community of
            talented early-career developers. Stop wading through hundreds of
            resumes and get chatting to skilled developers in minutes.
          </div>
          <button className="w-fit px-8 lg:mb-12 h-10 py-1 italic font-bold text-customBlue  bg-white rounded-full hover:bg-gray-200">
            START HIRING DEVELOPERS
          </button>
        </div>
        <div className="max-w-lg ">
          <img src={img} alt="img" className=""></img>
        </div>
      </div>
    </div>
  );
}
