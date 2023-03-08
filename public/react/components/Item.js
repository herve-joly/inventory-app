import React from "react";
import apiURL from "../api";

export const Item = (props) => {
  async function fetchReq() {
    try {
      const res = await fetch(apiURL + "/items/" + props.item.title);
      const data = await res.json();
      props.setDetail(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h3 onClick={fetchReq}>{props.item.title}</h3>
      <img src={props.item.image} alt={props.item.title} />
    </>
  );
};
