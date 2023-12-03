import React from 'react'
import '../styles/UserProfileCard.css';


const UserProfileCard = () => {
     
     const UserProfileCardStyle = {
          borderRadius: "10px",
          background: "#73AD21",
          width: "40em",
          height: "40em",
          textAlign: "center",
          
          margin: "1em auto auto",
          padding: "1em 0 2em 0",
      };


  return (
    <div style={UserProfileCardStyle}>
     <div className="UserProfilePictureDiv">
     <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
     </div>
    </div>
  )
}

export default UserProfileCard