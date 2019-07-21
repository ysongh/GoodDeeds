import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      organizations: [],
      amountList: [],
      balance: 0,
      address: "",
      selectOrganization: "",
      friendAddress: "",
      friendBalance: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
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

  onSelect(e){
    const value = e.target.value;
    console.log(value);

    let url = `http://localhost:8081/api/v1/balance/${value}`;
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        this.addListofOrganization(data.addr, data.balance)
    })
    .catch((err) => {
        console.log('There was a problem with your fetch request' + err.message);
    });
  }

  addListofOrganization(address, balance){
    let newOrganizations = this.state.organizations;
    newOrganizations.push({id: newOrganizations.length + 1, address: address, balance: balance});
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
                      return <li className="marginYHigh" key={organization.id}>
                          <p>{organization.address}</p>
                          <p>Balance: {organization.balance}</p>
                        </li>
                    })}
                  </ol>

                  <select
                      name="selectOrganization"
                      value={this.state.selectOrganization}
                      onChange={this.onSelect}
                      className="btn waves-light"
                  >
                      <option value="">Select Company</option>
                      <option value="0xB9E810a2e4A9DC7AcD7E7A7417a7CAC3243727aB">FindSport2Play</option>
                      <option value="0xB6F79Ca56d7D303cE4bE7A02F8663573AA649Ac8">DVRSTY</option>
                      <option value="0xEA4DF38D031461ec4Bb79478CfDcd8e65FA5A738">Good Deeds</option>
                  </select>

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

              <div className="row">
                <div className="col s6">
                  <input
                    id="email_inline"
                    name="friendAddress"
                    type="text"
                    className="validate"
                    placeholder="Friend Address"
                    value={this.state.friendAddress}
                    onChange={this.onChange} />
                </div>
                <div className="col s6">
                  <input
                    id="email_inline"
                    name="donateAmount"
                    type="number"
                    className="validate"
                    placeholder="Donate Amount"
                    value={this.state.donateAmount}
                    onChange={this.onChange} />
                </div>
              </div>

              <button
                className="waves-effect waves-light btn"
                onClick={() => this.checkCustomerBalance()}>
                  Find Your Friend Balance
              </button>
              <button
                className="waves-effect waves-light btn"
                onClick={() => this.donateToCustomer()}>
                  Donate
              </button>
            </div>
        </div>
      );
    }
}

export default Dashboard; 