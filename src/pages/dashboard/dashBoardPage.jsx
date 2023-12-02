import React, { useContext } from 'react'
import { AuthContext } from '../../server/auth/auth-context'
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';

const DashBoardPage = () => {
  
  const { currentUser, signOut } = useContext(AuthContext)
  const navigate = useNavigate();
  function chooseCategory(){    
    navigate('/react-capstone-project/choose')
  }

  function chooseCategory(){    
    navigate('/react-capstone-project/choose')
  }

  return (
    <div>             
    <NavBar/>   
    <button onClick={signOut}>Sign Out</button>
    <button onClick={chooseCategory}>Choose Category Screen </button>
      <h3>Welcome! {currentUser?.email}</h3>
      <p>Sign In Status: {currentUser && 'active'}</p>  
    </div>
  )
}

export default DashBoardPage