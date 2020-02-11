import React from 'react'
import Trait from "./Trait"

import Piggy from "../piggy.png"
import Shield from "../shield.png"
import Clock from "../clock.png"
class Traits extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center justify-content-md-around">
                    <Trait image={Piggy} traitHeader="BEST PRICES ON THE MARKET" traitText="We believe that our clients deserve
                                                                                            the best prices on the market, and 
                                                                                            so we have made it our mission to always
                                                                                            stay ahead of the competition and offer you 
                                                                                            the most yang you can buy. What are you waiting for?"/>
                    <Trait image={Shield} traitHeader="SECURED TRADES AND PAYMENTS" traitText="By using our experience in this field we
                                                                                            know how to trade the yang safely, using
                                                                                            secure methods, VPN and more.
                                                                                            Furthermore, we use safe payment methods
                                                                                            like Skrill, Paypal, and PaySafeCard."/>
                    <Trait image={Clock} traitHeader="SUPPORT AVAILABLE ALL DAY LONG" traitText="We know how important time is for our clients.
                                                                                            Because we value that, we dedicate ourselves
                                                                                            to you and we are online most of the day. If you need 
                                                                                            to buy from us or just want to ask questions,
                                                                                            contact us on live chat, discord, skype or by
                                                                                            e-mail, and you are sure to get the fastest response."/>
                    
                </div>   
                
            </div>
        )
    }
}

export default Traits