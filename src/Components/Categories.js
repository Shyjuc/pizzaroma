import React, { useState } from "react";

const Categories = ({ categories, filterItems }) => {
  let [currentCategory, setCurrentCategory] = useState(0);

  const handleCategoryClick = (categoryIndex, category) => {
    filterItems(category);
    setCurrentCategory(categoryIndex);
  };

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`filter-btn ${
              index === currentCategory ? "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 mt-2 border border-green-700 rounded" : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 mt-2 border border-red-700 rounded"
            }`}
            key={index}
            onClick={() => handleCategoryClick(index, category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;