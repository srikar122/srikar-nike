import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
    console.log(imgURL)
  return (
    <div className='flex flex-col px-10 py-16 sm:min-w-[350px] w-full sm:w-[350px] rounded-[20px] shadow-3xl '>
        <div className='bg-coral-red rounded-full h-11 w-11 flex justify-center items-center '>
        <img src={imgURL} alt="img"  width={24} height={24}/>

        </div>
        <h3 className='text-3xl font-bold mt-5 font-palanquin'>{label}</h3>
        <p className='font-montserrat text-lg break-words mt-5 text-slate-gray'>{subtext}</p>

    </div>
  )
}

export default ServiceCard