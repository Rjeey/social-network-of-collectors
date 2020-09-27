import React, { useState, useEffect } from "react";
import Register from "../registration/registration";
import UserService from "../../service/user.service";
import "./Home.css";
import AuthService from "../../service/auth.service";

const Home = () => {

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-5 spacing5">
          <h1 className="h1 font-weight-bold">Sing up Right now</h1>
          <h6 className="mb-4 spacing">Project Collections Manager</h6>
        </div>
        {!currentUser &&
            (
            <div className="col-md-6 col-xl-5 md-4 ">
              <Register/>
            </div>
            )
        }
      </div>
    </div>
  );
};

export default Home;
