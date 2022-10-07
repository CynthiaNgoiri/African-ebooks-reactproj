import React, { useState, useEffect } from "react";
import Home from "./Home";
import Search from "./Search";

function Ebooks() {
  const [ebooks, setEbooks] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    fetch("https://ebooks-lib-api.herokuapp.com/ebooks")
      .then((res) => res.json())
      .then((resp) => {
        setEbooks(resp);
        setSearchValue(resp);
      });
  }, []);
  console.log(ebooks);

  function change(event) {
    setEbooks(
      searchValue.filter((ebooks) =>
        ebooks.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }
  return (
    <div>
      <Search change={change} />
      <Home ebooks={ebooks} />
    </div>
  );
}

export default Ebooks;
