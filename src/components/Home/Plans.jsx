import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Plans() {
  return (
    <div className='p-5 bg-black text-white'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
        <h2 className='text-3xl md:text-5xl'>Invest in yourself with</h2>
        <span className='bg-orange-500 text-xl md:text-3xl font-bold px-6 md:px-10 py-2 rounded-lg flex items-center justify-center'>Pro</span>
      </div>

      <div className='flex flex-col lg:flex-row p-10 rounded-lg align-center justify-center text-left gap-10'>
        <div className='border border-white p-5 md:p-10 rounded-lg max-w-full lg:max-w-xs'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5 md:mb-10 capitalize'>Unlimited practice</h1>
          <span className='text-5xl md:text-7xl font-bold text-orange-500'>2x</span>
          <p className='text-xl md:text-2xl mt-5'>Pro users are twice as likely to incorporate practice in their learning plan</p>
        </div>

        <div className='border border-white p-5 md:p-10 rounded-lg max-w-full lg:max-w-xs'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5 md:mb-10 capitalize'>Ad-free experience</h1>
          <span className='text-5xl md:text-7xl font-bold text-orange-500'>+132%</span>
          <p className='text-xl md:text-2xl mt-5'>Pro users spend 132% more time learning than regular ones.</p>
        </div>

        <div className='border border-white p-5 md:p-10 rounded-lg max-w-full lg:max-w-xs'>
          <h1 className='text-2xl md:text-3xl font-bold mb-5 md:mb-10 capitalize'>Habit formation</h1>
          <span className='text-5xl md:text-7xl font-bold text-orange-500'>92%</span>
          <p className='text-xl md:text-2xl mt-5'>Pro users that set up daily goals have the highest lesson completion rate of 92%!</p>
        </div>
      </div>

      <div className='text-orange-500 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 text-xl md:text-2xl mt-5'>
        <p><FontAwesomeIcon icon={faCheck} className='px-3' />Unlimited practice</p>
        <p><FontAwesomeIcon icon={faCheck} className='px-3' />Ad-free experience</p>
        <p><FontAwesomeIcon icon={faCheck} className='px-3'/>Progress statistics</p>
        <p><FontAwesomeIcon icon={faCheck} className='px-3' />Daily goals</p>
      </div>

      <div className='text-orange-500 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 text-xl md:text-2xl mt-5'>
        <p><FontAwesomeIcon icon={faCheck} className='px-3'/>Habit building features</p>
        <p><FontAwesomeIcon icon={faCheck} className='px-3'/>Lesson shortcuts</p>
        <p><FontAwesomeIcon icon={faCheck} className='px-3'/>Real life challenges</p>
      </div>

      <div className='flex items-center justify-center mt-5 text-black'>
        <button className='bg-orange-500 text-white py-3 px-6 rounded-lg font-bold mt-10 mb-5'>Start learning like a pro</button>
      </div>
    </div>
  );
}

export default Plans;
