import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import List from "./List";
import Favorites from "./Favorites";
import HeaderApp from "./HeaderApp";
import theatreImage from "../theatre.jpg";
import { useLocation } from "react-router-dom"


const BrowseMovies = function (props) {
  const [movies, setMovies] = useState([]);
  
  const location = useLocation();
  // uses location stat to pass in input from homepage, if any
  const homeInput = location.state;



  useEffect(() => {
    let newMovies = [...props.moviesData];
    if(homeInput!=null){
      // handles search from home page
      let tempMovies = newMovies.filter((movie) =>
        movie.title.toLowerCase().includes(homeInput.toLowerCase())
      );
      setMovies(tempMovies);
    } else {
    setMovies(newMovies);
    }
  }, [props.moviesData]);
  
  return (
    <main
      className="grid gap-1 grid-cols-5 grid-rows-5 bg-cover bg-center w-full h-full justify-items-center bg-local gap-5"
      style={{ backgroundImage: `url(${theatreImage})` }}
    >
      <HeaderApp />
      <Filter
        movies={movies}
        moviesData={props.moviesData}
        setMovies={setMovies}
      />
      <List
        movies={movies}
        saveFavorites={props.saveFavorites}
        //sortMovies={props.sortMovies}
        setMovies={setMovies}
      />
      <Favorites favorites={props.favorites} setFavorites={props.setFavorites} removeFavorite={props.removeFavorite}/>
    </main>
  );
};
export default BrowseMovies;
