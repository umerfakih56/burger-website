import React from 'react';

// Button Component for reusability
const OrderButton = () => (
  <button
    className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200'
    aria-label='Order Now'
  >
    Order Now!
  </button>
);

const BurgerList = () => (
  <ul className='text-white space-y-4'>
    <li>
      <strong>Classic Beef Blast:</strong> Juicy beef patty, cheddar cheese, lettuce, tomato, and house sauce.
    </li>
    <li>
      <strong>Spicy Inferno Burger:</strong> Flame-grilled patty, jalapeños, pepper jack cheese, and spicy mayo.
    </li>
    <li>
      <strong>BBQ Bacon Stack:</strong> Double beef patty, crispy bacon, smoky cheddar, and BBQ sauce.
    </li>
    <li>
      <strong>Mushroom Swiss Delight:</strong> Sautéed mushrooms, Swiss cheese, garlic aioli, and fresh greens.
    </li>
    <li>
      <strong>Veggie Powerhouse:</strong> Grilled veggie patty, avocado, lettuce, tomato, and vegan mayo.
    </li>
    <li>
      <strong>Crispy Chicken Crunch:</strong> Buttermilk fried chicken, coleslaw, spicy ranch, and pickles.
    </li>
  </ul>
);

const FloatingImageContentBlock = () => {
  return (
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
      {/* Content Block */}
      <div className='md:w-1/2 md:pr-10'>
        <h2 className='text-3xl font-bold mb-4 text-white'>Delicious Burgers:</h2>
        <p className='text-white mb-4'>
          Experience the juiciest burgers in town, made with fresh ingredients and grilled to perfection.
        </p>
        <OrderButton />
        <h3 className='text-2xl font-semibold mt-6 mb-4 text-center md:text-left text-white'>
          Coming Soon: Our New Burger Launches
        </h3>
        <BurgerList />
      </div>

      {/* Image Block */}
      <div className='md:w-1/2 mt-6 md:mt-0'>
        <img
          src='https://t3.ftcdn.net/jpg/08/04/95/38/360_F_804953875_loZeXNzPUzewtun96e65ZJgmagdwvqvU.jpg'
          alt='Delicious burger'
          className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;


