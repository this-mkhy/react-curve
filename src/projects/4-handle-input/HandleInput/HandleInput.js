import React, {useState} from 'react';
import { Link } from "react-router-dom";

import Code from '../Code/Code';
import Desc from '../Desc/Desc';

import './../../projects.css' 
import styles from './HandleInput.module.css' 

const {input, inputValue} = styles

const HandleInput = () => {
    const [value, setValue] = useState("");

    return (
        <div className="container">
            <div className="projectName">
                <h2 style={{fontSize: '30px', color: '#3498db', marginTop: '10px'}}>Handle Input</h2>
                <input
                    type="text"
                    className={input}
                    placeholder="Enter Your Title"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <p className={inputValue}>{value}</p>

            </div>
            <div className="description">
                <Desc />
                <Link className='homeLink' to="/colors" title='Display Colors'>Previous</Link>
                <Link className='homeLink' to="/">Home</Link>
                <Link className='homeLink' to="/disable-submit" title='Disable Button'>Next</Link>
            </div> 
            <div className="codeRight">
                <Code />
            </div> 
      </div>
    );
}

export default HandleInput;
