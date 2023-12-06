import React from 'react'
import './styles/CollectionPage.css';
import MovieCard from './component/movieCard';

const CollectionPage = () => {
  
const Categories = ["thriller", "Comedy", "action", "Horror"];
  return (
    <div>
      <p className='quote'>Entertainment according to your choice</p>
      <CategoryList categories ={Categories}/>
    </div>
  )
}

export default CollectionPage

function MovieList(props) {
  const movies = props.movies;  
  const img_url = 'https://picsum.photos/200';
  const listItems = movies.map((movie) =>
  
  <MovieCard movietitle = {movie} img_url= {img_url} />
  ); 
  return (
    <div className="movieslist">{listItems}
    </div>
  );
}

function CategoryList(props) {
  const Movies = [1, 2, 3, 4, 5];
  const categories = props.categories;
  const listItems = categories.map((category) =>
    <li>{category}
    <MovieList movies={Movies}/>
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}