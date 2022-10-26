import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/" style={{marginLeft:"20px"}}>React Curve</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      {/* <li class="nav-item active">
        <Link class="nav-link" to="/">About <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/">Components <span class="sr-only">(current)</span></Link>
      </li> */}
    </ul>
  </div>
</nav>
  )
}

export default Header