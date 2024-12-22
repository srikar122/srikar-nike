import React from 'react'
import { star } from '../assets/icons' 

const PopularShoeCard = ({imgURL,name,price}) => {
  console.log(imgURL)
  return (
    
    <div className='flex flex-col max-sm:mx-auto max-sm:w-max '>
            <img src={imgURL} alt={name} width={280} height={280}/>
            <div className='flex justify-start mt-8 gap-2.5 px-2'>
              <img src={star} alt="" width={24} height={24} />
              <p className='font-mono text-slate-gray text-xl'>(4.5)</p>
            </div>
            <h3 className='text-2xl mt-2 font-palanquin leading-normal font-semibold'>{name}</h3>
            <p className="mt-2 font-montserrat text-coral-red font-semibold">{price}</p>
    
    </div>
  )
}

export default PopularShoeCard