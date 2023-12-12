import React, { Component } from "react";

export default class Ticket extends Component {
  state = {
    Movie: "Leo",
    count: 0,
  };

  increaseticket = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseticket = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <h1>Movie name : {this.props.movie}</h1>
        <p>Ticket no :{this.state.count}</p>
        <button onClick={this.increaseticket}>increase</button>
        <button onClick={this.decreaseticket}>decrease</button>
      </>
    );
  }
}
