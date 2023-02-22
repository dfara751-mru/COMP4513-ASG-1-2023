import React from "react";
import SingleMovie from "./SingleMovie.js"

const List = function (props) {
  return (
    <div className="col-span-3 row-span-4 w-full min-w-[150px] h-auto rounded-lg bg-yellow-600">
        List/Matches
        <div>
            <label>Title</label>
            <label>Year</label>
            <label>Rating</label>
            <label>Populatrity</label>
        </div>
        <ul className="inline-block">
        
        {props.movies.map((movie) => (
          <SingleMovie
            saveFavorites={props.saveFavorites}
            movie={movie}
            id={movie.id}
            key={movie.id}
            title={movie.title}
            tagline={movie.tagline}
            rating={movie.rating}
            popularity={movie.popularity}
            poster={movie.poster}
            runtime={movie.runtime}
            tmdbID={movie.tmdbID}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
