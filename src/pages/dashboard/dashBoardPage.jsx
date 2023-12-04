import React, { useContext, useState } from 'react'
import { AuthContext } from '../../server/auth/auth-context'
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';
import axios from 'axios';
import UserProfileCard from '../user-profile/user/UserProfileCard';
import WeatherCard from './components/weatherCard';

const DashBoardPage = () => {
  
  const { currentUser, signOut } = useContext(AuthContext)
  const navigate = useNavigate();
  function chooseCategory(){    
    navigate('/react-capstone-project/choose');
  }
  
  const location = useLocation();

  const categoriesList = location.state;

  const [movies, setMovies] = useState([]);

  const retrieveMovies = async () => {
    const movies = await axios.get("https://api.themoviedb.org/3/movie/11?api_key=d10f99c5d1993337de38551d2eb51dcc");
    setMovies(movies.data.adult);
    console.log({movies});
  };
  
  const categories = ['Category 1', 'Category 2', 'Category 3'];


  return (
    <div>             
    <NavBar/>   
    <button onClick={signOut}>Sign Out</button>
    <button onClick={chooseCategory}>Choose Category Screen </button>
    <button onClick={retrieveMovies}>Get Movies</button>  
    <UserProfileCard categoryList={categoriesList??categories} email={currentUser.currentUser?.email} username={currentUser?.email}/>
    <WeatherCard/>
    <h3>Welcome! {currentUser?.email}</h3>
      <p>Sign In Status: {currentUser && 'active'}</p>  
    </div>
  )
}

export default DashBoardPage