import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Title from "./components/Title";
import friends from "./friends.json";

import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
  };

  /*sortEmployee = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter((friend) => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };*/

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
      <Container>

        <form className="search" style={{ alignContent: "auto" }}>
          <div className="form-group">
            <input
              value={this.state.userInput}
              name="userInput"
              type="text"
              className="form-control"
              placeholder="Search"
              id="employee"
              onChange={this.handleInputChange}
              style={{
                width: "100%",
                margin: "0 auto",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            />
          </div>
        </form>

        <div>
          <div className="row">
            <div className="col">
              <button className="card-btn">
                Employee Picture
              </button>
            </div>
            <div className="col">
              <button className="card-btn">Name</button>
            </div>
            <div className="col">
              <button className="card-btn">Phone</button>
            </div>
            <div className="col">
              <button className="card-btn">Email</button>
            </div>
            <div className="col">
              <button className="card-btn">DOB</button>
            </div>
          </div>
        </div>

        <FriendCard friends={this.state.friends} />
        </Container>
      </Wrapper>
    );
  }
}

export default App;
