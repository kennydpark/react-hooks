import React, { useState } from 'react';

export default function Accordion(props) {
  const { data } = props;
  const [active, setActive] = useState(null);
  const handleClick = i => {
    if (active === i) {
      return setActive(null)
    }
    setActive(i)
  }

  return (
    <div className='container'>
      <div className='accordion'>
        {data.map((topic, i) => (
          <div className='topic'>
            <div className='title' onClick={() => handleClick(i)}>
              <h2>{topic.title}</h2>
              <span>{active === i ? '-' : '+'}</span>
            </div>
            <div
              className={
                active === i ? 'body show' : 'body'
              }
            >
              {topic.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
