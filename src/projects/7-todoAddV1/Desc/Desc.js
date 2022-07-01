import React, { Component } from 'react'
import './../../projects.css'

class Desc extends Component {
    
    render() {
        return (
            <div className="desc">
                <h1 style={{color: '#3498db'}}>How to add to todo list ?</h1> 
                <mark>Posted on Jun 30, 2022</mark>
                <h3>Remember this concept, <br />Start s-m-a-l-l to create something BIG</h3>
                <p>To create a SumTwoNum component. We have to : </p>
                <ul style={{ fontSize: '20px'}}>
                    <li>Create three components, the parent TodoAddV1, ItemForm and PrintItems child components</li>
                    <li>In the parent TodoAddV1 component : </li>
                    <ul>
                        <li>Create a state that store the lists and function to update what’s on the screen in response to submit button</li>
                        <li>In handleAddItem method, when we want to update an array stored in state, we need to make a copy of an existing one, and then set state to use the new array</li>
                        <li>Send handleAddItem method to ItemForm component and send lists to PrintItems component as props</li>
                    </ul>
                    
                    <li>In the child ItemForm component : </li>
                    <ul>
                        <li>Create a state that store the item and function that handle updates in response to change input and submit button</li>
                        <li>We handleInputChange and submit when user interact with the form</li>
                    </ul>
                    <li>Finally, In the child PrintItems component, We just map to render the list items and print the name of the item</li>
                </ul>
            </div>
        )
    } 
}

export default Desc 
