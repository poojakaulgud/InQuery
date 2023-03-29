import '../css/Style.css';
import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-grid-carousel'



const Safeguards = () => {
    return ( 
        <div className="Safeguards">
            <Navbar />
            <br></br>
            <br></br>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1>Helpline Numbers</h1>
                        <br></br>
                        <Dropdown>
                            <Dropdown.Toggle style={{backgroundColor: "#121212", border:'0', padding:'0', color: '#f7838d'}} id="dropdown-basic">
                            Important emergency numbers
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            
                                <Dropdown.Item >NATIONAL EMERGENCY NUMBER-112</Dropdown.Item>
                                <Dropdown.Item >POLICE-100</Dropdown.Item>
                                <Dropdown.Item >FIRE-101</Dropdown.Item>
                                <Dropdown.Item >AMBULANCE-102</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <hr></hr>
                        <Dropdown>
                            <Dropdown.Toggle style={{backgroundColor: "#121212", border:'0', padding:'0', color: '#f7838d'}} id="dropdown-basic">
                            Helpline Numbers for women, children and senior citizen
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            
                                <Dropdown.Item >Women Helpline: 1091</Dropdown.Item>
                                <Dropdown.Item >Women Helpline - Domestic Abuse: 181</Dropdown.Item>
                                <Dropdown.Item >Senior Citizen Helpline: 1091/ 1291</Dropdown.Item>
                                <Dropdown.Item >Children In Difficult Situation: 1098</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <hr></hr>
                        <Dropdown>
                            <Dropdown.Toggle style={{backgroundColor: "#121212", border:'0', padding:'0', color: '#f7838d'}} id="dropdown-basic">
                            Medical help and Accidents Helpline Numbers 
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            
                                <Dropdown.Item >Air Ambulance-9540161344</Dropdown.Item>
                                <Dropdown.Item >Medical Helpline: 108</Dropdown.Item>
                                <Dropdown.Item >Road Accident Emergency Service:1073</Dropdown.Item>
                                <Dropdown.Item >Railway Accident Emergency Service:1072</Dropdown.Item>
                                <Dropdown.Item >Disaster Management Services: 108</Dropdown.Item>
                                <Dropdown.Item >Hospital On Wheels: 104</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <hr></hr>
                    </Col>
                    <Col xs lg="6">
                    
                        <h1>Safety Guidelines</h1>
                        <br></br>
                    </Col>
                </Row>
                </Container>
                <br></br><br></br>
                <center><h1>Criminal Justice Policies and Laws Under Indian Constitution</h1></center>
                <br></br><br></br>
                <Carousel cols={4} rows={1} gap={10} loop>
                    
                    <Carousel.Item>
                    <center>
                        <h5>Criminal Law (Amendment) Act</h5><hr></hr>
                        <h7>Year: 2018</h7><br></br>
                        <h7>Domain: Judicial Division Acts</h7><hr></hr>
                    </center>
                    </Carousel.Item>
                    <Carousel.Item>
                    <center>
                        <h5>The Commissions of Inquiry Act</h5><hr></hr>
                        <h7>Year: 2018</h7><br></br>
                        <h7>Domain: Judicial Division Acts</h7><hr></hr>
                    </center>
                    </Carousel.Item> 
                    <Carousel.Item>
                    <center>
                        <h5>Information Technology Act,(IT Act)</h5><hr></hr>
                        <h7>Year: 2000</h7><br></br>
                        <h7>Domain: Cyber crime laws</h7><hr></hr>
                    </center>
                    </Carousel.Item> 
                    <Carousel.Item>
                    <center>
                        <h5>The Central Reserve Police Force Act</h5><hr></hr>
                        <h7>Year: 1949</h7><br></br>
                        <h7>Domain: Police Division Acts</h7><hr></hr>
                    </center>
                    </Carousel.Item> 
                    <Carousel.Item>
                    <center>
                        <h5>The Commissions of Inquiry (Central) Rules</h5><hr></hr>
                        <h7>Year: 1972</h7><br></br>
                        <h7>Domain: Judicial Division Rules</h7><hr></hr>
                    </center>
                    </Carousel.Item> 
                    <Carousel.Item>
                    <center>
                        <h5>Indecent Representation of Women (Prohibition) Act</h5><hr></hr>
                        <h7>Year: 1987</h7><br></br>
                        <h7>Domain: Criminal Law and Women</h7><hr></hr>
                    </center>
                    </Carousel.Item>  
                    <Carousel.Item>
                    <center>
                        <h5>Protection of women from Domestic Violence Act</h5><hr></hr>
                        <h7>Year: 2005</h7><br></br>
                        <h7>Domain: Criminal Law and Women</h7><hr></hr>
                    </center>
                    </Carousel.Item>
                    <Carousel.Item>
                    <center>
                        <h5>The Immoral Traffic ( Prevention ) Act- Women </h5><hr></hr>
                        <h7>Year: 1956</h7><br></br>
                        <h7>Domain: Women-Specific legislation</h7><hr></hr>
                    </center>
                    </Carousel.Item>
                     
                    <Carousel.Item>
                    <center>
                        <h5>The Central Industrial Security Rules</h5><hr></hr>
                        <h7>Year: 2001</h7><br></br>
                        <h7>Domain: Police Division Rules</h7><hr></hr>
                    </center>
                    </Carousel.Item> 
                    <Carousel.Item>
                    <center>
                        <h5>The Registration of Births and Deaths Act</h5><hr></hr>
                        <h7>Year: 1969</h7><br></br>
                        <h7>Domain: Registrar General Of India Acts</h7><hr></hr>
                    </center>
                    </Carousel.Item> 
                    <Carousel.Item>
                    <center>
                        <h5>The Minimum Age Convention </h5><hr></hr>
                        <h7>Year: 1973</h7><br></br>
                        <h7>Domain: Child labour laws</h7><hr></hr>
                    </center>
                    </Carousel.Item>
                    <Carousel.Item>
                    <center>
                        <h5>The Senior Citizen Act </h5><hr></hr>
                        <h7>Year: 2007</h7><br></br>
                        <h7>Domain: Security of senior citizens</h7><hr></hr>
                    </center>
                    </Carousel.Item> 
                      
                           
                </Carousel> 
        </div>
    );
}
 
export default Safeguards;
