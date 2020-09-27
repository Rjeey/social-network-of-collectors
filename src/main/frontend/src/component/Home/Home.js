import React, {useState} from "react";
import Register from "../registration/registration";
import "./Home.css";

const Home = (user) => {

  const [currentUser, setCurrentUser] = useState(user);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-5 spacing5">
          <h1 className="h1 font-weight-bold">Sing up Right now</h1>
          <h6 className="mb-4 spacing">Project Collections Manager</h6>
        </div>
        {currentUser &&
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
