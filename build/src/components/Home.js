import React from "react";
import { Link } from "react-router-dom";
import theatreImage from "../theatre.jpg";
import HeaderApp from "./HeaderApp";

const Home = (props) => {
  <HeaderApp />
  return (
    <main
      className="bg-cover bg-center w-full h-full "
      style={{ backgroundImage: `url(${theatreImage})` }}
    >
      <HeaderApp />
      <div className="flex justify-center w-full h-full">
        <div className="bg-blue-600 h-12 w-12">centered item</div>
      </div>
    </main>
  );
};

export default Home;
