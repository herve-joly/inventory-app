import React from "react";

export function Detail(props) {
  return (
    <>
      <h3>{props.item.title}</h3>
      <h4>Price: {props.item.price}</h4>
      <h4>Description: {props.item.description}</h4>
      <h4>Category: {props.item.category}</h4>
      <img src={props.item.image} alt={props.item.title} />
      <button onClick={() => props.setDetail()}>Back to Items Store</button>
    </>
  );
}
