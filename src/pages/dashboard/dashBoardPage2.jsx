import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../server/auth/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar";
import axios from "axios";
import "./styles/DashBoardPage.css";

import UserProfileCard from "../user-profile/user/UserProfileCard";
import WeatherCard from "./components/weather/weatherCard";
import TimerCard from "./components/timer/timerCard";
import NotePadCard from "./components/notepad/NotePad";
import NewsCard from "./components/news/NewsCard";

const DashBoardPage2 = () => {
  const { currentUser, signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  function chooseCategory() {
    navigate("/react-capstone-project/choose");
  }

  function gotoCollection() {
    navigate("/react-capstone-project/collection", {
      replace: true,
      state: categoriesList,
    });
  }

  useEffect(() => {
    if (categoriesList == null) {
      chooseCategory();
    }
  }, []);

  const location = useLocation();

  const categoriesList = location.state;

  const [movies, setMovies] = useState([]);

  const retrieveMovies = async () => {
    const movies = await axios.get(
      "https://api.themoviedb.org/3/movie/11?api_key=d10f99c5d1993337de38551d2eb51dcc"
    );
    setMovies(movies.data.adult);
    console.log({ movies });
  };

  const categories = ["Null", "Null", "Null"];

  return (
    <>
      {" "}
      <div className="dashboard">
        {/* <button onClick={signOut}>Sign Out</button>
      <button onClick={chooseCategory}>Choose Category Screen </button> */}
        <div className="column1">
          <UserProfileCard
            categoryList={categoriesList ?? categories}
            email={currentUser?.email}
            username={currentUser?.username}
          />
          <WeatherCard />
        </div>
        <div className="column2">
          <NewsCard />
        </div>
      </div>
      <button className="browsebtn" onClick={gotoCollection}>
        Browse
      </button>
    </>
  );
};

export default DashBoardPage2;
