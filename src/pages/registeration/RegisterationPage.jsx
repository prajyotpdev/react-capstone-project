import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../server/services/Firebase'

const defaultFormFields = {
  email: '',
  password: '',
  confirmpassword: '',
  conditionsAccepted: 'False',
}


const RegisterationPage = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  const [conditionsAcceptedState, setconditionsAcceptedState] = useState('False')
  const { email, password , confirmpassword, conditionsAccepted} = formFields
  const navigate = useNavigate()

  
  const resetFormFields = () => {
    return (
      setFormFields(defaultFormFields)
    );
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {

      if(password===confirmpassword && conditionsAccepted==='False' ){        
      const userCredential = await createUser(email, password)    
        
      if (userCredential) {
        resetFormFields()
        navigate('/react-capstone-project/dashboard')
      }
      }
      else{
        console.log("Password does not match");
      }


    } catch (error) {
      console.log('User Sign In Failed', error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value })
  }
  
  const handlecheckBoxChange = (event) => {
    if(conditionsAcceptedState==='True'){      
    setconditionsAcceptedState('False');
    }else{      
    setconditionsAcceptedState('True');
    }    
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value })
    console.log(conditionsAcceptedState+ " This is current checkbox state");
  }



  return (
    <>
    <div>Signup Page</div>
    <div className="App">
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
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
              </div>
              <div>
                <input
                  type='password'
                  name='confirmpassword'
                  value={confirmpassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="field checkbox">
          <input type="checkbox" id="conditionsAccepted" 
                  onChange={handlecheckBoxChange} />
          <label htmlFor="conditionsAccepted">I agree to the terms and conditions</label>
        </div>
              <div>
                <input id='recaptcha' type="submit" />
              </div>
            </form>
          </div>
        </div>
    
    </>
  )
}


export default RegisterationPage