import React, { Component } from 'react'

export class Logo extends Component {
  render() {
     
const logoStyle= 
{
  color: "#72DB73",
  fontFamily: "Single Day",
  fontSize: "60px",
  fontStyle: "normal",
  fontWeight: 400,
}
    return (
     <div className="logo" style={logoStyle}>Super app</div>
    )
  }
}

export default Logo