import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Ticket from './Components/Ticket/Ticket';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipment from './Components/Shipment/Shipment';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <h4>Email: {loggedInUser.email}</h4> */}
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/blog">
            <Blog />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/booking/:id">
            <Ticket />
          </PrivateRoute>
          <Route path="/shipment">
            <Shipment />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
