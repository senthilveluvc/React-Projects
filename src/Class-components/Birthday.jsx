import React, { Component } from "react";

export default class Birthday extends Component {
  state = {
    birth: [
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
      {
        id: 3,
        name: "Larry Little",
        age: 36,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      },
      {
        id: 4,
        name: "Sean Walsh",
        age: 34,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      },
      {
        id: 5,
        name: "Lola Gardner",
        age: 29,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      },
    ],
  };

  render() {
    return (
      <>
        <div className="main">
          <div className="content">
            <h1 className="Topic">{this.state.birth.length} Birthdays Today</h1>
            {this.state.birth.map((br, i) => (
              <div className="sub">
                <img className="image" src={br.image} />
                <div className="nameAge">
                  <h2>{br.name}</h2>
                  <h2 className="age">{br.age} years</h2>
                </div>
              </div>
            ))}
            <div className="last">
              <button className="button">Clear All</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
