import Button from "../components/Button"
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
	return (
		<section id="about-us" className="flex justify-between items-center gap-10 max-container max-lg:flex-col w-full">
			<div className="flex flex-1 flex-col">
				<h2 className='mt-10 font-palanquin text-4xl font-bold lg:max-w-lg capitalize'>
					We Provide You 
					<span className='text-coral-red'> Super </span>
					<span className='text-coral-red'>Quality </span> Shoes
				</h2>
				<p className='lg:max-w-lg info-text mt-4'>
					Ensuring premium comfort and style, our meticulously crafted footwear
					is designed to elevate your experience, providing you with unmatched
					quality, innovation, and a touch of elegance.
				</p>
				<p className='mt-6 lg:max-w-lg info-text'>
					Our dedication to detail and excellence ensures your satisfaction
				</p>
				<div className='mt-11'>
					<Button label='View details' />
				</div>
			</div>
			<div className="flex-1 flex justify-center items-center">
				<img src={shoe8} alt="Shoe8" width={570} height={522} className="object-contain" />
			</div>
		</section>
	)
}

export default SuperQuality