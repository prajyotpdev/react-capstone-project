import React, { useContext, useState } from 'react'
import { AuthContext } from '../../server/auth/auth-context'
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';
import axios from 'axios';
import UserProfileCard from '../user-profile/user/UserProfileCard';

const DashBoardPage = () => {
  
  const { currentUser, signOut } = useContext(AuthContext)
  const navigate = useNavigate();
  function chooseCategory(){    
    navigate('/react-capstone-project/choose');
  }

  const [movies, setMovies] = useState([]);

  const retrieveMovies = async () => {
    const movies = await axios.get("https://api.themoviedb.org/3/movie/11?api_key=d10f99c5d1993337de38551d2eb51dcc");
    setMovies(movies.data.adult);
    console.log({movies});
  };

  return (
    <div>             
    <NavBar/>   
    <button onClick={signOut}>Sign Out</button>
    <button onClick={chooseCategory}>Choose Category Screen </button>
    <button onClick={retrieveMovies}>Get Movies</button>  
    <UserProfileCard/>
    <h3>Welcome! {currentUser?.email}</h3>
      <p>Sign In Status: {currentUser && 'active'}</p>  
    </div>
  )
}

export default DashBoardPage