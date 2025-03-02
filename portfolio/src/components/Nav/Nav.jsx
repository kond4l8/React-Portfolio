import React, { useRef } from "react";

// imports
import navCSS from './../Nav/Nav.module.css';


function Nav(){

    // Dark Light Mode
   
    const DarkMode = () =>{
        document.querySelector('body').setAttribute('data-theme','Dark')
    }
    const LightMode = () =>{
        document.querySelector('body').setAttribute('data-theme','Light')
    }

    DarkMode();


     const ThemeHandler =()=>{
        if(document.querySelector('body').getAttribute('data-theme')==='Dark'){
          LightMode();
        }
        else{
           DarkMode();
        }
     }



   const Menu = useRef();

   const menuHandler = () =>{
     Menu.current.classList.toggle(navCSS.activeNav);
   }

    return(

        // using nav css directly
        <div className={navCSS.Nav}>

         <div className={navCSS.logo}>
            <a href="/">Vinay</a>
          </div>
           
          <ul ref={Menu}>
            <li><a href="/"><i className="ri-home-3-line"></i>Home</a></li>
            <li><a href="/about"><i className="ri-user-line"></i>About</a></li>
            <li><a href="/service"><i className="ri-instance-line"></i>Services</a></li>
            <li><a href="/portfolio"><i className="ri-id-card-line"></i>Portfolio</a></li>
            <li><a href="/Blogs"><i className="ri-news-line"></i>Blogs</a></li>
            <li><a href="/contact"><i className="ri-phone-line"></i>Contact</a></li>
          </ul> 

          <div className={navCSS.NavBtns}>
           <i className="ri-moon-line" onClick={ThemeHandler}></i>
           <i className="ri-menu-4-line" onClick={menuHandler}></i>
          </div>
        </div>
    )
}

export default Nav;