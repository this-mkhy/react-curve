import React, {Component} from 'react';
import Intro from './0-Intro/Intro';
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
          <div className="box-1 boxing">
            <div className="box">
              <Link to="counter">
                <img src='https://i.imgur.com/goaW9oQ.gif' alt="Counter Gif1"/> 
              </Link>
            </div>
          </div>
          
          <div className="box-1 boxing">
            <div className="box">
              <Link to="colors">
                <img src='https://i.imgur.com/DZeh6pS.gif' alt="colors Gif2"/>
              </Link> 
            </div>
          </div>

          <div className="box-1 boxing">
            <div className="box">
              <Link to="toggle">
                <img src='https://i.imgur.com/LIblmvn.gif' alt="toggle Gif3"/> 
              </Link>
            </div>
          </div>

        </div>  
 
        <div className="box-container">  
          <div className="box-1 boxing">
            <div className="box">
              <Link to="handle-input">
                <img src='https://i.imgur.com/oSDwjiI.gif' alt="handleInput Gif1"/>
              </Link>
            </div>
          </div>

          <div className="box-1 boxing">
            <div className="box">
              <Link to="disable-submit">
                <img src='https://i.imgur.com/nhnPIIR.gif' alt="disableBtn Gif1"/>
              </Link>
            </div>
          </div>

          <div className="box-1 boxing">
            <div className="box">
              <Link to="summation">
                <img src="https://i.imgur.com/V9zwCUS.gif" alt="summation Gif1"/>
              </Link>
            </div>
          </div>
        </div>  

         
        <div className="box-container">  
          <div className="box-1 boxing">
            <div className="box">
              <Link to="todo-add-v1">
                <img src='https://i.imgur.com/8eXcruN.gif' alt="todo-add-v1 Gif1"/>
              </Link>
            </div>
          </div>

          <div className="box-1 boxing">
            <div className="box">
              <Link to="todo-delete-v2">
                <img src='https://i.imgur.com/HULWJgW.gif' alt="todo-delete-v2 Gif1"/>
              </Link>
            </div>
          </div>
        </div>  

      </div>
    //   <div className="container">
    //     <div className="project1">
    //       <Link to="counter">
    //         <img src={counterGif} alt="Counter Gif1"/> 
    //       </Link>
    //     </div>
    //     <div className="project1">
    //       <Link to="counter">
    //         <img src={counterGif} alt="Counter Gif1"/> 
    //       </Link>
    //     </div> 
    //     <div className="project1">
    //     <Link to="counter">
    //         <img src={counterGif} alt="Counter Gif1"/> 
    //       </Link>
    //     </div> 
    // </div>

    );
  }
}

export default Home;
