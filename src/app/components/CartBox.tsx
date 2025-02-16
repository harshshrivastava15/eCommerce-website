import Image from 'next/image';

const CartBox = () => {
    const cartItems = true;
    return (
        <div className="absolute p-4 rounded-md shadow-md bg-gray-50 top-12 right-2 flex-col gap-6 z-20 w-max">
            {
                !cartItems ? (
                    <div className="">Cart is Empty</div>
                ) : (
                    
                    <div className="flex flex-col gap-4">
                        <h2 className='text-xl'>Shopping cart</h2>
                        <div className="flex gap-4 items-center">
                            <Image 
                                src="/prod.webp" 
                                alt=""
                                width={70} 
                                height={70} 
                            />
                            <div className='flex flex-col justify-between w-full gap-8'>
                                <div className=''>
                                    <div className="font-semibold">Product Name</div>
                                    <div className="">$100</div>
                                    <div className=''>available</div>
                                </div>
                            </div>
                        </div>
                        <button className='flex-1 rounded-sm bg-gray-500 text-white p-2'>CheckOut</button>
                        
                    </div>
                )
            }
        </div>
    );
};

export default CartBox;