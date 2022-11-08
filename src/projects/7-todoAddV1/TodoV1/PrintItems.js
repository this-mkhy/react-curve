import React from 'react';

import styles from './TodoAddV1.module.css' 

const {todoList, listItem, noItem} = styles

const PrintItems = (props) => {
  return (
    <div className='PrintItems'>
      {props.lists.length > 0 ? (
        props.lists.map((item) => (
          <ul className={todoList} key={item.id}>
            <li className={listItem}>{item.name}</li>
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
