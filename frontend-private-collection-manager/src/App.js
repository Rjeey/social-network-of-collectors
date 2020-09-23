import React, { useState, useEffect } from "react";
import Login from "./component/login/login";
import Register from "./component/registration/registration";
import Home from "./component/Home/Home";
import Table from "./component/Table/Table";
import { Navbar, Nav } from "react-bootstrap";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import AuthService from "./service/auth.service";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./component/Profile";

const App = () => {
  const [showTableUsers, setShowTableUsers] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowTableUsers(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  const location = useLocation();
  return (
    <div>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/">PCM</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/home">
              <Nav.Link active={location.pathname === "/home"}>Home</Nav.Link>
            </LinkContainer>
            {showTableUsers && (
              <Nav className="mr-auto">
                <LinkContainer to="/list">
                  <Nav.Link>List of Users</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Nav>
          <Nav className="ml-auto">
            <form className="form-inline my-2 my-lg-0">
              <div className="md-form my-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                />
              </div>
              <button
                type="button"
                className="btn btn-success btn-md my-2 my-sm-0 ml-1"
              >
                Search
              </button>
            </form>
            {currentUser ? (
              <Nav>
                <LinkContainer to="/profile">
                  <Nav.Link>{currentUser.username}</Nav.Link>
                </LinkContainer>
                <Nav>
                  <Nav.Link href="/login" onClick={logOut}>
                    LogOut
                  </Nav.Link>
                </Nav>
              </Nav>
            ) : (
              <Nav>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link active={location.pathname === "/register"}>
                    Sign Up
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/list" component={Table} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
