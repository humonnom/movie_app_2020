import React from "react";

function Food({ fav }) {
  return <h1> I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Awesome!!!</h1>
      <Food fav='Udong' />
      <Food fav='Kinchi' />
    </div>
  );
}

export default App;
