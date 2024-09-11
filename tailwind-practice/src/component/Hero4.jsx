import React from 'react';
import { ReactComponent as Figma } from '../assets/svg/figma-icon.svg';
import { ReactComponent as Star } from '../assets/svg/star.svg';

export default function Hero4() {
  return (
    <div className="my-12">
      <div className="bg-gray-50 py-12 px-4">
        <div className="flex flex-col items-center">
          <div className="max-w-xl text-center font-barlow text-3xl md:text-4xl md:max-w-lg leading-relaxed md:leading-relaxed ">
            <span>Take your skills to the next level with our </span>
            <span className="bg-customBlue  text-white font-bold py-1 px-2 rounded-md">
              PRO
            </span>
            <span> </span>
            <span>subscription</span>
          </div>
          <div className="max-w-xl md:text-lg md:max-w-2xl text-center text-gray-500 py-4 heebo">
            Step into the shoes of a professional developer and build projects
            in the most realistic way possible. Our Pro subscription will help
            you prepare for life as a professional developer.
          </div>
        </div>
        <div className="mx-auto flex flex-col md:flex-row max-w-xl gap-x-6 md:max-w-full justify-center">
          <div className="flex flex-col items-center bg-white pt-12 py-4  px-3 rounded-lg my-3 max-w-xl">
            <Figma />
            <p className="font-barlow text-3xl my-4 text-center">
              Access each challenge's design file
            </p>
            <p className=" text-center md:text-lg  text-gray-500 py-4 heebo">
              Professional teams use tools like Figma. By using these tools when
              building projects, you’ll save time, create more accurate
              solutions, and gain hands-on experience working like a pro.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white pt-12 py-4 px-3 rounded-lg my-3 max-w-xl">
            <Star />
            <p className="font-barlow text-3xl my-4 text-center ">
              Tackle our premium challenges
            </p>
            <p className="text-center md:text-lg  text-gray-500 py-4 heebo">
              Our premium challenges are the most realistic, comprehensive
              practice projects you’ll find. They also make incredible portfolio
              pieces to help you “wow!” recruiters and get hired.
            </p>
          </div>
        </div>
        <div className="flex justify-center font-barlow my-10">
          <button className="px-8 py-3 italic font-semibold text-white bg-rose-500 rounded-full hover:bg-rose-800">
            LEARN ABOUT PRO
          </button>
        </div>
      </div>
    </div>
  );
}
