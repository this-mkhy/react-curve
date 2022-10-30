import React, { Component } from 'react';
import Home from './projects/Home';
import { Route, Routes } from "react-router-dom";
import Counter from './projects/1-counter/Counter/Counter';
import DisplayColors from './projects/2-display-colors/DisplayColors/DisplayColors';
import ToggleMessage from './projects/3-toggle/ToggleMessage/ToggleMessage';
import HandleInput from './projects/4-handle-input/HandleInput/HandleInput';
import DisableButton from './projects/5-disable-button/DisableButton/DisableButton'
import SumTwoNum from './projects/6-sumTwoNum/SumTwoNum/SumTwoNum'
import TodoAddV1 from './projects/7-todoAddV1/TodoV1/TodoAddV1'
import TodoDeleteV2 from './projects/8-todoDeleteV2/TodoV2/TodoDeleteV2'
import Pomodoro from './projects/9-pomodoro-timer/PomodoroTimer/components/Controls'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/counter" element={<Counter />}></Route>
          <Route exact path="/colors" element={<DisplayColors />}></Route>
          <Route exact path="/toggle" element={<ToggleMessage />}></Route>
          <Route exact path="/handle-input" element={<HandleInput />}></Route>
          <Route exact path="/disable-submit" element={<DisableButton />}></Route>
          <Route exact path="/summation" element={<SumTwoNum />}></Route>
          <Route exact path="/todo-add-v1" element={<TodoAddV1 />}></Route>
          <Route exact path="/todo-delete-v2" element={<TodoDeleteV2 />}></Route>
          <Route exact path="/pomodoro" element={<Pomodoro />}></Route>

        </Routes>

      </div>
    );
  }
}

export default App;
