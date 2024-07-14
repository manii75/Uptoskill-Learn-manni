import React from 'react'

function Award() {
  return (
    <div className=' text-black-500 '>
        <h1 className=' text-5xl font-bold md:mt-20 flex align-center justify-center'>Award winning experience</h1>
        <div className='flex  gap-20 items-center align-center justify-center md:mt-40'>
          <div className=' flex align-center justify-center flex-col'>
          
            <p className='text-2xl font-bold'>4.8 from 5</p>
            <span>Stars on the AppStore </span>
          </div>
          <div className=' flex align-center justify-center flex-col'>
          
          <p className='text-2xl font-bold flex-col'>App Of The Year</p>
          <span>FB Start by Facebook</span>
        </div>
        <div className=' flex align-center justify-center flex-col'>
          
          <p className='text-2xl font-bold flex-col'>Editors' Choice</p>
          <span>Google Play </span>
        </div>
        <div className=' flex align-center justify-center flex-col'>
          
          <p className='text-2xl font-bold lg:w-2/4'>Best Computer Coding Education Solution</p>
          <span className=''>EdTech Breakthrough Award 2021 </span>
        </div>
        </div>
    </div>
  )
}

export default Award;
