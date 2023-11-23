import React from "react";
import './styles.css'

function Header(){
    return(
        <header>
            <div className="logo">
                <img src="https://seeklogo.com/images/R/risingwave-icon-logo-837E37238C-seeklogo.com.png" alt="some"  className="Logo" />
            </div>
            <nav className="Navbar">
            <a href="#" className="Nav-link">Home</a>
            <a href="#" className="Nav-link">Add Friends</a>
            <a href="#" className="Nav-link">About me</a>
            <a href="#" className="Nav-link">Subscribe</a>
            </nav>
        </header>
    )
}
export default Header;