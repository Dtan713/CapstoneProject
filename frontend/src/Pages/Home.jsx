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
  const [newFoods, setNewFoods] = useState([])
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [favorites, setFavorites] = useState([]); // New state for favorites

  const fetchCoupons = async (newFood) => {
    try {
      const response = await fetch(`http://localhost:8080/coupons/${newFood[0]}`);
      if (!response.ok) {
        throw new Error("Failed to fetch coupons");
      }
      const data = await response.json();
      console.log(data)
      setCoupons(data);
    } catch (error) {
      console.error("Fetch coupons:", error);
    }
    
    try {
      const response = await fetch(`http://localhost:8080/coupons/${newFood[0]}`);
      if (!response.ok) {
        throw new Error("Failed to fetch coupons");
      }
      const data = await response.json();
      console.log(data)
      setCoupons(data);
    } catch (error) {
      console.error("Fetch coupons:", error);
    }
  };

  {coupons.length > 0 ? (
    <ul>
      {coupons.map(coupon => (
        <li key={coupon.id} className="text-gray-200 mb-2">
          {coupon.description} <strong>(Code: {coupon.code})</strong> <br />
          <span className="text-sm text-gray-400">Location: {coupon.location}</span>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-400">No coupons available for this food.</p>
  )}

  const handleSpin = () => {
    setIsSpinning(true);

    console.log(currentFoodOptions)
    const randomRotation = Math.floor(Math.random() * 360) + 720;
    const wheel = document.getElementById('wheel');

    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    setTimeout(() => {
      const actualRotation = randomRotation % 360;
      const index = Math.floor((actualRotation / 360) * currentFoodOptions.length);
      const selectedFood = currentFoodOptions[index];
      setResult(newFoods);
      fetchCoupons(newFoods);
      setIsSpinning(false);
      wheel.style.transition = 'none';
      wheel.style.transform = `rotate(${actualRotation}deg)`;
    }, 4000);
  };

  const handleAddFood = () => {
    setNewFoods([inputValue1, inputValue2])

    console.log(inputValue1)
    console.log(inputValue2)
    console.log(newFoods)

    setInputValue1('');
    setInputValue2('');
    // if (newFoods.length > 0) {
    //   setCurrentFoodOptions(prev => {
    //     const updatedFoods = [...prev];
    //     if (newFoods[0]) updatedFoods.unshift(newFoods[0]);
    //     if (newFoods[1]) updatedFoods.push(newFoods[1]);
    //     console.log(updatedFoods)
    //     return updatedFoods;
    //   });
      
    // }
  };

  // New function to save favorite food
  const handleSaveFavorite = () => {
    if (result && !favorites.includes(result)) {
      setFavorites(prevFavorites => [...prevFavorites, result]);
    }
  };
  console.log(newFoods)
  return (
    <div className="items-center justify-min-h-screen bg-gray-800 text-white p-6 border-4 border-yellow-500">
      <div className="image-container mb-6 w-full max-w-6xl border-4 border-yellow-500 rounded-lg">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHl4W3ttVIloStXI-bK-EiZSh34V6fnZcpA&s" 
          alt="Description 1" 
          className={`styled-image w-full h-auto rounded-lg ${isSpinning ? 'spin' : ''}`} 
        />
      </div>

      <div className="border-4 border-yellow-500 bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-3xl text-center">
        <h2 className="text-yellow-400 font-bold text-5xl mb-4">Welcome To Heads Or Tails</h2>
        <p className="text-yellow-200 font-semibold text-lg mb-4">A fun randomizer website for couples and individuals.</p>
        <p className="text-yellow-200 font-semibold text-lg mb-4">Spin the wheel and discover what delicious food to enjoy!</p>

        <div
          id="wheel"
          className="border-4 border-yellow-400 rounded-full h-80 w-80 relative mx-auto mb-4"
        >
          {currentFoodOptions.map((food, index) => {
            const angle = (index * (360 / currentFoodOptions.length));
            return (
              <div key={index} className="absolute" style={{
                transform: `rotate(${angle}deg)`,
                width: '100%',
                height: '100%',
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
            style={{ width: '200px', height: '200px' }}
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

            <button
              onClick={handleSaveFavorite}
              className="mt-4 bg-green-500 text-white rounded-lg px-4 py-2 font-semibold transition duration-400 hover:bg-green-600"
            >
              Save as Favorite
            </button>

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
              <div className="mt-4">
                <img 
                  src="https://developers.google.com/static/maps/architecture/dds-real-time/images/nyc.gif"
                  alt="Map of Locations"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </>
        )}

        <div className="mt-8 p-4 rounded-lg">
          <input
            type="text"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            placeholder="Add your first food item"
            className="border-4 border-yellow-500 rounded-lg p-2 text-black mr-2 placeholder-blue-600 placeholder-opacity-75"
            style={{ transition: 'border-color 0.3s' }}
          />
          <input
            type="text"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            placeholder="Add your second food item"
            className="border-4 border-yellow-500 rounded-lg p-2 text-black mr-2 placeholder-blue-600 placeholder-opacity-75"
            style={{ transition: 'border-color 0.3s' }}
          />
        </div>
        
        <button
          onClick={handleAddFood}
          className="mt-4 bg-yellow-500 text-white rounded-lg px-4 py-2 font-semibold transition duration-400 hover:bg-blue-600"
        >
          Add Food
        </button>

        {/* Display favorite foods */}
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

export default Home;
