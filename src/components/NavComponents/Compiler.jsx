import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
function Compiler() {

    

  const active = {
    backgroundColor:'blue'
  }
    
  return (

    <div className='bg-white transition-all text-black absolute top-10 left-0 rounded'>
      <div className='grid grid-cols-3 px-3 py-5' style={{minWidth:'600px'}}>
        <span className='p-2 hover:bg-blue-600 rounded-md' >HTML</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >CSS</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >JS</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >Python</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >JQery</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >Kotlin</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >Swift</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >Go</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >C</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >C#</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >C++</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >R</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >Ruby</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >PHP</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >TypeScript</span>
        <span className='p-2 hover:bg-blue-600 rounded-md' >Node Js</span>
        
    </div>
      <div className='p-3 text-lg text-center border-t'>
        <h3>View All Compiler</h3>
      </div>
    </div>

    
  )
}

export default Compiler