import React from "react";

function Search({change}) {
  return (
    <div>
      <div className="searchBox">
      <input
        type="search"
        className="search-bar"
        placeholder="Search"
        onChange={change}
      /> </div>
    </div>
    
 
  );
}

export default Search;
