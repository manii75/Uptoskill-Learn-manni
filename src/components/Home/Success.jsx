import React from 'react';

function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-gray-100">
    
      <img className=' mt-10' src="https://assets.sololearn.com/success-story-1.jpg" alt="success img" />
  
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="font-bold mb-4 text-3xl md:text-5xl">
          The Success Story of <span className="text-blue-500 font-serif"><br />Hatsy</span>
        </h1>
        <p className="p-4 md:p-10 text-gray-500 text-lg md:text-2xl lg:w-3/4 mx-auto ">
          "One day at the library, I noticed a stranger using an app that featured tutorials,
           questions, and exercises for C++ programming. It was Sololearn. I thought, 'Neat,
          learning on your mobile phone!' I was just starting to learn to code and I made 
          all the usual beginner mistakes, so I gave Sololearn a try. Through Sololearn, 
          I have found many learners who have helped me grow. I have met teachers, engineers, 
          developers, data scientists, and more amazing people. The learning environment created
          by Sololearn served as a catalyst for me to pick up good practices, which go beyond learning
          and into the workplace."
          Hatsy Rei, June 01, 2020
        </p>
        <hr className="my-6" />
        <div>
          <button className='bg-blue-400 text-white py-3 px-6 lg:w-80 md:w-80 rounded-sm font-bold md:mt-5 mb-5'>
            Start your success story
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
