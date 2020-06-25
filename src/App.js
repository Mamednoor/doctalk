import React from "react";
import "./App.css";
import Login from "./components/login/login";
import Register from "./components/register/register";
// import Navbar from "./components/navbar/navbar";
import search from "./components/shares/searchdoctalk.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchDoctor from './components/SearchDoctor/SearchDoctor'

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/profile">
              <img classname="navbar-img" alt="" src={search}></img>
            </Link>
          </li>
          <li>
            <Link to="/search">
              {" "}
              <img classname="navbar-img" alt="" src={search}></img>
            </Link>
          </li>
          <li>
            <Link to="/favori">
              {" "}
              <img classname="navbar-img" alt="" src={search}></img>
            </Link>
          </li>
          <li>
            <Link to="/message">
              {" "}
              <img classname="navbar-img" alt="" src={search}></img>
            </Link>
          </li>
        </ul>
        <Switch>
          <Route>
            <Login path to="/login" />
          </Route>
          <Route path to="/register">
            <Register />
          </Route>
          <Route >
      <SearchDoctor />
      </Route>
        </Switch>
      </Router>
      {/* <Navbar /> */}
    </div>
  )
}

export default App;
