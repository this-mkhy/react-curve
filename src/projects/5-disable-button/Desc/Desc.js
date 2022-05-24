import React, { Component } from 'react'
import './../../projects.css'

class Desc extends Component {
    
    render() {
        return (
            <div className="desc">
                <h1 style={{color: '#3498db'}}>How to disable button ?</h1> 
                <mark>Posted on May 24, 2022</mark>
                <h3>Remember this concept, <br />Start s-m-a-l-l to create something BIG</h3>
                <p>To create a DisableButton component. We have to : </p>
                <ul style={{ fontSize: '20px'}}>
                    <li>Input data is usually handled by the component. So all the data is stored in the component state</li>
                    <li>Create a state that holds the value of the input with inital value an empty string</li>
                    <li>The value of the input is the value of the state</li>
                    <li>Adding event handlers in the onChange attribute to control input changes and update our state</li>
                    <li>The submit button is disabled if the length of value in the input is empty</li>
                    <li>Now, When the data changes, we handle it and disable the button</li>
                </ul>
            </div>
        )
    } 
}

export default Desc 
