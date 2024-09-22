import React, { useState } from 'react';
import './Contact.css';

function Home() {
  const initialFoodOptions = {
    Italian: ['Pizza', 'Pasta', 'Salad'],
    American: ['Burger', 'Hot Dog', 'Tacos'],
    Japanese: ['Sushi', 'Ramen', 'Tempura'],
    Chinese: ['General Tso\'s Chicken'],
  };

  const [foodOptions, setFoodOptions] = useState(initialFoodOptions);
  const [selectedCategory, setSelectedCategory] = useState('Italian');
  const [currentFoodOptions, setCurrentFoodOptions] = useState(foodOptions[selectedCategory]);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    if (currentFoodOptions.length === 0) return; // Prevent spinning if no food options
    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 720; // Spin at least two full turns
    const wheel = document.getElementById('wheel');

    // Apply rotation with a faster speed (e.g., 2 seconds instead of 4 seconds)
    wheel.style.transition = 'transform 2s ease-out';
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Determine the result after spinning
    setTimeout(() => {
      const actualRotation = randomRotation % 360;
      const index = Math.floor((actualRotation / 360) * currentFoodOptions.length);
      setResult(currentFoodOptions[index]);
      setIsSpinning(false);
      wheel.style.transition = 'none'; // Reset transition
      wheel.style.transform = `rotate(${actualRotation}deg)`; // Set final position
    }, 2000); // Match this with the new transition duration
  };

  const handleAddFood = () => {
    const newFoods = [];
    if (inputValue1.trim() !== '') newFoods.push(inputValue1.trim());
    if (inputValue2.trim() !== '') newFoods.push(inputValue2.trim());
    
    if (newFoods.length > 0) {
      setFoodOptions((prev) => ({
        ...prev,
        [selectedCategory]: [...prev[selectedCategory], ...newFoods],
      }));
      setCurrentFoodOptions((prev) => [...prev, ...newFoods]);
      setInputValue1(''); // Clear first input
      setInputValue2(''); // Clear second input
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setCurrentFoodOptions(foodOptions[category]);
  };

  return (
    <div className="  items-center justify- min-h-screen bg-gray-800 text-white p-6">
      {/* Images outside the main container */}
      <div className="image-container mb-6 w-full max-w-6xl">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHl4W3ttVIloStXI-bK-EiZSh34V6fnZcpA&s" 
          alt="Description 1" 
          className="styled-image w-full h-auto" 
        />
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-3xl text-center">
        <h2 className="text-yellow-400 font-bold text-5xl mb-4">
          Welcome To Heads Or Tails
        </h2>
        <p className="text-gray-200 font-semibold text-lg mb-4">
          A fun randomizer website for couples and individuals.
        </p>
        <p className="text-gray-200 font-semibold text-lg mb-4">
          Spin the wheel and discover what delicious food to enjoy!
        </p>

        {/* Category Selector */}
        <div className="mb-4">
          <label htmlFor="category" className="text-gray-200 font-semibold mr-2">Select a category:</label>
          <select 
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="bg-gray-700 text-white rounded-md p-2"
          >
            {Object.keys(foodOptions).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div
          id="wheel"
          className="border-4 border-white rounded-full h-64 w-64 flex items-center justify-center transition-transform relative mx-auto mb-4 bg-gradient-to-r from-blue-400 to-white-600 shadow-lg"
        >
          {currentFoodOptions.map((food, index) => (
            <div key={index} className="absolute flex items-center justify-center">
              <div 
                style={{ 
                  transform: `rotate(${index * (360 / currentFoodOptions.length)}deg) translateY(-50%)`, 
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#fff',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                }}
              >
                {food}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleSpin}
          className={`bg-yellow-500 text-white rounded-lg px-4 py-2 font-semibold transition duration-300 hover:bg-blue-600 ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}`}
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
