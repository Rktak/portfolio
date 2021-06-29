import React from 'react'
import Typed from "react-typed";
const Header = () => {
    return (
        <div className="header-wraper" id="header">
            <div className="main-info">
                <h1>Hi, I am Rounak kumar tak</h1>
                <h1>Web Developer</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design","Data structure", "Web Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#contact" className="btn btn-secondary">CONTACT ME</a>
            </div>
        </div>
    )
}

export default Header
