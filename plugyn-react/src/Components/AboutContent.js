import React from "react"

import {Link} from 'react-router-dom'
import ContactModal from './ContactModal'
import {Helmet} from 'react-helmet'

class AboutContent extends React.Component{
    constructor(props){
        super(props);
        this.state={addModalShow: false}
    }
    
    
    render() {
        let addModalClose=() => this.setState({addModalShow:false});
        return(
            <div>
                <Helmet>
                    <title>Plugyn Store | About Us</title>
                </Helmet>
                
                 <div className="container">
                    
                    <div className="showcase-text">
                        <div className="showcase-text-title">ABOUT US</div>
                        <div className="showcase-text-main-2">Get to know our story and vision!</div>
                    </div>
                    <div className="container howitworks">
                        <div className="row howitworks-text">

                            <div className="col-lg-12 howitworks-header">
                                Where it all started
                            </div>

                            <div className="col-lg-12 how-paragraph">
                                We are a small team of passionate people who are willing to bring online trading to the next level. And with your help, we can do just that. 
                           </div>

                           <div className="col-lg-12 how-paragraph">
                           One year ago we started on a journey with one thing in mind: creating a better experience for gamers everywhere.So, 1000 unique customers and 1200 trades later, we can now proudly call ourselves one of the best Metin2 traders on the market. And we are still on the rise.
                            </div>

                            <div className="col-lg-12 how-paragraph">
                            Why choose us? Not only we offer the best prices on the market, we are always here to help fulfill your needs. Using our reliability and deep respect for each individual we trade with, we are commited to offering you the best experience you can have.
                            </div>

                            <div className="col-lg-12 how-paragraph">
                            We are thankful for all the people we’ve traded with so far, and we proudly invite every client to check us out. We care about you!                            </div>


                            

                            <div className="col-lg-4 signature align-self-end">
                                        plugyn
                            </div>    

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

export default AboutContent