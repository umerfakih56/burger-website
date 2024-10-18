'use client'; // This line tells Next.js that this is a client component

import React from 'react';

const ReservationSection = () => {
  return (
    <section className='bg-gradient-to-r from-gray-800 to-gray-900 py-16'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold text-white mb-8'>Make a Reservation</h2>
        <p className='text-lg text-gray-300 mb-6'>
          Reserve your table now and enjoy a delightful dining experience!
        </p>
        <form className='max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8'>
          <div className='mb-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type='email'
              placeholder='Your Email'
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type='date'
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type='time'
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <button className='w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-200'>
              Reserve Your Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;

