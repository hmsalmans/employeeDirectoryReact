import React from "react";
import "./style.css";




    function FriendCard(props) { 
      return (props.friends.map(friend => (        
      <div className="row" key={friend.id}>       
       <div className="col img-fluid" >         
        <img alt={friend.name} src={friend.image} />
        </div>        
        <div className="col">{friend.name}</div>        
        <div className="col">{friend.phone}</div>       
         <div className="col">{friend.email}</div>       
          <div className="col">{friend.dob}</div>      
       </div>      )));}
    export default FriendCard;






