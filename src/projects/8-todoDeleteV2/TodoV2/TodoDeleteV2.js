import React, {useState} from 'react';
import { Link } from "react-router-dom";

import ItemForm from './ItemForm';
import PrintItems from './PrintItems';
 
import Code from '../Code/Code';
import Desc from '../Desc/Desc';

import './../../projects.css' 
import './TodoDeleteV2.module.css' 

const TodoDeleteV2 = () => {
    const [lists, setLists] = useState([])

    const handleAddItem = (item) => {
      item.id = lists.length + 1
      setLists([...lists, item])
    }

    const handleDeleteItem = (id) => {
      setLists(lists.filter((item) => item.id !== id))
    }
  
    return (
        <div className="container">
            <div className="projectName">
                <h2 style={{fontSize: '30px', color: '#3498db', marginTop: '10px'}}>Delete from Todo</h2>
 
                <ItemForm addItem={handleAddItem} />
                <PrintItems lists={lists} deleteItem={handleDeleteItem}/>
              </div>
            <div className="description">
                <Desc />
                <Link className='homeLink' to="/todo-add-v1" title='Add to Todo'>Previous</Link>
                <Link className='homeLink' to="/">Home</Link>
            </div> 
            <div className="codeRight">
                <Code />
            </div>  
      </div>
    );
}

export default TodoDeleteV2;
