import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Bootstrap extends Component {
  state = {
    details: [],
  };

  fetchapi = fetch("https://fakestoreapi.com/products")
    .then((res) => {
      return res.json();
    })
    .then((output) => {
      this.setState({ details: output });
    })
    .catch((err) => {
      console.log(err);
    });

  render() {
    return (
      <div className="cardList">
        {this.state.details.map((data) => (
          <>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={data.image} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
    );
  }
}
