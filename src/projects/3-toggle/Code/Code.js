import React, { Component } from 'react'
import Img from '../../../assets/toggleCode.png'

class Code extends Component { 
    render() {
        return (
            <div className="code">
                <img height={680} width={500} src={Img} alt="this is counter code" />
            </div>
        )
    }
}

export default Code 