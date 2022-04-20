import React, { Component } from 'react'
import './../../projects.css'

class Desc extends Component {

    render() {
        return (
            <div className="desc">
                <h1 style={{color: '#3498db'}}>How to toggle ?</h1> 
                <h3>Remember this concept, <br />Start s-m-a-l-l to create something BIG</h3>
                <p>To create a ToggleMessage component. We have to : </p>
                <ul style={{ fontSize: '20px'}}>
                    <li>Create a state that holds the button status</li>
                    <li>The button status either is shown or not</li>
                    <li>When clicking on the button, fire the <span id='list'>setShow</span> method</li>
                    <li><span id='list'>setShow</span> method reverses the current <span id='list'>show</span> state</li>
                    <li>if the <span id='list'>show</span> state is true, show <span id='list'>&lt;h2&gt;</span> on the screen and toggle "Hide Welcome" on the button</li>
                    <li>if the <span id='list'>show</span> state is false, Don't show the message on the screen and toggle "Show Welcome" on the button</li>
                    
                </ul>
            </div>
        )
    } 
}

export default Desc 
