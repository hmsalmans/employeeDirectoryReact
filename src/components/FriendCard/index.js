import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div>
        <img alt={props.name} src={props.image} className={{width:"100px"}} />
      
      <div className="content">
        
            <strong>Name:</strong> {props.name}
          
            <strong>Occupation:</strong> {props.occupation}
          
            <strong>Phone:</strong> {props.phone}
        
      </div>
      <span onClick={() => props.sortEmployee(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
