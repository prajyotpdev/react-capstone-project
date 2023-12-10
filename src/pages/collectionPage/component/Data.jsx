import { useEffect, useState } from "react";
import styles from "../styles/Data.module.css";
import axios from "axios";

const List = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://unogs-unogs-v1.p.rapidapi.com/title/images",
      params: {
        netflix_id: "70143836",
      },
      headers: {
        "X-RapidAPI-Key": "75aa4d0d4dmshaf76d5529dc2932p172cbbjsn66bf8af152b0",
        "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
      },
    };

    try {
      const response = axios.request(options);
      console.log("This is resposne : " + response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <p className={styles.heading} style={{ overflowY: "hidden" }}>
        {genre}
      </p>
      <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
        {movies.map((movie, idx) => {
          return (
            <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
              <img
                src={movie?.primaryImage?.url}
                style={{
                  objectFit: "cover",
                  width: "20vw",
                  height: "15vh",
                  borderRadius: "12px",
                }}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
