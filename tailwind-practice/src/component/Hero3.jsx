import React, { useState } from 'react';
import Tile from './Tile'; // Import the reusable Tile component
import img8 from '../assets/images/img8.png';
import img9 from '../assets/images/img9.png';
import img10 from '../assets/images/img10.png';
import img11 from '../assets/images/img11.webp';

export default function Hero3() {
  const [selectedImage, setSelectedImage] = useState(img9);
  const [selectedTile, setSelectedTile] = useState(1);

  const selectTile = (tileNumber, image) => {
    setSelectedImage(image);
    setSelectedTile(tileNumber);
  };

  return (
    <div className="flex flex-col-reverse mx-8 gap-x-12 items-center overflow-hidden lg:flex-row xl:justify-center">
      <div className="space-y-4  max-w-xl lg:flex-shrink-0 ">
        <h2 className="heebo text-3xl text-center font-barlow mb-10 lg:text-start">
          How it works
        </h2>
        <div className="space-y-4">
          <Tile
            tileNumber={1}
            title="Choose your challenge"
            description="Browse our collection of professionally designed projects. Pick one that suits the level you're currently at."
            selectedTile={selectedTile}
            setSelectedTile={selectTile}
            image={img8}
          />
          <Tile
            tileNumber={2}
            title="Code the design"
            description="Each project comes with all files included. This means you can focus on coding the project using the design as a reference."
            selectedTile={selectedTile}
            setSelectedTile={selectTile}
            image={img9}
          />
          <Tile
            tileNumber={3}
            title="Submit your solution"
            description="Get feedback from the community about your code and see how close you got to the design."
            selectedTile={selectedTile}
            setSelectedTile={selectTile}
            image={img10}
          />
          <Tile
            tileNumber={4}
            title="Give others feedback"
            description="Reviewing other people’s code is a vital part of being a developer. Practice giving code reviews and help others improve."
            selectedTile={selectedTile}
            setSelectedTile={selectTile}
            image={img11}
          />
        </div>
      </div>
      <div className="flex mb-6  flex-shrink-0  max-w-xl">
        <img src={selectedImage} alt="Preview" className="" />
      </div>
    </div>
  );
}
