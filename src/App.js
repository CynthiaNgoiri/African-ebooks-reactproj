import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Ebooks from "./components/Ebooks";
import NavBar from "./components/NavBar";
import Reviews from "./components/Reviews";
import About from "./components/About";


function App() {
  const [page, setPage] = useState("/")
  return (

    <div className="App">
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/">
          <Ebooks />
        </Route>
      </Switch>

    </div>

  );
}

export default App;
