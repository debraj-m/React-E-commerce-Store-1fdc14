import React from "react";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiStar } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { id, name, price, description, category, image, inStock, rating } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  // Format price to 2 decimal places
  const formattedPrice = price.toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative pb-[60%] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {!inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            Out of Stock
          </div>
        )}
        <div className="absolute top-2 left-2 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
          {category}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{name}</h3>
          <div className="flex items-center">
            <FiStar className="text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-lg">${formattedPrice}</span>
          
          <button
            onClick={handleAddToCart}
            disabled={!inStock}
            className={`flex items-center px-3 py-2 rounded ${
              inStock
                ? "bg-primary text-white hover:bg-secondary transition-colors"
                : "bg-gray-300 cursor-not-allowed text-gray-500"
            }`}
          >
            <FiShoppingCart className="mr-1" />
            <span>{inStock ? "Add to Cart" : "Sold Out"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;