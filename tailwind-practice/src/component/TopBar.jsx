import React from 'react';

export default function TopBar() {
  return (
    <div className="p-3 bg-customBlue ">
      <div className="flex flex-wrap items-center justify-center font-medium text-white">
        <div className="flex items-center">
          <i class="fa fa-briefcase mr-2"></i>
          <p>Looking for hire developers?</p>
        </div>
        <a className="pl-1 underline" href="#mmm">
          Visit our Hiring Platform
        </a>
      </div>
    </div>
  );
}
