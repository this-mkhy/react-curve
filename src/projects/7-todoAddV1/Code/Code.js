import React, {useState} from 'react';
import styles from '../TodoV1/TodoAddV1.module.css' 

const {toggleBtn} = styles

function Code() {
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    return (
        <div className="code">        
            <div>
                <button className={toggleBtn} onClick={() => setShow1(!show1)}>
                    {show1 ? "Hide TodoAdd-V1 Component" : "Show TodoAdd-V1 Component"}
                </button>
                {show1 && <img height={680} width={500} src="https://i.imgur.com/9N7NXz3.png" alt="this is TodoAdd-V1 code" />}

            </div>
            <div>
                <button className={toggleBtn} onClick={() => setShow2(!show2)}>
                    {show2 ? "Hide ItemForm Component" : "Show ItemForm Component"}
                </button>
                {show2 && <img height={680} width={500} src="https://i.imgur.com/69DXfWl.png" alt="this is ItemForm code" />}
            </div>
            <div>
                <button className={toggleBtn} onClick={() => setShow3(!show3)}>
                    {show3 ? "Hide PrintTable Component" : "Show PrintTable Component"}
                </button>
                {show3 && <img height={680} width={500} src="https://i.imgur.com/OscpHMu.png" alt="this is PrintTable code" />}
            </div>
        </div>
    )
}

export default Code 
