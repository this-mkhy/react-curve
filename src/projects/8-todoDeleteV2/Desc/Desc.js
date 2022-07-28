import React, { Component } from 'react'
import './../../projects.css'

class Desc extends Component {
    
    render() {
        return (
            <div className="desc">
                <h1 style={{color: '#3498db'}}>How to delete from todo list ?</h1> 
                <mark>Posted on Jul 28, 2022</mark>
                <h3>Remember this concept, <br />Start s-m-a-l-l to create something BIG</h3>
                <p>To create a Todo-Delete component. We have to : </p>
                <ul style={{ fontSize: '20px'}}>
                    <li>Create three components, the parent TodoDeleteV2, ItemForm and PrintItems child components</li>
                    <li>In the parent TodoDeleteV2 component : </li>
                    <ul>
                        <li>Create a state that stores the lists and function to update what’s on the screen in response to submit button</li>
                        <li>In handleAddItem method, when we want to update an array stored in state, we need to make a copy of an existing one, and then set state to use the new array</li>
                        <li>In handleDeleteItem method, we filter our list items and return all the list items except the once that was removed when clicked</li>
                        <li>Send handleAddItem method to ItemForm component and send handleDeleteItem method and lists to PrintItems component as props</li>
                    </ul>
                    
                    <li>In the child ItemForm component : </li>
                    <ul>
                        <li>Create a state that stores the item and function that handles updates in response to a change input and submit button</li>
                        <li>We handleInputChange and submit when a user interacts with the form</li>
                    </ul>

                    <li>Finally, In the child PrintItems component</li>
                    <ul>
                        <li>We just map to render the list of item</li>
                        <li>For each list item, print the name of the item and Delete button to delete that item</li>
                    </ul>
                </ul>
            </div>
        )
    } 
}

export default Desc 
