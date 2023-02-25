import React, { useEffect, useState } from "react";

const Filter = function (props) {
  const [filter, setFilter] = React.useState();

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
    props.handleFilter({title: e.target.value},"title");
  }
  const handleGenre = (e) => {
    props.setGenre(e.target.value);
  }
  const handleMaxYear = (e) => {
    ///console.log(e.target.value)
    const selectDate = new Date(e.target.value);
    
    let newMovies = props.movies.filter((movie) => {
      const movieDate = new Date(movie.release_date) 
      if (movieDate <= selectDate && movieDate) {
          return movie
      }
    });
    console.log("this is test: " + newMovies)
    props.setMaxYear(e.target.value);
    // console.log(props.maxYear);
    // props.handleFilter(e.target.value, "year");
  }
  const handleMinYear = (e) => {
    //setMinYear(e.target.value);
  }
  const handleHighRating = (e) => {
    props.setHighRating(e.target.value);
  }
  const handleLowRating = (e) => {
    props.setLowRating(e.target.value);
  }


  
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
    <div className="row-span-2 w-full h-full min-w-[150px] min-h-[50px] rounded-lg bg-blue-600">
      <div className="flex flex-col">
        <label>Movie Filter</label>
        <div className="flex flex-row w-full">
          <input
            className="basis-4"
            id="Title"
            type="radio"
            name="Filter"
            value="Title"
          />
          <label className="basis-12" htmlFor="">
            {" "}
            Title{" "}
          </label>
          <input
            type="text"
            name="Title"
            placeholder="Enter Title"
            className="w-24"
            onChange={handleTitle}
          />
        </div>
        <div className="flex flex-row w-full">
          <input type="radio" name="Filter" value="Genre" className="basis-4" />
          <label htmlFor="Genre" className="basis-12">
            {" "}
            Genre{" "}
          </label>
          <select type="radio" className="basis-12" name="Filter" value="test">
            <option className="basis-12" value="action">
              {" "}
              Action{" "}
            </option>
          </select>
        </div>
        <div>
          <input type="radio" name="Filter" value="Year" />
          <label htmlFor="Year"> Date </label>
          <div className="flex ">
            greater
            <input
              onChange={handleMaxYear}
              type="date"
              name="greater"
              className="w-20"
            />
            less
            <input
              onChange={handleMinYear}
              type="date"
              name="less"
              className="w-20"
            />
          </div>
        </div>
        <div>
          <input type="radio" name="Filter" value="Rating" />
          <label htmlFor="Rating"> Rating </label>
          <div className="flex ">
            <input
              onChange={handleLowRating}
              type="number"
              name="Less"
              placeholder="Less"
              className="w-16"
            />
            <input
              onChange={handleHighRating}
              type="number"
              name="Greater"
              placeholder="Greater"
              className="w-16 p-1"
            />
          </div>
        </div>
        <div>
          <button type="submit" className="bg-indigo-500">
            Submit
          </button>
          <button tupe="submit">Clear</button>
        </div>
      </div>
    </div>
  );
};
export default Filter;
