import React from "react";
import "./Skills.css";
import UIdesign from "../../assets/design.png";
import programming from "../../assets/java.png";
import version from "../../assets/github.png";
import database from "../../assets/database.png";
import mysql from "../../assets/mysql.png";
import html from "../../assets/html.png"
import java from "../../assets/java.png"
import tomcat from "../../assets/tomcat.png"
import react from "../../assets/react.png"

import Marquee from "react-fast-marquee";

const Skills = () => {
  
    
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I'm deeply passionate about Java and frontend development. The power of
        Java's backend capabilities combined with the creativity of frontend
        technologies fuels my love for building seamless and engaging software
        solutions.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIdesign} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              Crafting visually appealing and user-friendly interfaces to
              enhance the online experience.
            </p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={programming} alt=""  className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Programming</h2>
            <p>
              Leveraging code to build innovative solutions and solve complex
              problems.
            </p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={version} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Version Control</h2>
            <p>
              Collaborating seamlessly and tracking changes with precision for
              streamlined development workflows.
            </p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={database} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Databases</h2>
            <p>
              Managing and optimizing data storage for efficient retrieval and
              manipulation.
            </p>
          </div>
        </div>
      </div>
      <Marquee behavior="scroll" direction="left" scrollamount="3" style={{ fontSize: "20px", marginTop: "20px" }}>
  <img src={mysql} alt="" className="carouselIcon" style={{ width: "100px", marginRight: "20px" }} />
  <img src={html} alt="" className="carouselIcon" style={{ width: "100px", marginRight: "20px" }} />
  <img src={java} alt="" className="carouselIcon" style={{ width: "100px", marginRight: "20px" }} />
  <img src={tomcat} alt="" className="carouselIcon" style={{ width: "100px", marginRight: "20px" }} />
  <img src={react} alt="" className="carouselIcon" style={{ width: "100px", marginRight: "20px" }} />
  <img src={version} alt="" className="carouselIcon" style={{ width: "100px", marginRight: "20px" }} />
  <img src={database} alt="" className="carouselIcon" style={{ width: "100px", marginRight: "20px" }} />
</Marquee>

    </section>
  );
};

export default Skills;
