import React from 'react';

function YouLearn({ cardData }) {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-11 mt-11 text-center">What you'll learn</h1>

      <div className='flex flex-row gap-3 justify-center items-center'>
        {cardData.map((card, index) => (
          <div key={index} className="max-w-96 bg-white shadow-md rounded-lg overflow-hidden mb-8">
            <img 
              className="w-full h-48 object-cover" 
              src={card.imgUrl} 
              alt={card.title}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-700 mb-4">
                {card.description}
              </p>
              <a href="#" className="text-blue-500 hover:underline cursor-pointer block">Continue reading on our blog</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YouLearn;
