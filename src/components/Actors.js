import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map((x,index)=>
      <div key={index}>
        <p>{x.name}</p>
        <ul>
          {x.movies.map((val,index) => <li key={index}>{val}</li>)}
        </ul>
      </div>)}
  </div>;
}

export default Actors;
