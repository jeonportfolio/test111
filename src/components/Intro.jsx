import React from "react";

import about from "../assets/img/about.jpg";


import { introText } from "../constants"

const Intro = () => {
  return (
    <section id="intro">
        <div className="intro__inner">
            <h1 className="intro__title">
                {introText.title}
            </h1>
            <div className="intro__lines" aria-hidden="true">  
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="intro__text">
                <div className="text">
                    <div>{introText.desc[0]}</div>
                </div>
                <div className="img">
                    <img src={about} alt="어바웃" />
                </div>
                <div className="mini__image">
                    <div className="img1">
                        <p>REACT.JS</p>
                    </div>
                    <div className="img2">
                        <p>REACT NATIVE</p>
                    </div>
                
                   
                    <div className="img3">
                        <p>NODE.JS </p>
                    </div>
                </div>
                <div className="mini__image2">
                    <div className="img1">
                        <p>HTML<br/>&CSS</p>
                    </div>
                    <div className="img2">
                        <p>SQL</p>
                    </div>
                
                   
                    <div className="img3">
                        <p>NODE.JS </p>
                    </div>
                </div>

            </div>
            <div className="intro__lines bottom" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    </section>

  )
}

export default Intro;