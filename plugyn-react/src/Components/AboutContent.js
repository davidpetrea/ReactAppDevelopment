import React from "react"

import {Link} from 'react-router-dom'
import ContactModal from './ContactModal'

class AboutContent extends React.Component{
    constructor(props){
        super(props);
        this.state={addModalShow: false}
    }
    
    
    render() {
        let addModalClose=() => this.setState({addModalShow:false});
        return(
            
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

                            <div>
                            One year ago we started on a journey with one thing in mind: creating a better experience for our clients. 600 unique customers and 1000 trades later, we can now proudly call ourselves one of the best metin2 traders on the market. 
                           </div>
                            <div className="col-lg-12 how-paragraph">
                            Why choose us? We offer the best prices on the market, we are reliable and friendly. You can always contact us and be sure to get the best answer. We are commited to giving you the best experience by giving you yang fast, easy and cheap so you can be the best in your server.
                            </div>

                            <div className="col-lg-12 how-paragraph">
                            We are thankful for all the clients we had so far, and we proudly invite every client to check us out. We care about you!                            </div>


                            

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
            
        )
    }
}

export default AboutContent