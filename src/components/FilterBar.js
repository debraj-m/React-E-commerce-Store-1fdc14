import React, { useState } from "react";
import { categories, priceRanges } from "../data/products";

const FilterBar = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange({
      category: category === "All" ? null : category,
      priceRange: selectedPriceRange === "all" ? null : 
        priceRanges.find(range => range.id === selectedPriceRange).range
    });
  };

  const handlePriceRangeChange = (rangeId) => {
    setSelectedPriceRange(rangeId);
    onFilterChange({
      category: selectedCategory === "All" ? null : selectedCategory,
      priceRange: rangeId === "all" ? null : 
        priceRanges.find(range => range.id === rangeId).range
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="space-y-4">
        {/* Category Filters */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Filters */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Price Range</h3>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => handlePriceRangeChange(range.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedPriceRange === range.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedCategory !== "All" || selectedPriceRange !== "all") && (
          <div className="pt-2 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Active Filters:</span>
              {selectedCategory !== "All" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {selectedCategory}
                  <button
                    onClick={() => handleCategoryChange("All")}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ✕
                  </button>
                </span>
              )}
              {selectedPriceRange !== "all" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {priceRanges.find(range => range.id === selectedPriceRange).label}
                  <button
                    onClick={() => handlePriceRangeChange("all")}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ✕
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;