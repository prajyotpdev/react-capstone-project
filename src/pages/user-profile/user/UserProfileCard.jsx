import React from 'react'
import '../styles/UserProfileCard.css';
import CategoryList from '../components/CategoryTileList';


const UserProfileCard = ({username,email,categoryList,profileURL}) => {
     
     const UserProfileCardStyle = {
          borderRadius: "30px",
          background: "#5746EA",
          alignItems: "center",
          justifyContent: "start",
          width: "890px",
          height: "560px",
          textAlign: "center",   
          display: "flex", 
          flexDirection: "row",
          margin: "1em auto auto",
          padding: "2em 0 2em 2em",
      };


  return (
    <div style={UserProfileCardStyle}>    
     <div className="UserProfilePictureDiv">
     <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />  
     </div>
      <div className="profilenamecontainer">
      <h3>{username}</h3>
      <p>{email}</p>
      <CategoryList categories={categoryList} />
      </div>
    </div>
  )
}

export default UserProfileCard