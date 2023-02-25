import React, { useEffect, useState } from "react";

const Filter = function (props) {
  const [filter, setFilter] = React.useState();
  const [titleInput, setTitleInput] = React.useState(true);
  const [genreInput, setGenreInput] = React.useState(true);
  const [RatingInput, setRatingInput] = React.useState(true);
  const [dateInput, setDateInput] = React.useState(true);

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
    props.handleFilter({ title: e.target.value }, "title");
  };
  const handleGenre = (e) => {
    props.setGenre(e.target.value);
  };
  const handleMaxYear = (e) => {
    ///console.log(e.target.value)
    const selectDate = new Date(e.target.value);

    let newMovies = props.movies.filter((movie) => {
      const movieDate = new Date(movie.release_date);
      if (movieDate <= selectDate && movieDate) {
        return movie;
      }
    });
    console.log("this is test: " + newMovies);
    props.setMaxYear(e.target.value);
    // console.log(props.maxYear);
    // props.handleFilter(e.target.value, "year");
  };
  const handleMinYear = (e) => {
    //setMinYear(e.target.value);
  };
  const handleHighRating = (e) => {
    props.setHighRating(e.target.value);
  };
  const handleLowRating = (e) => {
    props.setLowRating(e.target.value);
  };

  const handleTitleClick = (e) => {
    console.log("handle title");
    setTitleInput(false);
    setGenreInput(true);
    setDateInput(true);
    setRatingInput(true);
  };

  const handleGenreClick = (e) => {
    console.log("handle genre");
    setTitleInput(true);
    setGenreInput(false);
    setDateInput(true);
    setRatingInput(true);
  };

  const handleDateClick = (e) => {
    console.log("handle genre");
    setTitleInput(true);
    setGenreInput(true);
    setDateInput(false);
    setRatingInput(true);
  };

  const handleRatingClick = (e) => {
    console.log("handle genre");
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

  //             const data = JSON.parse(rawData);
  //             initiateTitleSort(data);
  //           }
  //         }
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  return (
    <div className="row-span-2 w-full h-full min-w-[150px] min-h-[50px] rounded-lg bg-balck/25">
      <form className="flex flex-col bg-black/50 text-white rounded-lg">
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
            name="Filter"
            value="test"
          >
            <option className="basis-12" value="action">
              {" "}
              Action{" "}
            </option>
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
            <label htmlFor="Year"> Greater </label>
            <input
              onChange={handleMaxYear}
              type="date"
              name="greater"
              className="w-20 rounded-lg text-black"
              disabled={dateInput}
            />
            <label htmlFor="Year"> Less </label>
            <input
              onChange={handleMinYear}
              type="date"
              name="less"
              className="w-20 rounded-lg text-black"
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
            <label className="">Less</label>
            <input
              onChange={handleLowRating}
              disabled={RatingInput}
              type="number"
              name="Less"
              placeholder="Less"
              className="w-16 rounded-lg text-black"
            />
            <label className="">Greater</label>
            <input
              disabled={RatingInput}
              onChange={handleHighRating}
              type="number"
              name="Greater"
              placeholder="Greater"
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
