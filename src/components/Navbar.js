import React from 'react'

import { Link } from 'react-router-dom'

const Navbar =()=> {
 
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-white bg-dark fixed-top">
  <Link className="navbar-brand" to="/">DailyNews</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/general">Home <span className="sr-only">(current)</span></Link>
      </li>
    
      <li className="nav-item">
        <Link className="nav-link" to="/technology"><strong> Technology</strong></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/sports"><strong> Sports</strong></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/science"><strong> science</strong></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/health"><strong> Health</strong></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/entertainment"><strong>Entertainment</strong></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/general"><strong> General</strong></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/business"><strong>Business</strong></Link>
      </li>

    </ul> 
       
  </div>   
</nav> 

      </div>
    )
  
}

export default Navbar



