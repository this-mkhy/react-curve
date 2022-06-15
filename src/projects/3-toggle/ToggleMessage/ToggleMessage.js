import React, {useState} from 'react';
import { Link } from "react-router-dom";

import Code from '../Code/Code';
import Desc from '../Desc/Desc';

import './../../projects.css' 
import './toggleMessage.css' 

//Show AND Hide

const ToggleMessage = () => {
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);

    const topics = [
        {id: 1, name: 'Javascript'},
        {id: 2, name: 'Reactjs'},
        {id: 3, name: 'Tailwind'},
        {id: 4, name: 'Redux'},
        {id: 5, name: 'Next'}
    ]

    const showTopics = topics.map(topic => 
        <li key={topic.id}>
            <span>{topic.name}</span>
        </li>)

    return (
        <div className="container">
            <div className="projectName">
                <h2 style={{fontSize: '30px', color: '#3498db', marginTop: '10px'}}>Toggle</h2>
                <div>
                    <button onClick={() => setShow1(!show1)}>
                        {show1 ? "Hide Welcome" : "Show Welcome"}
                    </button>
                    {show1 && <h2>Hi, How are you ? </h2>}
                </div>
                <div>
                    <button onClick={() => setShow2(!show2)}>
                        {show2 ? "Hide Introduction" : "Introduction"}
                    </button>
                    {show2 && <h2>I'm Mr Chatbot 😎 <br />Nice to meet you! 👋</h2>}
                </div>
                <div>
                    <button onClick={() => setShow3(!show3)}>
                        {show3 ? "Hide topics" : "Show topics"}
                    </button>
                    {show3 && <h4>{showTopics}</h4>}
                </div>

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

export default ToggleMessage;
