import React from "react";

const SingleFavoriteMovie = function (props) {

//   const handleFavorite = (e) => {
//     props.saveFavorites(props.movie);
//   };

  // const handleView = (e) => {
  //   console.log("handle View!");
  // };

  return (
    <li className=" justify-center w-full ">
      <figure className="flex justify-center image is-2by3">
        <img
          className="object-scale-down w-30 h-30"
          src={"https://image.tmdb.org/t/p/w92" + props.poster}
          alt={props.title}
        />
      </figure>
      <label className="flex justify-center"> {props.title} </label>
    </li>
  );
};

export default SingleFavoriteMovie;

 /* {props.title} ({props.runtime} min) */