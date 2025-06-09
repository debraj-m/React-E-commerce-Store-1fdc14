import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";
import products from "../data/products";

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  const [sortOption, setSortOption] = useState("featured");
  const [layout, setLayout] = useState("grid");

  const handleFilterChange = ({ category, priceRange }) => {
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      let result = [...products];

      // Apply category filter
      if (category) {
        result = result.filter(product => product.category === category);
      }

      // Apply price range filter
      if (priceRange) {
        result = result.filter(
          product => product.price >= priceRange[0] && product.price <= priceRange[1]
        );
      }

      // Apply current sort
      applySorting(result, sortOption);

      setFilteredProducts(result);
      setIsLoading(false);
    }, 300);
  };

  const applySorting = (productsToSort, option) => {
    switch (option) {
      case "priceAsc":
        return productsToSort.sort((a, b) => a.price - b.price);
      case "priceDesc":
        return productsToSort.sort((a, b) => b.price - a.price);
      case "nameAsc":
        return productsToSort.sort((a, b) => a.name.localeCompare(b.name));
      case "rating":
        return productsToSort.sort((a, b) => b.rating - a.rating);
      default:
        return productsToSort; // "featured" - keep original order
    }
  };

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    
    // Apply new sorting to current filtered products
    const sorted = [...filteredProducts];
    applySorting(sorted, option);
    setFilteredProducts(sorted);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h1>
      
      {/* Filter Section */}
      <FilterBar onFilterChange={handleFilterChange} />
      
      {/* Results Header - Sort and Layout Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <p className="text-gray-600 mb-2 sm:mb-0">
          Showing <span className="font-medium">{filteredProducts.length}</span> results
        </p>
        
        <div className="flex items-center space-x-4">
          {/* Sort Control */}
          <div className="flex items-center">
            <label htmlFor="sort" className="text-sm text-gray-700 mr-2">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="featured">Featured</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="nameAsc">Name: A-Z</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
          
          {/* Layout Toggle */}
          <div className="flex items-center border rounded-md overflow-hidden">
            <button
              onClick={() => setLayout("grid")}
              className={`p-2 ${
                layout === "grid"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </button>
            <button
              onClick={() => setLayout("list")}
              className={`p-2 ${
                layout === "list"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-400 mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900">No products found</h3>
          <p className="mt-2 text-gray-600">Try adjusting your filters to find what you're looking for.</p>
        </div>
      ) : (
        <div className={layout === "grid" 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "space-y-4"
        }>
          {filteredProducts.map(product => (
            <div key={product.id} className={layout === "list" ? "w-full" : ""}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;