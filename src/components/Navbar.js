import React from "react";
import InQuery_logo from "../assets/images/InQuery.jpg";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

class Navbar extends React.Component {


    render() {

      console.log(window.location.pathname);
      return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#121212"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <img src={InQuery_logo} width="100" height="45" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto" style={{fontSize: 20}}>
                    <li class="nav-item mx-3">
                      <Link className="nav-link active" aria-current="page" to="/" style={window.location.pathname === "/" ? {color: "#f7838d", fontFamily: 'Work Sans'} : {color: "#b74c4d", fontFamily: 'Work Sans'}}>Home</Link>
                    </li>
                    <li class="nav-item mx-3">
                      <Link class="nav-link" to="/dashboard" style={window.location.pathname === "/dashboard" ? {color: "#f7838d", fontFamily: 'Work Sans'} : {color: "#b74c4d",fontFamily: 'Work Sans'}}>Dashboard</Link>
                    </li>
                    <li class="nav-item mx-3">
                      <Link class="nav-link" to="/safeguards" style={window.location.pathname === "/safeguards" ? {color: "#f7838d", fontFamily: 'Work Sans'} : {color: "#b74c4d", fontFamily: 'Work Sans'}}>Safeguards</Link>
                    </li>
                    <li class="nav-item mx-3">
                      <Link class="nav-link" to="/aboutus" style={window.location.pathname === "/aboutus" ? {color: "#f7838d", fontFamily: 'Work Sans'} : {color: "#b74c4d", fontFamily: 'Work Sans'}}>About Us</Link>
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
        
      );
    }
  }

export default Navbar;