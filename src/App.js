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
    friends: friends,
     fliFriends: friends
    
  };



  filterEmployee = (event) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const userSerch = event.target.value.toUpperCase();


   const newOne = this.state.friends.filter((friend) => friend.name.toUpperCase().includes(userSerch));
    // Set this.state.friends equal to the new friends array
    this.setState({ fliFriends: newOne });
    
  };
//sorting of an array of objects https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/

 updateSort = (event) => {
   const chosen = event.target.textContent;
   console.log(chosen); 
   const sorted = this.state.fliFriends.sort((a, b) => (a.name > b.name) ? 1 : -1) //
   this.setState ({fliFriends: sorted})
}
 
updateSort1 = (event) => {
  const chosen = event.target.textContent;
  console.log(chosen); 
  const sorted = this.state.fliFriends.sort((a, b) => (a.phone > b.phone) ? 1 : -1) //
  this.setState ({fliFriends: sorted})
}
updateSort2 = (event) => {
  const chosen = event.target.textContent;
  console.log(chosen); 
  const sorted = this.state.fliFriends.sort((a, b) => (a.email > b.email) ? 1 : -1) //
  this.setState ({fliFriends: sorted})
}

updateSort3 = (event) => {
  const chosen = event.target.textContent;
  console.log(chosen); 
  const sorted = this.state.fliFriends.sort((a, b) => (a.dob > b.dob) ? 1 : -1) //
  this.setState ({fliFriends: sorted})
}


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
       {/* <Row fluid isAylanCool number={5}/>*/}
      <Container>

        <form className="search" style={{ alignContent: "auto" }}>
          <div className="form-group">
            <input
              
              name="userInput"
              type="text"
              className="form-control"
              placeholder="Search by name"
              id="employee"
              onChange={this.filterEmployee}
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
              <button type="button" className="btn btn-link" onClick={ this.updateSort }>Name</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-link" onClick={ this.updateSort1 }>Phone</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-link" onClick={ this.updateSort2 }>Email</button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-link" onClick={ this.updateSort3 }>DOB</button>
            </div>
          </div>
        </div>

        <FriendCard friends={this.state.fliFriends} />
        </Container>
      </Wrapper>
    );
  }
}

export default App;
