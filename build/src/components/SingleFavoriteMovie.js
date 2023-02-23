import React from "react";

const SingleFavoriteMovie = function (props) {

//   const handleFavorite = (e) => {
//     props.saveFavorites(props.movie);
//   };

  const handleView = (e) => {
    console.log("handle View!");
  };

  return (
    <li className="inline-block w-full is-one-third-desktop is-half-tablet">
      <figure className="image is-2by3">
        <img
          className="object-scale-down w-30 h-30"
          src={"https://image.tmdb.org/t/p/w92" + props.poster}
          alt={props.title}
        />
      </figure>
      <label > {props.title} </label>
    </li>

     /* {props.title} ({props.runtime} min) */
  );
};

export default SingleFavoriteMovie;
