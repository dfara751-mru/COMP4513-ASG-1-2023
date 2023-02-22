import React from "react";
import { Link } from 'react-router-dom'; 
import theatreImage from "../theatre.jpg";

const Home = props => {
  <main
    className=" bg-cover bg-center w-full h-full justify-items-center bg-local gap-5"
    style={{ backgroundImage: `url(${theatreImage})` }}
  >
    <div className="h-30 w-30">
        Centered thing here
    </div>
  </main>;
};
export default Home;
