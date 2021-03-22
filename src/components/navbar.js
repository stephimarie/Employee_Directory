import React from "react";
import { NavLink } from "react-router-dom";
import "";

function Navbar() {
    return (
        <nav className="topNav">
            <a>
                <NavLink to="/" activeClassName="active" exact={true}>
                    About
                </NavLink>
            </a>
            <a>
            </a>
        </nav>
    )
}