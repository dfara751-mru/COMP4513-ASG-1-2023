import React from "react";
import Filter from "./Filter";
import List from "./List";
import Favorites from "./Favorites";
import HeaderApp from "./HeaderApp";
import theatreImage from "../theatre.jpg";

const BrowseMovies = function (props) {
  return (
    <main
      className="grid gap-1 grid-cols-5 grid-rows-5 bg-cover bg-center w-full h-full justify-items-center bg-local gap-5"
      style={{ backgroundImage: `url(${theatreImage})` }}>
      <HeaderApp />
      <Filter movies={props.movies}/>
      <List
        movies={props.movies}
        saveFavorites={props.saveFavorites}
        sortMovies={props.sortMovies}
      />
      <Favorites favorites={props.favorites} />
    </main>
  );
};
export default BrowseMovies;
