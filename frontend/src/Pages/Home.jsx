import React, { useState } from 'react';
import './Contact.css';

function Home() {
  const initialFoodOptions = {
    Italian: ['Pizza', 'Pasta', 'Salad'],
    American: ['Burger', 'Hot Dog', 'Tacos'],
    Japanese: ['Sushi', 'Ramen', 'Tempura'],
    Chinese: ['General Tso\'s Chicken', 'Dumplings', 'Fried Rice'],
    Indian: ['Curry', 'Biryani', 'Naan'],
    Mexican: ['Quesadilla', 'Burrito', 'Nachos'],
  };

  const [foodOptions, setFoodOptions] = useState(initialFoodOptions);
  const [currentFoodOptions, setCurrentFoodOptions] = useState([
    ...foodOptions['Italian'],
    ...foodOptions['American'],
    ...foodOptions['Japanese'],
    ...foodOptions['Chinese'],
    ...foodOptions['Indian'],
    ...foodOptions['Mexican'],
  ]);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [coupons, setCoupons] = useState([]);

  // Dummy coupon data
  const couponData = {
    Pizza: [
      { id: 1, description: '20% off on your next pizza order', code: 'PIZZA20', location: 'Local Pizza Place' },
      { id: 2, description: 'Free garlic bread with any pizza', code: 'GARLICFREE', location: 'Local Pizza Place' },
    ],
    Burger: [
      { id: 3, description: '$5 off any burger combo', code: 'BURGER5', location: 'Burger Joint' },
      { id: 4, description: 'Buy one get one free on Tuesdays', code: 'BOGO', location: 'Burger Joint' },
    ],
    Sushi: [
      { id: 5, description: 'Buy 2 rolls, get 1 free', code: 'SUSHIFREE', location: 'Sushi Spot' },
    ],
    // Add more items as needed
  };

  const fetchCoupons = (food) => {
    const fetchedCoupons = couponData[food] || [{ id: 1, description: 'No current coupons available.', code: '', location: '' }];
    setCoupons(fetchedCoupons);
  };

  const handleSpin = () => {
    if (currentFoodOptions.length === 0) return; // Prevent spinning if no food options
    setIsSpinning(true);

    // const audio = new Audio('C:public\Users\shiao.tan\Downloads\mixkit-bike-wheel-spinning-1613.wav');
    // audio.play();

    const randomRotation = Math.floor(Math.random() * 360) + 720; // Spin at least two full turns
    const wheel = document.getElementById('wheel');

    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Determine the result after spinning
    setTimeout(() => {
      const actualRotation = randomRotation % 360;
      const index = Math.floor((actualRotation / 360) * currentFoodOptions.length);
      const selectedFood = currentFoodOptions[index];
      setResult(selectedFood);
      fetchCoupons(selectedFood); // Fetch coupons for the selected food
      setIsSpinning(false);
      wheel.style.transition = 'none'; // Reset transition
      wheel.style.transform = `rotate(${actualRotation}deg)`; // Set final position
    }, 4000); // Match this with the new transition duration
  };

  const handleAddFood = () => {
    const newFoods = [];
    if (inputValue1.trim() !== '') newFoods.push(inputValue1.trim());
    if (inputValue2.trim() !== '') newFoods.push(inputValue2.trim());

    if (newFoods.length > 0) {
      setCurrentFoodOptions(prev => [...prev, ...newFoods]);
      setInputValue1(''); // Clear first input
      setInputValue2(''); // Clear second input
    }
  };

  return (
    <div className="items-center justify-min-h-screen bg-gray-800 text-white p-6">
      <div className="image-container mb-6 w-full max-w-6xl">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHl4W3ttVIloStXI-bK-EiZSh34V6fnZcpA&s" 
          alt="Description 1" 
          className="styled-image w-full h-auto" 
        />
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-3xl text-center">
        <h2 className="text-yellow-400 font-bold text-5xl mb-4">Welcome To Heads Or Tails</h2>
        <p className="text-gray-200 font-semibold text-lg mb-4">A fun randomizer website for couples and individuals.</p>
        <p className="text-gray-200 font-semibold text-lg mb-4">Spin the wheel and discover what delicious food to enjoy!</p>

        <div
          id="wheel"
          className="border-4 border-yellow rounded-full h-64 w-64 relative mx-auto mb-4"
          style={{ overflow: 'hidden' }} // Ensure content doesn't overflow
        >
          {currentFoodOptions.map((food, index) => {
            const angle = (index * (360 / currentFoodOptions.length));
            return (
              <div key={index} className="absolute" style={{
                transform: `rotate(${angle}deg)`,
                clipPath: `polygon(50% 50%, 100% 0%, 100% 100%)`, // Triangle slice shape
                width: '100%',
                height: '100%',
                backgroundColor: `hsl(${(index * (360 / currentFoodOptions.length))}, 70%, 50%)`, // Color for each slice
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#fff',
                borderBottom: '2px solid white',
                borderTop: '2px solid white',
              }}>
                <span style={{ transform: `rotate(-${angle}deg)` }}>{food}</span>
              </div>
            );
          })}
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

        {/* Display Coupons and Deals */}
        {result && (
          <div className="mt-6 bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-400">Coupons & Best Deals</h3>
            <ul className="mt-2">
              {coupons.map(coupon => (
                <li key={coupon.id} className="text-gray-200 mb-2">
                  {coupon.description} <strong>(Code: {coupon.code})</strong> <br />
                  <span className="text-sm text-gray-400">Location: {coupon.location}</span>
                </li>
              ))}
            </ul>
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
            className="bg-yellow-500 text-white rounded-lg px-4 py-2 font-semibold transition duration-400 hover:bg-blue-600"
          >
            Add Food
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
