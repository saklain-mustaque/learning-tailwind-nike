import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer"
            className="rounded-full object-cover w-[120px] h-[120px]"
        />
        <p className="info-text text-center mt-6 max-w-sm">{feedback}</p>
        <div className="flex justify-center items-center gap-2.5 mt-3">
            <img src={star} alt="star" className="m-0 object-contain" width={24} height={24} />
            <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="text-3xl font-palanquin mt-1 text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard