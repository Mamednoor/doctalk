import React from "react";
import "./App.css";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Navbar from "./components/navbar/navbar";
import ContactRequest from "./components/contact/contactRequest"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchDoctor from "./components/SearchDoctor/SearchDoctor";
import FavoriteDoctor from './components/FavoriteDoctor/FavoriteDoctor'
import Profile from './components/profile/profile'


function App () {
  return (

    <Router >
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/search">
          <SearchDoctor />
          <Navbar />
          </Route>
          <Route path="/favori">
          <FavoriteDoctor />
            <Navbar />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/contactrequest">
            <ContactRequest />
          </Route>
          <Route path="/profile">
            <Profile />
            <Navbar />
          </Route>
        </Switch>


    </div>
    </Router>
  );
}

export default App;
