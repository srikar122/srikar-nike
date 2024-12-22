import React from 'react'

const Button = ({label,imgUrl,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center  border gap-2 px-7 py-4 text-lg leading-none rounded-full bg-coral-red text-white border-coral-red
      ${fullWidth && 'w-full'}`
      
    }>
        {label}
        {
          imgUrl &&
        <img src={imgUrl} alt={label} className='rounded-full w-5 h-5 ml-2 ' />
        }
    </button>
  )
}

export default Button