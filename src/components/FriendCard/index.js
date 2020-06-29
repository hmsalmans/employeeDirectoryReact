import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div>
        <img alt={props.name} src={props.image} className={{width:"25%"}} />&nbsp;&nbsp;&nbsp;
        <strong>Name:</strong> {props.name}  &nbsp; 
        <strong>Occupation:</strong> {props.occupation} &nbsp;
        <strong>Phone:</strong> {props.phone}
        
      
      
      <span onClick={() => props.sortEmployee(props.id)} className="remove">
        
      </span>
    </div>
  );
}

export default FriendCard;
