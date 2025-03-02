import React from "react";
import serviceCSS from './../Services/Services.module.css';

/* npm install react-tilt --legacy-peer-deps */
import { Tilt } from "react-tilt";

function Services(){

  const defaultOptions = {
    max:10,
    speed:0.05,
    scale:1.0,
  }

    return(
        <div className={`${serviceCSS.ServiceWrapper} section`}>
           <h2>What I DO</h2>
           <div className={serviceCSS.ServiceCards}>
            <Tilt options={defaultOptions}>
            <div className={serviceCSS.ServiceCard}>
                <h3>Web Development</h3>
                <i className="ri-database-line"></i>
                <p>I like creating websites using react.</p>
                <h4>Learn More <i className="ri-arrow-right-line"></i></h4>
            </div>
            </Tilt>
            <Tilt options={defaultOptions}>
            <div className={serviceCSS.ServiceCard}>
                <h3>AWS Cloud</h3>
                <i className="ri-cloud-line"></i>
                <p>Have good knowledge in Aws CLF-L1 Exam</p>
                <h4>Learn More <i className="ri-arrow-right-line"></i></h4>
            </div>
            </Tilt>
            <Tilt options={defaultOptions}>
            <div className={serviceCSS.ServiceCard}>
                <h3>App Developer</h3>
                <i className="ri-cloud-line"></i>
                <p>Beginner as an Android developer </p>
                <h4>Learn More <i className="ri-arrow-right-line"></i></h4>
            </div>
            </Tilt>
           </div>
        </div>
    )
}
export default Services;