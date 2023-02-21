import logo from "./logo.svg";
import "./App.css";
import * as cloneDeep from "lodash/cloneDeep";
import theatreImage from "./theatre.jpg";
import HeaderApp from "./components/HeaderApp";

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // check if movies is already full.
        if (movies.length <= 0) {
          if (localStorage.getItem("movies") === null) {
            // fetch data and store in local storage.
            console.log("fetch from URL");
            const url =
              "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=20";
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data);
            localStorage.setItem("movies", JSON.stringify(data));
          } else {
            // get data from storage.
            const tempMovies = localStorage.getItem("movies");
            if (tempMovies) {
              const movieData = JSON.parse(tempMovies);
              setMovies(movieData);
            }
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    // invoke the async function
    
    getData();
  }, []);

// style={{backgroundImage: 'url(https://unsplash.com/photos/nLl5sJnElxY)'}}
  return (
  

    <main
      className="grid gap-1  grid-cols-5 grid-rows-5 bg-cover bg-center w-full h-full justify-items-center bg-local gap-5"
      style={{ backgroundImage: `url(${theatreImage})` }}
    >
      <HeaderApp />
      {/* <Routes>
        <Route path="/" exact element={<Home/>} />
      </Routes> */}

      {/* <div className="w-full h-24 min-h-[3] rounded-lg bg-red-600 col-span-3">Header</div> */}
      <div className="w-full h-full min-w-[150px] min-h-[50px] rounded-lg bg-blue-600 cols-span-3 rows-span-3">
        Movie Filter
      </div>
      <div className="cols-span-2 w-full min-w-[150px] min-h-[50px] rounded-lg bg-yellow-600">
        List/Matches
      </div>
      <div className="w-full min-w-[150px] min-h-[50px] cols-span-1 rounded-lg bg-green-600">
        Favorites
      </div>
    </main>
  );
}

export default App;
