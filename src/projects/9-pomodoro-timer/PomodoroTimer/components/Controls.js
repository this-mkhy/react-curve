import { useState } from 'react';
import Pomodoro from './PomodoroTimer';
import Header from './Header'
import styled from 'styled-components';
import './../../../projects.css'
import { Link } from "react-router-dom";

import Code from './../../Code/Code';
import Desc from './../../Desc/Desc';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Input = styled.input.attrs(props => ({
    // we can define static props
    type: "text",

    // or we can define dynamic ones
    size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;


export default function Control() {
    const [start, setStart] = useState(false)
    const [time, setTime] = useState({
        focus: 25,
        break: 5
    })
    function handleStart() {
        setStart((prev => !prev))
    }

    function handleFocusTime(e) {
        const focusTime = e.target.value;
        setTime({ ...time, focus: focusTime });
    }
    function handleBreakTime(e) {
        const breakTime = e.target.value;
        setTime({ ...time, break: breakTime });
    }
    return (
        <div className="container">
            <div className="projectName">
                <Header />
                <div className="form">
                    <div>
                        <Input placeholder="Focus Time:(In minutes)" onChange={handleFocusTime} />
                        <Input placeholder="Break Time: In minutes" onChange={handleBreakTime} />
                    </div>
                    <Button onClick={handleStart}>{start ? 'Stop' : 'Start'}</Button>
                    {
                        start && <Pomodoro time={time} />
                    }
                </div>
            </div>
            <div className="description">
                <Desc />
                <Link className="homeLink" to="/">Home</Link>
                <Link className="homeLink" to="/colors" title='Display Colors'>Next</Link>
            </div>
            <div className="codeRight">
                <Code />
            </div>
        </div>
    )
}