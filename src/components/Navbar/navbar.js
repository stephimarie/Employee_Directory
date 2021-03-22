import React from "react";
// import { NavLink } from "react-router-dom";
import "../navbar.css";

function Navbar() {
    return (
        <nav className="topNav">
            <a>
                <NavLink to="/" activeClassName="active" exact={true}>
                    About
                </NavLink>
            </a>
            <a>
                <NavLink to="/employee-directory" activeClassName="active">
                    Employee Directory
                </NavLink>
            </a>
        </nav>
    );
}
export default Navbar