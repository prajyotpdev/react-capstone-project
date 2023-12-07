import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInUser } from '../../server/services/Firebase'
import NavBar from '../../components/navbar'
import './styles/loginPage.css'
import Logo from '../../components/Logo'

const defaultFormFields = {
  email: '',
  password: '',
}

const LoginPage = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  const [error, seterror] = useState(false)
  const { email, password } = formFields
  const navigate = useNavigate()

  var errorUserMessage = "Invalid Username"
  var errorPassMessage = "Invalid Password"

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const userCredential = await signInUser(email, password)

      if (userCredential) {
        resetFormFields()
        navigate('/react-capstone-project/dashboard')
      }
    } catch (error) {
      seterror(true);
      console.log('User Sign In Failed', error.message);
    }
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value })
  }


  
  const resetFormFields = () => {
    return (
      setFormFields(defaultFormFields)
    );
  }

  return (
    <>     
    <div className='hero'> 
    <div className='lefthero'>
      <img src={"https://images.pexels.com/photos/12262184/pexels-photo-12262184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" /> 
      </div>
    <div className="righthero"> 
    <Logo/>
            <form onSubmit={handleSubmit} className='formstyle' >
            <h1 >Sign in</h1>
              <div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />              
                {error?<span>{errorUserMessage}</span>:null}
              </div>
              <div>
                <input
                  type='password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />                
                {error?<span>{errorPassMessage}</span>:null}
              </div>
                <div >
               <div className="buttondiv">
               <button id='recaptcha' type="submit">LOGIN</button></div> 
              </div>          
            </form>
    </div>
          </div>
     
    
    </>
  )
}

export default LoginPage