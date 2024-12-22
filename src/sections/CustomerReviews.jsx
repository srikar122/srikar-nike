import {reviews} from '../constants'
import ReviewCard from '../components/ReviewCard';
const CustomerReviews = () => (
    <section className='max-container flex flex-col justify-center'>
      <h3 className='text-bold text-4xl font-palanquin text-center font-bold'>What Our <span className='text-coral-red'>Customers </span> Say?</h3>
      <p className='info-text mx-auto text-slate-gray mt-5 text-center '> Here genuine stories from our customers and ecxeptional experiences with us.</p>
      <div className='mt-24 flex max-lg:flex-col justify-evenly items-center gap-14'>
        {
          reviews.map((review)=>(
            <ReviewCard key={review.id} {...review}/>
          ))
        }
      </div>
    </section>
  )


export default CustomerReviews;