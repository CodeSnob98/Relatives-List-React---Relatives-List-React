import React, { Component, useState } from "react";
import "../styles/App.css";
class App extends Component {
  render() {
    let list = [" Supratim", "Indra", "Ayan", "Dipayan", "Santanu", "Souradip"];
    return (
      <>
        <ol kye="relativeList">
          {list.map((ele, index) => (
            <li key={`relativeListItem${index + 1}`}>{ele}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
