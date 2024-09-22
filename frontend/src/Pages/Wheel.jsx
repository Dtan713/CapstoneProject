import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const foodOptions = [
  'Pizza',
  'Sushi',
  'Burger',
  'Pasta',
  'Salad',
  'Tacos',
  'Ice Cream',
  'Steak',
  'Sandwich',
  'Kebab',
];

const FoodWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState('');

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 720; // Spin at least two full turns
    const wheel = document.getElementById('food-wheel');

    // Apply rotation
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Determine the result after spinning
    setTimeout(() => {
      const actualRotation = randomRotation % 360;
      const index = Math.floor((actualRotation / 360) * foodOptions.length);
      setResult(foodOptions[index]);
      setIsSpinning(false);
      wheel.style.transition = 'none';
      wheel.style.transform = `rotate(${actualRotation}deg)`;
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        id="food-wheel"
        className="border-4 border-black rounded-full h-64 w-64 flex items-center justify-center transition-transform relative"
      >
        {foodOptions.map((food, index) => (
          <div
            key={index}
            className="absolute"
            style={{ transform: `rotate(${index * (360 / foodOptions.length)}deg) translateY(-50%)` }}
          >
            {food}
          </div>
        ))}
      </div>
      <button
        onClick={spinWheel}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        disabled={isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
      </button>
      {result && <div className="mt-4 text-xl">{`You should eat: ${result}`}</div>}
    </div>
  );
};

export default FoodWheel;

