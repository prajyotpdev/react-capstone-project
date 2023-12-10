import React, { useEffect, useState } from "react";
import "../../styles/WeatherCard.css";
import axios from "axios";
import CloudIcon from "@mui/icons-material/Cloud";
import { DataObject, WbSunnyOutlined } from "@mui/icons-material";
import { useQuery } from "react-query";

const baseUrl = "https://reqres.in";

const WeatherCard = () => {
  const { currentTime, setCurrentTime } = useState("null");
  const { currentWeather, setCurrentWeather } = useState("not available");

  const [hasError, setErrorFlag] = useState(false);
  const date = new Date();

  var apiurl =
    "https://api.open-meteo.com/v1/forecast?latitude=79&longitude=21&current=temperature_2m,apparent_temperature,is_day,rain,pressure_msl,wind_speed_10m&timezone=GMT";

  const { data, isLoading, error } = useQuery("users", async () => {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=79&longitude=21&current=temperature_2m,apparent_temperature,is_day,rain,pressure_msl,wind_speed_10m&timezone=GMT"
    );
    //  setData(response.data);
    return response.data;
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const showDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  const WeatherCardStyle = {
    borderRadius: "33px",
    background: "#5746EA",
    alignItems: "start",
    justifyContent: "start",
    width: "892px",
    height: "311px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    margin: "1em auto auto",
  };

  const weatherData = data;
  console.log("THis is weather data" + weatherData);
  return (
    <div style={WeatherCardStyle}>
      <div className="timestampheader">
        <div>{showDate}</div>
        <div>{showTime}</div>
      </div>
      {/* <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>; */}
      <div className="weatherloghero">
        <div className="weatherlogchild">
          {weatherData.current.rain > 10 ? (
            <CloudIcon sx={{ fontSize: 80 }} />
          ) : (
            <WbSunnyOutlined sx={{ fontSize: 80 }} />
          )}
          <div className="rainAttributes">
            {weatherData.current.rain > 10 ? (
              <div className="rainstatus">Heavy Rain</div>
            ) : (
              <div className="rainstatus">No Rain</div>
            )}
            {/* {data.map((DataObject,index)=>{
               <div
               style={{
                 width: "15em",
                 backgroundColor: "#35D841",
                 padding: 2,
                 borderRadius: 10,
                 marginBlock: 10,
               }}
             >
               <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
             </div>
          })} */}
          </div>
        </div>
        <div
          className="vl"
          style={{
            borderLeft: "2px solid white",
            height: "150%",
            left: "50%",
            marginTop: "2%",
            marginLeft: "3px",
            top: "0",
          }}
        ></div>
        <div className="weatherlogchild">
          <div className="temperaturecomponent">
            {weatherData.current.temperature_2m + 30 ?? "Null"} °C
          </div>
          <div className="pressurecomponent">
            {weatherData.current.pressure_msl ?? "Null"} mbar
            <div>Pressure</div>
          </div>
        </div>
        <div
          className="vl"
          style={{
            borderLeft: "2px solid white",
            height: "150%",
            left: "50%",
            marginTop: "2%",
            marginLeft: "3px",
            top: "0",
          }}
        ></div>
        <div className="weatherlogchild">
          <div className="windcomponent">
            {weatherData.current.wind_speed_10m ?? "Null"} km/h
            <br />
            Wind
          </div>
          <div className="humiditycomponent">
            {weatherData.current.wind_speed_10m ?? "Null"} %
            <br/>            
            Humidity
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
