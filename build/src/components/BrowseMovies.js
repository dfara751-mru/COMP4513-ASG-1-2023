import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import List from "./List";
import Favorites from "./Favorites";
import HeaderApp from "./HeaderApp";
import theatreImage from "../theatre.jpg";

const BrowseMovies = function (props) {
  const [movies, setMovies] = useState([]);
  
  


  const location = useLocation();
  // uses location stat to pass in input from homepage, if any
  const homeInput = location.state;

  //console.log(homeInput);


  useEffect(() => {
    let newMovies = [...props.moviesData];
    if(homeInput!=null){
      // handles search from home page
      let tempMovies = newMovies.filter((movie) =>
        movie.title.toLowerCase().includes(homeInput.toLowerCase())
      );
      setMovies(tempMovies);
    } else {
    setMovies(newMovies);
    console.log(movies);
  }, [props.moviesData]);
  

  //const handleFilter = (input, flag) => {
    // console.log("maxYear");
    // console.log(maxYear);
    // console.log(flag);

    // if (flag == "title") {
    //   let newMovies = props.moviesData.filter((movie) =>
    //     movie.title.toLowerCase().includes(input.title.toLowerCase())
    //   );
    //   setMovies(newMovies);
    // } else if (flag == "genre") {
    //   console.log(genre);
    // } else if (flag == "year") {
    //   console.log("year!")
    //   console.log(maxYear)
    //   console.log(minYear)
      // if (maxYear !== null && minYear === null) {
      //   console.log(maxYear);
        // let newMovies = props.moviesData.filter((movie) => {
        //   if(movie.release_date < maxYear) {

        //   }
        // }
        // )
    //   }
    // } else if (minYear == true) {
    // }
    // if(maxYear == true && minYear == true) {
    //   if(input.inRange(input.release_date,minYear,maxYear)) {

    //   }
    // }
  //   else if (flag == "rating") {
  //   }
  // };

  // let newMovies = props.movies.filter( movie => movie.title.includes(flag));
  // props.setMovies(newMovies);

  // }
  // inside filter
  // if genre exists and is not null OR





  return (
    <main
      className="grid gap-1 grid-cols-5 grid-rows-5 bg-cover bg-center w-full h-full justify-items-center bg-local gap-5"
      style={{ backgroundImage: `url(${theatreImage})` }}
    >
      <HeaderApp />
      <Filter
        movies={movies}
        moviesData={props.moviesData}
        setMovies={setMovies}
        // handleFilter={handleFilter}
        // setLowRating={setLowRating}
        // setHighRating={setHighRating}
        // setMaxYear={setMaxYear}
        // maxYear={maxYear}
        // setMinYear={setMinYear}
        // setGenre={setGenre}
        // highRating={highRating}
        // lowRating={lowRating}
      />
      <List
        movies={movies}
        saveFavorites={props.saveFavorites}
        //sortMovies={props.sortMovies}
        setMovies={setMovies}
      />
      <Favorites favorites={props.favorites} setFavorites={props.setFavorites} />
    </main>
  );
};
export default BrowseMovies;
