import React, {useState} from 'react';
import { Link } from "react-router-dom";

import Code from '../Code/Code';
import Desc from '../Desc/Desc';

import './../../projects.css' 
import './SumTwoNum.css' 

const SumTwoNum = () => {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [summation, setSummation] = useState(0);
  
    function calculate() {
        setSummation(number1 + number2);
    }

    return (
        <div className="container">
            <div className="projectName">
                <h2 style={{fontSize: '30px', color: '#3498db', marginTop: '10px'}}>Sum Two Numbers</h2>
                <input
                    placeholder="First Number"
                    type="number"
                    value={number1}
                    onChange={(ev) => setNumber1(+ev.target.value)}
                />
                <input
                    placeholder="Second Number"
                    type="number"
                    value={number2}
                    onChange={(ev) => setNumber2(+ev.target.value)}
                />
                <br />
                <button className="submitBtn" onClick={calculate}>Sum Two Numbers</button>
                <p className="inputValue">Summation  : {summation || "0"}</p>
            </div>
            <div className="description">
                <Desc />
                <Link className='homeLink' to="/">Home</Link>
            </div> 
            <div className="codeRight">
                <Code />
            </div>  
      </div>
    );
}

export default SumTwoNum;
