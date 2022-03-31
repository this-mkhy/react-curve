import React, {Component} from 'react';
import Home from './projects/Home';
import { Route, Routes } from "react-router-dom";
import Counter from './projects/1-counter/Counter/Counter';
import DisplayColors from './projects/2-display-colors/DisplayColors/DisplayColors';
 
class App extends Component{
   
  render(){
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/counter" element={<Counter />}></Route>
          <Route exact path="/colors" element={<DisplayColors />}></Route>
        </Routes> 
      </div>
    );
  }
}

export default App;
