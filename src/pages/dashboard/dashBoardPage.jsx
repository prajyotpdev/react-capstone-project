import React, { useContext } from 'react'
import { AuthContext } from '../../server/auth/auth-context'
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';

const DashBoardPage = () => {
  
  const { currentUser, signOut } = useContext(AuthContext)
  const navigate = useNavigate();
  function gotoEditDetailsScreen(){    
    navigate('/rotract-club-thane/edit')
  }

  return (
    <div>             
    <NavBar/>   
    <button onClick={signOut}>Sign Out</button>
      <h3>Welcome! {currentUser?.email}</h3>
      <p>Sign In Status: {currentUser && 'active'}</p>  
    </div>
  )
}

export default DashBoardPage