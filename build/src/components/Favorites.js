import React from "react";
import SingleFavoriteMovie from "./SingleFavoriteMovie.js";

const Favorites = function (props) {
  return (
    <div className="block w-full min-w-[150px] min-h-[50px] col-span-1 row-span-3 rounded-lg bg-green-600 overflow-y-auto">
      Favorites
      <ul className="block">
        {props.favorites.map((movie) => (
          <SingleFavoriteMovie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            tmdbID={movie.tmdbID}
          />
        ))}
      </ul>
    </div>
  );
};
export default Favorites;
