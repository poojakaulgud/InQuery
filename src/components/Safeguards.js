import '../css/Style.css';
import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-grid-carousel'
import Accordion from 'react-bootstrap/Accordion';
import Footer from './Footer';



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
                        <Accordion >
                        <Accordion.Item eventKey="0" style={{border:'none', color: '#f7838d'}}>
                            <Accordion.Header >Important emergency numbers</Accordion.Header>
                            <Accordion.Body >
                           
                            NATIONAL EMERGENCY NUMBER-112<br></br>
                            POLICE-100<br></br>
                            FIRE-101<br></br>
                            AMBULANCE-102<br></br>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr></hr>
                        <Accordion.Item eventKey="1"  style={{border:'none', color: '#f7838d'}}>
                            <Accordion.Header>Helpline Numbers for women, children and senior citizen</Accordion.Header>
                            <Accordion.Body>
                                Women Helpline: 1091<br></br>
                                Women Helpline - Domestic Abuse: 181<br></br>
                                Senior Citizen Helpline: 1091/ 1291<br></br>
                                Children In Difficult Situation: 1098<br></br>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr></hr>
                        <Accordion.Item eventKey="2" style={{border:'none', color: '#f7838d'}}>
                            <Accordion.Header>Medical help and Accidents Helpline Numbers </Accordion.Header>
                            <Accordion.Body>
                                Air Ambulance-9540161344<br></br>
                                Medical Helpline: 108<br></br>
                                Road Accident Emergency Service:1073<br></br>
                                Railway Accident Emergency Service:1072<br></br>
                                Disaster Management Services: 108<br></br>
                                Hospital On Wheels: 104<br></br>
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        
                        <hr></hr>
                    </Col>
                    <Col xs lg="6">
                    
                        <h1>Safety Guidelines</h1>
                        <br></br>
                        <Accordion >
                        <Accordion.Item eventKey="0" style={{border:'none', color: '#f7838d'}}>
                            <Accordion.Header >Safety tips for theft prevention</Accordion.Header>
                            <Accordion.Body >
                            
                            1. When walking alone, skip using headphones or taking phone calls.<br></br>
                            2. Invest in a U-bolt lock. Bicycles secured with chain or cable locks are easier targets.<br></br>
                            3. Avoid showing your wallet or wearing expensive jewelry when you know you’ll be out walking.<br></br>
                            4. If you notice someone loitering outside your building or residence and it seems suspicious, report them immediately.<br></br>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr></hr>
                        <Accordion.Item eventKey="1"  style={{border:'none', color: '#f7838d'}}>
                            <Accordion.Header>Online fraud and cybercrime prevention tips</Accordion.Header>
                            <Accordion.Body>
                            1. Do not give out your personal information or credit card number over the phone unless you initiated the call.<br></br>
                            2. Shred credit card offers and bank statements before you throw them away if you do not plan on using them.<br></br>
                            3. Avoid mail theft by obtaining a locked mailbox and dropping off outgoing mail at the local post office.<br></br>
                            4. Never lend your ATM card to anyone; treat it like cash or a credit card.<br></br>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr></hr>
                        <Accordion.Item eventKey="2" style={{border:'none', color: '#f7838d'}}>
                            <Accordion.Header>Safety tips for women and children</Accordion.Header>
                            <Accordion.Body>
                            1. If you have a smart phone then install emergency apps which can send sms to known people & can even dial police no. in case of emergency<br></br>
                            2. Say loudly and firmly "I don't know this person and he/ she is harassing me." Don't shy away from using the simple phrase "I need help."<br></br>
                            3. Carry pepper spray and self defense key chains for emergency.<br></br>
                            4. Do not let people inside your home (to use the bathroom, phone, etc.).<br></br>
                            5. Your child should know that no matter the circumstances, they should never let themselves be led away by a stranger.<br></br>
                            6. Teaching your children about good touch and bad touch can help them determine when someone has behaved inappropriately with them.<br></br>
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        
                        <hr></hr>
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
