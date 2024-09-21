import React, { useState } from 'react';

function Home() {
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    setIsSpinning(true);
    const randomOutcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
    setTimeout(() => {
      setResult(randomOutcome);
      setIsSpinning(false);
    }, 2000); // Spin duration
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-6">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-3xl w-full text-center">
        <h2 className="text-yellow-400 font-bold text-5xl mb-4">
          Welcome To Heads Or Tails
        </h2>
        <p className="text-gray-200 font-semibold text-lg mb-4">
          A fun randomizer website for couples and individuals.
        </p>
        <p className="text-gray-200 font-semibold text-lg mb-4">
          Whether you need to make a quick decision or just want to have some fun, 
          Heads Or Tails is here to help! With a simple interface and easy-to-use 
          functionality, you can spin the wheel or toss a coin in no time.
        </p>
        <p className="text-gray-200 font-semibold text-lg mb-4">
          Join us and discover a new way to make decisions with a bit of luck!
        </p>

        <button
          onClick={handleSpin}
          className={`bg-yellow-500 text-white rounded-lg px-4 py-2 font-semibold transition duration-300 hover:bg-yellow-600 ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSpinning}
        >
          {isSpinning ? 'Spinning...' : 'Spin the Coin'}
        </button>

        {result && (
          <div className={`mt-6 text-3xl font-bold ${isSpinning ? 'text-gray-400' : 'text-yellow-400'}`}>
            {isSpinning ? '...' : result}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

