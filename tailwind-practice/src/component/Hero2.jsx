import React from 'react';
import img3 from '../assets/images/img3.webp';
import img4 from '../assets/images/img4.webp';
import img5 from '../assets/images/img5.webp';
import img6 from '../assets/images/img6.webp';
import img7 from '../assets/images/img7.webp';
import { ReactComponent as StackOverflow } from '../assets/svg/logo-stack-overflow.svg';
import { ReactComponent as CSSPractice } from '../assets/svg/logo-css-tricks.svg';
import { ReactComponent as ProductHunt } from '../assets/svg/logo-product-hunt.svg';

export default function Hero2() {
  return (
    <div className="mx-auto my-5 bg-gray-50">
      <div className="flex flex-col items-center justify-center">
        <div className="py-8 heebo">AS FEATURED ON...</div>
        <div className="flex flex-col items-center justify-center w-full px-3 gap-y-3 gap-x-3 md:flex-row ">
          <div className="flex items-center justify-center w-full h-20 px-4 bg-white border-2 border-gray-400 rounded-lg md:h-28 md:w-80 lg:w-96">
            <CSSPractice />
          </div>
          <div className="flex items-center justify-center w-full h-20 px-4 bg-white border-2 border-gray-400 rounded-lg md:h-28 md:w-80 lg:w-96 ">
            <StackOverflow />
          </div>
          <div className="flex items-center justify-center w-full h-20 px-4 bg-white border-2 border-gray-400 rounded-lg md:h-28 md:w-80 lg:w-96 ">
            <ProductHunt />
          </div>
        </div>
      </div>
      {/*------------------------------- Section 2 -------------------------------*/}
      <div className="flex flex-col items-center justify-center px-2 py-10 mt-20 bg-gray-200 gap-y-4">
        {/* <div> */}
        <div className="flex flex-col items-center justify-center mb-5 md:flex-row gap-y-4">
          <div className="flex items-center justify-center w-11/12 lg:w-8/12">
            <img src={img3} alt="" className="w-11/12 max-w-lg md:w-10/12" />
          </div>
          <div className="flex flex-col items-center justify-center w-10/12 md:items-start gap-y-3 lg:w-6/12">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
              <div className="text-3xl">😈</div>
            </div>
            <div className="my-4 text-4xl font-semibold text-center md:text-start lg:w-10/12 xl:w-9/12">
              Escape tutorial hell
            </div>
            <div className="text-center text-gray-500 text md:text-start lg:w-10/12 xl:w-9/12">
              Add projects to your learning journey and put your knowledge to
              the test. The real learning happens when you start solving
              real-world problems yourself.
            </div>
          </div>
        </div>
        {/* .............................. */}
        <div className="flex flex-col items-center justify-center mb-5 md:flex-row-reverse gap-y-4">
          <div className="flex items-center justify-center w-11/12 lg:w-8/12">
            <img src={img4} alt="" className="w-11/12 max-w-lg md:w-10/12" />
          </div>
          <div className="flex flex-col items-center justify-center w-10/12 md:items-start gap-y-3 lg:w-6/12 md:pl-10 lg:pl-20 xl:pl-40">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
              <div className="text-3xl">🤩</div>
            </div>
            <div className="my-4 text-4xl font-semibold text-center md:text-start xl:w-full">
              Build portfolio-worthy projects
            </div>
            <div className="text-center text-gray-500 text md:text-start xl:w-full">
              Design is hard. We take care of the project ideas and design so
              you can focus on the coding. You’ll end up with an incredible
              portfolio of stunning projects!
            </div>
          </div>
        </div>
        {/* .............................. */}
        <div className="flex flex-col items-center justify-center mb-5 md:flex-row gap-y-4">
          <div className="flex items-center justify-center w-11/12 lg:w-8/12">
            <img src={img5} alt="" className="w-11/12 max-w-lg md:w-10/12" />
          </div>
          <div className="flex flex-col items-center justify-center w-10/12 md:items-start gap-y-3 lg:w-6/12">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
              <div className="text-3xl">🚀</div>
            </div>
            <div className="my-4 text-4xl font-semibold text-center md:text-start lg:w-10/12 xl:w-9/12">
              Banish impostor syndrome
            </div>
            <div className="text-center text-gray-500 text md:text-start lg:w-10/12 xl:w-9/12">
              We’ve all felt out of our depth before. Getting hands-on
              experience is an incredible way to build confidence, refine your
              workflow, and supercharge your learning.
            </div>
          </div>
        </div>
        {/* .............................. */}
        <div className="flex flex-col items-center justify-center mb-5 md:flex-row-reverse gap-y-4">
          <div className="flex items-center justify-center w-11/12 lg:w-8/12">
            <img src={img6} alt="" className="w-11/12 max-w-lg md:w-10/12" />
          </div>
          <div className="flex flex-col items-center justify-center w-10/12 md:items-start gap-y-3 lg:w-6/12 md:pl-10 lg:pl-20 xl:pl-40">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
              <div className="text-3xl">🛠️</div>
            </div>
            <div className="my-4 text-4xl font-semibold text-center md:text-start xl:w-full">
              Practice new tools
            </div>
            <div className="text-center text-gray-500 text md:text-start xl:w-full">
              The front-end landscape changes constantly. Our design-led
              challenges let you pick your tools to help you adapt, experiment,
              and keep up with the latest trends.
            </div>
          </div>
        </div>
        {/* .............................. */}
        <div className="flex flex-col items-center justify-center mb-5 md:flex-row gap-y-4">
          <div className="flex items-center justify-center w-11/12 lg:w-8/12">
            <img src={img7} alt="" className="w-11/12 max-w-lg md:w-10/12" />
          </div>
          <div className="flex flex-col items-center justify-center w-10/12 md:items-start gap-y-3 lg:w-6/12">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
              <div className="text-3xl">🤝</div>
            </div>
            <div className="my-4 text-4xl font-semibold text-center md:text-start lg:w-10/12 xl:w-9/12">
              Create job opportunities
            </div>
            <div className="text-center text-gray-500 text md:text-start lg:w-10/12 xl:w-9/12">
              <span>We have a </span>
              <span>
                <a href="#m" className="hover:underline hover:cursor-pointer">
                  Hiring Platform{' '}
                </a>
              </span>
              <span>
                that runs alongside this platform. Just by building projects and
                engaging with the community, you could open up job
                opportunities!
              </span>
            </div>
          </div>
        </div>
        {/* .............................. */}
      </div>
    </div>
  );
}
