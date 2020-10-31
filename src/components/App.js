import React, { Component, useState } from "react";
import "../styles/App.css";
import List from "./list";
class App extends Component {
  constructor(props) {
    super(props);
    this.list = [
      { key: "relativeListItem1", name: " Supratim" },
      { key: "relativeListItem2", name: "Indra" },
      { key: "relativeListItem3", name: "Ayan" },
      { key: "relativeListItem4", name: "Dipayan" },
      { key: "relativeListItem5", name: "Santanu" },
      { key: "relativeListItem6", name: "Souradip" }
    ];
  }
  render() {
    return (
      <>
        <ol>
          {this.list.map((ele) => (
            <li>
              <List key={ele.key} name={ele.name} />
            </li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
