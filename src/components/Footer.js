
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Home.css';
class Navbar extends React.Component {


    render() {

      console.log(window.location.pathname);
      return (
        <div className="Footer"style={{backgroundColor: "#121212"}}>
             <Container>
      <Row>
        <Col><p>Copyrights @ 2023. All rights reserved.</p></Col>
      </Row>
    </Container>
           
        </div>
        
      );
    }
  }

export default Navbar;