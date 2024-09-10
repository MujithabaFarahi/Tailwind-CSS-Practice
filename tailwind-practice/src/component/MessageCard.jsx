import React from 'react';

export default function MessageCard({ message, img, name, user }) {
  return (
    <div className="max-w-sm  p-6 h-auto my-3 bg-white gap-y-16 rounded-xl heebo flex flex-col justify-between">
      <p className="text-gray-600">{message}</p>
      <div className="flex items-center w-full">
        <img src={img} alt={name} className="w-16 h-16 my-2 rounded-full" />
        <div className="ml-3">
          <p className="font-bold text-customBlue">{name}</p>
          <p className="text-gray-600">{user}</p>
        </div>
      </div>
    </div>
  );
}
