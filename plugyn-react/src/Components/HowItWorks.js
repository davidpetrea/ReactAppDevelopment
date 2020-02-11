import React from 'react';


import Header from "./Header"
import HowContent from "./HowContent"
import Reviews from "./Reviews"

import Footer from "./Footer"

class HowItWorks extends React.Component{
    render(){
        return (
            <div>
              
                <HowContent />
               
                
                <Footer/>
            </div>
        );      
    }
    
   
}

export default HowItWorks;