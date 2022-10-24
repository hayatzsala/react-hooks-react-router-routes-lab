import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((x,index)=>
      <div key={index}>
        <p>{x.title}</p>
        <p>{x.time}</p>
        <ul>
          {x.genres.map((val,index) => <li key={index}>{val}</li>)}
        </ul>
      </div>)}
  </div>;
}

export default Movies;
