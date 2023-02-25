import React from "react";
import { Link } from "react-router-dom";
import theatreImage from "../theatre.jpg";
import HeaderApp from "./HeaderApp";
import Footer from "./Footer";

const Home = (props) => {
  <HeaderApp />
  return (
    <main
      className="grid grid-cols-3 grid-rows-3 bg-cover bg-center w-full h-full m-auto bg-local place-content-center"
      style={{ backgroundImage: `url(${theatreImage})` }}
    >
      <HeaderApp />
      <div></div>
      <div className="row-span-3 w-full max-h-[300px] items-center justify-center mx-auto bg-red-900 rounded-md flex flex-col space-y-5">
        <label className="text-slate-50 font-mono font-bold italic text-xl" for="mtitle">TITLE:</label>
        <input className="rounded-md w-[300px]"></input>
        <div className="flex space-x-5"><button className="bg-slate-50 rounded-lg w-20 h-10 border-2 border-solid border-black font-mono" >Search</button><button className="bg-slate-50 rounded-lg w-40 h-10 border-2 border-solid border-black font-mono">Show All Movies</button></div>
      </div>
      <div></div>
      <Footer />
    </main>
  );
};

export default Home;
