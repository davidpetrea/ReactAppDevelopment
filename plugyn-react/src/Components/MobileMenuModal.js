import React from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'

import {Link} from 'react-router-dom'

import DiscordLogo from "../discLogo.png"
import SkypeLogo from "../skypeLogo.png"


class ContactModal extends React.Component {
    
     

    render() {
        return (
            <Modal
                {...this.props}
                size="md"
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="contact-modal"
            >
                <Modal.Header className="modal-header-container">


                    <Modal.Title id="contained-modal-title-vcenter" className="modal-header">
                        <Row>
                            <Col>Navigation Menu</Col>
                           
                        </Row>
                        
                    </Modal.Title>

                </Modal.Header>
                
                <Modal.Body className="modal-body-container">
                    <div>

                        <Row className="menu-info-title">
                            <Col>INFORMATION</Col>
                        </Row>
                        <Row className="justify-content-center modal-buttons">
                            <Link to="/howitworks"  className="modal-button-60w">
                                <Button onClick={this.props.onHide} className="info-modal-button">
                                    
                                    HOW IT WORKS
                                </Button>
                            </Link>
                        </Row>
                        <Row className="justify-content-center modal-buttons">
                            <Link to="/about"  className="modal-button-60w">
                                    <Button onClick={this.props.onHide} className="info-modal-button">
                                        
                                        ABOUT US
                                    </Button>
                            </Link>
                        </Row>
                        <Row className="justify-content-center modal-buttons">
                            <Link to="/suppliers"  className="modal-button-60w">
                                        <Button onClick={this.props.onHide} className="info-modal-button">
                                            
                                            BECOME A SUPPLIER
                                        </Button>
                            </Link>
                        </Row>
                        <Row className="justify-content-center modal-buttons">
                        <Link to="/faq"  className="modal-button-60w">
                                        <Button onClick={this.props.onHide} className="info-modal-button">
                                            
                                            FAQ SECTION
                                        </Button>
                            </Link>
                        </Row>
                        <Row className="menu-info-title">
                            <Col>CONTACT US</Col>
                        </Row>
                        <Row className="justify-content-center modal-buttons">
                            <div className="modal-button-60w">
                                <Button className="info-modal-button" href="https://discordapp.com/users/557175395695198229">
                                    
                                <img src={DiscordLogo} className="footer-contact-logo" alt="discord logo"></img>
                                    <span>PlugynStore#2310</span>
                                    <input id="discordTag" type="text" value="PlugynStore#2310" style={{display:"none"}}/>
                                </Button>
                            </div>    

                        </Row>
                        <Row className="justify-content-center modal-buttons">
                             <div className="modal-button-60w">
                                <Button className="info-modal-button" href="https://join.skype.com/invite/iRidvFOxNO2l">
                                <img src={SkypeLogo} className="footer-contact-logo" alt="skype logo"></img>
                                    LIVE:PlugynStore
                                </Button>
                            </div>
                        </Row>
                        <Row className="justify-content-center modal-buttons">
                            <div className="modal-button-60w">
                                 <Button className="info-modal-button" href="mailto:support@plugynstore.com">support@plugynstore.com</Button>
                            </div>
                        </Row>
                        
                    </div>
                </Modal.Body>



                <Modal.Footer className="modal-footer-container">
                    <Row className="justify-content-center">
                         <Link to="/">
                             <Col>
                                <Button onClick={this.props.onHide} className="store-button">BACK TO STORE</Button>
                            </Col>
                         </Link>
                            

                        <Col>
                            <Button onClick={this.props.onHide} className="modal-close-button">Close</Button>
                        </Col>
                       
                    </Row>
                    
                </Modal.Footer>



            </Modal>
        )
    }
}


export default ContactModal