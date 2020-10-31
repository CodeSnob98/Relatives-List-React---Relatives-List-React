import React from "react";
import "./styles.css";

export default function List(props) {
  const { name } = { ...props };
  return (
    <>
      <h4>{name}</h4>
    </>
  );
}
