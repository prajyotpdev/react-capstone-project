import '../styles/selected-category-tile.css'

function SelectedCategoryList({ categories }) {
     return (
       <div className="selected-category-list">
         {categories.map((selectedcategory, index) => (
           <SelectedCategoryTile key={index} selectedcategoryName={selectedcategory} />
         ))}
       </div>
     );
   }
   
   export default SelectedCategoryList;
   
   
   function SelectedCategoryTile({ selectedcategoryName }) {
     return (
       <div className="selected-category-tile">
         <p>{selectedcategoryName}</p>
       </div>
     );
   }