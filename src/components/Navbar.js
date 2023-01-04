import React from "react";
import InQuery_logo from "../assets/images/InQuery_logo.png";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Navbar extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#121212"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={InQuery_logo} width="180" height="45" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto" style={{fontSize: 20}}>
                    <li class="nav-item mx-3">
                      <a className="nav-link active" aria-current="page" href="#" style={{color: "#f7838d"}}>Home</a>
                    </li>
                    <li class="nav-item mx-3">
                      <a class="nav-link" href="#" style={{color: "#b74c4d"}}>Dashboard</a>
                    </li>
                    <li class="nav-item mx-3">
                      <a class="nav-link" href="#" style={{color: "#b74c4d"}}>Safeguards</a>
                    </li>
                    <li class="nav-item mx-3">
                      <a class="nav-link" style={{color: "#b74c4d"}}>About us</a>
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
        
      );
    }
  }

export default Navbar;