import React, { useState } from 'react';

function Form() {
  const [ name, setName ] = useState("");
  const handleName = (event) => {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={handleName}
          placeholder="Your Name"
          />
        <p>{name}</p>
      </form>
    </div>
  )
}

export default Form;
