import React, { useEffect, useState } from "react";
import SingleFavoriteMovie from "./SingleFavoriteMovie.js";


const Favorites = function (props) {
  const clearFavorites = (e) => {
    props.setFavorites([]);
  };

  const [hidden, setHidden] = React.useState(false);

  const printFavorites = () => {
    if (props.favorites.length <= 0) {
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

   const toggleHide = () => {
    setHidden(!hidden)
  }

// toggle visibility fade in animation derived from: https://biagio.dev/posts/tailwindcss-react-modal

  return (
    <div className={`w-full min-w-[150px] min-h-[50px] col-span-1 row-span-3  ${hidden ? 'overflow-hidden' : 'overflow-y-auto' }`}>
      <button
            className= {hidden ? "rounded-lg w-6 h-20 bg-white text-black" : "rounded-lg w-32 bg-white text-black"}
            onClick={toggleHide}>
            {hidden ? "→" : "Hide Favorites"}</button>
    <div className={`block w-full min-w-[150px] min-h-[50px] col-span-1 row-span-3 rounded-lg bg-black/90 ${hidden ? 'pointer-events-none opacity-0' : 'opacity-100' } transition-opacity duration-300 ease-in-out`}>
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
        {printFavorites()}
      </ul>
    </div>
    </div>
  );
};
export default Favorites;
