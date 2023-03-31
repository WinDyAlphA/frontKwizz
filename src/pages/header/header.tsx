import React from "react";
import {Link} from 'react-router-dom';
import "./header.css";

function Header(){
    return(
        <div className="headerWrapper">
            <ul>
                <li>
                <Link to={`Jouer`}>
                    <div>Jouez</div>
                </Link>
                </li>
                <li>
                <Link to={`Creer`}>
                    <div>Creer</div>
                </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header