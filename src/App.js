import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import Cards from "./Components/Cards";
import { Router } from "@reach/router";
import UserSelecter from "./Components/UserSelecter";
import * as data from "./data/clients.json";
const users = data.default;

class App extends Component {
  state = { selectedUser: users[0] };

  setUser = (userID) => {
    this.setState({ selectedUser: users[userID + 1] });
  };

  render() {
    return (
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="main-element ms-Grid-col ms-sm12 ms-xl12">
            <UserSelecter
              setUser={this.setUser}
              users={users}
              selectedUser={this.state.selectedUser}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm2 ms-xl2">
            <Navigation />
          </div>
          <div className="main-element ms-Grid-col ms-sm10 ms-xl10">
            <div className="ms-Grid-row">
              <Router>
                <Cards
                  path="/dashboard"
                  selectedUser={this.state.selectedUser}
                />
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
