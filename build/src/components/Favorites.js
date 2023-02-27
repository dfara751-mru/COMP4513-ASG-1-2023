import React, { useEffect, useState } from "react";
import SingleFavoriteMovie from "./SingleFavoriteMovie.js";
import missingpostersmall from "../missingpostersmall.png";

const Favorites = function (props) {
  const clearFavorites = (e) => {
    props.setFavorites([]);
  };

  const emptyCheck = () => {
    console.log(props.favorites.length);
    if (props.favorites.length <= 0) {
      console.log("no movies");
      return <div className="text-white">No movies</div>;
    } else {
      return props.favorites.map((movie) => (
        <SingleFavoriteMovie
          movie={movie}
          id={movie.id}
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          tmdbID={movie.tmdbID}
          removeFavorite={props.removeFavorite}
        />
      ));
    }
  };

  return (
    <div className="block w-full min-w-[150px] min-h-[50px] col-span-1 row-span-3 rounded-lg bg-black/90 overflow-y-auto">
      <div className="flex flex-row justify-items-center">
        <div className="text-white text-center">Favorites</div>
        <div className="flex flex-row-reverse w-full ">
          <button
            className="flex-row-reverse rounded-lg w-12 border-2 border-white bg-white text-black"
            onClick={clearFavorites}
          >
            Clear
          </button>
        </div>
      </div>
      <ul className="block">
        {emptyCheck()}
        {/* {props.favorites.map((movie) => (
          <SingleFavoriteMovie
            movie={movie}
            id={movie.id}
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            tmdbID={movie.tmdbID}
            removeFavorite={props.removeFavorite}
          />
        ))} */}
      </ul>
    </div>
  );
};
export default Favorites;
