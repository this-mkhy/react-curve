import React, { useState, useEffect } from "react";
import './PomodoroTimer.css';
import styled, { keyframes } from 'styled-components';

const Message = styled.p`
  font-size: .8em;
  text-align: center;
  color: palevioletred;
  margin-top: 0rem
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 2rem;
`;

export default function Pomodoro({ time }) {
    const [minutes, setMinutes] = useState(time.focus);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    let minutes = displayMessage ? time.focus : time.break - 1;
                    let seconds = 59;
                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMessage(!displayMessage);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <>
            <div className="pomodoro">
                <div className="message">
                    <Message>< Rotate >⏳ </Rotate>{displayMessage ? "Break Time:" : "Focus Time:"}</Message>
                    {timerMinutes}:{timerSeconds}
                </div>
            </div>
        </>
    );
}