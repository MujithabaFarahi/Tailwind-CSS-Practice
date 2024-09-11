import React from 'react';
import img from '../assets/images/img12.webp';

export default function ImageContainer() {
  return (
    <div className="bg-customBlue flex justify-center">
      <div className="flex flex-col mt-10 lg:mt-20 px-5 gap-y-16 gap-x-12 items-center lg:items-end justify-between lg:flex-row lg:justify-around ">
        <div className="text-white text-center lg:text-left max-w-xl lg:py-5">
          <div className="font-barlow text-3xl md:text-[38px] lg:text-[40px] leading-[1.2] max-w-lg md:max-w-xl">
            Are you looking to hire talented, passionate developers?
          </div>
          <div className="heebo my-8 lg:text-lg ">
            Our Hiring Platform helps you connect with our diverse community of
            talented early-career developers. Stop wading through hundreds of
            resumes and get chatting to skilled developers in minutes.
          </div>
          <button className="w-fit px-8 lg:mb-20 py-2.5 italic font-bold text-customBlue  bg-white rounded-full hover:bg-gray-200">
            START HIRING DEVELOPERS
          </button>
        </div>
        <div className="max-w-xl px-4 md:max-w-2xl md:min-w-[465px] lg:max-w-xl">
          <div className="w-full">
            <img src={img} alt="img " className=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
