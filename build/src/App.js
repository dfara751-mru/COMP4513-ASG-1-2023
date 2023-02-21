import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import * as cloneDeep from "lodash/cloneDeep";
import theatreImage from "./theatre.jpg"

function App() {

  useEffect( () => {
  if (localStorage.getItem('movies') == null){
    console.log("Calling API! Hope it doesn't spam Randy's server... :)");

    const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=20" //change limit to 200 at the end

    fetch(url)
    .then(resp => resp.json())
    .then(data => localStorage.setItem("movies", JSON.stringify(data)))
    .catch(error => console.log(error));


    // To retreive movie data, try something like: let x = JSON.parse(localSTorage.getItem('movies'))

  } else {
    console.log("Not Calling API - We got the Data we need.");
  }
  });

  return (

    // style={{backgroundImage: 'url(https://unsplash.com/photos/nLl5sJnElxY)'}}
    <div
      className="grid gap-1 grid-col-3 grid-rows-5 bg-cover bg-center w-full h-full justify-items-center bg-local gap-5"
      style={{backgroundImage: `url(${theatreImage})` }}
    >
      <div className="w-full h-24 min-h-[3] rounded-lg bg-red-600 col-span-3">Header</div>
      <div className="w-full h-full min-w-[150px] min-h-[50px] rounded-lg bg-blue-600 row-span-4">Movie Filter</div>
      <div className="min-w-[150px] min-h-[50px] rounded-lg bg-yellow-600">List/Matches</div>
      <div className="min-w-[150px] min-h-[50px] rounded-lg bg-green-600">Favorites</div>
    </div>
  );
}

export default App;
