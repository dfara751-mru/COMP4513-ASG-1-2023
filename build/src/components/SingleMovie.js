import React from "react";
import { Link } from "react-router-dom";

const SingleMovie = function (props) {

  const handleFavorite = () => {
    props.saveFavorites(props.movie);
  };

  return (
    <li className="inline-block w-full is-one-third-desktop is-half-tablet">
      <div className="card-image">
        <figure className="image is-2by3">
          <Link to="/build/detail" state={props.movie}>
            <img
              className="object-scale-down w-30 h-30"
              src={"https://image.tmdb.org/t/p/w92" + props.poster}
              alt={props.title}
            />
          </Link>
        </figure>
      </div>
      <div className="card-content has-text-centered content-rectangle">
        <label>{props.title}</label>
        <label>{props.movie.release_date}</label>
        <label>{props.movie.ratings.average}</label>
        <label>{props.movie.ratings.popularity}</label>
      </div>
      <Link to="/build/Detail" state={props.movie}><button >View</button></Link>
      <button onClick={handleFavorite}>❤</button>
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
