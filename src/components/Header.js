import React from 'react';
import Typed from "react-typed";

function Header() {
    return (
        <div className="header-wraper" >
            <div className="main-info">
                <h1>web development and promotions</h1>
                <Typed
                 className="typed-text"
                 strings={["Web Design", "Web Development", "WordPress sites", "UI/UX Designs" ]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>  
        </div>
    )
}

export default Header;
