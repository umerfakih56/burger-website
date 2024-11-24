import React from 'react';

// Button Component for reusability
const OrderButton = () => (
  <button
    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-200'
    aria-label='Order Now'
  >
    Order Now!
  </button>
);

const ShoeList = () => (
  <ul className='text-gray-800 space-y-4'>
  <li>
    <strong>Boots:</strong> Durable, rugged designs perfect for tough conditions, offering comfort and support with every step.
  </li>
  <li>
    <strong>Sport Shoes:</strong> Engineered for high performance, these shoes combine breathability, support, and flexibility for your active lifestyle.
  </li>
  <li>
    <strong>Casual Shoes:</strong> Stylish and versatile, designed for everyday wear, providing a perfect blend of comfort and fashion.
  </li>
  <li>
    <strong>Sandal Shoes:</strong> Keep your feet cool and comfortable with our selection of breathable, easy-to-wear sandals for any occasion.
  </li>
  <li>
    <strong>Formal Shoes:</strong> Sophisticated and refined, these shoes offer the perfect finishing touch to your professional or elegant look.
  </li>
</ul>

);

const FloatingImageContentBlock = () => {
  return (
    <section className='bg-gradient-to-r from-gray-300 to-blue-200 min-h-screen py-10'>
      <div className='container mx-auto flex flex-col md:flex-row items-center rounded-lg shadow-md'>
        {/* Content Block */}
        <div className='md:w-1/2 md:pr-10'>
          <h2 className='text-3xl font-bold mb-4 text-gray-800'>Shoes Fit Varieties</h2>
          <p className='text-blue-900 mb-4'>
          "Step into comfort and style with our premium collection of shoes, crafted for the perfect fit and designed to keep you moving all day long."
          </p>
          <OrderButton />
          <h3 className='text-2xl font-semibold mt-6 mb-4 text-center md:text-left text-gray-800'>
            Category of Shoes in our Outlet:
          </h3>
          <ShoeList />
        </div>

        {/* Image Block */}
        <div className='md:w-1/2 mt-6 md:mt-0'>
          <img
            src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/2679677.png'
            alt='Shoe Fits Varieties'
            className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'
          />
        </div>
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;

