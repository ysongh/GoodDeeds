import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/goodeedslogo.png';

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
                <img src={Logo} className="dashboard__logo" alt="Logo"/>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/user">User</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;