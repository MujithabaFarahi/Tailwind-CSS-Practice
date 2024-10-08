import React from 'react';
import img from '../assets/images/img1.webp';
import img2 from '../assets/images/img2.webp';
import jessica from '../assets/images/jessica.jpeg';
import kevin from '../assets/images/kevin.jpeg';
import TestimonialCard from './TestimonialCard';

export default function Hero() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-start  lg:mt-20 overflow-hidden md:flex-row gap-y-10 gap-x-5 xl:justify-center">
        <div className=" md:max-w-lg md:w-lg lg:max-w-xl   p-2  md:flex-shrink-0 md:ml-3 xl:ml-12 lg:pr-6">
          <div className="text-center md:text-start">
            <p className="font-serif leading-[1.2] tracking-wide text-5xl  text-customBlue font-barlow">
              Improve your coding skills by building realistic projects
            </p>
          </div>
          <div className="mt-10 lg:text-lg">
            <p className="text-lg  text-center text-gray-500 md:text-justify heebo">
              Our professionally designed challenges help you gain hands on
              experience writing HTML, CSS, and JavaScript. We create the
              designs so you can focus on the code and see your skills
              skyrocket!
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="flex px-6 py-2 my-8 text-white barlow-bold-italic bg-rose-600 rounded-3xl hover:bg-rose-700">
              LOG IN WITH GITHUB
              <i class="fab fa-github ml-3 text-lg"> </i>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center p-3  bg-white rounded-xl sm:flex-row heebo">
            <div className="w-6/12 px-3 ">
              <img src={img2} alt=""></img>
            </div>
            <div className="px-3 text-center sm:text-start sm:w-7/12">
              <span className="text-gray-500 ">Join </span>
              <span className="font-bold text-customBlue">886,420 </span>
              <span className="text-gray-500 lg:text-lg ">
                developers building projects, reviewing code, and helping each
                other improve.
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 pt-8 max-w-2xl">
          <img src={img} alt="img" className=" md:max-w-3xl  "></img>
        </div>
      </div>
      <div className="flex flex-col  items-center justify-center lg:pt-6 my-16 lg:flex-row lg: gap-y-4">
        <TestimonialCard
          name="KEVIN POWELL"
          role="Web Developer & YouTuber"
          img={kevin}
          message="I highly recommend Frontend Mentor. Skip the search for project
            ideas and dive into ready-made challenges that help you level up as
            a developer."
        />
        <TestimonialCard
          name="JESSICA CHAN"
          role="Web Developer & YouTuber"
          img={jessica}
          message="Frontend Mentor is a win-win. You can sharpen your skills building websites and add finished projects to your portfolio to help land a job!"
        />
      </div>
    </div>
  );
}
