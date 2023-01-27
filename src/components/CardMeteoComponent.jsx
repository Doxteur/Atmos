import React from 'react'
// import image nuageSoleil and nuageLune 
import nuageSoleil from '../assets/Images/nuageSoleil.png'


function CardMeteoComponent({hour}) {
  return (
    <div className='m-2 mt-1 p-2 rounded-xl bg-[#22252d]'>
      <h1 className='text-center font-bold text-gray-400'>{hour} am</h1>
      <img src={nuageSoleil} alt='nuageSoleil' className='w-20 m-auto'/>
      <h1 className='text-center text-bold'>16 °</h1>
    </div>
  )
}

export default CardMeteoComponent