import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import List from "./List";
import Favorites from "./Favorites";
import HeaderApp from "./HeaderApp";
import theatreImage from "../theatre.jpg";

const BrowseMovies = function (props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let newMovies = [...props.moviesData];
    setMovies(newMovies);
    console.log(movies);
  }, [props.moviesData]);

  const handleFilter = (input) => {
    console.log(input.title)
    let newMovies = props.moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(input.title.toLowerCase())
    );
    console.log(newMovies);
    setMovies(newMovies)
  };

  

  // let newMovies = props.movies.filter( movie => movie.title.includes(flag));
  // props.setMovies(newMovies);

  // }
  // inside filter
  // if genre exists and is not null OR

  return (
    <main
      className="grid gap-1 grid-cols-5 grid-rows-5 bg-cover bg-center w-full h-full justify-items-center bg-local gap-5"
      style={{ backgroundImage: `url(${theatreImage})` }}
    >
      <HeaderApp />
      <Filter
        movies={movies}
        setMovies={setMovies}
        handleFilter={handleFilter}
      />
      <List
        movies={movies}
        saveFavorites={props.saveFavorites}
        sortMovies={props.sortMovies}
      />
      <Favorites favorites={props.favorites} />
    </main>
  );
};
export default BrowseMovies;
