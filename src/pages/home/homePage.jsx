import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/navbar'


const HomePage = () => {
  const navigate = useNavigate()

  const LoginUser = () => {
    navigate('/react-capstone-project/login')
  }

  const RegisterUser = () => {
    navigate('/react-capstone-project/register')
  }

  return (
    <>
    <NavBar/>
    <button onClick={LoginUser}>Login </button>
    <button onClick={RegisterUser}>SignUp </button>
    </>
  )
}

export default HomePage