import React, { useState } from "react";

function FunDay(props){

    const[count, setcount] = useState(0)
    const handleClick = ()=>{
        setcount(count+1)
    }



    return(
        <div>

            <h1>Movie name : {props.MovieName}</h1>
            <h1>Ticket No : {count}</h1>
            <button onClick={handleClick}>Add</button>

        </div>
    )
}

export default FunDay