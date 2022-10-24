import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((x,index)=>
      <div key={index}>
        <p>{x.name}</p>
        <ul>
          {x.movies.map((val,index) => <li key={index}>{val}</li>)}
        </ul>
      </div>)}
  </div>;
}

export default Directors;
