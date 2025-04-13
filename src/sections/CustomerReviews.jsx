import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-bold font-palanquin text-4xl">
        What Our
        <span className="text-coral-red "> Customer </span>
        Say?
      </h3>
      <p className="info-text mt-4 text-center m-auto max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-1 justify-evenly mt-24 items-center gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews