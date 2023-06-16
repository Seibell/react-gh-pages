import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  let incrementCount = () => {
 // To add later
  };
  let decrementCount = () => {
 // To add later
  };
  let resetCount = () => {
  // To add later
  }

return (
  <div className="app">
    <p>Count: {count}</p>
    <div className="buttons">
    </div>
  </div>
);
}

export default App;