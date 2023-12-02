import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser, db } from '../../server/services/Firebase'
import { AuthContext } from '../../server/auth/auth-context'
import { doc, setDoc } from 'firebase/firestore'

const defaultFormFields = {
  email: '',
  password: '',
  confirmpassword: '',
  conditionsAccepted: 'False',
  fname :'',
  username :'',
  phonenumber :'',
}


const RegisterationPage = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  const [conditionsAcceptedState, setconditionsAcceptedState] = useState('False')
  const { email, password , confirmpassword, conditionsAccepted, fname, username, phonenumber} = formFields
  const navigate = useNavigate()

  const { currentUserId } = useContext(AuthContext);
  
  const resetFormFields = () => {
    return (
      setFormFields(defaultFormFields)
    );
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault()
    

    const target = event.target;
    
    const data = {
      fname: target.fname.value,
      username: target.username.value,
      phonenumber: target.phonenumber.value,
  };         
  
  console.log(data);   
    try {
      const userRef = doc(db, "users", currentUserId??"null");  
      await setDoc(userRef,data);
      console.log('Document written with ID:', userRef.id);
      if(password===confirmpassword && conditionsAccepted==='False' ){        
      const userCredential = await createUser(email, password)    ;        
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
                  type="text"
                  name="fname"
                  value={fname}
                  id="fname"
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="username"
                  value={username}
                  id="username"
                  onChange={handleChange}
                  placeholder="UserName"
                  required
                />
              </div>
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
                type="number"
                  name="phonenumber"
                  value={phonenumber}
                  id="phonenumber"
                  onChange={handleChange}
                  placeholder="Phonenumber"
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