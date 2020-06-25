import React from "react";
import "./App.css";
import Login from "./Components/login/login";
import Register from "./Components/register/register";
import Navbar from "./Components/navbar/navbar";
import ContactRequest from "./Components/contact/contactRequest"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchDoctor from "./Components/SearchDoctor/SearchDoctor";
import FavoriteDoctor from './Components/FavoriteDoctor/FavoriteDoctor'
import MessagesBox from './Components/MessageBox/messageBox'


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
          <Route path="/messagebox">
            <MessagesBox />
            <Navbar />
          </Route>
        </Switch>


    </div>
    </Router>
  );
}

export default App;
