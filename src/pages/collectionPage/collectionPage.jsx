import React, { useEffect, useState } from "react";
import "./styles/CollectionPage.css";
import MovieCard from "./component/movieCard";
import movieData from "./moviesData.json";
import { useLocation } from "react-router-dom";
import Logo from "../../components/Logo";

const CollectionPage = () => {
  var Categories = ["Action", "Suspense"];

  const location = useLocation();
  const categoriesfromprev = location.state;
  Categories = categoriesfromprev;
  console.log("categories from ");

  return (
    <div>
      <Logo />
      <p
        className="title"
        style={{
          marginLeft: "60px",
          height: "120px",
          width: "",
        }}
      >
        Entertainment according to your choice
      </p>
      <CategoryList categories={Categories} />
    </div>
  );
};

export default CollectionPage;

const MovieList = (props) => {
  var category = props.category;

  const [filteredMoviesURLData, setFilteredMoviesURLData] = useState([]);

  useEffect(() => {
    // Assuming movieData is imported from your file
    const filteredMoviesURL = movieData.movies
      .filter((movie) => movie.genres.includes(category))
      .map((movie) => movie.image_link);

    console.log("This is filteredMoviesURL " + filteredMoviesURL);
    setFilteredMoviesURLData(filteredMoviesURL ?? []);
  }, [category]);

  var listItems = filteredMoviesURLData.map((index) =>
    filteredMoviesURLData[index] !== "undefined" ? (
      <MovieCard title={index} img_url={index} />
    ) : null
  );

  return <div className="movieslist">{listItems}</div>;
};

function CategoryList(props) {
  const Movies = [1, 2, 3, 4, 5];
  const categories = props.categories;
  const listItems = categories.map((category) => (
    <>
      <div className="genrename">{category}</div>
      <MovieList category={category} />
    </>
  ));
  return <ul>{listItems}</ul>;
}
