import Navbar from "./Navbar";
import '../css/Style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHub from "../assets/images/Github.png";
import LinkedIn from "../assets/images/Linkedin.png";
import Footer from './Footer';

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
                <h4>We at <span style={{color: '#b74c4d'}}>InQuery</span> aim to provide you with all the necessary information which will help you stay informed about the current facts and figures in indian crime and safety measures that would help you under unfortunate circumstances.</h4>
            </center>
        </Col>
      </Row>
      
    </Container>
    <Container>
    <br></br>
    
    <Row>
        <Col><center><h1 style={{color: '#b74c4d'}}>Our Team</h1></center></Col>
    </Row>
    <br></br><br></br>
      <Row>
        <Col><center><h4>Chaitanya Bandiwdekar</h4>
        <br></br>
        <Container>
          <Row>
            <Col>
            <a href="https://github.com/ChaitanyaBandiwdekar"><img src={GitHub} width="100" height="75" style={{borderRadius:'50%'}} alt='github profile'/></a>
            </Col>
            <Col>
            <a href="https://www.linkedin.com/in/chaitanya-bandiwdekar-11329a18a"><img src={LinkedIn} width="100" height="75" style={{borderRadius:'50%'}} alt='linkedin profile'/></a>
            </Col>
          </Row>
        </Container>
        </center>
        </Col>
        <Col><center><h4>Pooja Kaulgud</h4>
        <br></br>
        <Container>
          <Row>
            <Col>
            <a href="https://github.com/poojakaulgud"><img src={GitHub} width="100" height="75" style={{borderRadius:'50%'}} alt='github profile'/></a>
            </Col>
            <Col>
            <a href="https://www.linkedin.com/in/pooja-kaulgud-b29a921b4/"><img src={LinkedIn} width="100" height="75" style={{borderRadius:'50%'}} alt='linkedin profile'/></a>
            </Col>
          </Row>
        </Container>
        </center>
        </Col>
        
        <Col><center><h4>Siddhesh Bagwe</h4>
        <br></br>
        <Container>
          <Row>
            <Col>
            <a href="https://github.com/sid-bagwe"><img src={GitHub} width="100" height="75" style={{borderRadius:'50%'}} alt='github profile'/></a>
            </Col>
            <Col>
            <a href="https://www.linkedin.com/in/siddhesh-bagwe-b14985192/"><img src={LinkedIn} width="100" height="75" style={{borderRadius:'50%'}} alt='linkedin profile' /></a>
            </Col>
          </Row>
        </Container>
        </center>
        </Col>
        <Col><center><h4>Aditi Kulkarni</h4>
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
    <Footer></Footer>
        </div>
    );
}
 
export default AboutUs;