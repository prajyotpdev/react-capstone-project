import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/navbar'


const HomePage = () => {
  const navigate = useNavigate()

  const LoginUser = () => {
    navigate('/rotract-club-thane/login')
  }

  const RegisterUser = () => {
    navigate('/rotract-club-thane/register')
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