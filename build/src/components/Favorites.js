import React from "react";
import SingleFavoriteMovie from "./SingleFavoriteMovie.js";

const Favorites = function (props) {
    console.log(props);
  return (

    <div className="w-full min-w-[150px] min-h-[50px] cols-span-1 rounded-lg bg-green-600">
      Favorites
      <ul>
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
