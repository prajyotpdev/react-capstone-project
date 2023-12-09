import React from 'react'
import './styles/CollectionPage.css';
import MovieCard from './component/movieCard';
import styles from "./styles/Data.module.css";

const CollectionPage = () => {
  
const Categories = ["thriller", "Comedy", "action", "Horror"];
  return (
    <div>
      {/* <div
    style={{
      width: "100vw",
      minHeight: "100vh",
      background: "black",
      overflowX: "hidden",
      maxHeight: "100vh",
    }}
  >
    <img
      src={Profile}
      style={{
        position: "absolute",
        top: "2vh",
        right: "3vw",
        height: "60px",
        width: "60px",
      }}
      alt=""
    />
    <p
      style={{
        color: "green",
        fontSize: "3rem",
        margin: "1vw",
      }}
      className={styles.header}
    >
      Super app
    </p>
    <p style={{ color: "white", fontSize: "2rem", margin: "2vw" }}>
      Entertainment according to your choice
    </p>
    {movies.map((movie) => (
      <List genre={movie} />
    ))}
  </div> */}
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