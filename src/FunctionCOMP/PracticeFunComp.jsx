import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function PracticeFunComp() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    handleapi();
  }, []);

  const handleapi = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setproduct(res.data);
  };
  return (
    <div>
      <h1>hiii</h1>
      {product.map((pro) => (
         <Card style={{ width: "18rem" }}>
         <Card.Img variant="top" src={pro.image} />
         <Card.Body>
           <Card.Title>{pro.title}</Card.Title>
           <Card.Text>{pro.description}</Card.Text>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
       </Card>
      ))}
    </div>
  );
}

export default PracticeFunComp;
