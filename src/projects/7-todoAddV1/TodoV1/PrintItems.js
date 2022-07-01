import React from 'react';

import './TodoAddV1.css' 

const PrintItems = (props) => {
  return (
    <div className="PrintItems">
      {props.lists.length > 0 ? (
        props.lists.map((item) => (
          <ul className='todoList' key={item.id}>
            <li className='listItem'>{item.name}</li>
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
