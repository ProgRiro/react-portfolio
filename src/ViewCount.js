import React from "react";
import "./ViewCount.css";

function ViewCount(props) {
  return <p className="count-number">{props.count}</p>;
}

export default ViewCount;
