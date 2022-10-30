import React, { Component } from 'react'
import './../../projects.css'

class Desc extends Component {
    
    render() {
        return (
            <div className="desc">
                <h1 style={{color: '#3498db'}}>How to delete from todo list ?</h1> 
                <mark>Posted on Oct 27, 2022</mark>
                <h3>Remember this concept, <br />Start s-m-a-l-l to create something BIG</h3>
                <p>To create Mathematical Expression Evaluator, we have to : </p>
                <ul style={{ fontSize: '20px'}}>
                    <li> Create textarea to take expression as input from user </li>
                    <li> Create input box to take precision as input from user</li>
                    <li> Create button to evaluate expression </li>
                    <li> Create div to show result </li>
                    <li> Make an API call to mathjs API to get the result</li>
                    <li> <b>mathjs</b> provoides lot of functions including algebra, complex numbers, simple unit calculations and many more.</li>
                    <li>For more information how to write query: <a href='https://mathjs.org/examples/index.html'>Click Here</a> or <a href='mailto:spiralforge.spiralforge@gmail.com'>Contact Author</a>.</li>
                </ul>
            </div>
        )
    } 
}

export default Desc 
