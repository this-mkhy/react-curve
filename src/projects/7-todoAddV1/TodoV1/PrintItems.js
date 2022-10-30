import React from 'react';

import './TodoAddV1.css' 

const PrintItems = (props) => {

  const complete = (ev) => {
    ev.target.style.textDecoration='line-through';
  }

  return (
    <div className="PrintItems">
      {props.lists.length > 0 ? (
        props.lists.map((item) => (
          <ul className='todoList' key={item.id}>
            <li className='listItem' onClick={complete}>{item.name}</li>
          </ul>
        ))
      ) : (
        <div className='no-item'>
          No items
        </div>
      )}
    </div>
  );
}

export default PrintItems;
