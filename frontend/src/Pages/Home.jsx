import React, { useState } from 'react'; 
import './Contact.css';

function Home() {
  const initialFoodOptions = {
    Italian: ['Pizza', 'Pasta', 'Salad', 'Lasagna', 'Tiramisu', 'Risotto', 'Bruschetta'],
    American: ['Burger', 'Hot Dog', 'Tacos', 'Mac & Cheese', 'Steak', 'BBQ Ribs', 'Apple Pie'],
    Japanese: ['Sushi', 'Ramen', 'Tempura', 'Sashimi', 'Udon', 'Miso Soup', 'Okonomiyaki'],
    Chinese: ['General Tso\'s Chicken', 'Dumplings', 'Fried Rice', 'Sweet and Sour Pork', 'Spring Rolls', 'Kung Pao Chicken', 'Mapo Tofu'],
    Indian: ['Curry', 'Biryani', 'Naan', 'Samosa', 'Paneer Tikka', 'Chaat', 'Butter Chicken'],
    Mexican: ['Quesadilla', 'Burrito', 'Nachos', 'Chilaquiles', 'Tamales', 'Enchiladas', 'Elote'],
    Greek: ['Moussaka', 'Gyro', 'Souvlaki', 'Spanakopita', 'Baklava'],
    Thai: ['Pad Thai', 'Green Curry', 'Tom Yum Soup', 'Spring Rolls', 'Mango Sticky Rice'],
    Mediterranean: ['Falafel', 'Hummus', 'Tabbouleh', 'Shawarma', 'Baklava'],
    French: ['Croissant', 'Coq au Vin', 'Ratatouille', 'Crème Brûlée', 'Quiche Lorraine'],
  };

  const [foodOptions, setFoodOptions] = useState(initialFoodOptions);
  const [currentFoodOptions, setCurrentFoodOptions] = useState(Object.values(initialFoodOptions).flat());
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [coupons, setCoupons] = useState([]);

  const couponData = {
    Pizza: [{ id: 1, description: '20% off on your next pizza order', code: 'PIZZA20', location: 'Local Pizza Place' }],
    Pasta: [{ id: 2, description: '10% off on pasta orders', code: 'PASTA10', location: 'Pasta Palace' }],
    Salad: [{ id: 3, description: 'Free drink with any salad', code: 'SALADDRINK', location: 'Healthy Greens' }],
    Burger: [{ id: 4, description: '$5 off any burger combo', code: 'BURGER5', location: 'Burger Joint' }],
    'Hot Dog': [{ id: 5, description: 'Get a free topping with any hot dog', code: 'FREETOPPING', location: 'Hot Dog Stand' }],
    Tacos: [{ id: 6, description: '2 for 1 tacos on Wednesdays', code: 'TACOWED', location: 'Taco Truck' }],
    Sushi: [{ id: 7, description: 'Buy 2 rolls, get 1 free', code: 'SUSHIFREE', location: 'Sushi Spot' }],
    Ramen: [{ id: 8, description: '15% off your ramen order', code: 'RAMEN15', location: 'Ramen House' }],
    Tempura: [{ id: 9, description: 'Free appetizer with tempura', code: 'FREEAPP', location: 'Tempura Corner' }],
    'General Tso\'s Chicken': [{ id: 10, description: '10% off for new customers', code: 'NEW10', location: 'Chinese Bistro' }],
    Dumplings: [{ id: 11, description: 'Free dipping sauce with any dumpling order', code: 'FREESAUCE', location: 'Dumpling Den' }],
    'Fried Rice': [{ id: 12, description: 'Get a small soup with fried rice', code: 'SOUPFREE', location: 'Rice Noodle Place' }],
    Curry: [{ id: 13, description: 'Free naan with any curry', code: 'FREENAAN', location: 'Curry House' }],
    Biryani: [{ id: 14, description: '10% off on your first biryani order', code: 'BIRYANI10', location: 'Biryani Spot' }],
    Naan: [{ id: 15, description: 'Buy 2 naans, get 1 free', code: 'NAANBOGO', location: 'Naan Place' }],
    Quesadilla: [{ id: 16, description: 'Free drink with any quesadilla', code: 'QUESODRINK', location: 'Quesadilla Corner' }],
    Burrito: [{ id: 17, description: '$3 off burrito on Fridays', code: 'BURRITO3', location: 'Burrito Bar' }],
    Nachos: [{ id: 18, description: 'Get a free side with nachos', code: 'FREESIDE', location: 'Nacho Shack' }],
  };

  const fetchCoupons = (food) => {
    const fetchedCoupons = couponData[food] || [{ id: 1, description: 'No current coupons available.', code: '', location: '' }];
    setCoupons(fetchedCoupons);
  };

  const handleFetch = async () => {
    try {
        const response = await fetch("http://localhost:8080/coupon");

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setCoupons(data); // Assuming setCoupons is defined in your component
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
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
          className="border-4 border-yellow-400 rounded-full h-80 w-80 relative mx-auto mb-4 shadow-lg transition-transform duration-600" // Size decreased here
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
                fontSize: '1.25rem', // Font size remains the same
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
          <>
            <div className={`mt-6 text-3xl font-bold ${isSpinning ? 'text-gray-400' : 'text-yellow-400'}`}>
              {isSpinning ? '...' : `Result: ${result}`}
            </div>

            {/* Map Image Section */}
            <div className="mt-4">
              <img
                src="https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2021/02/18100252/Screenshot-2024-04-18-at-9.57.59%E2%80%AFAM.jpg" // Replace with your actual map image URL
                alt="Map"
                className="w-full h-auto mb-4 rounded"
              />
            </div>

            {/* Coupons Section */}
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
          </>
        )}

        <div className="mt-8"> {/* Increased margin-top here */}
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
