import React, { Component } from 'react';

import Logo from '../img/goodeedslogo.png';

class Dashboard extends Component {
    render() {
      return (
        <div>
            <h1>Dashboard</h1>
            <img src={Logo} alt="Logo"/>
        </div>
      );
    }
}

export default Dashboard; 