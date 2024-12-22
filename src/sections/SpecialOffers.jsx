import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'


const SpecialOffers = () => {
  return (
    <section className='max-container flex max-lg:flex-col-reverse gap-16 '>
      <div className="max-xl:mx-auto w-[600]">
        <img src={offer} alt="" width={600} height={522}/>

      </div>
      <div className="flex flex-col">
        <h2 className='text-4xl font-palanquin font-bold  max-w-lg max-xl:max-w-full'>
          Our <span className='text-coral-red'>
             Special  </span>
          Offers
          </h2>
        <p className="max-w-lg mt-8  max-xl:max-w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eos quia atque sapiente voluptates nemo libero blanditiis distinctio fugit possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, non.</p>
        <p className="max-w-lg mt-10 max-xl:max-w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut aspernatur cumque id illum fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, possimus!</p>
        <div className="flex gap-8 mt-14">
          <Button label='special offer' imgUrl={arrowRight}></Button>
          <Button label='learn more'></Button>
        </div>
      </div>


    </section>
  )
}

export default SpecialOffers