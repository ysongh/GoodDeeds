import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
      return (
        <div className="user">
            <h1 className="center zeroMargin">Customers/Friends</h1>
            <div className="marginYLow">
              <p className="userPara">Available Donation Fund: 50USD</p>
              <p className="userPara">Donated Amount: 20USD</p>
            </div>
            <h3 className="userSectionTitle">Donation</h3>
            <div class="row">
              <div class="col s12 m12 l6">
                <h5 className="userSectionTitle centerIt">Nonprofit Organization</h5>
                <ol className="marginLeft">
                  <li className="userPara">Example</li>
                  <li className="userPara">Example</li>
                  <li className="userPara">Example</li>
                </ol>
              </div>
              <div class="col s12 m12 l6">
                <h5 className="userSectionTitle centerIt">Amount</h5>
                <ul>
                  <li className="userPara center">5 USD</li>
                  <li className="userPara center">10 USD</li>
                  <li className="userPara center">7 USD</li>
                </ul>
              </div>
            </div>
            <div className="right marginRight">
              <p className="userPara">Total: 22USD</p>
              <button className="waves-effect waves-light btn">Submit Donation</button>
            </div>
        </div>
      );
    }
}

export default Dashboard; 