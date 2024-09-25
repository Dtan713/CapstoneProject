import React, { useState } from 'react';  
import './Contact.css';

function Home() {
  const initialFoodOptions = [
    'Pizza', 'Pasta', 'Salad', 'Lasagna', 'Tiramisu',
    'Burger', 'Hot Dog', 'Tacos', 'Mac & Cheese', 
    'Sushi', 'Ramen', 'Tempura', 'Sashimi', 
    'Curry', 'Biryani', 'Naan', 'Samosa', 
    'Quesadilla', 'Burrito', 'Nachos', 'Chilaquiles'
  ];

  const [currentFoodOptions, setCurrentFoodOptions] = useState(initialFoodOptions);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [coupons, setCoupons] = useState([]);

  const fetchCoupons = async (food) => {
    try {
      const response = await fetch(`http://localhost:8080/coupon/${food}`);
      if (!response.ok) throw new Error("coupons");
      const data = await response.json();
      setCoupons(data);
    } catch (error) {
      console.error("Failed to fetch coupons:", error);
      setCoupons([{ id: 1, description: 'No current coupons available.', code: '', location: '' }]);
    }
  };

  const handleSpin = () => {
    if (currentFoodOptions.length === 0) return;
    setIsSpinning(true);

    const randomRotation = Math.floor(Math.random() * 360) + 720;
    const wheel = document.getElementById('wheel');

    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    setTimeout(() => {
      const actualRotation = randomRotation % 360;
      const index = Math.floor((actualRotation / 360) * currentFoodOptions.length);
      const selectedFood = currentFoodOptions[index];
      setResult(selectedFood);
      fetchCoupons(selectedFood);
      setIsSpinning(false);
      wheel.style.transition = 'none';
      wheel.style.transform = `rotate(${actualRotation}deg)`;
    }, 4000);
  };

  const handleAddFood = () => {
    const newFoods = [];
    if (inputValue1.trim() !== '') newFoods.push(inputValue1.trim());
    if (inputValue2.trim() !== '') newFoods.push(inputValue2.trim());

    if (newFoods.length > 0) {
      setCurrentFoodOptions(prev => [...prev, ...newFoods]);
      setInputValue1('');
      setInputValue2('');
    }
  };

  return (
    <div className="items-center justify-min-h-screen bg-gray-800 text-white p-6 border-4 border-yellow-500">
      <div className="image-container mb-6 w-full max-w-6xl border-4 border-yellow-500 rounded-lg">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHl4W3ttVIloStXI-bK-EiZSh34V6fnZcpA&s" 
          alt="Description 1" 
          className="styled-image w-full h-auto rounded-lg" 
        />
      </div>

      <div className="border-4 border-yellow-500 bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-3xl text-center">
        <h2 className="text-yellow-400 font-bold text-5xl mb-4">Welcome To Heads Or Tails</h2>
        <p className="text-gray-200 font-semibold text-lg mb-4">A fun randomizer website for couples and individuals.</p>
        <p className="text-gray-200 font-semibold text-lg mb-4">Spin the wheel and discover what delicious food to enjoy!</p>

        <div
          id="wheel"
          className="border-4 border-yellow-400 rounded-full h-80 w-80 relative mx-auto mb-4"
          style={{
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.8), rgba(255, 215, 0, 0.5))',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
          }}
        >
          {currentFoodOptions.map((food, index) => {
            const angle = (index * (360 / currentFoodOptions.length));
            return (
              <div key={index} className="absolute" style={{
                transform: `rotate(${angle}deg)`,
                clipPath: `polygon(50% 50%, 100% 0%, 100% 100%)`,
                width: '100%',
                height: '100%',
                backgroundColor: `hsl(${(index * (360 / currentFoodOptions.length))}, 70%, 50%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#fff',
                borderBottom: '2px solid white',
                borderTop: '2px solid white',
              }}>
                <span style={{ transform: `rotate(-${angle}deg)` }}>{food}</span>
              </div>
            );
          })}
          <img 
            src="https://example.com/spinning-coin.png" // Replace with the actual coin image path
            alt="Spinning Coin"
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isSpinning ? 'spin' : ''}`}
            style={{ width: '50px', height: '50px', transition: 'transform 4s ease-out' }}
          />
        </div>

        <button
          onClick={handleSpin}
          className={`bg-yellow-500 text-white rounded-lg px-4 py-2 font-semibold transition duration-300 hover:bg-blue-600 ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSpinning}
        >
          {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
        </button>

        {result && (
          <>
            <div className={`mt-6 text-3xl font-bold ${isSpinning ? 'text-gray-400' : 'text-yellow-400'}`}>
              {isSpinning ? '...' : `Result: ${result}`}
            </div>

            {/* Coupons Section */}
            <div className="mt-6 border-4 border-yellow-500 bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-bold text-yellow-400">Coupons & Best Deals</h3>
              <ul className="mt-2">
                {coupons.map(coupon => (
                  <li key={coupon.id} className="text-gray-200 mb-2">
                    {coupon.description} <strong>(Code: {coupon.code})</strong> <br />
                    <span className="text-sm text-gray-400">Location: {coupon.location}</span>
                  </li>
                ))}
              </ul>
              {/* GIF Map */}
              <div className="mt-4">
                <img 
                  src="https://developers.google.com/static/maps/architecture/dds-real-time/images/nyc.gif" // Replace with your actual GIF URL
                  alt="Map of Locations"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </>
        )}

        <div className="mt-8">
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
