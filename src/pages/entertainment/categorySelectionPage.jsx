import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, db } from "../../server/services/Firebase";
import { AuthContext } from "../../server/auth/auth-context";
import { doc, setDoc } from "firebase/firestore";
import { Grid, ListItem } from "@mui/material";
import Logo from "../../components/Logo";
import CloseIcon from "@mui/icons-material/Close";
import "./styles/CategorySelection.css";

const CategorySelectionPage = () => {
  const [categories, setCategory] = useState([]);
  var randomColor = "";
  const [categoriesArray, setCategoriesArray] = useState([
    "Action",
    "Drama",
    "Romance",
    "Thriller",
    "Suspense",
    "Horror",
    "Fantacy",
    "Music",
    "Fiction",
    "Psychological",
  ]);
  const [selectedCategories, setselectedCategories] = useState([]);
  const navigate = useNavigate();
  const fetch = require("node-fetch");

  const { currentUserId } = useContext(AuthContext);

  const divcardcolorstyle = {
    background: pickColor,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const target = event.target;

    const data = {
      selectedCategories,
    };

    console.log(data);
    try {
      const userRef = doc(db, "users", currentUserId ?? "null");
      data.selectedCategories.length == 0
        ? console.log("No Categories Selected")
        : await setDoc(userRef, data, { merge: true });
      console.log("Document written with ID:", userRef.id);
      setCategory(selectedCategories);
      navigate("/react-capstone-project/dashboard", {
        state: selectedCategories,
      });
    } catch (error) {
      console.log("Categories writing at database Failed", error.message);
    }
  };

  const handlecheckBoxChange = (category) => {
    const value = category;
    // category.join(',value')
    const updatedCategory = categories;
    if (!selectedCategories.includes(value)) {
      setselectedCategories((selectedCategories) => [
        ...selectedCategories,
        value,
      ]);
    } else {
      setselectedCategories((selectedCategories) =>
        selectedCategories.filter((fruit) => fruit !== value)
      );
    }
  };

  function pickColor() {
    var colors = [
      "#FF5209",
      "#D7A4FF",
      "#902500",
      "#11B800",
      "#7358FF",
      "#FF4ADE",
    ];

    var random_color = colors[Math.floor(Math.random() * colors.length)];

    console.log(random_color);
    randomColor = random_color;
    return random_color;
  }

  //  useEffect(() => {
  //   const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTBmOTljNWQxOTkzMzM3ZGUzODU1MWQyZWI1MWRjYyIsInN1YiI6IjY1Njc2MzU5M2Q3NDU0MDBlYTI3N2YwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yZqSo2ybSQZycAjLztc6woORYatrH_a_3_M1uefUzhY'
  //     }
  //   };

  //   fetch(url, options)
  //   .then(res => res.json())
  //   .then(json => {
  //     // Extract only the names from the genres array
  //     const categoryNames = json.genres.map(category => category.name);
  //     setCategoriesArray(categoryNames);
  //   })
  //    },[])

  //  const categoriesArray =json.genres;
  //  const categoriesArray = ['Thriller', 'Suspense', 'Psychological'];

  return (
    <>
      <div className="App">
        <div className="hero">
          <div className="lefthero">
            <div className="choosetext">
              <br />
              <Logo />
              <br />
              Choose your entertainment category
              <div className="selected-category-list">
                {selectedCategories.map((selectedcategory, index) => (
                  <div className="selected-category-tile">
                    <p>{selectedcategory}</p>
                    <div
                      className="closeicon"
                      onClick={() => handlecheckBoxChange(selectedcategory)}
                    >
                      <CloseIcon />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="righthero">
            <div className="genre-grid">
              {categoriesArray.map((category) => (
                <div
                  key={category}
                  className="genre-card"
                  id={category}
                  style={{
                    backgroundColor: pickColor(),
                    borderColor: selectedCategories.includes(category)
                      ? "#FFFFFF"
                      : "transparent",
                    borderWidth: "medium",
                  }}
                  onClick={() => handlecheckBoxChange(category)}
                >
                  <label htmlFor={category}>{category}</label>
                </div>
                // <div key={category} className="genre-card" id ='genre-card' style={divcardcolorstyle}>
                // <label htmlFor={category}>{category}</label>
                //   <input type="checkbox" id={category} name="fav_language" value={category} onChange={handlecheckBoxChange} />
                // </div>
              ))}
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <button id="recaptcha" type="submit">
                  Next Page
                </button>
              </div>
            </form>

            {/* <button onClick={pickColor}></button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySelectionPage;

// function SelectedCategoryTile({ selectedcategoryName }) {
//   return (
//   );
// }
