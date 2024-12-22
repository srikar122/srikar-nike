import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics, shoes } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
const Hero = () => {

  let [shoeState, setShoeState] = useState(bigShoe1)
  return (
    <section className='w-full flex xl:flex-row flex-col justify-between items-start min-h-screen p-2 max-w-[1440px] mx-auto my-0' id='home'>

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">our summer collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold max-sm:leading-[80px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arraival
          </span>
          <span className="text-coral-red inline-block mt-3"> Nike </span> Shoes
        </h1>
        <p className="text-slate-gray text-lg mt-8 mb-14 sm:max-w-sm">where you can find quality, comfort, and great experience for your life</p>
        <Button label="Show Now" imgUrl={arrowRight}></Button>
        <div className="flex gap-16 mt-20 flex-wrap items-start w-full">
          {statistics.map((stat, ind) => (
            <div key={ind}>
              <p className="font-bold text-4xl font-palanquin">{stat.value}</p>
              <p className="text-slate-gray font-montserrat">{stat.label}</p>
            </div>

          ))}
        </div>
      </div>
      <div className="relative flex justify-center items-center   xl:min-h-[100vh] max-xl:py-40 max-xl:mx-10 bg-primary bg-hero bg-cover bg-center ">
        <img src={shoeState} alt=""  width={610} height={500} className="object-contain relative z-10" />
        <div className="flex absolute -bottom-16 max-xl:relative max-xl:flex-col max-xl:left-1/4 max-lg:absolute max-lg:flex-row max-lg:left-[10%]  max-sm:gap-2 max-sm:left-0">
          {shoes.map((shoe)=>(
            
            <div className="" key={shoe.bigShoe}>
              <ShoeCard imgUrl = {shoe.bigShoe} 
              changeBigShoeImg = {(newShoe)=>{setShoeState(newShoe)}}
              bigShoeImg = {shoeState}
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero