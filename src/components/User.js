import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      organizations: [],
      amountList: [],
      balance: 0,
      address: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    let url = `http://localhost:8081/api/v1/balance/0xd851C19d71Ea51F8E65333f0d61EDEb41d37313f`;
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        this.setState({
          balance: data.balance,
          address: data.addr
        })
    })
    .catch((err) => {
        console.log('There was a problem with your fetch request' + err.message);
    });
  }

  onChange(e){
    const name = e.target.name;
    const value = e.target.value;
    let newAmountList = this.state.amountList;

    newAmountList.forEach(amount => {
      if(amount.id === parseInt(name)){
        amount.worth = parseInt(value)
      }
    });

    this.setState({amountList: newAmountList});
  }

  addListofOrganization(name){
    let newOrganizations = this.state.organizations;
    newOrganizations.push({id: newOrganizations.length + 1, name: "test1"});
    this.setState({organizations: newOrganizations});

    let newAmountList = this.state.amountList;
    newAmountList.push({id: newAmountList.length + 1, worth: ""});
    this.setState({amountList: newAmountList});
  }

  getTotalAmount(){
    let total = 0;
    this.state.amountList.forEach(function(amount){
      total += amount.worth;
    })
    return total;
  }

  sendDonation(){
    console.log("You send this amount " + this.getTotalAmount());
  }

    render() {
      return (
        <div className="user">
          <br></br>
            <h3 className="center zeroMargin">Customers Page</h3>
            <div className="marginYLow">
              <p className="userPara">Available Donation Fund: {this.state.balance}USD</p>
              <p className="userPara">Address: {this.state.address}</p>
              <p className="userPara">Donated Amount: 0USD</p>
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
                            <input
                              placeholder="USD"
                              name={amount.id}
                              type="number"
                              className="center"
                              min="1"
                              max="100"
                              value={amount.worth}
                              onChange={this.onChange} />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="user__submitArea marginRight">
                <p className="userPara">Total: {this.getTotalAmount()}USD</p>
                <button className="waves-effect waves-light btn" onClick={() => this.sendDonation()}>Submit Donation</button>
              </div>
            </div>
            
            <div>
              <h3 className="userSectionTitle">Forward Tokens to your Friends</h3>
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