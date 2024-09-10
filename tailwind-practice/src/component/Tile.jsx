import React from 'react';

export default function Tile({
  tileNumber,
  title,
  description,
  selectedTile,
  setSelectedTile,
  image,
}) {
  return (
    <div
      className={`p-4 rounded-lg border border-gray-200 cursor-pointer ${
        selectedTile === tileNumber ? 'bg-customBlue' : 'bg-white'
      }`}
      onClick={() => setSelectedTile(tileNumber, image)}
    >
      <div className="flex items-center gap-x-3 font-barlow">
        <div
          className={`flex font-extrabold justify-center h-8 w-8 rounded-full italic ${
            selectedTile === tileNumber
              ? 'text-customBlue bg-white'
              : 'text-white bg-cyan-400'
          }`}
        >
          <h3 className="mt-0.5">{tileNumber}</h3>
        </div>
        <h3
          className={`text-lg font-semibold ${
            selectedTile === tileNumber ? 'text-white' : 'text-black'
          }`}
        >
          {title}
        </h3>
      </div>

      {selectedTile === tileNumber && (
        <p className="text-white font-normal heebo mt-2">{description}</p>
      )}
    </div>
  );
}
