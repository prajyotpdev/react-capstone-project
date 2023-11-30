import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInUser } from '../../server/services/Firebase'
import NavBar from '../../components/navbar'

const defaultFormFields = {
  email: '',
  password: '',
}

const LoginPage = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields)
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
    <div >             
    <NavBar  />   
    <div > 
    <div >      
          </div>
          <div >
            {/* <div className={classNamesLogin.logo}>
              <a href="https://reactjs.org" target="_blank">
                <img src={ClubLogoWhite} className="logo react" alt="React logo" />
              </a>
            </div> */}
            <div >
            <form onSubmit={handleSubmit}>
            <h1 >Sign In Form</h1>
              <div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />              
                <span>{errorUserMessage}</span>
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
                <span>{errorPassMessage}</span>
              </div>
                <div >
                <button id='recaptcha' type="submit">Submit</button>
              </div>          
            </form>
            </div>
          </div></div>
     
        </div>
    
    </>
  )
}

export default LoginPage