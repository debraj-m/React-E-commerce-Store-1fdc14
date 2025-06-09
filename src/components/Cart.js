import React, { useState } from "react";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Cart = ({ isOpen, onClose }) => {
  const { items, total, addToCart, removeFromCart, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-6 bg-gray-50 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
              <button
                onClick={onClose}
                className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><path d="M20,32H40L76.75,164.28A16,16,0,0,0,92.16,176H191a16,16,0,0,0,15.42-11.72L232,72H51.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="88" cy="220" r="20"/><circle cx="192" cy="220" r="20"/></svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500">Start adding some items to your cart!</p>
                </div>
              ) : (
                <div className="flow-root">
                  <ul className="divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.id} className="py-6 flex">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                          </div>

                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center">
                              <button
                                onClick={() => removeFromCart(item)}
                                className="p-1 rounded-full hover:bg-gray-100"
                              >
                                <FiMinus className="h-4 w-4" />
                              </button>
                              <span className="mx-2 font-medium">{item.quantity}</span>
                              <button
                                onClick={() => addToCart(item)}
                                className="p-1 rounded-full hover:bg-gray-100"
                              >
                                <FiPlus className="h-4 w-4" />
                              </button>
                            </div>

                            <button
                              onClick={() => {
                                for (let i = 0; i < item.quantity; i++) {
                                  removeFromCart(item);
                                }
                              }}
                              className="font-medium text-red-600 hover:text-red-500 flex items-center"
                            >
                              <FiTrash2 className="h-4 w-4 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                    isCheckingOut
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary hover:bg-secondary"
                  }`}
                >
                  {isCheckingOut ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    "Checkout"
                  )}
                </button>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{" "}
                    <button
                      type="button"
                      className="font-medium text-primary hover:text-secondary"
                      onClick={onClose}
                    >
                      Continue Shopping
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;