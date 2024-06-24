import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/new pic.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
          <img className="profile_image" src={profile_pic} alt="Profile Pic"/>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Dylan Jian</div>
            <div className="brief_description">
              👋 Nice to meet you, I'm Dylan! <br></br>
              📚 I'm a student at The Ohio State University studying computer science
              and engineering and quantitative economics. <br></br>
              🏫 On campus, I'm involved in the Chinese American Student 
              Association. <br></br>
              😃 In my free time, I like to code, play the piano, soccer, do competitive 
              Rubik's Cubing, and play Go (board game). <br></br>
              💻 I'm currently participating in IBM's Accelerate program on the 
              software development track, a SWE intern 
              at Y Stem and Chess, and building a full-stack project on
              the side. <br></br>
              🛠️ My tech stack includes: Java, Django, React, Tailwind CSS, SQL, 
              MATLAB, and CAD technologies such as OnShape. 
            </div>
          </div>
        </div>
      </div>
    )
  }
}