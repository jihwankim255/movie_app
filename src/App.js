import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name : "Kimchi",
    image : "a"
  },
  {
    name: "Samgyeopsal",
    image : "a"
  },
  {
    name : "Bibimbap",
    image : "a"
  },
  {
    name : "Doncasu",
    image : "a"
  },
  {
    name : "Kimbap",
    image : "a"
  }
]

function App() {
  return (
  <div>
    {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
  </div>
  );
}

export default App;