import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  const [page, setPage] = useState("/")
  return (

    <div className="App">
      <NavBar onChangePage = {setPage}/>
      <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/reviews">
            <Reviews />
        </Route>
        <Route exact path="/">
            <Main />
        </Route>
      </Switch>
    
    </div>
  
  );
}

export default App;
