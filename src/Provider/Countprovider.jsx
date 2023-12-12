import React, { useState } from "react";
import Countcontext from "../Context/Countcontext";

export default function Countprovider({children}) {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  return (
    <div>
      <Countcontext.Provider value={{ count, increment }}>
        {children}
      </Countcontext.Provider>
    </div>
  );
}
