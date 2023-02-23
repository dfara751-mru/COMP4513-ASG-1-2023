import React from "react";

const Filter = function () {
  const[filter, setFilter] = React.useState()

  const handleSubmit = (event) => {
    console.log("handle submit!!")
  }

  const changeFilter = (e) => {
    setFilter(e.target.value);
  }

  return (
    <div className="row-span-2 w-full h-full min-w-[150px] min-h-[50px] rounded-lg bg-blue-600">
      <form onSubmit={handleSubmit} className="flex flex-col">
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
          <label htmlFor="Year"> Rating </label>
          <div className="flex ">
            <input
              type="text"
              name="Less"
              placeholder="Less"
              className="w-16"
            />
            <input
              type="text"
              name="Greater"
              placeholder="Greater"
              className="w-16"
            />
          </div>
        </div>
        <div>
          <button type="submit" className="bg-indigo-500">Submit</button>
          <button>Clear</button>
        </div>
      </form>
    </div>
  );
};
export default Filter;
