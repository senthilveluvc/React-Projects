import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApifetchComp() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    handlefetch();
  }, []);

  const handlefetch = async () => {
    let res = await axios.get("https://course-api.com/react-tours-project");
    let datas = await res.json();
    setdata(datas);
  };

  return (
    <>
      {data.map((inf, i) => (
        <div key={i}>
          <h1>Name :{inf.name}</h1>
          <p>{inf.info}</p>
          <img src={inf.image} />
        </div>
      ))}
    </>
  );
}
