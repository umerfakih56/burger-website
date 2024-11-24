import React from 'react';

export default function Banner() {
    return (
        <div className='relative overflow-hidden bg-gradient-to-r from-black to-gray-800 font-sans px-6 py-12 mb-7'>
            <div className='absolute inset-0'>
                <img
                    src="https://img.freepik.com/premium-photo/burger-table_972667-7.jpg"
                    alt="Delicious burger banner"
                    className='w-full h-full object-cover opacity-30' 
                />
            </div>
            <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
                <h2 className='text-white text-4xl sm:text-5xl font-bold mb-4'>
                    Discover Our Menu
                </h2>
                <p className='text-white text-lg mb-6 max-w-xl'>
                    Shop Now for Exclusive Burger Discounts!
                </p>
                <button
                    type='button'
                    className='bg-cyan-500 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105'
                >
                    Exciting Deals Launch at 12 PM!
                </button>
            </div>
        </div>
    );
}

