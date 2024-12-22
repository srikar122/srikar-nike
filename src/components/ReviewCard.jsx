import React from 'react'
import { star } from '../assets/icons'
const ReviewCard = ({imgURL,customerName, rating, feedback}) => {
  return (
    <div className='flex flex-col  p-4 justify-center items-center'>
        
        <div className='flex items-center justify-center'>
             <img src={imgURL} alt="Customer Image" width={120} className='rounded-full'/>
        </div>
        <p className='font-montserrat text-slate-gray mt-6 max-w-sm'>{feedback}</p>
        <div className='flex gap-3 mt-4'>
            <img src={star} alt="" />
            <p>({rating})</p>
        </div> 
        <h3 className='text-2xl font-bold mt-4 font-palanquin text-center'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard