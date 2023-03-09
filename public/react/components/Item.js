import React from "react";
import apiURL from "../api";

export const Item = (props) => {
  async function fetchReq() {
    try {
      const res = await fetch(apiURL + "/items/" + props.item.id);
      const data = await res.json();
      props.setDetail(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // Image View
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        class
        style={{
          border: "1px solid rgb(36,38,44)",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          margin: "15px",
          borderRadius: "1.5rem",
          width: "42rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <>
          <img
            onClick={fetchReq}
            class="img-viewAll"
            src={props.item.image}
            alt={props.item.title}
            style={{
              cursor: "pointer",
              borderRadius: "2rem",
            }}
          />
          <h2
            onClick={fetchReq}
            style={{
              cursor: "pointer",
            }}
          >
            {props.item.title}
          </h2>
        </>
      </div>
    </section>
  );
};
