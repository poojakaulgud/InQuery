import Navbar from "./Navbar";
import '../css/Style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHub from "../assets/images/Github.png";
import LinkedIn from "../assets/images/Linkedin.png";

const AboutUs = () => {
    return ( 
        <div className="AboutUs">
           <Navbar></Navbar>
           <br></br>
           <br></br><br></br>
           <Container>
            
      <Row>
        <Col>
            <center>
                <h4>We at <span style={{color: '#b74c4d'}}>InQuery</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</h4>
            </center>
        </Col>
      </Row>
      
    </Container>
    <Container>
    <br></br>
    <br></br><br></br>
    <Row>
        <Col><center><h1 style={{color: '#b74c4d'}}>Our Team</h1></center></Col>
    </Row>
    <br></br><br></br>
      <Row>
        <Col><center><h3>Chaitanya Bandiwdekar</h3>
        <br></br>
        <Container>
          <Row>
            <Col>
            <a href="link address"><img src={GitHub} width="100" height="75" style={{borderRadius:'50%'}} alt='github profile'/></a>
            </Col>
            <Col>
            <a href="link address"><img src={LinkedIn} width="100" height="75" style={{borderRadius:'50%'}} alt='linkedin profile'/></a>
            </Col>
          </Row>
        </Container>
        </center>
        </Col>
        <Col><center><h3>Pooja Kaulgud</h3>
        <br></br>
        <Container>
          <Row>
            <Col>
            <a href="link address"><img src={GitHub} width="100" height="75" style={{borderRadius:'50%'}} alt='github profile'/></a>
            </Col>
            <Col>
            <a href="link address"><img src={LinkedIn} width="100" height="75" style={{borderRadius:'50%'}} alt='linkedin profile'/></a>
            </Col>
          </Row>
        </Container>
        </center>
        </Col>
        
        <Col><center><h3>Siddhesh Bagwe</h3>
        <br></br>
        <Container>
          <Row>
            <Col>
            <a href="link address"><img src={GitHub} width="100" height="75" style={{borderRadius:'50%'}} alt='github profile'/></a>
            </Col>
            <Col>
            <a href="link address"><img src={LinkedIn} width="100" height="75" style={{borderRadius:'50%'}} alt='linkedin profile' /></a>
            </Col>
          </Row>
        </Container>
        </center>
        </Col>
        <Col><center><h3>Aditi Kulkarni</h3>
        <br></br>
        <Container>
          <Row>
            <Col>
            <a href="https://github.com/aditi114"><img src={GitHub} width="100" height="75" style={{borderRadius:'50%'}} alt='github profile'/></a>
            </Col>
            <Col>
            <a href="https://www.linkedin.com/in/aditi-kulkarni-0520081bb/"><img src={LinkedIn} width="100" height="75" style={{borderRadius:'50%'}} alt='linkedin profile'/></a>
            </Col>
          </Row>
        </Container>
        </center>
        </Col>
      </Row>
    </Container>
        </div>
    );
}
 
export default AboutUs;