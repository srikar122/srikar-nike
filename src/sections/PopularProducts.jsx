import React from 'react'
import { products } from '../constants' 
import PopularShoeCard from '../components/PopularShoeCard'

const PopularProducts = () => {
  return (
    <section id="popular" className='max-container max-sm:mt-12'>
      <div className="flex flex-col gap-5 justify-start">
        <h2 className='text-4xl font-bold font-palanquin'>Our 
          <span className='text-coral-red font-montserrat'> Popular </span>
           Products</h2>
        <p className='font-montserrat texr-2xl mt-2 max-w-lg'>where you can find quality, comfort, and great experience for your life developed in a responsive way</p>
      </div>
      <div className="div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 sm:gap-4 mt-14 ">
        
        {
          products.map((product)=>(

              <PopularShoeCard key = {product.name} {...product}/>
          ))
        }


      </div>
    </section>
  )
}

export default PopularProducts