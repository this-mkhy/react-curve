import React, {useState} from 'react';
import styles from '../TodoV2/TodoDeleteV2.module.css' 

const {toggleBtn} = styles

function Code() {
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    return (
        <div className="code">        
            <div>
                <button className={toggleBtn} onClick={() => setShow1(!show1)}>
                    {show1 ? "Hide TodoDelete-V2 Component" : "Show TodoDelete-V2 Component"}
                </button>
                {show1 && <img height={680} width={500} src="https://i.imgur.com/iZyFcYs.png" alt="this is TodoDelete-V1 code" />}

            </div>
            <div>
                <button className={toggleBtn} onClick={() => setShow2(!show2)}>
                    {show2 ? "Hide ItemForm Component" : "Show ItemForm Component"}
                </button>
                {show2 && <img height={680} width={500} src="https://i.imgur.com/2mHatlD.png" alt="this is ItemForm code" />}
            </div>
            <div>
                <button className={toggleBtn} onClick={() => setShow3(!show3)}>
                    {show3 ? "Hide PrintTable Component" : "Show PrintTable Component"}
                </button>
                {show3 && <img height={680} width={500} src="https://i.imgur.com/eMYB6aH.png" alt="this is PrintTable code" />}
            </div>
        </div>
    )
}

export default Code 
