import React, {Component} from 'react';
import Intro from './0-Intro/Intro';
import counterGif from '../assets/counter.gif'
import colorsGif from '../assets/colors.gif'
import toggleGif from '../assets/toggle.gif'
import handleInput from '../assets/handleInput.gif'
 
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
            <div className="box">
              <Link to="counter">
                <img src={counterGif} alt="Counter Gif1"/> 
              </Link>
            </div>
          </div>
          
          <div className="box-1">
            <div className="box">
              <Link to="colors">
                <img src={colorsGif} alt="colors Gif2"/>
              </Link> 
            </div>
          </div>

          <div className="box-1">
            <div className="box">
              <Link to="toggle">
                <img src={toggleGif} alt="toggle Gif3"/> 
              </Link>
            </div>
          </div>

        </div>  
 
        <div className="box-container">  
          <div className="box-1">
            <div className="box">
              <Link to="handle-input">
                <img src={handleInput} alt="handleInput Gif1"/>
              </Link>
            </div>
          </div>

        </div>  
      </div>
    );
  }
}

export default Home;
