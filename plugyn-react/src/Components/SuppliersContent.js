import React from "react"

import {Link} from 'react-router-dom'
import {Row, Col, Form, Button} from 'react-bootstrap'
import ContactModal from './ContactModal'

class SuppliersContent extends React.Component{
    constructor(props){
        super(props);
        this.state={addModalShow: false}
    }
    
    
    render() {
        let addModalClose=() => this.setState({addModalShow:false});
        return(
            
                <div className="container">
                    
                    <div className="showcase-text">
                        <div className="showcase-text-title">WANT TO SELL YANG TO US?</div>
                        <div className="showcase-text-main-2">Complete the form below and join the team!</div>
                    </div>
                    <div className="container howitworks">
                        <div className="row howitworks-text">

                            <div className="col-lg-12 howitworks-header">
                                Tell us a bit about yourself
                            </div>

                            <Form className="supplier-form-container">
                                <Row className="justify-content-center">
                                    <Col xs={12} lg={6}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label style={{marginLeft:'0px'}}>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"/>
                                            <Form.Text>We'll never share your email with anyone else.</Form.Text>
                                            
                                        
                                         </Form.Group>    
                                    </Col>

                                    <Col xs={12} lg={6}>
                                        <Form.Group controlId="formNickname">
                                            <Form.Label>Nickname</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your nickname"/>
                                            
                                            
                                        
                                         </Form.Group>    
                                    </Col>
                                </Row>
                                <Row className="justify-content-start">
                                    

                                    <Col lg={6}>
                                        <Form.Group controlId="formContactID">
                                            <Form.Label>Discord/Skype ID</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your Discord or Skype ID"/>
                                            <Form.Text>We'll need this in order to contact you as quick as possible.</Form.Text>
                                            
                                            
                                        
                                         </Form.Group>    
                                    </Col>
                                </Row>

                                <Row className="justify-content-start">
                                    <Col lg={6} >
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>What server do you want to sell on?</Form.Label>
                                            <Form.Control as="select">
                                                <option>Evion</option>
                                                <option>Nexus</option>
                                                <option>Age of Menor</option>
                                                <option>Ekstasia</option>
                                                <option>Celestial World II</option>
                                                <option>Origins II</option>
                                                
                                            </Form.Control>
                                        </Form.Group> 
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group controlId="formContactID">
                                            <Form.Label>What is your current stock?</Form.Label>
                                            <Form.Control type="text" placeholder="Example: 25kkk/100k Lagis"/>
                                            
                                            
                                        
                                         </Form.Group>    
                                    </Col>
                                    <Col>
                                        <Button variant="primary" type="submit" className="submit-button">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    
                                </Row>

                                
                               
                            </Form> 



                            <Row>
                                <Col>
                                    <div>TIP: We will do our best to contact you as soon as possible, but you can assure the quickest reponse by personally contacting us on whichever platform you prefer.</div>
                                
                                </Col>
                            </Row>

                            <div className="col-lg-6 contact-button">
                                <button className="button-5"  onClick={()=>this.setState({addModalShow:true})}>
                                    CONTACT US
                                </button>
                        
                            </div>
                            <div className="col-lg-6 contact-button">
                                 <Link to="/">
                                    <button className="button-5">
                                        BACK TO STORE
                                    </button>
                                </Link>
                            </div>

                            
                            <ContactModal
                            show={this.state.addModalShow}
                            onHide={addModalClose}
                            />
                           
                            

                        </div>
                    </div>
                    
                </div>
            
        )
    }
}

export default SuppliersContent