import React from 'react'

function Plans() {
  return (
    <div className='p-5 bg-black text-white '>
        <div className='flex item-center justify-center gap-5'>
        <h2 className='text-5xl'>Invest in yourself with</h2>   
        <span className='bg-orange-500 text-3xl font-bold px-10 py-2 rounded-lg flex item-center justify-center'>Pro</span>
        </div>
      
       <div className='flex p-10 rounded-lg align-center justify-center text-left gap-10'>

       <div className='border border-white p-10 rounded-lg  max-w-96'>
            <h1 className='text-3xl font-bold mb-10 capitalize'>Unlimited practice</h1>
            <span className='text-7xl font-bold  text-orange-500 '>2x</span>
            <p className='text-2xl mt-5'>Pro users are twice as likely to incorporate practice in their learning plan</p>
       </div>

        <div className='border border-white  p-10 rounded-lg  max-w-96'><h1 className='text-3xl font-bold mb-10 capitalize'>Ad-free experience</h1> <span className='text-7xl font-bold  text-orange-500 '>+132%</span> <p className='text-2xl mt-5'>Pro users spend 132% more time learning than regular ones.</p></div>

        <div className='border border-white p-10 rounded-lg  max-w-96'><h1 className='text-3xl font-bold mb-10 capitalize'>Habit formation</h1> <span  className='text-7xl font-bold  text-orange-500 '>92%</span> <p className='text-2xl mt-5'>Pro users that set up daily goals have the highest lesson completion rate of 92%!</p></div>
       </div>
    </div>
  )
}

export default Plans