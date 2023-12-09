import React, { useEffect, useState } from 'react'
import '../../styles/MovieCard.css';

const MovieCard = (props ) => {

const MovieCardStyle = {
  borderRadius: "19px",
  background: "#F1C75B",
  alignItems: "center",
  justifyContent: "center",
  width: "341.927px",
  height: "192.336px",
  textAlign: "center",   
  display: "flex", 
  flexDirection: "column",
  margin: "1em auto auto", 
  overflow: 'hidden' ,
};


  return (
  <>   
    <div style={MovieCardStyle} className='Moviecontainer' >
    <img src={props.img_url} alt="Logo" />
    </div>
  </>
  )
}

export default MovieCard