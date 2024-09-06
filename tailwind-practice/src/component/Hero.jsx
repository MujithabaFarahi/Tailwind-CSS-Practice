import React from 'react';
import img from '../assets/images/img1.webp';
import img2 from '../assets/images/img2.webp';

export default function Hero() {
  return (
    <div className="mx-auto my-auto max-w-screen-2xl">
      <div className="flex flex-col mt-10 md:items-center md:justify-center md:flex-row">
        <div className="p-5 mt-10 md:w-3/4 lg:w-5/12">
          <div className="text-center md:text-start">
            <p className="font-serif text-6xl text-customBlue">
              Improve your coding skills by building realistic projects
            </p>
          </div>
          <div className="mt-10">
            <p className="text-lg text-center text-gray-500 md:text-start ">
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

          <div className="flex flex-col items-center justify-center p-4 mt-10 bg-gray-100 rounded-xl sm:flex-row">
            <div className="w-10/12 px-3 sm:w-5/12">
              <img src={img2} alt="h-full"></img>
            </div>
            <div className="px-3 sm:w-7/12">
              <span className="text-lg text-gray-500 ">Join </span>
              <span className="text-lg font-bold text-customBlue">
                886,420{' '}
              </span>
              <span className="text-lg text-gray-500 ">
                developers building projects, reviewing code, and helping each
                other improve.
              </span>
            </div>
          </div>
        </div>
        <div className="flex mx-auto lg:w-7/12">
          <div className="">
            <img src={img} alt="img"></img>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="max-w-xl p-5 mx-5 my-5 text-lg bg-gray-100 rounded-3xl lg:w-1/2">
          <div className="my-3 text-6xl text-center text-gray-200">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
          </div>
          <p className="text-center">
            I highly recommend Frontend Mentor. Skip the search for project
            ideas and dive into ready-made challenges that help you level up as
            a developer.
          </p>
          <div className="flex flex-col items-center justify-center w-full my-3">
            <img
              src={img2}
              alt=""
              className="w-16 h-16 my-2 rounded-full"
            ></img>
            <p className="font-bold text-customBlue">Kevin Powell</p>
            <p className="text-gray-500">Web Developer & YouTuber</p>
          </div>
        </div>
        <div className="max-w-xl p-5 mx-5 text-lg bg-gray-100 rounded-3xl lg:w-1/2">
          <div className="my-3 text-6xl text-center text-gray-200">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
          </div>
          <p className="text-center ">
            Frontend Mentor is a win-win. You can sharpen your skills building
            websites and add finished projects to your portfolio to help land a
            job!
          </p>
          <div className="flex flex-col items-center justify-center w-full my-3">
            <img
              src={img2}
              alt=""
              className="w-16 h-16 my-2 rounded-full"
            ></img>
            <p className="font-bold text-customBlue">Jessica Chan</p>
            <p className="text-gray-500">Web Developer & YouTuber</p>
          </div>
        </div>
      </div>
    </div>
  );
}
