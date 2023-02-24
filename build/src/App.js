import logo from "./logo.svg";
import "./App.css";
import * as cloneDeep from "lodash/cloneDeep";
import theatreImage from "./theatre.jpg";
import HeaderApp from "./components/HeaderApp.js";
import Filter from "./components/Filter.js";
import List from "./components/List.js";
import Favorites from "./components/Favorites";
import Home from "./components/Home.js";
import BrowseMovies from "./components/BrowseMovies";
import Detail from "./components/Detail"

import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";



function App() {
  const [movies, setMovies] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  const sortMovies = function (newMovies) {
    const sortedMovies = cloneDeep(newMovies);
    setMovies(sortedMovies); // update state
  };

  const saveFavorites = function (movie) {
    if (
      favorites.findIndex(
        (currentFavMovie) => currentFavMovie.id === movie.id
      ) < 0
    ) {
      let newFavorites = [];
      newFavorites = favorites;
      const favMovie = cloneDeep(movie);
      newFavorites.push(favMovie);
      console.log(newFavorites);
      setFavorites(newFavorites); // adds movie to favorites list.
      console.log(favorites)
    } else {
      console.log("The movie is already in Favorites!");
    }
  };

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
            initiateTitleSort(data);
            localStorage.setItem("movies", JSON.stringify(data));
          } else {
            // get data from storage.
            const rawData = localStorage.getItem("movies");
            if (rawData) {
              const data = JSON.parse(rawData);
              initiateTitleSort(data);
            }
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    const initiateTitleSort = (movies) => {
      let newMovies = movies.sort(function (a, b) {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
        else return 0;
      });
      setMovies(newMovies);
    };

    // invoke the async function

    getData();
  }, []);

  //note make sure to use cols in parent and col or row in child.
  // style={{backgroundImage: 'url(https://unsplash.com/photos/nLl5sJnElxY)'}}
  return (
    <Routes>
      <Route path="/build" exact element={<BrowseMovies movies={movies} favorites={favorites} saveFavorites={saveFavorites} sortMovies={sortMovies}/>} />
      <Route path="/build/home" exact element={<Home />} />
      <Route path="/build/detail" exact element={<Detail favorites={favorites} saveFavorites={saveFavorites}/>} />
      <Route path="/build/browse" exact element={<BrowseMovies movies={movies} favorites={favorites} saveFavorites={saveFavorites} sortMovies={sortMovies}/>} />
    </Routes>

    // <main
    //   className="grid gap-1 grid-cols-5 grid-rows-5 bg-cover bg-center w-full h-full justify-items-center bg-local gap-5"
    //   style={{ backgroundImage: `url(${theatreImage})` }}
    // >
    //   <HeaderApp />
    //   <Filter />
    //   <List
    //     movies={movies}
    //     saveFavorites={saveFavorites}
    //     sortMovies={sortMovies}
    //   />
    //   <Favorites favorites={favorites} />
    //   {" "}
    //   {/* <div className="w-full h-24 min-h-[3] rounded-lg bg-red-600 col-span-3">Header</div> */}
    //   {" "}
    //   {/* <div className="row-span-2 w-full h-full min-w-[150px] min-h-[50px] rounded-lg bg-blue-600">
    // //     Movie Filter
    // //   </div> */}
    //   {" "}
    //   {/* <div className="col-span-3 row-span-4 w-full min-w-[150px] min-h-[50px] rounded-lg bg-yellow-600">
    // //     List/Matches
    // //   </div> */}
    //   {" "}
    //   {/* <div className="w-full min-w-[150px] min-h-[50px] cols-span-1 rounded-lg bg-green-600">
    // //     Favorites
    // //   </div> */}
    // {" "}
    // </main>
  );
}

export default App;
