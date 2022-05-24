import React, {useState} from 'react';
import { Link } from "react-router-dom";

import Code from '../Code/Code';
import Desc from '../Desc/Desc';

import './../../projects.css' 
import './DisableButton.css' 

const DisableButton = () => {
    const [value, setValue] = useState("");

    return (
        <div className="container">
            <div className="projectName">
                <h2 style={{fontSize: '30px', color: '#3498db', marginTop: '10px'}}>Disable Button</h2>
                <input
                    type="text"
                    placeholder="Enter Your Title"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <br />
                <button className="submitBtn" disabled={value.length < 1}>Submit</button>
                <p className="inputValue">{value}</p>
            </div>
            <div className="description">
                <Desc />
                <Link to="/">Home</Link>
            </div> 
            <div className="codeRight">
                <Code />
            </div> 
      </div>
    );
}

export default DisableButton;
