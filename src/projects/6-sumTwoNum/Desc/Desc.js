import React, { Component } from 'react'
import './../../projects.css'

class Desc extends Component {
    
    render() {
        return (
            <div className="desc">
                <h1 style={{color: '#3498db'}}>How to sum two numbers ?</h1> 
                <mark>Posted on May 31, 2022</mark>
                <h3>Remember this concept, <br />Start s-m-a-l-l to create something BIG</h3>
                <p>To create a SumTwoNum component. We have to : </p>
                <ul style={{ fontSize: '20px'}}>
                    <li>Create two states that hold the value of each number</li>
                    <li>Create a state that holds the summation value with an initial value equal to zero</li>
                    <li>Create a calculate function that calculates and updates the summation</li>
                    <li>Create two inputs and handle events for each number</li>
                    <li>onClick submit button, calculate method is fired and do summation</li>
                </ul>
            </div>
        )
    } 
}

export default Desc 
