import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/goodeedslogo.png';

const Nav = () => {
    return (
        <nav>
            <div class="nav-wrapper">
            <Link to="/" class="brand-logo">
                <img src={Logo} className="dashboard__logo" alt="Logo"/>
            </Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/">Dashboard</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;