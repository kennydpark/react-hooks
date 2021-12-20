import React, { useState, useEffect } from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = () => {
    setCount(count + 1)
  }

  const handleClick2 = () => {
    setCount2(count2 + 1)
  }

  useEffect(() => {
    console.log(`You have clicked the button ${count} times.`)
  }, [count]);

  useEffect(() => {
    console.log(`You have clicked the second button ${count2} times.`)
  }, [count2]);

  return (
    <div>
      <button onClick={handleClick1}>Click me1</button>
      <button onClick={handleClick2}>Click me2</button>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me</button> */}
    </div>
  );
}
