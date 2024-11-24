import React from 'react';

export default function Banner() {
    return (
        <div className='relative overflow-hidden bg-gradient-to-r from-gray-300 to-white font-sans px-6 py-12 mb-7'>
            <div className='absolute inset-0'>
                <img
                    src="https://5.imimg.com/data5/SELLER/Default/2021/9/LE/BJ/HW/10352820/shoe-retail-interior-designing-service-500x500.jpg"
                    alt="Shoe fit banner"
                    className='w-full h-full object-cover opacity-30' 
                />
            </div>
            <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
                <h2 className='text-blue-600 text-4xl sm:text-5xl font-bold mb-4'>
                    "Discover Your Fav Outlet"
                </h2>
                <p className='text-black text-lg mb-6 max-w-xl'>
                    Shop Now for Exclusive Shoes Discounts!
                </p>
                <button
                    type='button'
                    className='bg-cyan-500 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105'
                >
                    Shoes Availabe 24 Hours!!
                </button>
            </div>
        </div>
    );
}
