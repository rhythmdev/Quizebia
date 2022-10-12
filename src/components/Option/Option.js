import React from "react";

const Option = ({ option }) => {
  return (
    <div>
      <div className="container mt-3">
        <div className="border rounded py-3 bg-secondary text-white">
          <label for="html">
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>
            <span className="px-2">{option}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Option;
