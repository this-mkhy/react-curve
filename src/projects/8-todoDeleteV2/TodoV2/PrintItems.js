import React from 'react';

import styles from './TodoDeleteV2.module.css' 

const {todoList, listItem, noItem} = styles

const PrintItems = (props) => {
  return (
    <div className="PrintItems">
      {props.lists.length > 0 ? (
        props.lists.map((item) => (
          <ul className={todoList} key={item.id}>
            <li className={listItem}>{item.name}</li>
            <button onClick={() => props.deleteItem(item.id)} style={{ backgroundColor: 'red' }}>
              Delete
            </button>
          </ul>
        ))
      ) : (
        <div className={noItem}>
          No items
        </div>
      )}
    </div>
  );
}

export default PrintItems;
