import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const retrieveMovies= async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const DisplayMovies= () => {
  const { data: movies, error, isLoading } = useQuery("postsData", retrieveMovies);

  if (isLoading) return <div>Fetching movies...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default DisplayMovies;