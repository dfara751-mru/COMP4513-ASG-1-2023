import React from "react";

const Filter = function () {
  return (
    <div className="row-span-2 w-full h-full min-w-[150px] min-h-[50px] rounded-lg bg-blue-600">
      <div className="flex flex-col">
        <label>Movie Filter</label>
        <div>
          <input id="Title" type="radio" name="Filter" value="Title" />
          <label placeholder="enter stuff"> Title </label>
          <input type="text" name="Title" placeholder="Enter Title" />
        </div>
        <div>
          <input type="radio" name="Filter" value="Genre" />
          <label htmlFor="Genre"> Title </label>
        </div>
        <div>
          <input type="radio" name="Filter" value="Year" />
          <label htmlFor="Year"> Title </label>
        </div>
        <div>
          <select type="radio" name="Filter" value="test">
            <option value="0"> Action </option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Filter;
