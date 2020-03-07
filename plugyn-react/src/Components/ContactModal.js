import React from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'

import DiscordLogo from "../discLogoBright.png"
import SkypeLogo from "../skypeLogoBright.png"


class ContactModal extends React.Component {
    


    render() {
        return (
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="contact-modal"
            >
                <Modal.Header className="modal-header-container">


                    <Modal.Title id="contained-modal-title-vcenter" className="modal-header">
                        <Row className="">
                            <Col>Contact Us</Col>
                           
                        </Row>
                        
                    </Modal.Title>



                </Modal.Header>
                
                
                
                
                <Modal.Body className="modal-body-container">
                    <div>
                        <Row className="justify-content-center modal-buttons">
                        
                            <Button className="discord-modal-button" href="https://discordapp.com/users/557175395695198229">
                                <img src={DiscordLogo} className="footer-contact-logo" alt="discord-logo"></img>
                                PlugynStore#2310
                            </Button>
                        </Row>
                        <Row className="justify-content-center modal-buttons">
                            <Button className="skype-modal-button" href="https://join.skype.com/invite/iRidvFOxNO2l">
                                <img src={SkypeLogo} className="footer-contact-logo" alt="skype-logo"></img>
                                LIVE:PlugynStore
                            </Button>
                        </Row>
                        <Row className="justify-content-center modal-buttons">
                            <Button className="epvp-modal-button" href="mailto:support@plugynstore.com">support@plugynstore.com</Button>
                        </Row>

                        <Row className="justify-content-center">
                            <Col lg={8} className="modal-text">
                                Support available 16 hours everyday!
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>



                <Modal.Footer className="modal-footer-container">
                    <Row>
                        <Col className="modal-footer-text">
                            TIP: We will be able to reply faster if you contact us via our Live Chat.
                        </Col>
                    </Row>
                    <Button onClick={this.props.onHide} className="modal-close-button">Close</Button>
                </Modal.Footer>



            </Modal>
        )
    }
}


export default ContactModal