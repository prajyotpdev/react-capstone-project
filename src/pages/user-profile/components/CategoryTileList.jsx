import React from 'react'
import '../../user-profile/components/category-list.css';

function CategoryList({ categories }) {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <CategoryTile key={index} categoryName={category} />
      ))}
    </div>
  );
}

export default CategoryList;


function CategoryTile({ categoryName }) {
  return (
    <div className="category-tile">
      <p>{categoryName}</p>
    </div>
  );
}