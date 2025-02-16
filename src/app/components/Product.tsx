import Image from 'next/image';
import Link from 'next/link';

const Product = () => {
    return (
        <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[30%]'>
            <div className='relative w-full h-80'>

            
<Image src="https://images.pexels.com/photos/30720975/pexels-photo-30720975/free-photo-of-elegant-diamond-ring-on-hand-holding-a-book.jpeg?auto=compress&cs=tinysrgb&w=600" 
alt="" 
fill 
sizes="25vw"
className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'/>
<Image src="https://images.pexels.com/photos/30721001/pexels-photo-30721001/free-photo-of-elegant-diamond-ring-on-well-groomed-hand.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="25vw"
className='absolute object-cover rounded-md'/>
</div>
<div className='flex justify-between'>
    <span className="font-semibold">Product Name</span>
    <span className="font-semibold">$100</span>
    
</div>
<div className="text-sm text-gray-500">Description</div>
    <button className='rounded-2xl ring-1 ring-cartcolor w-max py-2 px-4 text-xs hover:bg-cartcolor hover:text-white'>Add To Cart</button>
        </Link>
        
    )
}
export default Product;