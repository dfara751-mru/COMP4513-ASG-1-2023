import React from "react";
import SingleMovie from "./SingleMovie.js";

const List = function (props) {
  const handleSort = (e) => {
    if (e.target.value === "title") {
      let movie = movie.sort(function (a, b) {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
        else return 0;
      });
      //print sort by title
      console.log("sort title");
    } else if (e.target.value === "year") {
      //print sort by year
      console.log("sort year");
    } else if (e.target.value === "rating") {
      //print by Rating
      console.log("sort rating");
    } else if (e.target.value === "popularity") {
      //print by Popularity
      console.log("sort popularity");
    }
  };

  return (
    <div className="col-span-3 row-span-4 w-full min-w-[150px] h-auto rounded-lg bg-yellow-600 overflow-y-auto">
      List/Matches
      <div>
        <button onClick={handleSort} value="title">
          {" "}
          Title{" "}
        </button>
        <button onClick={handleSort} value="year">
          {" "}
          Year{" "}
        </button>
        <button onClick={handleSort} value="rating">
          {" "}
          Rating
        </button>
        <button onClick={handleSort} value="popularity">
          {" "}
          Popularity{" "}
        </button>
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
