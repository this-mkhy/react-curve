import React, {Component} from 'react';
import Intro from './0-Intro/components/Intro';
import counterGif from '../assets/counter.gif'
 
import { Link } from "react-router-dom";
import './home.css' 

class Home extends Component{

  render(){
    return (
      <div className="Home">
        <div id="header-container"> 
          <div id="box-0"><Intro /></div>
        </div>

        <div className="box-container">  
          <div className="box-1">
            <Link to="counter">
              <img src={counterGif} alt="Counter Gif1"/>
            </Link>
          </div>
        </div>  
 
      </div>
    );
  }
}

export default Home;
