import React from "react";

function Row(props) {
  console.log(props);
  return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;

}

export default Row;
// return <div className={`row${props.fluid ? "-fluid" : ""}`} isAylanCool={props.isAylanCool} number={props.number} />;