import React from "react"

import PaypalLogo from "../ppLogo.png"
import SkrillLogo from "../skrillLogo.png"
import BitcoinLogo from "../bitcoinLogo.png"
import Order1 from "../order-1.png"
import Order2 from "../order2.png"
import Order3 from "../order-3.png"
import Order4 from "../order-4.png"
import {Link} from 'react-router-dom'
import ContactModal from './ContactModal'


class HowContent extends React.Component{
    constructor(props){
        super(props);
        this.state={addModalShow: false}
    }
   
   
    render() {
        let addModalClose=() => this.setState({addModalShow:false});
        return(
            
                
                <div className="container">
                    
                    <div className="showcase-text">
                        <div className="showcase-text-title">TRADING PROCESS</div>
                        <div className="showcase-text-main-2">Buying yang on your favourite Metin2 Server was never easier.</div>
                    </div>
                    <div className="container howitworks">
                        <div className="row howitworks-text">

                            <div className="col-lg-12 howitworks-header">
                                How it works
                            </div>

                            <div className="col-lg-12 how-paragraph">
                                <div>
                                    <img src={Order1} style={{width:"50px"}} alt="1"></img>
                                    <div  className="list-element"> Once you decided the server you want to buy yang on, contact us over the Live Chat, Discord, or Skype. Please note that Live Chat is the fastest way to reach us. </div>
                                </div>
                            </div>

                            <div className="col-lg-12 how-paragraph">
                                <div>
                                    <img src={Order2} style={{width:"50px"}} alt="2"></img>
                                    <div  className="list-element"> 	Tell us the server and the amount of yang you want to buy, as well as what payment method you wish to use. </div>
                                </div>
                            </div>


                            <div className="row payment-methods justify-content-lg-between">
                                <div className="col">
                                    <img src={PaypalLogo} className="payment-method-logo" alt="paypal logo"></img>
                                </div>
                                <div className="col align-self-center">
                                    <img src={SkrillLogo} className=" payment-method-logo" alt="skrill logo"></img>
                                </div>
                                <div className="col align-self-center">
                                    <img src={BitcoinLogo} className="payment-method-logo-psc" alt="psc logo"></img>
                                </div>
                            </div>

                            <div className="col-lg-12 how-paragraph">
                                <div>
                                    <img src={Order3} style={{width:"50px"}} alt="3"></img>
                                    <div  className="list-element"> After we have checked if that amount is in our stock, we can begin the trade process. </div>
                                </div>
                            </div>



                            <div className="col-lg-12 how-paragraph">
                                <div>
                                    <img src={Order4} style={{width:"50px"}} alt="4"></img>
                                    <div  className="list-element"> As soon as we confirmed payment, we will meet in-game or buy from your shop (depending on the server). </div>
                                </div>
                            </div>


                            <div className="col-lg-12 howitworks-header-2">
                            That’s it! Enjoy the yang and become the strongest!
                            </div>

                            <div className="col-lg-12 howitworks-header-3">
                            Terms and Rules
                            </div>    

                            <div className="col-lg-12 how-paragraph">
                            1) While we do our best to make all the trades as safe as possible, there is always a very small risk ( less than 3%, in our experience). We do not take responsibility in such cases, although we do our best to mitigate the effects in the rare occasions this happen.
                            </div>
                            <div className="col-lg-12 how-paragraph">
                            2)	Payments over 50 euro done with Paypal will only be done using paypal balance, due to some security reasons. See more information in our FAQ.
                            </div>

                            <div className="col-lg-12 how-paragraph">
                            3)	If you wish to sell yang to us, please complete the form <Link className="link-word"><span>here</span></Link>. It is necessary that you have a Discord or a Skype. If you only wish to sell yang once, just contact us on Live Chat. 
                            </div>

                            <div className="col-lg-12 how-paragraph">
                            4)	At this moment, we only accept bitcoin for orders larger than 50 euro. 
                            </div>
                            
                            <div className="col-lg-6 col-12 contact-button">
                                <button className="button-5" onClick={()=>this.setState({addModalShow:true})}>
                                    CONTACT US
                                </button>
                        
                            </div>
                            <div className="col-lg-6 col-12 contact-button">
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

export default HowContent