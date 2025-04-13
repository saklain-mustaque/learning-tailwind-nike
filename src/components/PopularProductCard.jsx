import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
        <img src={imgURL} alt={name} className="w-[280] h-[280]" />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-xl text-scale-gray leading-normal">(4.5)</p>
        </div>
        <h3 className="font-semibold font-palanquin text-2xl mt-2 leading-normal">{name}</h3>
        <p className="font-montserrat text-2xl text-coral-red mt-2 font-semibold leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard