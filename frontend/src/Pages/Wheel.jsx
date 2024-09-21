// Wheel.js
import React, { useState } from 'react';
import { link } from 'react-router-dom';

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

const Wheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState('');

  const spinWheel = () => {
    if (isSpinning) return; // Prevent multiple spins at once

    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 720; // Spin at least two full turns
    const wheel = document.getElementById('wheel');

    // Apply rotation
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Determine the result after spinning
    setTimeout(() => {
      const actualRotation = randomRotation % 360;
      const index = Math.floor((actualRotation / 360) * options.length);
      setResult(options[index]);
      setIsSpinning(false);
      wheel.style.transition = 'none'; // Reset transition
      wheel.style.transform = `rotate(${actualRotation}deg)`; // Set final position
    }, 4000); // Match this with the transition duration
  };

  return (
    <div className="flex flex-col items-center">
      <div
        id="wheel"
        className="border-4 border-black rounded-full h-64 w-64 flex items-center justify-center transition-transform relative"
      >
        {options.map((option, index) => (
          <div key={index} className="absolute">
            <div style={{ transform: `rotate(${index * (360 / options.length)}deg) translateY(-50%)` }}>
              {option}
            </div>
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
      {result && <div className="mt-4 text-xl">{`Result: ${result}`}</div>}
    </div>
  );
};

export default Wheel;
