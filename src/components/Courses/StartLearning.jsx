import React from 'react';

function StartLearning({title}) {
  return (
    <div className="flex flex-col items-center justify-center  bg-blue-950 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 mt-6 text-white">
        Start learning {title} today
      </h1>
      <button 
        className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Start Learning
      </button>
    </div>
  );
}

export default StartLearning;
