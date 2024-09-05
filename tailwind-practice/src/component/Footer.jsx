import React from 'react';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <div>
      <footer class="bg-transparent text-black py-6">
        <div class="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between w-full space-x-2">
            <div className="flex items-center text-lg font-semibold">
              <div class="text-blue-500">
                <img src={logo} alt="Logo" className="w-6 mr-1"></img>
              </div>
              <div>Frontend Mentor</div>
            </div>
            <div class="flex space-x-6 ">
              <a href="#s" class="text-blue-500 text-2xl ">
                <i class="fab fa-discord"></i>
              </a>
              <a href="#ss" class="text-blue-500 text-2xl ">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#s" class="text-blue-500 text-2xl ">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#s" class="text-blue-500 text-2xl ">
                <i class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-between w-full ">
            <div className="max-w-sm my-3">
              <div className="text-2xl text-customBlue">Stay up to date</div>
              <div className="mt-2">
                with new challenges, featured solutions, selected articles and
                our latest news
              </div>
              <div className="flex flex-wrap">
                <input
                  type="text"
                  class="border h-10 border-gray-400 rounded-sm p-2 focus:outline-dashed focus:outline-blue-500 w-44 mt-2 mx-1 bg-transparent"
                  placeholder="email@example.com"
                ></input>
                <button className="h-10 px-4 py-1 mx-1 mt-2 text-sm font-semibold text-white bg-rose-500 rounded-3xl hover:bg-rose-800">
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <div class="flex flex-wrap justify-between mx-4 w-full">
              <div class="">
                <h2 class="text-sm font-semibold mb-1">FRONTEND MENTOR</h2>
                <ul>
                  <li>
                    <a href="#s" class="text-gray-400 hover:underline">
                      Unlock Pro
                    </a>
                  </li>
                  <li>
                    <a href="#s" class="text-gray-400 hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#s" class="text-gray-400 hover:underline">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div class="">
                <h2 class="text-sm font-semibold mb-1">EXPLORE</h2>
                <ul>
                  <li>
                    <a href="#s" class="text-gray-400 hover:underline">
                      Learning Paths
                    </a>
                  </li>
                  <li>
                    <a href="#t" class="text-gray-400 hover:underline">
                      Challenges
                    </a>
                  </li>
                  <li>
                    <a href="#t" class="text-gray-400 hover:underline">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#t" class="text-gray-400 hover:underline">
                      Articles
                    </a>
                  </li>
                  <li>
                    <a href="#t" class="text-gray-400 hover:underline">
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
              <div class="">
                <h2 class="text-sm font-semibold mb-1">COMMUNITY</h2>
                <div class="flex space-x-4">
                  <ul>
                    <li>
                      <a href="#s" class="text-gray-400 hover:underline">
                        Discord
                      </a>
                    </li>
                    <li>
                      <a href="#t" class="text-gray-400 hover:underline">
                        Guidelines
                      </a>
                    </li>
                    <li>
                      <a href="#t" class="text-gray-400 hover:underline">
                        Write for us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="">
                <h2 class="text-sm font-semibold mb-1">FOR COMPANIES</h2>
                <div class="flex space-x-4">
                  <ul>
                    <li>
                      <a href="#s" class="text-gray-400 hover:underline">
                        Hire developers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr class="border-t border-gray-300 my-4"></hr>
          <div class="flex flex-wrap justify-between ">
            <div className="text-sm text-gray-400 ">
              &copy; Frontend Mentor 2019 - 2024
            </div>
            <div class="flex space-x-4 text-gray-400 text-sm">
              <p>Terms</p>
              <p>Cookie Policy</p>
              <p>Privacy Policy</p>
              <p>Licence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
