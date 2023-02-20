import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import * as cloneDeep from "lodash/cloneDeep";
import theatreImage from "./theatre.jpg"

function App() {

  return (

    // style={{backgroundImage: 'url(https://unsplash.com/photos/nLl5sJnElxY)'}}
    <div
      className="bg-cover bg-center w-full h-full grid grid-col-3 grid-rows-4 justify-items-center bg-local gap-5"
      style={{backgroundImage: `url(${theatreImage})` }}
    >
      {/* <div className="height-full w-full bg-red-600 ">Header</div>
      <div className="height-full w-full bg-blue-600">Movie Filter</div>
      <div className="height-full w-full bg-yellow-600">List/Matches</div>
      <div className="height-full w-full bg-green-600">Favorites</div> */}
    </div>
  );
}

export default App;
