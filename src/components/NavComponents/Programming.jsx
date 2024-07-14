import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Begginer from './Begginer';
import Intermediate from './Intermediate';

function Programming() {
  const [comp,setComp] = useState(1)
  const active = {
    backgroundColor: 'blue'
  }
  return (
    <div className='flex gap-3'>
    <ul className='flex-grow'>
    <li onClick={()=> setComp(1)} className='flex justify-between item-center hover:bg-blue-500 p-3 rounded' style={comp == 1 ? active : null}>Begginer <FontAwesomeIcon icon={faAngleRight}/></li>
    <li onClick={()=> setComp(2)} className='flex justify-between item-center hover:bg-blue-500 p-3 rounded' style={comp == 2 ? active : null}>Intermediate <FontAwesomeIcon icon={faAngleRight}/></li>
    
  </ul>
  {/* <Begginer/> */}
  {/* <Intermediate/> */}
  {comp == 1 ? <Begginer/> : <Intermediate/>}
  </div>
  )
}

export default Programming