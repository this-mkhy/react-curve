import React, { Component } from 'react'
import './../../projects.css'

class Desc extends Component {

    render() {
        return (
            <div className="desc">
                <h1 style={{color: '#3498db'}}>How to map over the colors ?</h1> 
                <h3>Remember this concept, <br />Start s-m-a-l-l to create something BIG</h3>
                <p>To create a display colors component. We have to : </p>
                <ul style={{ fontSize: '20px'}}>
                    <li>Create a state that holds the colors</li>
                    <li>Colors is an array of objects</li>
                    <li>Each color has an id , name, and hex properties</li>
                    {/* <li>We use the map() function to map over each color in the array and retrun colorItems</li> */}
                    <li>We loop through the colors array using the <span id='list'>&lt;map()&gt;</span> function</li>
                    <li>We return a <span id='list'>&lt;li&gt;</span> element for each item</li>
                    <li>We should provide a key for each list item</li>
                    <li>We assign the resulting array of elements to colorItems</li>
                    <li>In JSX, we include the entire colorItems array inside a <span id='list'>&lt;div&gt;</span> element, and render it to the DOM</li>
                </ul>
            </div>
        )
    } 
}

export default Desc 