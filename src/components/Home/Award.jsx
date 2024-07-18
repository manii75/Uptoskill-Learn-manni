import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Award() {
  return (
    <div className='text-black-500'>
      <h1 className='text-3xl md:text-5xl font-bold mt-10 md:mt-20 text-center'>Award winning experience</h1>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center mt-10 md:mt-40'>
        <div className='flex flex-col items-center'>
          <div className='text-orange-400 flex text-2xl'>
            <FontAwesomeIcon icon={faStar} className="ml-1 md:ml-2" />
            <FontAwesomeIcon icon={faStar} className="ml-1 md:ml-2" />
            <FontAwesomeIcon icon={faStar} className="ml-1 md:ml-2" />
            <FontAwesomeIcon icon={faStar} className="ml-1 md:ml-2" />
            <FontAwesomeIcon icon={faStar} className="ml-1 md:ml-2" />
          </div>
          <p className='text-xl md:text-2xl font-bold mt-2'>4.8 from 5</p>
          <span>Stars on the AppStore</span>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-xl md:text-2xl font-bold mt-2'>App Of The Year</p>
          <span>FB Start by Facebook</span>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-xl md:text-2xl font-bold mt-2'>Editors' Choice</p>
          <span>Google Play</span>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-xl md:text-2xl font-bold lg:w-2/4 mt-2'>Best Computer Coding Education Solution</p>
          <span>EdTech Breakthrough Award 2021</span>
        </div>
      </div>
    </div>
  )
}

export default Award;
