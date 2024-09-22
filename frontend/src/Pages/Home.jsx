import React, { useState } from 'react';
import './Contact.css';

function Home() {
  const [foodOptions, setFoodOptions] = useState(['Pizza', 'Burger', 'Sushi', 'Pasta', 'Salad', 'Tacos']);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    if (foodOptions.length === 0) return; // Prevent spinning if no food options
    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 720; // Spin at least two full turns
    const wheel = document.getElementById('wheel');

    // Apply rotation
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Determine the result after spinning
    setTimeout(() => {
      const actualRotation = randomRotation % 360;
      const index = Math.floor((actualRotation / 360) * foodOptions.length);
      setResult(foodOptions[index]);
      setIsSpinning(false);
      wheel.style.transition = 'none'; // Reset transition
      wheel.style.transform = `rotate(${actualRotation}deg)`; // Set final position
    }, 4000); // Match this with the transition duration
  };

  const handleAddFood = () => {
    const newFoods = [];
    if (inputValue1.trim() !== '') newFoods.push(inputValue1.trim());
    if (inputValue2.trim() !== '') newFoods.push(inputValue2.trim());
    
    if (newFoods.length > 0) {
      setFoodOptions([...foodOptions, ...newFoods]);
      setInputValue1(''); // Clear first input
      setInputValue2(''); // Clear second input
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-6">
      
      {/* Images outside the main container */}
      <div className="image-container mb-6">
        <img src="data:image/jpeg;base64,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" alt="Description 1" className="styled-image" />
        
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-3xl w-full text-center">
        <h2 className="text-yellow-400 font-bold text-5xl mb-4">
          Welcome To Heads Or Tails
        </h2>
        <p className="text-gray-200 font-semibold text-lg mb-4">
          A fun randomizer website for couples and individuals.
        </p>
        <p className="text-gray-200 font-semibold text-lg mb-4">
          Spin the wheel and discover what delicious food to enjoy!
        </p>

        <div
          id="wheel"
          className="border-4 border-black rounded-full h-64 w-64 flex items-center justify-center transition-transform relative mx-auto mb-4"
        >
          {foodOptions.map((food, index) => (
            <div key={index} className="absolute">
              <div style={{ transform: `rotate(${index * (360 / foodOptions.length)}deg) translateY(-50%)` }}>
                {food}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleSpin}
          className={`bg-yellow-500 text-white rounded-lg px-4 py-2 font-semibold transition duration-300 hover:bg-yellow-600 ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSpinning}
        >
          {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
        </button>

        {result && (
          <div className={`mt-6 text-3xl font-bold ${isSpinning ? 'text-gray-400' : 'text-yellow-400'}`}>
            {isSpinning ? '...' : `Result: ${result}`}
          </div>
        )}

        <div className="mt-4">
          <input
            type="text"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            placeholder="Add your first food item"
            className="border border-gray-500 rounded-lg p-2 text-black mr-2"
          />
          <input
            type="text"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            placeholder="Add your second food item"
            className="border border-gray-500 rounded-lg p-2 text-black mr-2"
          />
          <button
            onClick={handleAddFood}
            className="bg-yellow-500 text-white rounded-lg px-4 py-2 font-semibold transition duration-300 hover:bg-blue-600"
          >
            Add Food
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

