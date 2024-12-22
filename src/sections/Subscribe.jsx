import React from 'react'
import Button from '../components/Button'
const Subscribe = () => {
  return (
    <section id='subscribe' className='flex max-lg:flex-col justify-between items-center max-container gap-10 mt-4'>
      <h2 className='text-4xl  font-palanquin font-bold lg:max-w-lg'>Sign Up For <span className='text-coral-red'>Updates </span> and Newsletter</h2>
    <div className='lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-5 p-2 sm:border sm:border-slate-gray sm:rounded-full'>
      <input type="text"   className='input text-base leading-normal   text-slate-gray pl-4  max-sm:p-4  outline-none sm:border-none'/> 
      <div className='flex max-sm:justify-center items-center max-sm:w-full'>
        <Button label='SignUp'></Button>
      </div>
    </div>

    </section>
  )
}

export default Subscribe