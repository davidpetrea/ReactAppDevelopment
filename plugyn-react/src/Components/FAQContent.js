import React from "react"



class FAQContent extends React.Component{
    render() {
        return(
            <main>
                <div className="container">
                    <div className="background__image background__image--homepage">

                    </div>
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
                            When users store credit in their paypal, they have that money in their paypal balance. For payments on Paypal over 50 euro we do not accept money sent from bank or credit card, so you will need first to deposit the money into Paypal, then send it to us from your balance. This is done to ensure safety.                            </div>

                            <div className="col-lg-12 faq-question">
                            Can I get banned for buying yang?                            
                            </div>

                            <div className="col-lg-12 how-paragraph faq-answer">
                            In our experience, bans are very, very rare. We have improved our methods of trading yang greatly, and so the risk is very low. In case it does happen, we will work with you to find solutions                             
                            </div>

                            <div className="col-lg-12 faq-question">
                            What payment methods do you use?                            
                            </div>

                            <div className="col-lg-12 how-paragraph faq-answer">
                            We use Skrill, Paypal and Paysafecard (offline, from DE)                           
                            </div>

                            <div className="col-lg-12 faq-question">
                            How do I know my Paysafecard is offline?                           
                            </div>

                            <div className="col-lg-12 how-paragraph faq-answer">
                            Offline paysafecards are ones that are bought in local stores or gas stations, for example, and not on the web.                          
                            </div>


                            

                             

                            <div className="col-lg-6 contact-button">
                                <button className="button-5">
                                    CONTACT US
                                </button>
                        
                            </div>
                            <div className="col-lg-6 contact-button">
                                 
                                    <button className="button-5">
                                        BACK TO STORE
                                    </button>
                        
                            </div>

                            
                            
                           
                            

                        </div>
                    </div>
                    
                </div>
            </main>
        )
    }
}

export default FAQContent