import Button from "../components/Button";
import {shoe8} from '../assets/images'
const SuperQuality = () => {
  return (
    <section className='flex max-lg:flex-col justify-between  gap-10 items-center max-container'>
    <div className="flex flex-col">
      <h2 className='font-bold text-4xl font-palanquin lg:max-w-lg'>
        We Provide You 
       <span className='text-coral-red'> Super </span>  
        Quality Shoes
      </h2>
      <p className='mt-4 text-slate-gray text-lg lg:max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi quo aperiam numquam culpa. Excepturi autem voluptas blanditiis reprehenderit amet. Lorem ipsum dolor sit amet.</p>
      <p className='mt-6  text-slate-gray text-lg lg:max-w-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, debitis. Lorem ipsum dolor sit amet.</p>
      <div className='mt-11'>
        <Button label = 'View Details'></Button>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <img src={shoe8} alt="" width={570} height={522}/>
    </div>

  </section>
  )
}

export default SuperQuality