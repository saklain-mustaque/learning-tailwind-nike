
const ServiceCard = ( { imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350] sm:min-w-[350] w-full rounder shadow-3xl px-10 py-16">
        <div className="flex justify-center items-center w-11 h-11 bg-coral-red rounded-full">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="mt-5 font-palanquin font-bold text-3xl leading-normal">{label}</h3>
        <p className="mt-3 font-montserrat leading-normal break-words text-slate-gray text-lg">{subtext}</p>
    </div>
  )
}

export default ServiceCard