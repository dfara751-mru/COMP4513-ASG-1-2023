import React from "react";
import { Link } from "react-router-dom";
import missingPoster from "../missingpostersmall.png"

const SingleFavoriteMovie = function (props) {

  const removeFavorite = (e) => {
    props.removeFavorite(props.movie);
  }

  return (
    <li className=" justify-center w-full ">
      <figure className="flex justify-center image is-2by3">
      <Link to="/build/Detail" state={props.movie}><img
          className="object-scale-down w-30 h-30"
          src={"https://image.tmdb.org/t/p/w92" + props.poster}
          alt={props.title}
          onError={(e)=>{e.target.src=missingPoster}}
        /></Link>
      </figure>
      <div className="flex justify-center">
      <label className="flex justify-center text-slate-50"> {props.title} </label> <button className="w-12" onClick={removeFavorite}>❌</button>
      </div>
    </li>
  );
};

export default SingleFavoriteMovie;

 /* {props.title} ({props.runtime} min) */