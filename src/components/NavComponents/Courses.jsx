import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Learnpath from './Learnpath';
import Programming from './Programming';
import Genrative from './Genrative';
function Courses() {

  const [component,setComponent] = useState(1);


  const active = {
    backgroundColor: 'blue'
  }


  return (

    <div className='bg-white transition-all text-black absolute top-10 left-0 ' style={{ minWidth: '700px' }}>
      <div className='rounded flex gap-2 p-5'>


        <ul className='py-5'>
          <li className='flex justify-between item-center  hover:bg-blue-500 p-3 rounded' onClick={()=> setComponent(1)} style={component == 1? active:null}>Full Learning Path <FontAwesomeIcon icon={faAngleRight} /></li>
          <li className='flex justify-between item-center hover:bg-blue-500 p-3 rounded' onClick={()=> setComponent(2)} style={component == 2? active:null}>Programming language <FontAwesomeIcon icon={faAngleRight} /></li>
          <li className='flex justify-between itm-center hover:bg-blue-500 p-3 rounded 'onClick={()=> setComponent(3)} style={component == 3? active:null}>Genrative AI <FontAwesomeIcon icon={faAngleRight} /></li>
        </ul>
        <div className='bg-gray-300 flex-grow p-5 rounded'>
          {
            component === 1 ? <Learnpath/> : component === 2 ? <Programming/> : <Genrative/>
          }
          {/* <Learnpath/> */}
          {/* <Programming/> */}
          {/* <Genrative/> */}

        </div>
      </div>
      <div className='py-3 text-center border border-t'>
        <h3>View Full catalog</h3>
      </div>
    </div>
  )
}

export default Courses