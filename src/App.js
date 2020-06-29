import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Row from "./components/Row";
import Col from "./components/Col";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
  };

  removeFriend = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter((friend) => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>

        <form className="search" style={{alignContent: "auto"}}>
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
            />{" "}
          </div>{" "}
        </form>

        {this.state.friends.map((friend) => (
          <Row>

          <FriendCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />


         </Row>

        ))}
      </Wrapper>
    );
  }
}

export default App;
