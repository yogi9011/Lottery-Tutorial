import React from "react";
import { Link } from "react-router-dom";
import "./intro.css";
const Intro = () => {
  return (
    <>
      <h1 className="Headin"> "Welcome To Decentralized Lottery System" </h1>
      <ul className="list-group" id="list">
        <div className="center">
          <li className="list-group-item" aria-disabled="true">
            <h1>You Are A Manager</h1>
          </li>
          <li className="list-group-item">
            <Link to="/manager" className="text-decoration-none text">
              <button className="button1">Manager</button>
            </Link>

            <Link to="/players" className="text-decoration-none text">
              <button className="button1 player">Players</button>
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
};

export default Intro;