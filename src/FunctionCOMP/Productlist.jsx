import React, { useContext, useEffect, useState } from "react";
import Countcontext from "../Context/Countcontext";
import axios from "axios";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Productstyle.css";
export default function () {
  const { increment } = useContext(Countcontext);

  const [product, setproduct] = useState([]);

  useEffect(() => {
    handleapi();
  }, []);

  const handleapi = async () => {
    const res = await axios.get("https://fakestoreapi.com/products?limit=10");
    setproduct(res.data);
  };

  return (
    <div className="container">
      {product.map((pro,i) => (
        <div className="subcont">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pro.image} style={{height:"18rem"} }/>
          <Card.Body>
            <Card.Title>{pro.title}</Card.Title>
            <Card.Text>{pro.description}</Card.Text>
            <button onClick={increment}>Add to Cart</button>
          </Card.Body>
        </Card>
        </div>
      ))}
      </div>
  );
}
