import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-6">
  <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-3xl w-full">
    <h2 className="text-yellow-400 font-bold text-5xl mb-4 text-center">
      Welcome To Heads Or Tails
    </h2>
    <p className="text-gray-200 font-semibold text-lg mb-4 text-center">
      A fun randomizer website for couples and individuals.
    </p>
    <div className="text-center">
      <p className="text-gray-200 font-semibold text-lg mb-4">
        Whether you need to make a quick decision or just want to have some fun, 
        Heads Or Tails is here to help! With a simple interface and easy-to-use 
        functionality, you can spin the wheel or toss a coin in no time.
      </p>
      <p className="text-gray-200 font-semibold text-lg">
        Join us and discover a new way to make decisions with a bit of luck!
      </p>
    </div>
  </div>
</div>

      
  );
}

export default About;

