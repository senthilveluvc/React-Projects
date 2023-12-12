import React, { Component } from "react";

export default class Model extends Component {
  state = {
    array: [
      {
        id: 1,
        name: "Bertie Yates",
        age: 29,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
      },
      {
        id: 2,
        name: "Hester Hogan",
        age: 32,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
      },
    ],

    count: 0,
  };

  addticket = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h1>Movie count {this.state.count}</h1>
        <button onClick={this.addticket}>add1</button>

        <h1>{this.state.array.length} Model</h1>
        <h2>Practice session</h2>

        {this.state.array.map((arr) => (
          <>
            <img src={arr.image} width="100pt" height="100pt" />
            <h2>{arr.name}</h2>
            <h2>{arr.age}</h2>
          </>
        ))}
      </>
    );
  }
}
