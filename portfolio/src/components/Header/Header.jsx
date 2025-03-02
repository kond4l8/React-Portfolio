import React from "react";
import headerCSS from './../Header/Header.module.css';

import profileImage from './../../assets/profileImage-removebg.jpg'

function Header (){
    return(
        <div className={headerCSS.headerWrapper}>
            <div className={headerCSS.headerContainer}>
           <img src={profileImage} alt="profile_photo" />
           <h1>Hello 👋, I'M <span>Kondu Vinay</span></h1>

           <p>Welcome to my portfolio. I m a <strong> Java Full-stack + React developer.</strong></p>
           <div className={headerCSS.social}>
            <i className="ri-facebook-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-github-line"></i>
            <i className="ri-linkedin-line"></i>
           </div>
           <button>Download CV</button>
     </div>
        </div>
    )
}

export default Header