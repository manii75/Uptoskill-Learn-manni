import React, { act } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
function Genrative() {
  const active = {
    backgroundColor: 'blue'
  }
  return (
    <div className='flex gap-3'>
            <ul className='flex-grow'>
              <li className='flex justify-between item-center hover:bg-blue-500 p-3 rounded' style={active}>Begginer <FontAwesomeIcon icon={faAngleRight} /></li>


            </ul>
            <ul className='flex-grow'>
              <li className='flex justify-between item-center hover:bg-blue-500 p-3 rounded' > Introduction to C</li>
              <li className='flex justify-between item-center hover:bg-blue-500 p-3 rounded' > Introduction to C</li>
              <li className='flex justify-between item-center hover:bg-blue-500 p-3 rounded' > Introduction to C</li>

            </ul>
          </div>
  )
}

export default Genrative