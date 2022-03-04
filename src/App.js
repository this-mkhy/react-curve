import React, {Component} from 'react';
import Home from './projects/Home';
import { Route, Routes } from "react-router-dom";
import Counter from './projects/1-counter/components/Counter';
import './App.css'

class App extends Component{
  
  render(){
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/counter" element={<Counter />}></Route>
        </Routes>
        
      </div>
    );
  }
}

export default App;
