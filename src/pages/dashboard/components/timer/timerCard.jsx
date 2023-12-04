import React, { useEffect, useRef, useState } from 'react'
import '../../styles/TimerCard.css';
import Timer from './Timer';



const TimerCard = () => {
     
  return (
     <div className="timer">
        <Timer seconds={0} minutes={0} hours={0} />
     </div>
  )
}

export default TimerCard