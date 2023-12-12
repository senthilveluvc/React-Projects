import React, { useContext } from "react";
import Countcontext from "../Context/Countcontext";

export default function () {
  const { count } = useContext(Countcontext);

  return (
    <div>
      <h1>Cart : {count} </h1>
    </div>
  );
}
