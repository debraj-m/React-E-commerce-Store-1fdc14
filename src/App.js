import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  // State to control cart sidebar visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="sticky top-0 z-10">
          <Navbar onCartClick={toggleCart} />
        </header>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                  Shop the latest products
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Discover our carefully curated collection of high-quality items
                  at competitive prices.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
                    onClick={() => {
                      const shopSection = document.querySelector("#shop");
                      shopSection.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Shop Now
                  </button>
                  <button
                    className="px-6 py-3 bg-blue-800 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                    onClick={toggleCart}
                  >
                    View Cart
                  </button>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 flex justify-center">
                <div className="relative w-full max-w-lg">
                  <img 
                    src={"https://images.unsplash.com/photo-1570833181606-e694d0560b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk0NTkyNDZ8&ixlib=rb-4.1.0&q=80&w=1080"}
                    alt="Collection of premium products" 
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 rounded-full px-4 py-1 font-bold transform rotate-12">
                    New Arrivals!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow" id="shop">
          <ProductList />
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">ShopEasy</h3>
                <p className="text-gray-400">
                  Your one-stop destination for quality products
                  at competitive prices.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Home</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Shop</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,88H152a24,24,0,0,0-24,24V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="144" x2="160" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M88,176S32.85,144,40.78,56c0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24H240l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12S72,200,88,176Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="32" y="32" width="192" height="192" rx="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="180" cy="76" r="16"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polygon points="164 128 108 92 108 164 164 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M24,128c0,29.91,3.07,47.45,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47s-3.07-47.45-5.41-56.47a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
              <p>© {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Shopping Cart Sidebar */}
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default App;