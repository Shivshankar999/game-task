import React, { useState } from "react";
import successSound from "../assets/success.mp3"; // Add sound assets
import errorSound from "../assets/error.mp3";
import successGif from "../assets/success-gif.gif"; // Add success animation GIF

const correctOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Game = () => {
  const [placedNumbers, setPlacedNumbers] = useState([
    1,
    2,
    null,
    4,
    null,
    6,
    7,
    null,
    null,
    10,
  ]);
  const [draggedNumber, setDraggedNumber] = useState(null);
  const [success, setSuccess] = useState(false);
  const [incorrectIndex, setIncorrectIndex] = useState(null); // To track the incorrect drop

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  const handleDragStart = (number) => {
    setDraggedNumber(number);
  };

  const handleDrop = (index) => {
    if (draggedNumber === correctOrder[index]) {
      const updatedNumbers = [...placedNumbers];
      updatedNumbers[index] = draggedNumber;
      setPlacedNumbers(updatedNumbers);

      // Play success sound and show GIF
      playSound(successSound);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 1000);
    } else {
      // Play error sound and indicate wrong placement
      playSound(errorSound);
      setIncorrectIndex(index); // Set the incorrect index for flashing red
      setTimeout(() => {
        setIncorrectIndex(null); // Remove the red flash after 1 second
      }, 1000);
    }
  };

  return (
    <div className="h-96 mt-20 flex flex-col items-center justify-center mr-8">
      {/* Success GIF */}
      {success && (
        <img src={successGif} alt="Success" className="mb-4 w-40 h-40" />
      )}

      {/* Dragging numbers */}
      <div className="flex space-x-4 mb-8 ml-[105px] gap-5">
        {[8, 3, 5, 9].map((num) => (
          <div
            key={num}
            id={`number-${num}`}
            draggable
            onDragStart={() => handleDragStart(num)}
            className="p-[19px] bg-white text-black font-bold text-2xl border-2 border-gray-500 rounded-lg cursor-pointer"
          >
            {num}
          </div>
        ))}
      </div>

      {/* Drop zone grid */}
      <div className="grid grid-cols-5 gap-4 border-4 border-red-500 p-6">
        {placedNumbers.map((num, index) => (
          <div
            key={index}
            className={`w-16 h-16 border-[3px] border-green-500 flex items-center justify-center text-2xl font-bold ${
              num ? "text-black" : "text-gray-400"
            } ${
              incorrectIndex === index ? "bg-red-500" : "" // Conditionally add the red flash
            }`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
          >
            {num || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
