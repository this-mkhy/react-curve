import React, { Component } from 'react'
import './desc.css'

class Desc extends Component {

    render() {
        return (
            <div className="desc">
                <h1>How to code the counter ?</h1> 
                <h3>Remember this concept, <br />Start s-m-a-l-l to create something BIG</h3>
                <p>To create a counter component, We have to : </p>
                <ul>
                    <li>Create a state that hold the count</li>
                    <li>Lets start count from 0</li>
                    <li>Make a method to increase the count</li>
                    <li>Make a method to decrease the count</li>
                    <li>On click the increase + button, increase and update the count</li>
                    <li>On click the decrease - button, decrease and update the count</li>
                </ul>
            </div>
        )
    }
}

export default Desc 