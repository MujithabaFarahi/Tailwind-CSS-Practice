import React from 'react';
import img from '../assets/images/img1.webp';
import img2 from '../assets/images/img2.webp';
import TestimonialCard from './TestimonialCard';

export default function Hero() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mt-10 md:flex-row lg:gap-x-16 gap-y-10">
        <div className="max-w-xl p-5 md:w-8/12 lg:w-5/12">
          <div className="text-center md:text-start">
            <p className="font-serif text-5xl text-customBlue">
              Improve your coding skills by building realistic projects
            </p>
          </div>
          <div className="mt-10">
            <p className="text-center text-gray-500 md:text-start">
              Our professionally designed challenges help you gain hands-on
              experience writing HTML, CSS, and JavaScript. We create the
              designs so you can focus on the code and see your skills
              skyrocket!
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="flex items-center px-6 py-2 mt-10 text-white barlow-bold-italic bg-rose-600 rounded-3xl hover:bg-rose-700">
              Login with GitHub
              <i class="fab fa-github ml-3 text-lg"> </i>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center p-4 mt-10 bg-white rounded-xl sm:flex-row">
            <div className="w-6/12 px-3 sm:w-5/12">
              <img src={img2} alt="h-full"></img>
            </div>
            <div className="px-3 text-center sm:text-start sm:w-7/12">
              <span className="text-gray-500 ">Join </span>
              <span className="font-bold text-customBlue">886,420 </span>
              <span className="text-gray-500 ">
                developers building projects, reviewing code, and helping each
                other improve.
              </span>
            </div>
          </div>
        </div>
        <div className="flex max-w-xl md:w-4/12 lg:w-7/12">
          <div className="">
            <img src={img} alt="img"></img>
          </div>
        </div>
        {/* <div className="flex max-w-xl bg-gray-300 md:w-4/12 lg:w-7/12">
          <div className="w-full h-full md:h-auto md:flex md:items-stretch">
            <img
              src={img}
              alt="img"
              className="object-cover w-full h-full md:h-auto"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div> */}
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row ">
        <TestimonialCard
          name="Kevin Powell"
          role="Web Developer & YouTuber"
          img={img2}
          message="I highly recommend Frontend Mentor. Skip the search for project
            ideas and dive into ready-made challenges that help you level up as
            a developer."
        />
        <TestimonialCard
          name="Jessica Chan"
          role="Web Developer & YouTuber"
          img={img2}
          message="Frontend Mentor is a win-win. You can sharpen your skills building websites and add finished projects to your portfolio to help land a job!"
        />
      </div>
    </div>
  );
}
