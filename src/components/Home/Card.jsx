import React from 'react'

function Card({iconUrl,title,description,btnText}) {
  return (
    <div className='px-5 pb-3 bg-white flex items-center justify-between flex-col w-full rounded-lg' style={{height:'500px'}}>
        <img src={iconUrl} alt="" className='w-full'/>
        <h2 className='text-center text-xl lg:text-3xl font-bold mb-2 '>{title}</h2>
        <p className='lg:text-xl texl-lg mb-3 text-center'>{description}</p>
        <button className='bg-blue-500 text-white text-sm rounded-sm py-2 px-20 font-bold text-whiten self-center'>{btnText}</button>
    </div>
  )
}

export default Card