import React, { useState, useEffect } from 'react';
import "../../styles/TimerCard.css"
import { CircularProgress } from '@mui/material';
import IncrementButton from '../../../../assets/Increment_button.svg'
import DecrementButton from '../../../../assets/decrement_button.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Timer = ({ seconds, minutes, hours }) => {
     
     function convertintoseconds(seconds, minutes, hours){
          let totalseconds = hours * 3600+minutes*60+seconds;
          console.log(totalseconds);
          return totalseconds; 
     }
     
  const [isRunning, setIsRunning] = useState(false);
  const [totaltimeelapsed,settotaltimeelapsed ] = useState(0);
  const [totaltimeremaining,settotaltimeremaining ] = useState(0);
  const [dashoffset,setdashoffset ] = useState(0);
  const [remainingTime, setRemainingTime] = useState({
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });


  const handleHourIncrement = () => {
     if (remainingTime.hours < 23) {
       setRemainingTime((prevRemainingTime) => ({
         ...prevRemainingTime,
         hours: prevRemainingTime.hours + 1,
       }));
     }
     settotaltimeremaining(totaltimeremaining+3600)
   };

const handleHourDecrement = () => {
  if (remainingTime.hours > 0) {
    setRemainingTime((prevRemainingTime) => ({
      ...prevRemainingTime,
      hours: prevRemainingTime.hours - 1,
    }));
    
    settotaltimeremaining(totaltimeremaining-3600)
  }
};


  const handleMinuteIncrement = () => {
     if (remainingTime.minutes < 59) {
       setRemainingTime((prevRemainingTime) => ({
         ...prevRemainingTime,
         minutes: prevRemainingTime.minutes + 1,
       }));       
    settotaltimeremaining(totaltimeremaining+60)
     }
   };
   
   const handleMinuteDecrement = () => {
     if (remainingTime.minutes > 0) {
       setRemainingTime((prevRemainingTime) => ({
         ...prevRemainingTime,
         minutes: prevRemainingTime.minutes - 1,
       }));
       
    settotaltimeremaining(totaltimeremaining-60)
     }
   };

   const handleSecondIncrement = () => {
     if (remainingTime.seconds < 59) {
       setRemainingTime((prevRemainingTime) => ({
         ...prevRemainingTime,
         seconds: prevRemainingTime.seconds + 1,
       }));       
    settotaltimeremaining(totaltimeremaining+1)
     }
   };

   
   const handleSecondDecrement = () => {
     if (remainingTime.seconds > 0) {
       setRemainingTime((prevRemainingTime) => ({
         ...prevRemainingTime,
         seconds: prevRemainingTime.seconds - 1,
       }));       
    settotaltimeremaining(totaltimeremaining-1)
     }
   }

   const getProgressPercentage = (value, maxValue) => {
     return (1 - (value / maxValue)) * 100;
   };
   
const updateProgressBar = (value) => {
     const progressPercentage = getProgressPercentage(value, totaltimeremaining);
     const strokeDashoffset = 439.6 - (439.6 * progressPercentage) / 100;
     setdashoffset(Math.floor(progressPercentage));
     console.log("this is percentage"+(Math.floor(progressPercentage)))
   };


  useEffect(() => {
     if (isRunning) {
       const interval = setInterval(() => {
         if (remainingTime.seconds === 0 && remainingTime.minutes === 0 && remainingTime.hours === 0) {
           clearInterval(interval);
           setIsRunning(false);
         } else {
           setRemainingTime((prevRemainingTime) => ({
             ...prevRemainingTime,
             seconds: prevRemainingTime.seconds === 0 ? 59 : prevRemainingTime.seconds - 1,
             minutes: prevRemainingTime.seconds === 0 && prevRemainingTime.minutes === 0 ? 59 : prevRemainingTime.minutes - (prevRemainingTime.seconds === 0 ? 1 : 0),
             hours: prevRemainingTime.seconds === 0 && prevRemainingTime.minutes === 0  ? prevRemainingTime.hours - 1 : prevRemainingTime.hours,
           }));
           settotaltimeelapsed(totaltimeelapsed+1);
           console.log("this is total time eleapsed"+totaltimeelapsed);
           updateProgressBar(totaltimeelapsed);
         }
       }, 1000);
 
       return () => clearInterval(interval);
     }
   }, [isRunning, remainingTime]);

   const handleStartTimer = () => {
     isRunning ? setIsRunning(false) : setIsRunning(true);
   };
   

  return (
    <div className='timercard'>
<div style={{ width: 200, height: 200, margin:10 }}>
  <CircularProgressbar value={dashoffset} text={`${remainingTime.hours}:${remainingTime.minutes}:${remainingTime.seconds}`} styles={
     buildStyles({pathColor: `rgba(255, 106, 106)`,
     textColor: '#ffffff',
     trailColor: 'null',
     backgroundColor: '#FF6A6A',})
  } /></div>
  
  <div className="adjusttimer">
  <div className="timecomponent">
        <div className="timecomponentcolumn">
          Hours
          <button onClick={handleHourIncrement}><img src={IncrementButton}/></button>
          {remainingTime.hours.toString().padStart(2, '0')}
          <button onClick={handleHourDecrement}><img src={DecrementButton}/></button>  
          </div>
        <div className="timecomponentcolumn"> 
        Minutes         
          <button onClick={handleMinuteIncrement}><img src={IncrementButton}/></button>{remainingTime.minutes.toString().padStart(2, '0')}
          <button onClick={handleMinuteDecrement}><img src={DecrementButton}/></button>
          </div>
        <div className="timecomponentcolumn">  
        Seconds       
          <button onClick={handleSecondIncrement}><img src={IncrementButton}/></button>{remainingTime.seconds.toString().padStart(2, '0')}
          <button onClick={handleSecondDecrement}><img src={DecrementButton}/></button>
          </div>
        </div>
        <button onClick={handleStartTimer} className='startbutton'>{isRunning?"Pause":"Start"}</button>
   
</div>
     </div>
  );
};

export default Timer;