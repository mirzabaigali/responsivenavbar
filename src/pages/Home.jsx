import React from "react";
import { educ1 } from "../assets/index";
import "./Home.css";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="row">
        <div className="content">
          <h3>
            online <span>Education</span>
          </h3>
          <a href="#contact" className="btn">
            contact us
          </a>
        </div>
        <div className="image">
          <img src={educ1} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
