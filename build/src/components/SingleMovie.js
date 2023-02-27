import React from "react";
import { Link } from "react-router-dom";
import missingPoster from "../missingposter small.png"

const SingleMovie = function (props) {
  
  const handleFavorite = () => {
    props.saveFavorites(props.movie);
  };

  return (
    <li className="flex w-full pt-1 pb-1 bg-black/90">
      <div className="basis-1/4">
        <Link className="" to="/build/detail" state={props.movie}>
          <img
            className="basis-1/4 flex-shrink-0 rounded-lg"
            src={"https://image.tmdb.org/t/p/w92" + props.poster}
            alt={props.title}
            onError={(e)=>{e.target.src=missingPoster}}
          />
        </Link>
      </div>
      <div className="flex flex-col basis-3/4">
      <label>Title: {props.title}</label>
      <label>Release Date: {props.movie.release_date}</label>
      <label>Rating: {props.movie.ratings.average}</label>
      <label className="flex-row-reverse"> Popularity: 
        {props.movie.ratings.popularity}
      </label>
      </div>
      <div className="basis-1/4 flex flex-col ">
        <Link to="/build/Detail" state={props.movie}>
          <button className="bg-sky-500 text-white w-12 rounded-lg">View</button>
        </Link>
        <br></br>
        <button className="w-12" onClick={handleFavorite}>❤</button>
      </div>
    </li>

    /* <li className="column is-one-third-desktop is-half-tablet">
<div className="card">
  <div className="card-image">
    <figure className="image is-2by3">
      <img
        src={"https://image.tmdb.org/t/p/w92" + props.poster}
        alt={props.title}
      />
    </figure>
  </div>
  <div className="card-content has-text-centered content-rectangle">
    <h2 className="title is-6">
      {props.title} ({props.runtime} min)
    </h2>
    <p className="is-size-7">{props.tagline}</p>
  </div>
  <button onClick >View</button><button >❤</button>
  <footer className="card-footer">
     <MovieLink id={props.tmdbID} /> 
  </ footer>
</div>
</li> */
  );
};

export default SingleMovie;
