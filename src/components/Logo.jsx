import React, { Component } from 'react'

export class Logo extends Component {
  render() {
     
const logoStyle= 
{
     position: "static",
     color: "#72DB73",
     fontFamily: "Single Day",
     fontSize: "47.333px",
     fontStyle: "normal",
     marginLeft: "1em",
     marginTop: "1em",
     fontWeight: 400,
     lineHeight: "139.688%"
}
    return (
     <div className="logo" style={logoStyle}>Super app</div>
    )
  }
}

export default Logo