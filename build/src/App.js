import logo from "./logo.svg";
import "./App.css";
import * as cloneDeep from "lodash/cloneDeep";
import theatreImage from "./theatre.jpg";
import HeaderApp from "./components/HeaderApp";

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  console.log(localStorage);
  console.log(movies);

  useEffect(() => {
    const getData = async () => {
      try {
        // check if movies is already full.
        if (movies.length <= 0) {
          if (localStorage.getItem("movies") === null) {
            // fetch data and store in local storage.
            console.log("fetch from URL")
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

  // useEffect(() => {
  // 	// could invoke if(movies.length <= 0) {} here becuase thise useEffect will be called more than
  // 	                                                                 once.
  // 	// rist retrieve from local storage
  // 	//const temp = localStorage.getItem("key");
  // 	// is it there check

  // 	if (temp) {
  // 	const movieData = JSON.parse(temp)
  // 	setMovies(movieData)
  //   }
  // 	else {
  // 		fetch(url)
  // 		.then (rep => resp.json())
  // 		.then( data => {localStorage.setItem("key", JSON.stringify(data))
  // 		setMovies(data)
  // 		})
  // 	}
  // }

  return (
    // style={{backgroundImage: 'url(https://unsplash.com/photos/nLl5sJnElxY)'}}

    <main
      className="grid gap-1 grid-col-3 grid-rows-5 bg-cover bg-center w-full h-full justify-items-center bg-local gap-5"
      style={{ backgroundImage: `url(${theatreImage})` }}
    >
      {/* <HeaderApp /> */}
      {/* <Routes>
        <Route></Route>
      </Routes> */}

      <navbar className="w-full h-24 min-h-[3] rounded-lg bg-red-600 col-span-3">Header</navbar>
      <div className="w-full h-full min-w-[150px] min-h-[50px] rounded-lg bg-blue-600 row-span-4">Movie Filter</div>
      <div className="min-w-[150px] min-h-[50px] rounded-lg bg-yellow-600">List/Matches</div>
      <div className="min-w-[150px] min-h-[50px] rounded-lg bg-green-600">Favorites</div>
    </main>
  );
}

export default App;
