import jsondata from './data.json'

import '../../styles/NewsCard.css';


const baseUrl = 'https://reqres.in';


const NewsCard = () => {
     

     const NewsCardStyle = {
          borderRadius: "33px",
          background: "white",
          alignItems: "flexstart",
          justifyContent: "start",
          width: "463px",
          height: "907px",
          textAlign: "center",   
          display: "flex", 
          flexDirection: "column",
          margin: "1em auto auto", 
          overflow: 'hidden' 
      };
      
      function convertDateAndTime(dateString) {
        const dateObj = new Date(dateString);
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1;
        const day = dateObj.getDate();
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes();
        const standardDate = `${month}-${day}-${year}`;
        const hourString = hours > 12 ? hours - 12 : hours;
        const minuteString = minutes.toString().padStart(2, "0");
        const meridiem = hours >= 12 ? "PM" : "AM";
        const formattedTime = `${hourString}:${minuteString} ${meridiem}`;
        return { standardDate, formattedTime };
      }

  return (
    <div style={NewsCardStyle} className='hero'>
      <div className="imagediv">        
     <img 
      src={jsondata.articles[0].urlToImage}
      alt="new"
      />  <div class="text-overlay">
      <p className='title'>{jsondata.articles[0].title}</p>
      <p className='timestamp'>{convertDateAndTime(jsondata.articles[0].publishedAt).standardDate} | {convertDateAndTime(jsondata.articles[0].publishedAt).formattedTime} </p>
    </div>

      </div>
      <div className="descriptiondiv">
      {jsondata.articles[0].description}
      </div>
    </div>
  )
}

export default NewsCard