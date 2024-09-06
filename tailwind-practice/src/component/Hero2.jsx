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
    <div className="">
      <div className="flex flex-col items-center justify-center py-10 mx-5 gap-y-2">
        <div className="my-2 font-serif font-semibold">AS FEATURED ON...</div>
        <div className="flex items-center justify-center w-full h-24 bg-gray-200 border-2 border-gray-400">
          <CSSPractice />
        </div>
        <div className="flex items-center justify-center w-full h-24 bg-gray-200 border-2 border-gray-400">
          <StackOverflow />
        </div>
        <div className="flex items-center justify-center w-full h-24 bg-gray-200 border-2 border-gray-400">
          <ProductHunt />
        </div>
      </div>
      {/*------------------------------- Section 2 -------------------------------*/}
      <div className="flex flex-col items-center justify-center">
        {/* <div> */}
        <div className="flex flex-col items-center justify-center mx-5 mb-5">
          <img src={img3} alt="" />
          <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
            <div className="text-3xl">😈</div>
          </div>
          <div className="my-4 text-4xl font-semibold text-center">
            Escape tutorial hell
          </div>
          <div className="text-center text-gray-400 text">
            Add projects to your learning journey and put your knowledge to the
            test. The real learning happens when you start solving real-world
            problems yourself.
          </div>
        </div>
        {/* </div> */}
        {/* <div> */}
        <div className="flex flex-col items-center justify-center mx-5 mb-5">
          <img src={img4} alt="" />
          <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
            <div className="text-3xl">🤩</div>
          </div>
          <div className="my-4 text-4xl font-semibold text-center">
            Build portfolio-worthy projects
          </div>
          <div className="text-center text-gray-400 text">
            Design is hard. We take care of the project ideas and design so you
            can focus on the coding. You’ll end up with an incredible portfolio
            of stunning projects!
          </div>
        </div>
        {/* </div> */}
        {/* <div> */}
        <div className="flex flex-col items-center justify-center mx-5 mb-5">
          <img src={img5} alt="" />
          <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
            <div className="text-3xl">🤩</div>
          </div>
          <div className="my-4 text-4xl font-semibold text-center">
            Build portfolio-worthy projects
          </div>
          <div className="text-center text-gray-400 text">
            Design is hard. We take care of the project ideas and design so you
            can focus on the coding. You’ll end up with an incredible portfolio
            of stunning projects!
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
