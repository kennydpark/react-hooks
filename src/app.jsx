import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("foo");
  const changeName = () => {
    setName("bar");
  };

  return (
    <div>
      <p>My name is {name}.</p>
      <button onClick={changeName}> Click me </button>
    </div>
  );
}

export default App;
