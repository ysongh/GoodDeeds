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
              
            <div>
              <h3 className="userSectionTitle">Donation</h3>
              <div class="row">
                <div class="col s12 m12 l6">
                  <h5 className="userSectionTitle centerIt">Nonprofit Organization</h5>
                  <ol className="marginLeft">
                    <li className="userPara marginYHigh">
                      <button className="waves-effect waves-light btn">Drop List</button>
                    </li>
                    <li className="userPara marginYHigh"></li>
                    <li className="userPara marginYHigh"></li>
                  </ol>
                </div>
                <div class="col s12 m12 l6">
                  <h5 className="userSectionTitle centerIt">Amount (USD)</h5>
                  <ul>
                    <li className="userPara">
                      <div class="input-field col s6 offset-s3">
                        <input placeholder="USD" id="donation1" type="number" className="center" />
                      </div>
                    </li>
                    <li className="userPara">
                      <div class="input-field col s6 offset-s3">
                        <input placeholder="USD" id="donation2" type="number" className="center" />
                      </div>
                    </li>
                    <li className="userPara">
                      <div class="input-field col s6 offset-s3">
                        <input placeholder="USD" id="donation3" type="number" className="center" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="user__submitArea marginRight">
                <p className="userPara">Total: 22USD</p>
                <button className="waves-effect waves-light btn">Submit Donation</button>
              </div>
            </div>
            
            <div>
              <h3 className="userSectionTitle">Forward your fund to Friends</h3>
              <ol className="marginLeft">
                <li className="userPara marginYHigh">Address</li>
                <li className="userPara marginYHigh">Address</li>
                <li className="userPara marginYHigh">Address</li>
              </ol>
            </div>
        </div>
      );
    }
}

export default Dashboard; 