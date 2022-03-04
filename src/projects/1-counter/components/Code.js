import React, { Component } from 'react'
import Img from '../../../assets/counterImg2.png'

class Code extends Component {
    render() {
        return (
            <div className="code">
                <img height={600} width={550} src={Img} alt="this is counter code" />
            </div>
        )
    }
}

export default Code 