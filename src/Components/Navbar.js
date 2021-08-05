
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {
  setInput,
} from "../features/userSlice";

import "../styling/navbar.css";


const Navbar = () => {
  const [inputValue, setInputValue] = useState("tech");
  const dispatch = useDispatch();


  const handleClick = (e) => {
    window.location.href="#blog__page";
    e.preventDefault();
    dispatch(setInput(inputValue));
  };


  return (
    <div className="navbar">
      <h1 className="navbar__header">NEWSGO</h1>
      
        <div className="blog__search">
          <input
            className="search"
            placeholder="Search for a blog"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="submit" onClick={handleClick}>
            Search
          </button>
        </div>
    </div>
  );
};

export default Navbar;
