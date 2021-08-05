import React from "react";
import Blogs from "./Components/Blogs";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./styling/app.css";

const App = () => {


  return (
    <div className="app">
      <Navbar />
      <Homepage />
      <Blogs  />
      <Footer />
    </div>
  );
};

export default App;
