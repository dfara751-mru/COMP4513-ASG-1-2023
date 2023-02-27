import React from "react";
import SingleMovie from "./SingleMovie.js";
import * as cloneDeep from "lodash/cloneDeep";


const List = function (props) {
  const handleSort = (e) => {
    if (e.target.value === "title") {
      sortMoviesByTitle(props);
    } else if (e.target.value === "release_date") {
      sortMoviesByReleaseDate(props);
    } else if (e.target.value === "ratings") {
      sortMoviesByRatings(props);
    } else if (e.target.value === "ratings.popularity") {
      sortMoviesbyPopularity(props);
    }
  };

  const sortMoviesByTitle = (props) => {
    let newMovies = props.movies.sort(function (a, b) {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      else return 0;
    });
    sortMovies(newMovies);
  };

  const sortMoviesByReleaseDate = (props) => {
    let newMovies = props.movies.sort(function (a, b) {
      if (a.release_date < b.release_date) return -1;
      else if (a.release_date > b.release_date) return 1;
      else return 0;
    });
    sortMovies(newMovies);
  };

  const sortMoviesByRatings = (props) => {
    let newMovies = props.movies.sort(function (a, b) {
      if (a.ratings.average < b.ratings.average) return 1;
      else if (a.ratings.average > b.ratings.average) return -1;
      else return 0;
    });
    sortMovies(newMovies);
  };

  const sortMoviesbyPopularity = (props) => {
    let newMovies = props.movies.sort(function (a, b) {
      if (a.ratings.popularity < b.ratings.popularity) return 1;
      else if (a.ratings.popularity > b.ratings.popularity) return -1;
      else return 0;
    });
    sortMovies(newMovies);
  };

  const sortMovies = function (newMovies) {
    const sortedMovies = cloneDeep(newMovies);
    props.setMovies(sortedMovies); // update state
  };

  //   const sortMovies = (inputValue) => {
  //     let newMovie = props.movies.sort(function (a, b) {
  //       if (a.ratings < b.ratings) return -1;
  //       else if (a.ratings > b.ratings) return 1;
  //       else return 0;
  //     });
  //     console.log("in sortmovies Rating");
  //     console.log(newMovie);
  //     return newMovie;
  //   };
  


  const printMovies = (props) => {
    if (props.movies.length <= 0) {
      return <div className="text-white">No Matches</div>;
    } else {
    return props.movies.map((movie) => (
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
    ));}
    
  };

  // check filter state
  // if no
  // print normal
  // if yes
  // apply filter from props.info or some kind of state
  // use an already defined array to filter Title properly


  

  return (
    <div className="col-span-3 row-span-4 w-full min-w-[150px] h-auto rounded-lg bg-black/50 text-white overflow-y-auto">
      <div className="text-center bg-black">List/Matches</div>
      <div className="bg-black/25 justify-center">
        <button className="rounded-lg bg-black pr-2" onClick={handleSort} value="title"> Title </button>
        <button className="rounded-lg bg-black pr-2" onClick={handleSort} value="release_date"> Year </button>
        <button className="rounded-lg bg-black pr-2" onClick={handleSort} value="ratings"> Rating </button>
        <button className="rounded-lg bg-black pr-2" onClick={handleSort} value="ratings.popularity"> Popularity </button>
      </div>
      <ul className="inline-block w-full">
        {printMovies(props)}
        
      </ul>
    </div>
  );
};

export default List;

{/* {props.movies.map((movie) => (
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
        ))} */}