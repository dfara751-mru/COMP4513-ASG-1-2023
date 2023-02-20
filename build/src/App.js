import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import * as cloneDeep from "lodash/cloneDeep";
import theatreImage from "./theatre.jpg"

function App() {

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
