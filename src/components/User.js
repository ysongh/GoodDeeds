import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      organizations: [],
      amountList: []
    };
  }
  addListofOrganization(name){
    let newOrganizations = this.state.organizations;
    newOrganizations.push({id: newOrganizations.length + 1, name: "test1"});
    this.setState({organizations: newOrganizations});

    let newAmountList = this.state.amountList;
    newAmountList.push({id: newAmountList.length + 1, name: "donation" + newAmountList.length + 1});
    this.setState({amountList: newAmountList});
  }

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
              <div className="row">
                <div className="col s12 m12 l6">
                  <h5 className="userSectionTitle centerIt">Nonprofit Organization</h5>
                  <ol className="marginLeft">
                    {this.state.organizations.map(organization => {
                      return <li className="userPara marginYHigh" key={organization.id}>{organization.name}</li>
                    })}
                  </ol>
                  <button className="waves-effect waves-light btn" onClick={() => this.addListofOrganization("test")}>Drop List</button>
                </div>
                <div className="col s12 m12 l6">
                  <h5 className="userSectionTitle centerIt">Amount (USD)</h5>
                  <ul>
                    {this.state.amountList.map(amount => {
                      return (
                        <li className="userPara" key={amount.id}>
                          <div className="input-field col s6 offset-s3">
                            <input placeholder="USD" id={amount.name} type="number" className="center" />
                          </div>
                        </li>
                      );
                    })}
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