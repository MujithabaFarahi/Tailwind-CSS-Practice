import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-md">
      <div className="px-4 mx-auto max-w-screen sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <a href="/" className="flex items-center text-2xl font-semibold">
              <div class="text-blue-500">
                <img src={logo} alt="Logo" className="w-12"></img>
              </div>
              <div className="sm:hidden">Frontend Mentor</div>
            </a>
          </div>
          <div className="items-center hidden space-x-6 md:flex">
            <a
              href="#learning-paths"
              className="text-gray-700 hover:underline hover:underline-offset-8 hover:text-red-500"
            >
              Learning Paths
            </a>
            <a
              href="#challenges"
              className="text-gray-700 hover:underline hover:underline-offset-8 hover:text-red-500"
            >
              Challenges
            </a>
            <a
              href="#solutions"
              className="text-gray-700 hover:underline hover:underline-offset-8 hover:text-red-500"
            >
              Solutions
            </a>
            <a
              href="#articles"
              className="text-gray-700 hover:underline hover:underline-offset-8 hover:text-red-500"
            >
              Articles
            </a>
            <a
              href="#unlock-pro"
              className="text-gray-700 hover:underline hover:underline-offset-8 hover:text-red-500"
            >
              Unlock Pro
            </a>
            <button className="flex items-center px-6 py-2 text-white bg-black rounded-3xl hover:bg-gray-800">
              Login with GitHub
              <i class="fab fa-github ml-3"> </i>
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
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
            className="block px-4 py-2 text-gray-700 hover:underline hover:text-red-500"
          >
            Learning Paths
          </a>
          <a
            href="#challenges"
            className="block px-4 py-2 text-gray-700 hover:underline hover:text-red-500"
          >
            Challenges
          </a>
          <a
            href="#solutions"
            className="block px-4 py-2 text-gray-700 hover:underline hover:text-red-500"
          >
            Solutions
          </a>
          <a
            href="#articles"
            className="block px-4 py-2 text-gray-700 hover:underline hover:text-red-500"
          >
            Articles
          </a>
          <a
            href="#unlock-pro"
            className="block px-4 py-2 text-gray-700 hover:underline hover:text-red-500"
          >
            Unlock Pro
          </a>

          <button className="flex items-center justify-center w-full px-6 py-2 mb-3 text-white bg-black rounded-3xl hover:bg-gray-800">
            Login with GitHub
            <i class="fab fa-github ml-3"> </i>
          </button>
        </div>
      )}
    </nav>
  );
}
