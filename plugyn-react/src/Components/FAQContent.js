import React from "react"
import ContactModal from './ContactModal'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

class FAQContent extends React.Component{
    constructor(props){
        super(props);
        this.state={addModalShow: false}
    }
    
    render() {
        let addModalClose=() => this.setState({addModalShow:false});

        return(
                <div>


                    <Helmet>
                        <title>Plugyn Store | Frequently Asked Questions</title>
                        <meta name="description" content="Buy cheap yang for all metin2 private servers from the plugyn store! Come today and enjoy our spring sale for servers like Evion, Origins, Celestial World, Rubinum DE and Genesis DE."/>
                    </Helmet>
                     <div className="container">
                    
                    <div className="showcase-text">
                        <div className="showcase-text-title">GOT ANY QUESTIONS?</div>
                        <div className="showcase-text-main-2">Check our FAQ section below!</div>
                    </div>
                    <div className="container howitworks">
                        <div className="row howitworks-text">

                            <div className="col-lg-12 howitworks-header">
                                Frequently Asked Questions
                            </div>

                            <div className="col-lg-12 faq-question align-self-start">
                                What is paypal balance?                           
                            </div>

                            <div className="col-lg-12 how-paragraph faq-answer">
                            When users store credit in their paypal, they have that amount of money in their paypal balance. For payments over 50€ on Paypal we do not accept money sent from bank or credit card, so you will need first to deposit the money into Paypal, then send it to us from your balance. This is necessary to ensure a smooth and secure transaction.
                            <br/>If you are from Germany, you can safely use Giropay to deposit cash instantly into paypal balance.
                          </div>

                            <div className="col-lg-12 faq-question">
                            I don’t trust Paypal to deposit money, what should I do?                           
                            </div>

                            <div className="col-lg-12 how-paragraph faq-answer">
                            You can use Skrill, another safe method of payment. We don’t have a limit there.                             
                            </div>

                            <div className="col-lg-12 faq-question">
                            How safe is buying yang on private servers?                           
                            </div>

                            <div className="col-lg-12 how-paragraph faq-answer">
                            Although yang buying/selling is mostly forbidden on metin2 servers (with the exception of some), complications are very rare. Due to our experience in this field we have improved our methods of trading yang, which is why the risk of bans or anything of the sort is extremely low. In case it does happen, we will work with you to find solutions.                           
                            </div>

                            <div className="col-lg-12 faq-question">
                            What payment methods are accepted?                         
                            </div>

                            <div className="col-lg-12 how-paragraph faq-answer">
                            We currently use Skrill, Paypal and Bitcoin (for orders larger than 50 euro).                         
                            </div>

                            <div className="col-lg-12 faq-question">
                            When do I get the yang?                      
                            </div>

                            <div className="col-lg-12 how-paragraph faq-answer">
                            Within minutes after the payment is confirmed.                       
                            </div>

                            <div className="col-lg-12 faq-question">
                            What is the fastest way I can reach you?                    
                            </div>

                            <div className="col-lg-12 how-paragraph faq-answer">
                            Please contact us on Live Chat or Discord for faster responses.                      
                            </div>

                            <div className="col-lg-12 faq-question">
                            Are you also buying yang?                 
                            </div>

                            <div className="col-lg-12 how-paragraph faq-answer">
                            Yes! Please fill out the form <Link to="/suppliers" className="link-word"><span>here</span></Link> or reach out on Discord/Skype.                      
                            </div>

                            


                            

                             

                            <div className="col-lg-6 contact-button">
                                <button className="button-5" onClick={()=>this.setState({addModalShow:true})}>
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

export default FAQContent