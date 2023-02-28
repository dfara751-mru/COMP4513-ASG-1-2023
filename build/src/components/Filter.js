import React, { useEffect, useState } from "react";

const Filter = function (props) {
  let high_rating = 10;
  let low_rating = 0;

  const [titleInput, setTitleInput] = React.useState(true);
  const [genreInput, setGenreInput] = React.useState(true);
  const [RatingInput, setRatingInput] = React.useState(true);
  const [dateInput, setDateInput] = React.useState(true);
  const [dateRange, setDateRange] = React.useState({
    start_date : new Date().toISOString().split('T')[0],
    end_date : null//new Date('2000-01-01').toISOString().split('T')[0]
});
  // const [genre, setGenre] = React.useState([]);
  // const [genreType, setGenreType] = React.useState([]);
  const [selectOption, setSelectOption] = React.useState('');
  const [hidden, setHidden] = React.useState(false);

  const handleSubmit = (event) => {
    console.log("handle submit!!");
  };

  // const handleFilter = (e,flag) => {
  //   if(flag == "Title") {
  //   let newMovies = props.movies.filter( movie => movie.title.includes(flag));
  //   props.setMovies(newMovies);
  //   // pass {Title: e.target.value} to handle filter
  //   }
  //   // inside filter
  //   // if genre exists and is not null OR

  // }

  const handleTitle = (e) => {
    let newMovies = props.moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    props.setMovies(newMovies);
  };

  const populateGenre = () => {
    let list = [];
    for (let movie of props.moviesData) {
      if (movie.details.genres != null) {
        for (let movieGenre of movie.details.genres) {
          if (!list.includes(movieGenre.name)) {
            list.push(movieGenre.name);
          }
        }
      }
    }
    return list
  };

 // Nolan Walker helped me with this code.
  const handleGenre = (e) => {
    setSelectOption(e.target.value)
    props.setMovies( props.moviesData.map((movie) => {           // this grabs every movie checks if genre is null, creates search key value to search off of.
      return movie.details.genres !== null ?
          {...movie, genre_search : movie.details.genres.filter(genre => genre.name === e.target.value)} :
          null        
    }).filter(movie => movie !== null && movie.genre_search.length > 0)); // this searches the first filtered array and eliminates the undefines
  };

  // Nolan Walker helped me with this code.
  const handleFilter = (event) => {
    if (event.target.name === "startDate") {
      setDateRange({start_date: event.target.value, end_date: dateRange.end_date});
      props.setMovies(props.moviesData.filter((movie) => { return new Date(movie.release_date) <= new Date(dateRange.start_date) && new Date(movie.release_date) >= new Date(dateRange.end_date) }));
    }else{
      setDateRange({start_date: dateRange.start_date, end_date: event.target.value})
      props.setMovies(props.moviesData.filter((movie) => { return new Date(movie.release_date) <= new Date(dateRange.start_date) && new Date(movie.release_date) >= new Date(dateRange.end_date) }));
    }
  } 

  const handleRating = (e) => {
    if (e.target.name === "high") {
      high_rating = e.target.value;
      props.setMovies(props.moviesData.filter((movie) => movie.ratings.average <= high_rating && movie.ratings.average >= low_rating))
    } else {
      low_rating = e.target.value;
      props.setMovies(props.moviesData.filter((movie) => movie.ratings.average <= high_rating && movie.ratings.average >= low_rating))
    }

  };


  //-------------------------------------------------------------------------------------------------------------------------------
  // Note these functions are used to handle the state of the unput tags in the return
  // by clicking a radial button, it will change the state of the other inputs that are
  // not connected with that radial button.

  const handleTitleClick = (e) => {
    setTitleInput(false);
    setGenreInput(true);
    setDateInput(true);
    setRatingInput(true);
  };

  const handleGenreClick = (e) => {
    setTitleInput(true);
    setGenreInput(false);
    setDateInput(true);
    setRatingInput(true);
  };

  const handleDateClick = (e) => {
    setTitleInput(true);
    setGenreInput(true);
    setDateInput(false);
    setRatingInput(true);
  };

  const handleRatingClick = (e) => {
    setTitleInput(true);
    setGenreInput(true);
    setDateInput(true);
    setRatingInput(false);
  };

  const handleReset = (e) => {
    setTitleInput(true);
    setGenreInput(true);
    setDateInput(true);
    setRatingInput(true);
    props.setMovies(props.moviesData);
  };

  //-------------------------------------------------------------------------------------------------------------------

  const printSelection = () => {
    const genreList = populateGenre()
    return genreList.map((genre, id) => {
      return <option key={id} value={genre}> {genre} </option>
    });
  };

  useEffect(() => {
  }, [dateRange]);

  const toggleHide = () => {
    setHidden(!hidden)
  }

// toggle visibility fade in animation derived from: https://biagio.dev/posts/tailwindcss-react-modal

  return (
    
    <div className="row-span-2 w-full h-full min-w-[150px] min-h-[50px] rounded-lg ">
      <button
            className= {hidden ? "rounded-lg w-6 h-20 bg-white text-black" : "rounded-lg w-32 bg-white text-black"}
            onClick={toggleHide}>
            {hidden ? "→" : "Hide Filter"}</button>
      <form className={`flex flex-col bg-black/50 text-white rounded-lg  ${hidden ? 'pointer-events-none opacity-0' : 'opacity-100' } transition-opacity duration-300 ease-in-out`}>
        <label>Movie Filter</label>
        <div className="flex flex-row w-full pt-1 pt-1">
          <input
            className=""
            id="Title"
            type="radio"
            name="Filter"
            value="Title"
            onClick={handleTitleClick}
          />
          <label className="basis-12" htmlFor="">
            {" "}
            Title{" "}
          </label>
          <input
            type="text"
            name="Title"
            placeholder="Enter Title"
            className="w-24 rounded-lg text-black"
            disabled={titleInput}
            onChange={handleTitle}
          />
        </div>
        <div className="flex flex-row w-full pt-1 pb-1">
          <input
            onClick={handleGenreClick}
            type="radio"
            name="Filter"
            value="Genre"
            className=""
          />
          <label htmlFor="Genre" className="basis-12">
            {" "}
            Genre{" "}
          </label>
          <select
            disabled={genreInput}
            type="radio"
            className="basis-12 rounded-lg text-black"
            name="genreFilter"
            value={selectOption}
            onChange={handleGenre}
          > 
            <option value="selected">-- Select Genre --</option>
            {printSelection()}
          </select>
        </div>
        <div className="pt-1 pb-1 ">
          <input
            onClick={handleDateClick}
            type="radio"
            name="Filter"
            value="Year"
          />
          <label htmlFor="Year"> Date </label>
          <div className="flex flex-col">
            <label htmlFor="Year"> Start </label>
            <input
              onChange={handleFilter}
              defaultValue={dateRange.start_date}
              type="date"
              name="startDate"
              className="w-30 rounded-lg text-black"
              disabled={dateInput}
            />
            <label htmlFor="Year"> End </label>
            <input
              onChange={handleFilter}
              defaultValue={dateRange.end_date}
              type="date"
              name="endDate"
              className="w-30 rounded-lg text-black"
              disabled={dateInput}
            />
          </div>
        </div>
        <div className="pt-2 pb-2">
          <input
            onClick={handleRatingClick}
            type="radio"
            name="Filter"
            value="Rating"
          />
          <label htmlFor="Rating"> Rating </label>
          <div className="flex flex-col">
            <label className="">High</label>
            <input
              onChange={handleRating}
              disabled={RatingInput}
              type="number"
              name="high"
              placeholder="High"
              min="0"
              max="10"
              className="w-16 rounded-lg text-black"
            />
            <label className="">Low</label>
            <input
              disabled={RatingInput}
              onChange={handleRating}
              type="number"
              name="low"
              placeholder="Low"
              min="0"
              max="10"
              className="w-16 p-1 rounded-lg text-black"
            />
          </div>
        </div>
        <div className="">
          <button
            className="rounded-lg w-12 bg-white text-black"
            type="reset"
            onClick={handleReset}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
export default Filter;
