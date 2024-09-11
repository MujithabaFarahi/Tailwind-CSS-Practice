import React, { useState } from 'react';
import fran from '../assets/images/francesca.jpeg';
import alfie from '../assets/images/alfie.jpeg';
import hikma from '../assets/images/hikma.jpeg';
import nuel from '../assets/images/nuel.png';
import michelle from '../assets/images/michelle.jpeg';
import arturo from '../assets/images/arturo.jpeg';
import sashi from '../assets/images/shashikant.jpeg';
import marit from '../assets/images/marit.jpeg';
import MessageCard from './MessageCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function Messages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const messages = [
    {
      name: 'Francesca',
      user: '@frrann',
      img: fran,
      message:
        'This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instil accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.',
    },
    {
      name: 'Alfie',
      user: '@alfiemitchell123',
      img: alfie,
      message:
        'Frontend Mentor eliminated the hurdle of sourcing designs, letting me focus on development. Their professional projects, especially in the Pro subscription, challenge me to create complex, multi-page websites. With a supportive community and feedback from advanced programmers, my skills have been elevated to new heights.',
    },
    {
      name: 'Hikmah',
      user: '@Hikmahx',
      img: hikma,
      message:
        'Frontend Mentor transformed me from a newbie to a professional developer, enabling me to create flawless, responsive, accessible websites. It’s a superb platform for feedback with a supportive community backing your growth. Through it, I evolved from a frontend to a full-stack developer.',
    },
    {
      name: 'Nuel',
      user: '@frrann',
      img: nuel,
      message:
        'Frontend Mentor has helped tremendously. Working on the newbie challenges really helped me get better at building layouts. Also, it increased my JavaScript skills. Working with APIs, DOM manipulation, and so on greatly increased my knowledge. Would totally recommend it.',
    },
    {
      name: 'Michelle',
      user: '@maberizk',
      img: michelle,
      message:
        'After completing a software bootcamp, Frontend Mentor let me build real-world projects, strengthening my developer skills. I wouldn’t be where I am today without it.',
    },
    {
      name: 'Arturo',
      user: '@artimys',
      img: arturo,
      message:
        'As a backend developer, I sought to improve my frontend skills. Frontend Mentor provided beautifully designed challenges, allowing me to progress from simple components to advanced responsive web pages. Enough can’t be said about the community members. Their feedback has been invaluable in my journey to becoming a better developer.',
    },
    {
      name: 'Shashikant',
      user: '@shashikantdev3',
      img: sashi,
      message:
        'Frontend Mentor offers invaluable real-world web development challenges, sharpening my HTML, CSS, and JavaScript skills. The structured feedback, solutions, and vibrant community have significantly impacted my learning and growth. It’s both a skill-building platform and a community hub for web developers.',
    },
    {
      name: 'Marit',
      user: '@Maritxx',
      img: marit,
      message:
        'I began my frontend journey with Frontend Mentor’s newbie challenges and progressed to more complex projects. Some of the complex ones are now even in my portfolio! The supportive community and the dedication of the Frontend Mentor team are unmatched. I highly recommend it for newcomers and those keen on improving their skills.',
    },
  ];

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex + 2 < messages.length) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative',
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute',
    }),
  };

  return (
    <div className="mx-auto heebo max-w-screen-xl">
      <div className="flex items-center mb-6 mx-4">
        <p className="text-4xl lg:text-[42px]">
          A little ❤️ from our community
        </p>
        <div className="hidden md:flex gap-x-3 flex-1 justify-end">
          <button
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            className={`h-16 w-16 rounded-full bg-customBlue flex items-center justify-center ${
              currentIndex === 0
                ? 'bg-gray-600 cursor-not-allowed'
                : 'hover:bg-blue-700'
            }`}
          >
            <div className="text-2xl text-white">
              <i className="fa fa-arrow-left"></i>
            </div>
          </button>
          <button
            onClick={handleNextClick}
            disabled={currentIndex + 3 >= messages.length}
            className={`h-16 w-16 rounded-full bg-customBlue flex items-center justify-center ${
              currentIndex + 3 >= messages.length
                ? 'bg-gray-600 cursor-not-allowed'
                : 'hover:bg-blue-700'
            }`}
          >
            <div className="text-2xl text-white">
              <i className="fa fa-arrow-right"></i>
            </div>
          </button>
        </div>
      </div>

      <div className="hidden md:flex relative overflow-hidden mx-5">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 200, damping: 40 },
              opacity: { duration: 0.2 },
            }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 justify-items-center justify-center"
          >
            {messages
              .slice(currentIndex, currentIndex + 3)
              .map((msg, index) => (
                <MessageCard
                  key={index}
                  name={msg.name}
                  user={msg.user}
                  img={msg.img}
                  message={msg.message}
                />
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="md:hidden relative overflow-hidden mx-5">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 200, damping: 40 },
              opacity: { duration: 0.2 },
            }}
            className="grid gap-4 grid-cols-2  justify-items-center justify-center"
          >
            {messages
              .slice(currentIndex, currentIndex + 2)
              .map((msg, index) => (
                <MessageCard
                  key={index}
                  name={msg.name}
                  user={msg.user}
                  img={msg.img}
                  message={msg.message}
                />
              ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="md:hidden flex gap-x-3 m-5">
        <button
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
          className={`h-16 w-16 rounded-full bg-customBlue flex items-center justify-center ${
            currentIndex === 0
              ? 'bg-gray-600 cursor-not-allowed'
              : 'hover:bg-blue-700'
          }`}
        >
          <div className="text-2xl text-white">
            <i className="fa fa-arrow-left"></i>
          </div>
        </button>
        <button
          onClick={handleNextClick}
          disabled={currentIndex + 2 >= messages.length}
          className={`h-16 w-16 rounded-full bg-customBlue flex items-center justify-center ${
            currentIndex + 2 >= messages.length
              ? 'bg-gray-600 cursor-not-allowed'
              : 'hover:bg-blue-700'
          }`}
        >
          <div className="text-2xl text-white">
            <i className="fa fa-arrow-right"></i>
          </div>
        </button>
      </div>
    </div>
  );
}
