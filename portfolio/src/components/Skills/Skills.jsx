import React from "react";
import skillsCSS from './../Skills/Skills.module.css';
import skillsImg from './../../assets/skillsImage.webp'

function Skills(){
    return(
        <div className={`${skillsCSS.SkillsWrapper} section`}>
        <div className={skillsCSS.skillContainer}>
            <h2>My Skills</h2> 
            <p>I am skilled in a range of programming languages and platforms, including HTML, CSS, JavaScript with Spring Boot, Java and MySQL as the back-end development.</p> 
              <div className={skillsCSS.skill}>
                <h3>React JS</h3>
                <div className={skillsCSS.line}></div>
              <div className={skillsCSS.skill}>
                <h3>HTML and CSS</h3>
                <div className={skillsCSS.line}></div>
              </div>
              <div className={skillsCSS.skill}>
                <h3>JavaScript</h3>
                <div className={skillsCSS.line}></div>
              </div>
              <div className={skillsCSS.skill}>
                <h3>Java</h3>
                <div className={skillsCSS.line}></div>
              </div>
              <div className={skillsCSS.skill}>
                <h3>Python</h3>
                <div className={skillsCSS.line}></div>
              </div>
              <div className={skillsCSS.skill}>
                <h3>Spring Boot</h3>
                <div className={skillsCSS.line}></div>
              </div>
              <div className={skillsCSS.skill}>
                <h3>Spring Microservices</h3>
                <div className={skillsCSS.line}></div>
              </div>
              <div className={skillsCSS.skill}>
                <h3>MySQL and MongoDB</h3>
                <div className={skillsCSS.line}></div>
              </div>
          </div>
              </div>

          <div className={skillsCSS.skillsImg}>
             <img src={skillsImg} alt=""></img>
          </div>
   </div>
    )
}

export default Skills;