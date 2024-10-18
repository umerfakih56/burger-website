import React from 'react';

const products = [
  {
    id: 1,
    title: "Mexican Burger",
    category: "Gourmet",
    price: "240.00",
    imageUrl: "https://img.freepik.com/premium-photo/simple-burger-yellow-background_974629-135165.jpg",
  },
  {
    id: 2,
    title: "Italian Burger",
    category: "Gourmet",
    price: "215.00",
    imageUrl: "https://img.freepik.com/premium-photo/burger-red-background_832479-2446.jpg",
  },
  {
    id: 3,
    title: "French Burger",
    category: "Gourmet",
    price: "200.00",
    imageUrl: "https://static-images.jumbo.com/product_images/Recipe_504481-01_560x560_2.jpg",
  },
  {
    id: 4,
    title: "German Burger",
    category: "Gourmet",
    price: "190.00",
    imageUrl: "https://img.freepik.com/premium-photo/burger-with-red-background-red-background_889227-8009.jpg",
  },
  {
    id: 5,
    title: "Dutch Burger",
    category: "Gourmet",
    price: "180.00",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-93SJIZ6DXPmjmI02h3LQ0chtwwXLQx0QNvV0zQRM9ls5Mp9OwF380ZnFO2QdskH9QQ&usqp=CAU",
  },
  {
    id: 6,
    title: "Russian Burger",
    category: "Gourmet",
    price: "150.00",
    imageUrl: "https://img.freepik.com/premium-photo/hamburger-with-purple-background-purple-background_853645-961.jpg",
  },
];

export default function ProductList() {
  return (
    <div className="flex justify-center p-8 bg-gradient-to-r from-black to-grey-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl mx-auto bg-gradient-to-r from-black to-gray-900 w-80 h-64"
          >
            {/* Image */}
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-36 object-cover rounded-lg"
            />
            
            {/* Content */}
            <div className="relative z-10 mt-4 text-white">
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-sm text-gray-300">{product.category}</p>
              <p className="mt-2 text-lg font-semibold">${product.price}</p>
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300 rounded-lg"></div>

          </div>
        ))}
      </div>
    </div>
  );
}

