import React from "react";
import { Link } from "react-router-dom";
import theatreImage from "../theatre.jpg";
import HeaderApp from "./HeaderApp";
import Footer from "./Footer";

const Home = (props) => {
  
  const [input, setInput] = React.useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <main
      className="grid grid-cols-3 grid-rows-3 bg-cover bg-center w-full h-full m-auto bg-local place-content-center"
      style={{ backgroundImage: `url(${theatreImage})` }}
    >
      <HeaderApp />
      <div></div>
      <div className="row-span-3 w-full max-h-[300px] items-center justify-center mx-auto bg-black/75 rounded-md flex flex-col space-y-5">
        <label className="text-slate-50 font-mono font-bold italic text-xl" for="mtitle">TITLE:</label>
        <input className="rounded-md w-[300px]" onChange={handleInput}></input>
        <div className="flex space-x-5"><Link to="/build/browse" state={input}><button className="bg-slate-50 rounded-lg w-20 h-10 border-2 border-solid border-black font-mono" >Search</button></Link><Link to="/build/browse"><button className="bg-slate-50 rounded-lg w-40 h-10 border-2 border-solid border-black font-mono">Show All Movies</button></Link></div>
      </div>
      <div></div>
      <Footer />
    </main>
  );
};

export default Home;

// state={props.movie}