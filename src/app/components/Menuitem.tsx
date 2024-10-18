import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
    const productImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VvSVMGVSE6V4DCY7MVUXt-J_czePha2fLg&s",
        "https://png.pngtree.com/thumb_back/fh260/background/20230526/pngtree-hamburger-with-cheese-and-sauce-splashes-across-black-background-image_2643902.jpg",
        "https://img.freepik.com/premium-photo/hamburger-grill-with-fire-created-with-generative-ai-technology_853812-740.jpg",
        "https://img.freepik.com/premium-photo/hamburger-with-smoke-black-background-close-up_848191-5.jpg",
        "https://img.freepik.com/premium-photo/flying-burger-black-background-concept-fast-food_798986-532.jpg",
        "https://fillicafepk.com/wp-content/uploads/2023/12/zinger-burgerpsd.jpg"
    ];

    const burgerNames = [
        "Classic Burger",
        "Cheeseburger",
        "BBQ Burger",
        "Double Beef Burger",
        "Veggie Burger",
        "Spicy Chicken Burger"
    ];

    return (
        <div className='relative text-center p-10'>
            <div className='absolute inset-0'
                style={{
                    backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/background/20231007/pngtree-an-assortment-of-various-fast-food-items-on-a-textured-gray-image_13609477.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    opacity: 0.1,
                }} 
            />
            <h1 className='font-bold text-4xl mb-4 text-white z-10 relative'>Most Requested Items</h1>
            <h1 className='text-3xl text-white z-10 relative'>Order Now!</h1>

            <section
                id='Projects'
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
            >
                {productImages.map((image, index) => (
                    <div
                        key={index}
                        className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
                    >
                        <a href="#">
                            <img
                                src={image}
                                alt={`Product ${index + 1}`}
                                className='h-80 w-72 object-cover rounded-t-xl'
                            />
                            <div className='px-4 py-3 w-72'>
                                <span className='text-slate-500 mr-3 uppercase text-xs'>Category</span>
                                <p className="text-lg font-bold text-red-700 truncate block capitalize">{burgerNames[index]}</p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black my-3 cursor-auto">$149</p>
                                    <del>
                                        <br />
                                        <p className="text-sm text-blue-800 cursor-auto ml-2">{""} $199</p>
                                    </del>
                                    <div className="ml-auto">
                                        <FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ProductCardGrid;
