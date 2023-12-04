import React, { useEffect, useState } from 'react'
import '../../styles/NotePadCard.css';


const baseUrl = 'https://reqres.in';


const NotePadCard = () => {
     
const { note, setNote } = useState("null");

  return (
    <div >
     {note}
    </div>
  )
}

export default NotePadCard