import React from "react";
import { FaBars } from "react-icons/fa";
import "../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
const Navbar = () => {
  const [ShowLinks, setShowLinks] = useState(false);
  return (
    <nav className="Nav-ContainerB">
      <div className="Nav-HeaderB">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <FaBars
          className="bars-Icon btn-bars btn"
          onClick={() => setShowLinks(!ShowLinks)}
        />
      </div>
      <ul
        className={`${
          ShowLinks ? "list-unstyled list-element" : "list-unstyled hide-list"
        }`}
      >
        <li className="list-itemsB linkB home">
          <h1>
            {" "}
            <Link to="/" className=" btn links home text-start">
              Home
            </Link>
          </h1>
        </li>
        <li className="list-itemsB  About">
          <Link to="/about" className="links btn About text-start">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
