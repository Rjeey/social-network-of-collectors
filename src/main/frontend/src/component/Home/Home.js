import React, { useState, useEffect } from "react";
import Register from "../registration/registration";
import UserService from "../../service/user.service";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-5 spacing5">
          <h1 className="h1 font-weight-bold">Sing up Right now</h1>
          <h6 className="mb-4 spacing">Project Collections Manager</h6>
        </div>
        <div className="col-md-6 col-xl-5 md-4 ">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default Home;
