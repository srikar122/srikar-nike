import React from 'react'

const ShoeCard = ({imgUrl,changeBigShoeImg, bigShoeImg})  => {
  const handleClick = ()=>{
      if(imgUrl != bigShoeImg){
        changeBigShoeImg(imgUrl)
      }
  }
  return (
    <div className =  {`${imgUrl === bigShoeImg ? 'border-2 rounded-xl border-red-400' : 'border-none'} bg-slate-300 m-2 bg-hero
    `}>
        <img src={imgUrl} alt="" width={140} height={80} className="bg-card bg-cener bg-cover rounded-xl"
          onClick={handleClick}
        />
    </div>
  )
}

export default ShoeCard