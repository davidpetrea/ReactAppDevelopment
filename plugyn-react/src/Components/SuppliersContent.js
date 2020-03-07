import React from "react"
import firebase from "./Firebase"
import {Link} from 'react-router-dom'
import {Row, Col, Form, Button} from 'react-bootstrap'
import ContactModal from './ContactModal'
import {Helmet} from 'react-helmet'

class SuppliersContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            addModalShow: false,
            email:"",
            nickname:"",
            contact:"",
            server:"Age of Menor",
            stock:""
    
        }
    }
    
    
    updateInput = e => {
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        );
        
    }

    addUser = e => {
        alert("Your data was registered succesfully! We will contact you shortly.")
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection("suppliers").add({
            email: this.state.email,
            nickname: this.state.nickname,
            contact: this.state.contact,
            server: this.state.server,
            stock: this.state.stock
        });

        this.setState({
            email:"",
            nickname:"",
            contact:"",
            server:"",
            stock:""
        })
        
    }


    render() {
        let addModalClose=() => this.setState({addModalShow:false});
        return(
            <div>
                <Helmet>
                    <title>Plugyn Store | Sell your yang for great prices</title>
                    <meta name="description" content="Do you want to sell your yang on Metin2 official and private servers?
                     Join the Plugyn Suppliers list! We are currently buying yang on Origins, Evion, Celestial World, WoM2, Age of Menor, Nexus, Rubinum DE, Genesis DE and more!" />
                </Helmet>




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

                            <Form className="supplier-form-container" onSubmit={this.addUser}>
                                <Row className="justify-content-center">
                                    <Col xs={12} lg={6}>
                                        <Form.Group>
                                            <Form.Label style={{marginLeft:'0px'}}>Email address</Form.Label>
                                            <Form.Control type="email" required placeholder="Enter email" name="email" onChange={this.updateInput} value={this.state.email}/>
                                            <Form.Text>We'll never share your email with anyone else.</Form.Text>
                                            
                                        
                                         </Form.Group>    
                                    </Col>

                                    <Col xs={12} lg={6}>
                                        <Form.Group controlId="formNickname">
                                            <Form.Label>Nickname</Form.Label>
                                            <Form.Control type="text" required placeholder="Enter your nickname" name="nickname" onChange={this.updateInput} value={this.state.nickname}/>
                                            
                                            
                                        
                                         </Form.Group>    
                                    </Col>
                                </Row>
                                <Row className="justify-content-start">
                                    

                                    <Col lg={6}>
                                        <Form.Group controlId="formContactID">
                                            <Form.Label>Discord/Skype ID</Form.Label>
                                            <Form.Control type="text" required placeholder="Enter your Discord or Skype ID" name="contact" onChange={this.updateInput} value={this.state.contact}/>
                                            <Form.Text>We'll need this in order to contact you as quick as possible.</Form.Text>
                                            
                                            
                                        
                                         </Form.Group>    
                                    </Col>
                                </Row>

                                <Row className="justify-content-start">
                                    <Col lg={6} >
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>What server do you want to sell on?</Form.Label>
                                            <Form.Control as="select" name="server"  onChange={this.updateInput} value={this.state.server}>
                                                <option>Age of Menor</option>
                                                <option>Celestial World II</option>
                                                <option>Ekstasia</option>
                                                <option>Evion</option>
                                                <option>Genesis DE</option>
                                                <option>Rubinum DE</option>
                                                <option>Nayah II</option>
                                                <option>Nexus II</option>
                                                <option>Origins II</option>
                                                <option>Sepherion</option>
                                                <option>Someya</option>
                                                
                                            </Form.Control>
                                        </Form.Group> 
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group controlId="formContactID">
                                            <Form.Label>What is your current stock?</Form.Label>
                                            <Form.Control type="text" required placeholder="Example: 25kkk/100k Lagis" name="stock" onChange={this.updateInput} value={this.state.stock}/>
                                            
                                            
                                        
                                         </Form.Group>    
                                    </Col>
                                    <Col>
                                        <Button variant="primary" className="submit-button" type="submit" >
                                            SUBMIT
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    
                                </Row>

                                
                               
                            </Form> 



                            <Row>
                                <Col>
                                    <div>TIP: We will do our best to contact you as soon as possible, but you can assure the quickest reponse by contacting us on whichever platform you prefer.</div>
                                
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
            </div>
                
            
        )
    }
}

export default SuppliersContent