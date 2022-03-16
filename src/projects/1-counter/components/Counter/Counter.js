// import React, { useState } from 'react'
// import Code from '../Code/Code';
// import Desc from '../Desc/Desc';
// import './counter.css'
// import { Link } from "react-router-dom";

// function Counter () {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
 
//   return (
//     <div className="container">
//       <div className="counter">
//         <h1>Counter</h1>
//         <button onClick={increment}>Increase + </button>
//         <h2>{count}</h2>
//         <button onClick={decrement}>Decrease - </button>
//       </div>
//       <div className="desc">
//         <Desc />
//         <Link to="/">Home</Link>
//       </div>
//       <div className="code">
//         <Code />
//       </div> 
//     </div>
//   )
// }

// export default Counter

import React, { Component, useState } from 'react'
import Code from '../Code/Code';
import Desc from '../Desc/Desc';
import './counter.css'
import { Link } from "react-router-dom";

class Counter extends Component{
  state = {
    count : 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  
  render(){
    return (
      <div className="container">
        <div className="counter">
          <h1>Counter</h1>
          <button onClick={this.increment}>Increase + </button>
          <h2>{this.state.count}</h2>
          <button onClick={this.decrement}>Decrease - </button>
        </div>
        <div className="desc">
          <Desc />
          <Link to="/">Home</Link>
        </div>
        <div className="code">
          <Code />
        </div> 
      </div>
    )
  }
}

export default Counter