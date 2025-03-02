import React from "react";
import aboutCSS from './../About/About.module.css';
import aboutImg from './../../assets/profileImage.jpeg';

function About(){
    return(
        <div className={`${aboutCSS.AboutWrapper} section`}>
          <div className={aboutCSS.aboutContainer}>
            <h2>About Me</h2>
            <p>I am currently working as a SoftwareAnalyst at Capgemini. My focus is on designing and developing websites that look great and work well. I enjoy working with other web developers and designers to make websites that match the client’s brand and business objectives.</p>
               <div className={aboutCSS.skills}>
                  <h2>My Skills</h2>
          <div className={aboutCSS.skillWrapper}>
                        <div className={aboutCSS.skill}>
                          <h3>React JS</h3>
                          <div className={aboutCSS.line}></div>
                        <div className={aboutCSS.skill}>
                          <h3>HTML and CSS</h3>
                          <div className={aboutCSS.line}></div>
                        </div>
                        <div className={aboutCSS.skill}>
                          <h3>JavaScript</h3>
                          <div className={aboutCSS.line}></div>
                        </div>
                        <div className={aboutCSS.skill}>
                          <h3>Java</h3>
                          <div className={aboutCSS.line}></div>
                        </div>
                        <div className={aboutCSS.skill}>
                          <h3>Python</h3>
                          <div className={aboutCSS.line}></div>
                        </div>
                        <div className={aboutCSS.skill}>
                          <h3>Spring Boot</h3>
                          <div className={aboutCSS.line}></div>
                        </div>
                        <div className={aboutCSS.skill}>
                          <h3>Spring Microservices</h3>
                          <div className={aboutCSS.line}></div>
                        </div>
                        <div className={aboutCSS.skill}>
                          <h3>MySQL and MongoDB</h3>
                          <div className={aboutCSS.line}></div>
                        </div>
                        </div>
                    </div>
                    </div>
                        </div>
      <div className={aboutCSS.AboutImg}>
        <img src={aboutImg} alt=""></img>
        <div className={aboutCSS.Exp}>
          <h2>Software Analyst</h2>
      </div>
        </div>
      </div>

    )
}

export default About;