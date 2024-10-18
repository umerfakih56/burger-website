import React from 'react';

export default function Carousel() {
  return (
    <div>
      <section className='bg-gradient-to-r from-black to-gray-700'>
        <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
            
            {/* Grilled Bacon Burger */}
            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col'>
              <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL50q8sUD4wOhUB3msonyPSuLx-bmdW7GBf2vH_MFRlm4Z3xTY1FSdx9w1e8YUoF7Vgmc&usqp=CAU"
                  alt="Grilled Bacon Burger"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Grilled Bacon Burger</h3>
              </a>
            </div>

            {/* Zinger Burger */}
            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col'>
              <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img 
                  src="https://img.freepik.com/premium-photo/zinger-burger-with-fries-chicken-burger_926154-893.jpg"
                  alt="Zinger Burger"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Zinger Burger</h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-col-2 lg:grid-cols-2">
              <a href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img 
                  src="https://burgerrepublic.com/wp-content/uploads/2022/09/8063a9f8c880208ab65c39e6ac1eb80f.jpg"
                  alt="Meaty Meat" 
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Meaty Meat</h3>
              </a>
              <a href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4  pb-4 pt-40">
                <img 
                  src="https://img.freepik.com/photos-premium/hamburger-du-bacon-du-fromage-dessus_777271-9683.jpg?w=360"
                  alt="Cheesy Cheese" 
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Cheesy Cheese</h3>
              </a>
            </div>
            </div>

            {/* Beef Burger (full-height fix) */}
            <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 bg-gradient-to-r from-black to-gray-700 h-full flex flex-col">
              <a href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 h-full"> {/* Applied h-full here */}
                <img 
                  src="https://img.freepik.com/premium-photo/delicious-burgers-with-beef-patty-bacon-cheese-cabbage-rustic-wooden-background_1028938-111368.jpg"
                  alt="Beef Burger" 
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Beef Burger</h3>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
