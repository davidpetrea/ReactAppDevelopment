import React from 'react'
import Trait from "./Trait"


class Traits extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Trait />
                    <Trait />
                    <Trait />
                </div>   
            </div>
        )
    }
}

export default Traits