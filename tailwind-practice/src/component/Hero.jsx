import React from 'react';
import img from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';

export default function Hero() {
  return (
    <div className="my-10 ">
      <div className="flex ml-32">
        <div className="w-5/12 mt-10 ">
          <div className="">
            <p className="font-serif text-6xl text-customBlue">
              Improve your coding skills by building realistic projects
            </p>
          </div>
          <div className="mt-10">
            <p className="text-lg text-gray-500 ">
              Our professionally designed challenges help you gain hands-on
              experience writing HTML, CSS, and JavaScript. We create the
              designs so you can focus on the code and see your skills
              skyrocket!
            </p>
          </div>
          <button className="flex items-center px-6 py-2 mt-10 text-white bg-rose-600 rounded-3xl hover:bg-gray-800">
            Login with GitHub
            <i class="fab fa-github ml-3"> </i>
          </button>
          <div className="flex items-center p-4 mt-10 bg-white rounded-xl">
            <div className="w-5/12">
              <img src={img2} alt=""></img>
            </div>
            <div className="w-7/12 ml-4">
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
        <div className="w-7/12">
          <img src={img} alt="img"></img>
        </div>
      </div>
    </div>
  );
}
