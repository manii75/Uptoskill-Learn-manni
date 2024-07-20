import React from 'react';

function WhatLearn({ data }) {
  return (
    <div className="px-24 py-24 space-y-6">
      <h2 className="text-4xl font-bold">What you'll learn</h2>
      <div className="flex flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {data.map((topic, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md bg-slate-50">
              <h2 className="text-lg font-bold mb-2">{topic.title}</h2>
              <p className="text-gray-700">{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <img
            className="w-full max-w-lg mx-auto mt-24 mr-16"
            src="https://sololearnassets.azureedge.net/home-why-solo-5.svg"
            alt="Learn more"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatLearn;
