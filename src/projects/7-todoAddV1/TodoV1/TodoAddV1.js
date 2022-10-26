import React, {useState} from 'react';
import { Link } from "react-router-dom";

import ItemForm from './ItemForm';
import PrintItems from './PrintItems';
 
import Code from '../Code/Code';
import Desc from '../Desc/Desc';

import './../../projects.css' 
import './TodoAddV1.css' 

const TodoAddV1 = () => {
    const [lists, setLists] = useState([])

    const handleAddItem = (item) => {
      item.id = lists.length + 1
      setLists([...lists, item])
    }

    return (
        <div className="container">
            <div className="projectName">
                <h2 style={{fontSize: '30px', color: '#3498db', marginTop: '10px'}}>Add to Todo</h2>
 
                <ItemForm addItem={handleAddItem} />
                <PrintItems lists={lists} />
              </div>
            <div className="description">
                <Desc />
                <Link className='homeLink' to="/summation" title='Sum Two Numbers'>Previous</Link>
                <Link className='homeLink' to="/">Home</Link>
                <Link className='homeLink' to="/todo-delete-v2" title='Delete from Todo'>Next</Link>
            </div> 
            <div className="codeRight">
                <Code />
            </div>  
      </div>
    );
}

export default TodoAddV1;
