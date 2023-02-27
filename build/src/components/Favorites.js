import React, { useEffect, useState } from "react";
import SingleFavoriteMovie from "./SingleFavoriteMovie.js";



const Favorites = function (props) {
  const clearFavorites = (e) => {
    props.setFavorites([]);
  }


  return (
    <div className="block w-full min-w-[150px] min-h-[50px] col-span-1 row-span-3 rounded-lg bg-black/90 overflow-y-auto">
      <div className="flex flex-row justify-items-center">
        <div className="text-white text-center">Favorites</div>
        <div className="flex flex-row-reverse w-full "><button className="flex-row-reverse rounded-lg w-12 border-2 border-white bg-white text-black" onClick={clearFavorites}>Clear</button></div>
      </div>
      <ul className="block">
        {props.favorites.map((movie) => (
          <SingleFavoriteMovie
            movie={movie}
            id={movie.id}
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            tmdbID={movie.tmdbID}
            removeFavorite={props.removeFavorite}
          />
        ))}
      </ul>
    </div>
  );
};
export default Favorites;
