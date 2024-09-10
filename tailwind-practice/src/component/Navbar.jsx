import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import { ReactComponent as LogoMoblie } from '../assets/svg/logo-mobile.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent ">
      <div className="px-1 mx-auto max-w-screen-2xl sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="/">
            <div className=" lg:hidden">
              <LogoMoblie />
            </div>
            <div className="hidden lg:flex">
              <Logo />
            </div>
          </a>
          <div className="items-center hidden space-x-5 text-xs lg:text-sm md:flex barlow-bold-italic">
            <a
              href="#learning-paths"
              className=" hover:underline hover:underline-offset-8 decoration-red-500"
            >
              LEARNING PATHS
            </a>
            <a
              href="#challenges"
              className=" hover:underline hover:underline-offset-8 hover:decoration-red-500"
            >
              CHALLENGES
            </a>
            <a
              href="#solutions"
              className="hover:underline hover:underline-offset-8 hover:decoration-red-500"
            >
              SOLUTIONS
            </a>
            <a
              href="#articles"
              className=" hover:underline hover:underline-offset-8 hover:decoration-red-500"
            >
              ARTICLES
            </a>
            <a
              href="#unlock-pro"
              className=" hover:underline hover:underline-offset-8 hover:decoration-red-500"
            >
              UNLOCK PRO
            </a>
            <button className="flex items-center px-6 py-2 text-white bg-black rounded-3xl hover:bg-gray-800 barlow-bold-italic">
              LOG IN WITH GITHUB
              <i class="fab fa-github ml-3"> </i>
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" hover:text-blue-500 focus:outline-none focus:text-blue-500"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#learning-paths"
            className="block px-4 py-2 hover:underline hover:decoration-red-500"
          >
            LEARNING PATHS
          </a>
          <a
            href="#challenges"
            className="block px-4 py-2 hover:underline hover:decoration-red-500"
          >
            CHALLENGES
          </a>
          <a
            href="#solutions"
            className="block px-4 py-2 hover:underline hover:decoration-red-500"
          >
            SOLUTIONS
          </a>
          <a
            href="#articles"
            className="block px-4 py-2 hover:underline hover:decoration-red-500"
          >
            ARTICLES
          </a>
          <a
            href="#unlock-pro"
            className="block px-4 py-2 hover:underline hover:decoration-red-500"
          >
            UNLOCK PRO
          </a>

          <button className="flex items-center justify-center w-full px-6 py-2 mb-3 text-white bg-black rounded-3xl hover:bg-gray-800">
            LOGIN WITH GITHUB
            <i class="fab fa-github ml-3"> </i>
          </button>
        </div>
      )}
    </nav>
  );
}
