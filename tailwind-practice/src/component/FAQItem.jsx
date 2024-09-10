import React, { useState } from 'react';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white w-full max-w-2xl">
      <div
        onClick={toggleFAQ}
        className="flex m-5 px-3 items-center cursor-pointer justify-between gap-x-3 font-barlow"
      >
        <h3 className="text-lg font-semibold text-black">{question}</h3>
        <div>
          <i className={`fa ${isOpen ? 'fa-minus' : 'fa-plus'} text-lg`}></i>
        </div>
      </div>

      {isOpen && (
        <div>
          <hr className="border-t border-gray-200" />
          <div className="m-5 px-3 heebo text-gray-500">{answer}</div>
        </div>
      )}
    </div>
  );
}
