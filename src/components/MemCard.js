import React from "react";

const MemCard = props => (

  <div key={props.id} role="img" aria-label="click item" className={props.name + " click-item"}></div>

);

export default MemCard;


