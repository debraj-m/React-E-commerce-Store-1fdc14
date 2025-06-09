import React from "react";
import { FiShoppingCart, FiMenu, FiSearch } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Calculate total items in cart
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">ShopEasy</span>
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">
                Shop
              </a>
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">
                Categories
              </a>
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">
                About
              </a>
            </div>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center">
            {/* Search button */}
            <button className="p-2 rounded-full text-gray-500 hover:text-primary focus:outline-none">
              <FiSearch className="h-5 w-5" />
            </button>
            
            {/* Cart button with indicator */}
            <div className="ml-4 relative">
              <button className="p-2 rounded-full text-gray-500 hover:text-primary focus:outline-none">
                <FiShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="ml-2 flex items-center sm:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 rounded-md text-gray-500 hover:text-primary focus:outline-none"
              >
                <FiMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block text-gray-700 hover:text-primary px-3 py-2 font-medium">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-primary px-3 py-2 font-medium">
              Shop
            </a>
            <a href="#" className="block text-gray-700 hover:text-primary px-3 py-2 font-medium">
              Categories
            </a>
            <a href="#" className="block text-gray-700 hover:text-primary px-3 py-2 font-medium">
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;