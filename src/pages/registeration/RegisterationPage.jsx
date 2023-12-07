import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser, db } from '../../server/services/Firebase'
import { AuthContext } from '../../server/auth/auth-context'
import { doc, setDoc } from 'firebase/firestore'
import './styles/RegistrationPage.css'
import Logo from '../../components/Logo'

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
      if(password===confirmpassword && conditionsAccepted==='False' ){        
      const userCredential = await createUser(email, password)    ;        
      if (userCredential) {
      // const userRef = doc(db, "users", currentUserId??"null");  
      // await setDoc(userRef,data); 
      const newUser = {fname,username,phonenumber};
      await setDoc(doc(db, "users", userCredential.user.uid),newUser,{ merge: true });
      // console.log('Document written with ID:', userRef.id);
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
    <div className='hero'> 
    <div className='lefthero'>
      <img src={"https://images.pexels.com/photos/12262184/pexels-photo-12262184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" /> 
      <div className="leftdivtext">Discover new things on Superapp</div>
      </div>
    <div className="righthero"> 
    <Logo/>
    <div className="pagetitle">Create your new account</div>
            <form onSubmit={handleSubmit} className='formstyle'>
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
              <div className="field_checkbox">
          <input type="checkbox" id="conditionsAccepted" 
                  onChange={handlecheckBoxChange} />
          <label htmlFor="conditionsAccepted">Share my registration data with Superapp</label>
        </div>
              <div>
               <button id='recaptcha' type="submit">SIGN UP</button> 
              </div>              
            <div className="privacypolicy">By clicking on Sign up. you agree to Superapp <a href=''>Terms and Conditions of Use</a><br/><br/>
            To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href=''>Privacy Policy</a></div>
   
            </form> </div>
          </div>
     
    
    </>
  )
}


export default RegisterationPage