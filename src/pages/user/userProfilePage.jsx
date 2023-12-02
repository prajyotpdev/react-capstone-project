import React, { useContext, useState } from 'react'
import { db } from '../../server/services/Firebase';
import { AuthContext } from '../../server/auth/auth-context';
import { doc, setDoc } from 'firebase/firestore';
import ImageUpload from './widgets/ImageUpload';

const UserProfilePage = () => {
    
  const { currentUserId } = useContext(AuthContext);
  


     const onSubmit = async  (event) => {
         event.preventDefault();
 
         const target = event.target;
      
    try {     
        // const userRef = doc(db, "users", currentUserId);  
        // await setDoc(userRef,data);
        // console.log('Document written with ID:', userRef.id);
      } catch (error) {
        console.error('Error adding document:', error);
      }

     };
     
  const handleImageUrlChange = (url) => {
    // setImageUrl(url);
  };
 
     return (<>
        <h3>Welcome!</h3>
         <form onSubmit={onSubmit}>

             <button type="submit">Publish</button>
         </form>
     </>
     );
}

export default UserProfilePage