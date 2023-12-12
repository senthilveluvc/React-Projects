import React, { Component } from "react";

export default class List extends Component {
  state = {
    Persondetails: [
      { name: "Senthil", phone: 1234567890, address: "Tiruchengode" },
      { name: "Anbu", phone: 1234567809, address: "Pudhukottai" },
      { name: "Arun", phone: 1234567098, address: "Kancheepuram" },
    ],
  };
  render() {
    return (
      <>
        {this.state.Persondetails.map((details) => (
          <h3>{details.address}</h3>
        ))}
      </>
    );
  }
}
