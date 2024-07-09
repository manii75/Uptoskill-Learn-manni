import React from 'react'

function SliderCard({title,image}) {
    return (
        <div className='bg-blue-50 p-5 flex items-center justify-center flex-col rounded-lg'>
            <img src={image} className='rounded-full h-40'/>
            <h3 className='text-2xl text-center font-bold'>{title}</h3>
        </div>
    )
}

export default SliderCard