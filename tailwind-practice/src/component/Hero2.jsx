import React from 'react';
import img3 from '../assets/images/img3.webp';
import img4 from '../assets/images/img4.webp';
import img5 from '../assets/images/img5.webp';
import img6 from '../assets/images/img6.webp';
import img7 from '../assets/images/img7.webp';
import { ReactComponent as StackOverflow } from '../assets/svg/logo-stack-overflow.svg';
import { ReactComponent as CSSPractice } from '../assets/svg/logo-css-tricks.svg';
import { ReactComponent as ProductHunt } from '../assets/svg/logo-product-hunt.svg';
import InfoCard from './InfoCard';

export default function Hero2() {
  return (
    <div className="mx-auto py-5 bg-gray-50 ">
      <div className="flex flex-col items-center justify-center">
        <div className="py-8 text-sm md:text-base font-extrabold heebo">
          AS FEATURED ON...
        </div>
        <div className="flex  flex-col items-center justify-center w-full px-3 gap-y-3 gap-x-3 md:flex-row ">
          <div className="flex items-center justify-center w-full h-20 px-4 bg-white border-2 border-gray-400 rounded-lg lg:h-28  lg:w-96">
            <div className="">
              <CSSPractice />
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-20 px-4 bg-white border-2 border-gray-400 rounded-lg lg:h-28  lg:w-96 ">
            <StackOverflow />
          </div>
          <div className="flex items-center justify-center w-full h-20 px-4 bg-white border-2 border-gray-400 rounded-lg lg:h-28  lg:w-96 ">
            <ProductHunt />
          </div>
        </div>
      </div>
      {/*------------------------------- Section 2 -------------------------------*/}
      <div className="flex flex-col items-center justify-center px-2 py-10 mt-20  gap-y-12 lg:max-w-screen-xl mx-auto">
        {/* <div> */}
        <div className="flex flex-col items-center justify-center lg:justify-between  md:flex-row gap-y-8 p-4 w-full">
          <div className="flex items-center justify-center max-w-sm md:max-w-[550px]  ">
            <img src={img3} alt="" className="" />
          </div>
          <InfoCard
            emoji="😈"
            title="Escape tutorial hell"
            description="Add projects to your learning journey and put your knowledge to the test. The real learning happens when you start solving real-world problems yourself."
          />
        </div>
        {/* .............................. */}
        {/* <div> */}
        <div className="flex flex-col items-center justify-center lg:justify-between  md:flex-row-reverse gap-y-8 p-4 w-full">
          <div className="flex items-center justify-center max-w-sm md:max-w-[550px]  ">
            <img src={img4} alt="" className="" />
          </div>
          <InfoCard
            emoji="🤩"
            title="Build portfolio-worthy projects"
            description="Design is hard. We take care of the project ideas and design so
              you can focus on the coding. You’ll end up with an incredible
              portfolio of stunning projects!"
          />
        </div>
        {/* .............................. */}
        <div className="flex flex-col items-center justify-center lg:justify-between  md:flex-row gap-y-8 p-4 w-full">
          <div className="flex items-center justify-center max-w-sm md:max-w-[550px]  ">
            <img src={img5} alt="" className="" />
          </div>
          <InfoCard
            emoji="🚀"
            title="Banish impostor syndrome"
            description="We’ve all felt out of our depth before. Getting hands-on
              experience is an incredible way to build confidence, refine your
              workflow, and supercharge your learning."
          />
        </div>
        {/* .............................. */}
        <div className="flex flex-col items-center justify-center lg:justify-between  md:flex-row-reverse gap-y-8 p-4 w-full">
          <div className="flex items-center justify-center max-w-sm md:max-w-[550px]  ">
            <img src={img6} alt="" className="" />
          </div>
          <InfoCard
            emoji="🛠️"
            title="Practice new tools"
            description="The front-end landscape changes constantly. Our design-led
              challenges let you pick your tools to help you adapt, experiment,
              and keep up with the latest trends."
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:justify-between  md:flex-row gap-y-8 p-4 w-full">
          <div className="flex items-center justify-center max-w-sm md:max-w-[550px]  ">
            <img src={img7} alt="" className="" />
          </div>
          <InfoCard
            emoji="🤝"
            title="Create job opportunities"
            description={
              <>
                We have a{' '}
                <span
                  href="#m"
                  className="underline hover:cursor-pointer hover:decoration-transparent"
                >
                  Hiring Platform
                </span>{' '}
                that runs alongside this platform. Just by building projects and
                engaging with the community, you could open up job
                opportunities!
              </>
            }
          />
        </div>
        {/* .............................. */}
      </div>
    </div>
  );
}
