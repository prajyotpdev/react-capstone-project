import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser, db } from '../../server/services/Firebase'
import { AuthContext } from '../../server/auth/auth-context'
import { doc, setDoc } from 'firebase/firestore'
import { Grid, ListItem } from '@mui/material'


const CategorySelectionPage = () => {
  
  const [categories, setCategory] = useState([])
  const navigate = useNavigate()

  const { currentUserId } = useContext(AuthContext);
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();   

    const target = event.target;
    
    const data = {
     categories
  };         
  
  console.log(data);   
    try {
      const userRef = doc(db, "users", currentUserId??"null");  
      data.categories.length==0?
      console.log("No Categories Selected"): await setDoc(userRef,data) ;
      console.log('Document written with ID:', userRef.id);  
      setCategory([]);
      navigate('/react-capstone-project/dashboard',{ state: categories })      
    } catch (error) {
      console.log('Categories writing at database Failed', error.message);
    }
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target
    setCategory({...categories, [name]: value })
  }
  
  
  const handlecheckBoxChange = (event) => {
     const value  = event.target.value;
     // category.join(',value')
     const updatedCategory = categories;

     if (!updatedCategory.includes(value)) {
          updatedCategory.push(value);
        } else {
          updatedCategory.pop(value);
        }

     setCategory(updatedCategory);
     console.log(updatedCategory+ " This is current Categoriees");
   }

   const categoriesArray = ['Thriller', 'Suspense', 'Psychological'];

  return (
    <>
    <div>Select Category Screen</div> 
    <div className="App">
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {Array.from(categoriesArray).map((item, index) => (
               <Grid item xs={2} sm={4} md={4} key={index}>
                    <ListItem>
                    <input type="checkbox" id="javascript" name="fav_language"  value={item} onClick={handlecheckBoxChange}/>
                    {item}
                    </ListItem>
               </Grid>
          ))}
          </Grid>
          <div className="card">
            <form onSubmit={handleSubmit}>               
              <div>
                <input id='recaptcha' type="submit" />
              </div>
            </form>
          </div>
        </div>
    
    </>
  )
}


export default CategorySelectionPage