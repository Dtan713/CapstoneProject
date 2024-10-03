import React, { useState } from 'react';
import './wheel.css';

function Wheel() {
  const initialFoodOptions = [
    'Tomato', 'Italian',
    'Sushi World', 'Japanese',
    'Spicy Delight', 'Indian',
    'BBQ Palace', 'Barbecue',
    'Vegan Feast', 'Vegan',
    'Burger Joint', 'American',
  ];

  const [currentFoodOptions, setCurrentFoodOptions] = useState(initialFoodOptions);
  const [newFoods, setNewFoods] = useState([]);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchCoupons = async (selectedFood) => {
    try {
      const response = await fetch(`http://localhost:8080/coupons/${selectedFood}`);
      if (!response.ok) {
        throw new Error("Failed to fetch coupons");
      }
      const data = await response.json();
      setCoupons(data);
    } catch (error) {
      console.error("Fetch coupons:", error);
    }
  };

  const handleSpin = () => {
    if (newFoods.length < 2) return;

    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 720;
    const wheel = document.getElementById('wheel');

    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    setTimeout(() => {
      const actualRotation = randomRotation % 360;
      const index = Math.floor((actualRotation / 360) * newFoods.length);
      const selectedFood = newFoods[index];

      setResult(selectedFood);
      fetchCoupons(selectedFood);
      setIsSpinning(false);
      wheel.style.transition = 'none';
      wheel.style.transform = `rotate(${actualRotation}deg)`;
    }, 4000);
  };

  const handleAddFood = () => {
    if (inputValue1 && inputValue2) {
      setNewFoods([inputValue1, inputValue2]);
      setInputValue1('');
      setInputValue2('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  text-white p-6">
      <div className="border-4 border-yellow-500 bg-gray-900 rounded-lg shadow-lg p-20 w-full max-w-7xl text-center">
        <h2 className="text-yellow-400 font-bold text-6xl mb-4">Heads Or Tails</h2>
        <p className="text-yellow-200 font-semibold text-2xl mb-4">Having A Hard Time Choosing Where To Go First?</p>
        <p className="text-yellow-200 font-semibold text-2xl mb-4">Enter Your Top Two Choices Below And Spin The Wheel</p>

        <div id="wheel" className="border-4 border-yellow-400 rounded-full h-80 w-80 relative mx-auto mb-4">
          {newFoods.map((food, index) => {
            const angle = (index * (360 / newFoods.length));
            return (
              <div key={index} className="absolute" style={{
                transform: `rotate(${angle}deg)`,
                width: '150%',
                height: '150%',
                clipPath: `polygon(50% 50%, 100% 0%, 100% 100%)`,
              }}>
                <span style={{ transform: `rotate(-${angle}deg)` }}>{food}</span>
              </div>
            );
          })}
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKMm2yKQHkP-7c2phsAquzM9EQVack3xaWw&s"
            alt="Spinning Coin"
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isSpinning ? 'spin' : ''}`}
            style={{ width: '120px', height: '120px', zIndex: 10 }} // Added zIndex to make sure it's on top
          />
        </div>

        <button
          onClick={handleSpin}
          className={`bg-yellow-500 text-white rounded-lg px-4 py-2 font-semibold transition duration-300 hover:bg-blue-600 ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSpinning || newFoods.length < 2}
        >
          {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
        </button>

        {result && (
          <div className={`mt-6 text-4xl font-bold ${isSpinning ? 'text-gray-400' : 'text-yellow-400'}`}>
            {isSpinning ? '' : ` ${result}`}
          </div>
        )}

        <div className="mt-8 p-4 rounded-lg">
          <input
            type="text"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            placeholder="Add your first restaurant"
            className="border-4 border-yellow-500 rounded-lg p-2 text-black mr-2 placeholder-blue-600 placeholder-opacity-75"
          />
          <input
            type="text"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            placeholder="Add your second restaurant"
            className="border-4 border-yellow-500 rounded-lg p-2 text-black mr-2 placeholder-blue-600 placeholder-opacity-75"
          />
        </div>
        
        <button
          onClick={handleAddFood}
          className="mt-4 bg-yellow-500 text-white rounded-lg px-4 py-2 font-semibold transition duration-400 hover:bg-blue-600"
        >
          Add Restaurant
        </button>

        {favorites.length > 0 && (
          <div className="mt-8 border-4 border-yellow-500 bg-gray-800 rounded-lg p-4">
            <h3 className="text-xl font-bold text-yellow-400">Favorite Foods</h3>
            <ul className="mt-2">
              {favorites.map((food, index) => (
                <li key={index} className="text-gray-200 mb-2">{food}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wheel;
