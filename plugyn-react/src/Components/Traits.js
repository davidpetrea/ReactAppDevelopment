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
                    <Trait image={Piggy} traitHeader="BEST PRICES ON THE MARKET" traitText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    <Trait image={Shield} traitHeader="SECURED TRADES AND PAYMENTS" traitText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    <Trait image={Clock} traitHeader="SUPPORT AVAILABLE ALL DAY LONG" traitText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    
                </div>   
                
            </div>
        )
    }
}

export default Traits