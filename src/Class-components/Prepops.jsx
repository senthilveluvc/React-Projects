import React, { Component } from "react";

export default class Prepops extends Component {
  state = {
    count: 0,
    Numbers: 0,
  };

  componentDidMount(){
    console.log("DidMount");
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  
  componentDidUpdate(pp){
    console.log("DidUpdate", pp.value);
  }

 

  render() {
    console.log("Render");
    return (
      <div>
        <h1>count:{this.state.count}</h1>
        <button onClick={this.handleClick}>CountClick</button>

      </div>
    );
  }
}
