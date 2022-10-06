import React, { useState, useEffect } from "react";
import Home from "./Home";
import Search from "./Search";

function Main() {
  const [ebooks, setEbooks] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/ebooks")
      .then((res) => res.json())
      .then((resp) => {
        setEbooks(resp);
        setSearchValue(resp);
      });
  }, []);

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

export default Main;
